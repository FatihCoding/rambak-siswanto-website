(() => {
  const visuals = window.RAMBAK_BUSINESS_CONTENT?.visuals;
  if (!visuals) return;

  document.querySelectorAll("[data-visual-key]").forEach((container) => {
    const visual = visuals[container.dataset.visualKey];
    const image = container.querySelector("img");
    const status = container.querySelector(".visual-status");

    if (!visual || !image) return;

    if (visual.srcset) image.srcset = visual.srcset;
    if (visual.sizes) image.sizes = visual.sizes;
    image.src = visual.src;
    image.alt = visual.alt;
    image.width = visual.width;
    image.height = visual.height;
    image.style.objectPosition = visual.objectPosition || "center";
    container.dataset.imageStatus = visual.imageStatus;

    if (!status) return;

    const isConcept = visual.imageStatus === "concept";
    status.hidden = !isConcept;
    status.textContent = isConcept ? visual.label : "";
  });
})();
