(() => {
  document.documentElement.classList.add("js");

  const menuButtons = Array.from(document.querySelectorAll(".nav-toggle"));

  const closeMenu = (button, returnFocus = false) => {
    const menu = document.getElementById(button.getAttribute("aria-controls"));
    if (!menu) return;

    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Buka menu utama");
    menu.hidden = true;
    if (returnFocus) button.focus();
  };

  menuButtons.forEach((button) => {
    const menu = document.getElementById(button.getAttribute("aria-controls"));
    if (!menu) return;

    closeMenu(button);

    button.addEventListener("click", () => {
      const opening = button.getAttribute("aria-expanded") !== "true";
      menuButtons.forEach((item) => closeMenu(item));
      button.setAttribute("aria-expanded", String(opening));
      button.setAttribute("aria-label", opening ? "Tutup menu utama" : "Buka menu utama");
      menu.hidden = !opening;

      if (opening) menu.querySelector("a")?.focus();
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu(button);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const openButton = menuButtons.find((button) => button.getAttribute("aria-expanded") === "true");
    if (openButton) closeMenu(openButton, true);
  });

  const header = document.querySelector(".rs-header");

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = Array.from(document.querySelectorAll("[data-reveal], .reveal"));

  if (reducedMotion || revealItems.length === 0) {
    revealItems.forEach((item) => item.classList.add("is-visible", "show"));
    return;
  }

  document.body.classList.add("motion-ready", "story-motion-ready");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible", "show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible", "show");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    }
  );

  requestAnimationFrame(() => {
    revealItems.forEach((item) => observer.observe(item));
  });
})();

