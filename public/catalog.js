(() => {
  document.documentElement.classList.add("catalog-enhanced");

  const initialize = () => {
    const cards = Array.from(document.querySelectorAll("#catalog-grid .product-card"));
    const search = document.getElementById("catalog-search");
    const buttons = Array.from(document.querySelectorAll(".filter-btn"));
    const empty = document.getElementById("catalog-empty");
    const status = document.getElementById("catalog-status");
    let activeCategory = "semua";
    let searchTimer;

    const normalize = (value) => value.toLocaleLowerCase("id-ID").trim();

    const render = () => {
      const query = normalize(search?.value || "");
      let visibleCount = 0;

      cards.forEach((card) => {
        const categoryMatches = activeCategory === "semua" || card.dataset.cat === activeCategory;
        const queryMatches = normalize(card.textContent || "").includes(query);
        const visible = categoryMatches && queryMatches;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (empty) empty.hidden = visibleCount !== 0;
      if (status) status.textContent = `${visibleCount} produk ditampilkan.`;
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.cat || "semua";
        buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        render();
      });
    });

    search?.addEventListener("input", () => {
      window.clearTimeout(searchTimer);
      searchTimer = window.setTimeout(render, 160);
    });

    render();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();

