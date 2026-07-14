import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = path.join(repositoryRoot, "public");
const productionOrigin = "https://rambak-siswanto-website.fawwazfatih2810.workers.dev";
const primaryNavigation = ["/", "/produk", "/profil", "/mitra", "/kontak"];
const errors = [];

const exists = async (target) => {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
};

const routeFor = (fileName) => {
  if (fileName === "index.html") return "/";
  return `/${path.basename(fileName, ".html")}`;
};

const canonicalFor = (route) => `${productionOrigin}${route}`;
const report = (condition, message) => {
  if (!condition) errors.push(message);
};

const htmlFiles = (await readdir(publicRoot))
  .filter((name) => name.endsWith(".html"))
  .sort();
const pages = new Map();

for (const fileName of htmlFiles) {
  pages.set(fileName, await readFile(path.join(publicRoot, fileName), "utf8"));
}

for (const [fileName, html] of pages) {
  const route = routeFor(fileName);
  const indexable = fileName !== "404.html";
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  report(duplicates.length === 0, `${fileName}: duplicate id(s): ${[...new Set(duplicates)].join(", ")}`);

  const blankLinks = html.match(/<a\b[^>]*\btarget=["']_blank["'][^>]*>/gi) || [];
  for (const anchor of blankLinks) {
    report(/\brel=["'][^"']*\bnoopener\b[^"']*["']/i.test(anchor), `${fileName}: target="_blank" link is missing rel="noopener"`);
  }

  if (indexable) {
    report(/<title>[^<]+<\/title>/i.test(html), `${fileName}: missing title`);
    report(/<meta\s+name=["']description["']\s+content=["'][^"']+["']/i.test(html), `${fileName}: missing meta description`);
    const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
    report(canonical === canonicalFor(route), `${fileName}: canonical should be ${canonicalFor(route)}`);
  }

  const navigation = html.match(/<nav\b[^>]*class=["'][^"']*\bdesktop-nav\b[^"']*["'][^>]*>([\s\S]*?)<\/nav>/i)?.[1];
  report(Boolean(navigation), `${fileName}: missing desktop primary navigation`);
  if (navigation) {
    const links = [...navigation.matchAll(/\bhref=["']([^"']+)["']/gi)].map((match) => match[1]);
    report(JSON.stringify(links) === JSON.stringify(primaryNavigation), `${fileName}: primary navigation order differs from the shared five-link set`);
  }

  if (primaryNavigation.includes(route)) {
    const currentCount = (html.match(/aria-current=["']page["']/gi) || []).length;
    report(currentCount === 2, `${fileName}: active page should be marked in desktop and mobile navigation`);
  }

  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const reference = match[1];
    if (!reference.startsWith("/") || reference.startsWith("//")) continue;
    const cleanPath = reference.split(/[?#]/, 1)[0];
    let target;
    if (cleanPath === "/") {
      target = path.join(publicRoot, "index.html");
    } else if (path.extname(cleanPath)) {
      target = path.join(publicRoot, cleanPath.slice(1));
    } else {
      target = path.join(publicRoot, `${cleanPath.slice(1)}.html`);
    }
    report(await exists(target), `${fileName}: missing local target ${reference}`);
  }

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${fileName}: invalid JSON-LD (${error.message})`);
    }
  }

  const visibleText = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .toLocaleLowerCase("id-ID");
  const bannedVisiblePhrases = [
    "produk unggulan",
    "paling mudah dikenali",
    "katalog lengkap",
    "pak iwan",
    "dusun iii",
    "partner ready",
    "heritage local",
    "menaikkan persepsi",
    "homepage cukup"
  ];
  for (const phrase of bannedVisiblePhrases) {
    report(!visibleText.includes(phrase), `${fileName}: banned or unverified visible phrase "${phrase}"`);
  }
}

const allPublicText = await Promise.all(
  (await readdir(publicRoot))
    .filter((name) => /\.(?:html|css|js|xml|txt)$/i.test(name))
    .map(async (name) => [name, await readFile(path.join(publicRoot, name), "utf8")])
);
for (const [fileName, content] of allPublicText) {
  report(!/images\/concept|business-content\.js|visuals\.js|social-preview\.jpg/i.test(content), `${fileName}: references a retired synthetic visual asset`);
}

for (const [fileName, css] of allPublicText.filter(([name]) => name.endsWith(".css"))) {
  for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
    const reference = match[1];
    if (!reference.startsWith("/") || reference.startsWith("//")) continue;
    const target = path.join(publicRoot, reference.split(/[?#]/, 1)[0].slice(1));
    report(await exists(target), `${fileName}: missing CSS asset ${reference}`);
  }
}

const sitemap = await readFile(path.join(publicRoot, "sitemap.xml"), "utf8");
for (const fileName of htmlFiles.filter((name) => name !== "404.html")) {
  const expected = canonicalFor(routeFor(fileName));
  report(sitemap.includes(`<loc>${expected}</loc>`), `sitemap.xml: missing ${expected}`);
}

const phoneNumbers = new Set();
for (const [fileName, html] of pages) {
  for (const match of html.matchAll(/href=["'](https:\/\/wa\.me\/\d+\?[^"']+)["']/g)) {
    const whatsappUrl = new URL(match[1].replaceAll("&amp;", "&"));
    phoneNumbers.add(whatsappUrl.pathname.slice(1));
    const message = whatsappUrl.searchParams.get("text") || "";
    report(message.trim().length > 0, `${fileName}: WhatsApp link is missing a prefilled message`);
    if (fileName === "mitra.html") {
      for (const field of ["nama/usaha:", "kebutuhan:", "produk:", "perkiraan jumlah:", "tanggal dibutuhkan:", "kota tujuan:"]) {
        report(message.toLocaleLowerCase("id-ID").includes(field), `${fileName}: partnership message is missing "${field}"`);
      }
    }
  }
}
report(phoneNumbers.size === 1, `WhatsApp links use inconsistent numbers: ${[...phoneNumbers].join(", ")}`);

const catalog = pages.get("produk.html") || "";
report((catalog.match(/<article\s+class=["']product-card["']/g) || []).length > 0, "produk.html: product cards must exist without JavaScript");
report(/id=["']catalog-status["'][^>]*aria-live=["']polite["']/i.test(catalog), "produk.html: missing live catalogue status");
for (const button of catalog.match(/<button\b[^>]*class=["'][^"']*filter-btn[^"']*["'][^>]*>/gi) || []) {
  report(/aria-pressed=["'](?:true|false)["']/i.test(button), "produk.html: filter button missing aria-pressed");
}
for (const match of catalog.matchAll(/<article\s+class=["']product-card["'][^>]*>([\s\S]*?)<\/article>/gi)) {
  const card = match[1];
  const productName = card.match(/<h3>([^<]+)<\/h3>/i)?.[1]?.trim();
  const whatsappHref = card.match(/href=["'](https:\/\/wa\.me\/\d+\?[^"']+)["']/i)?.[1];
  report(Boolean(productName && whatsappHref), "produk.html: every product card needs a title and WhatsApp action");
  if (productName && whatsappHref) {
    const message = new URL(whatsappHref.replaceAll("&amp;", "&")).searchParams.get("text") || "";
    report(message.toLocaleLowerCase("id-ID").includes(productName.toLocaleLowerCase("id-ID")), `produk.html: WhatsApp message does not name ${productName}`);
  }
}

if (errors.length) {
  console.error(`Site verification failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Site verification passed: ${htmlFiles.length} HTML pages, local references, metadata, navigation, catalogue fallback, and content guardrails checked.`);
}

