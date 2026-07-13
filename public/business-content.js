(() => {
  const productConceptLabel = "Visual ilustrasi - ganti dengan foto produk asli";
  const heroSizes = "(max-width: 760px) calc(100vw - 44px), (max-width: 1060px) calc(100vw - 44px), 50vw";
  const cardSizes = "(max-width: 760px) calc(100vw - 44px), (max-width: 860px) calc(50vw - 32px), 380px";
  const responsiveSource = (name) => `/images/concept/${name}-720.webp 720w, /images/concept/${name}.webp 1440w`;

  window.RAMBAK_BUSINESS_CONTENT = Object.freeze({
    visuals: Object.freeze({
      homeHero: {
        src: "/images/concept/hero-rambak-concept.webp",
        srcset: responsiveSource("hero-rambak-concept"),
        sizes: heroSizes,
        imageStatus: "concept",
        alt: "Visual ilustrasi penyajian rambak dalam mangkuk, bukan foto produk Rambak Siswanto.",
        label: productConceptLabel,
        width: 1440,
        height: 960,
        objectPosition: "center"
      },
      homeProductRambak: {
        src: "/images/concept/hero-rambak-concept.webp",
        srcset: responsiveSource("hero-rambak-concept"),
        sizes: cardSizes,
        imageStatus: "concept",
        alt: "Visual ilustrasi rambak siap santap, bukan foto produk Rambak Siswanto.",
        label: productConceptLabel,
        width: 1440,
        height: 960,
        objectPosition: "center"
      },
      homeProductKrecek: {
        src: "/images/concept/krecek-concept.webp",
        srcset: responsiveSource("krecek-concept"),
        sizes: cardSizes,
        imageStatus: "concept",
        alt: "Visual ilustrasi krecek untuk memasak, bukan foto produk Rambak Siswanto.",
        label: productConceptLabel,
        width: 1440,
        height: 1080,
        objectPosition: "center"
      },
      homeProductKerupuk: {
        src: "/images/concept/kerupuk-concept.webp",
        srcset: responsiveSource("kerupuk-concept"),
        sizes: cardSizes,
        imageStatus: "concept",
        alt: "Visual ilustrasi kerupuk berbentuk kotak, bukan foto produk Rambak Siswanto.",
        label: productConceptLabel,
        width: 1440,
        height: 1080,
        objectPosition: "center"
      },
      catalogLineup: {
        src: "/images/concept/product-lineup-concept.webp",
        srcset: responsiveSource("product-lineup-concept"),
        sizes: heroSizes,
        imageStatus: "concept",
        alt: "Visual ilustrasi kemasan makanan ringan tanpa merek, bukan kemasan Rambak Siswanto.",
        label: "Concept preview - ganti dengan foto kemasan asli",
        width: 1440,
        height: 960,
        objectPosition: "center"
      },
      profilePacking: {
        src: "/images/concept/packing-workspace-concept.webp",
        srcset: responsiveSource("packing-workspace-concept"),
        sizes: heroSizes,
        imageStatus: "concept",
        alt: "Visual ilustrasi tangan menata kemasan di ruang kerja netral, bukan pemilik atau fasilitas Rambak Siswanto.",
        label: "Visual ilustrasi - bukan pemilik atau fasilitas asli",
        width: 1440,
        height: 960,
        objectPosition: "center"
      },
      partnerInventory: {
        src: "/images/concept/inventory-concept.webp",
        srcset: responsiveSource("inventory-concept"),
        sizes: heroSizes,
        imageStatus: "concept",
        alt: "Visual ilustrasi penyimpanan usaha kecil, bukan stok atau fasilitas Rambak Siswanto.",
        label: "Visual ilustrasi - bukan stok atau fasilitas asli",
        width: 1440,
        height: 960,
        objectPosition: "center"
      }
    })
  });
})();
