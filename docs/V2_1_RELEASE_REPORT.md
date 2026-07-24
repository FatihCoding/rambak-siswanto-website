# Laporan Rilis Kandidat V2.1

Tanggal verifikasi: 21 Juli 2026

> Rekonsiliasi Phase 1 pada 24 Juli 2026 menjadi sumber yang lebih baru untuk state, klasifikasi evidence, audit browser, dan blocker. Lihat `PROJECT_TRUTH.md`, `AUDIT_BASELINE_PHASE_1.md`, dan `PHASE_2_IMPLEMENTATION_BACKLOG.md`. Hasil V2.1 di bawah dipertahankan sebagai catatan historis dan tidak boleh dibaca sebagai persetujuan produksi.

## 1. Branch dan Commit

- Branch: `agent/business-ready-site-pass`
- Commit implementasi yang diuji: `454e1fca04bdd83003912ee9592bfa23ee9256c6`
- Base branch: `main`
- Base commit saat audit: `f0a9e278c9155080e767513d85e1f1a1842da45e`
- Checkpoint awal V2.1: `be9245961d69d0cc296666866e944e3f8cd56003`

Commit dokumentasi final berada setelah commit implementasi tersebut dan tidak mengubah source website yang telah diuji.

## 2. Status PR

PR #2 tetap terbuka, berstatus draft, dapat digabungkan menurut GitHub, dan belum memiliki review atau review thread baru pada saat audit. PR tidak ditandai siap direview, tidak digabungkan, dan tidak diarahkan ke branch lain.

## 3. Status Production

Production `main` tidak diubah dan tidak ada deployment production yang dilakukan. Seluruh pengujian browser menggunakan preview branch Cloudflare.

## 4. Status Akses Drive

Folder Google Drive dapat diakses. Inventarisnya berisi 27 PNG dan 1 MP4. Tidak ditemukan dokumen profil usaha, catatan wawancara pemilik, spreadsheet produk, catatan kontak, atau dokumen legal yang dapat mengesahkan fakta bisnis.

## 5. Dokumen yang Ditinjau

- `README.md`
- `CONTENT_REQUIREMENTS.md`
- `PHOTO_ASSET_REQUIREMENTS.md`
- deskripsi, komentar deployment, commit, review, dan status PR #2
- seluruh HTML, CSS, JavaScript, header, redirect, robots, sitemap, dan verifier di source aktif `public/`
- 27 gambar Drive dan 1 rekaman layar website lama

Tidak ada dokumen bisnis terstruktur di Drive untuk ditinjau.

## 6. Aset Autentik yang Digunakan

Tidak ada aset foto yang diintegrasikan. Tujuh gambar tampak sebagai kandidat foto produk nyata, tetapi asal foto, status kemasan terkini, riwayat edit, dan izin publikasinya belum dibuktikan. Website tetap memakai panel tipografi netral.

## 7. Fakta Bisnis yang Dipublikasikan

- Nama draft: Rambak Siswanto.
- Produk utama draft: rambak kulit sapi.
- Lokasi tingkat wilayah: Kartasura, Sukoharjo, Jawa Tengah.
- Kanal retail diarahkan ke Shopee atau Tokopedia.
- Pesanan yang perlu dibahas diarahkan ke WhatsApp.
- Website tidak menyediakan akun, formulir, pembayaran, database, atau CRM.
- Harga, stok, promo, dan transaksi tetap dikelola kanal tujuan.

Fakta bisnis yang masih menunggu persetujuan hanya ditampilkan pada preview owner-review dan belum dianggap disetujui untuk production.

## 8. Fakta Bisnis yang Ditahan

Alamat lengkap, titik Maps, jam layanan, kebijakan kunjungan, nama pemilik, legalitas, sertifikasi, komposisi, masa simpan, penyimpanan, harga, stok, kapasitas, MOQ, lead time, area layanan, pembayaran, retur, sampel, dan kemasan khusus tidak ditambahkan.

Kata `resmi` untuk marketplace dan lokasi `Gumpang` di metadata dihapus karena tidak memiliki bukti yang cukup.

## 9. Tinjauan Privasi dan Data Demo

Tidak ditemukan data pelanggan, email pelanggan, alamat pelanggan, pembayaran, transaksi, atau data demo pada source publik. Drive hanya diinventarisasi pada tingkat aset yang relevan; isi label legal tidak dikutip dan tautan file privat tidak dimasukkan ke repository, laporan, atau screenshot.

## 10. Rekonsiliasi Katalog Produk

Sebanyak 12 kartu produk tetap tersedia tanpa JavaScript. Semua berstatus `PUBLISH AFTER OWNER APPROVAL` pada matriks publikasi. Tiga tujuan Tokopedia berbentuk store-level tetap dilabeli `Buka Toko`; tujuan lain hanya diklasifikasikan berdasarkan bentuk URL, bukan dinyatakan aktif atau benar.

Shopee menampilkan pembatasan traffic/login saat pemeriksaan. Navigasi Tokopedia ditolak oleh kebijakan keamanan browser QA. Akurasi tujuan akhir dan status listing tetap memerlukan verifikasi pemilik.

## 11. File yang Diubah

- `docs/BUSINESS_FACTS_REGISTER.md`: register bukti dan status publikasi.
- `docs/PHOTO_ASSET_MANIFEST.md`: inventaris dan keputusan penggunaan aset.
- `docs/PRODUCT_PUBLICATION_MATRIX.md`: rekonsiliasi 12 produk dan tipe tautan.
- `docs/OWNER_REVIEW_CHECKLIST.md`: checklist keputusan pemilik.
- `docs/V2_1_RELEASE_REPORT.md`: laporan hasil V2.1.
- `public/index.html`: menghapus klaim marketplace yang belum terbukti.
- `public/kontak.html`: menghapus kata `resmi` dari metadata.
- `public/profil.html`: menghapus lokasi rinci yang belum terverifikasi.
- `public/mitra.html`: menyamakan template WhatsApp B2B dan istilah kebutuhan.
- `public/produk.html`: mengaktifkan enhancement katalog sebelum first paint.
- `public/catalog.js`: menunda pemasangan perilaku sampai DOM siap tanpa menggeser layout.
- `public/site.js`: menyiapkan class enhancement sebelum first paint dan tetap menjaga menu serta motion.
- `public/brand.css`: mencegah menu mobile bergeser dan memisahkan tautan footer.
- `public/fonts.css`: mencegah pertukaran font terlambat yang menggeser layout.
- `public/404.html`, `public/cara-pesan.html`, `public/privasi.html`: memuat inisialisasi shared UI sebelum first paint.
- `scripts/verify-site.mjs`: menambah guard klaim, gambar, jumlah kartu, label search, template B2B, dan inisialisasi shared UI.

## 12. Perintah Verifikasi

```powershell
node scripts/verify-site.mjs
node --check public/site.js
node --check public/catalog.js
node D:\CodexArtifacts\rambak-v2-1\qa-v2-1.cjs
node D:\CodexArtifacts\rambak-v2-1\capture-screenshots.cjs
```

Pemeriksaan HTTP terpisah dilakukan pada semua rute preview dengan `Invoke-WebRequest`.

## 13. Hasil Aktual

- Verifier: lulus untuk 8 halaman HTML dan seluruh guardrail.
- Syntax check: lulus untuk `site.js` dan `catalog.js`.
- Responsive QA: 12 kombinasi halaman dan viewport lulus.
- Horizontal overflow: 0 temuan.
- Cumulative layout shift pada audit final: maksimum `0`.
- H1: tepat satu pada setiap halaman yang diuji.
- Console error, page error, dan failed request: 0 pada rute website.
- Broken image: 0; website saat ini tidak memublikasikan foto.
- Touch target kecil pada mobile: 0.
- Menu mobile: Enter membuka, Escape menutup, fokus kembali ke tombol.
- Katalog: filter 4 hasil, search 1 hasil, zero state 0 hasil, live status benar.
- JavaScript dimatikan: homepage tetap terlihat dan seluruh 12 kartu katalog tetap tampil.
- Reduced motion: media query cocok, durasi 1 ms, tidak ada konten animasi tersembunyi.
- Rute publik, robots, dan sitemap: HTTP 200; rute tidak dikenal: HTTP 404.
- Preview branch mengirim `X-Robots-Tag: noindex`.

## 14. Inventaris Screenshot

Paket berisi 22 PNG: homepage desktop first viewport dan full page; homepage 1024, 390, dan 360; menu mobile terbuka; katalog desktop, filter, search, zero state, dan kartu mobile; Cerita desktop/mobile; Mitra desktop/mobile; Kontak desktop/mobile; footer mobile; homepage dan katalog tanpa JavaScript; reduced-motion; dan halaman 404.

Tidak ada screenshot crop foto autentik karena tidak ada foto yang disetujui untuk integrasi.

## 15. Persetujuan Pemilik yang Tersisa

Pemilik masih perlu memutuskan seluruh item pada `OWNER_REVIEW_CHECKLIST.md`, terutama nama dan ejaan merek, nomor WhatsApp, akun marketplace, lokasi, 12 nama dan ukuran produk, status produk aktif, izin foto, cerita usaha, kebutuhan B2B, pengiriman, pembayaran, jam layanan, kebijakan kunjungan, dan informasi legal.

## 16. Risiko yang Diketahui

- Belum ada foto hero, produk prioritas, pemilik, lokasi, packing, proses, atau konteks usaha yang disetujui.
- Tujuan marketplace belum dapat diverifikasi sebagai listing aktif dan milik usaha.
- Nomor WhatsApp dan seluruh klaim bisnis utama belum memiliki persetujuan tertulis pemilik.
- Production tetap memuat `main`; perubahan hanya tersedia pada preview branch.

## 17. Putusan Akhir

**READY FOR OWNER REVIEW**

Branch secara teknis siap ditinjau pemilik, tetapi belum boleh dianggap siap production atau siap digabungkan.

## 18. Tindakan Berikutnya

Kirim checklist, register fakta, matriks produk, manifest foto, dan screenshot package kepada pemilik. Setelah pemilik memberi keputusan tertulis, terapkan hanya koreksi yang disetujui, integrasikan foto autentik yang memiliki izin, verifikasi tujuan marketplace, lalu ulangi QA sebelum meminta izin eksplisit untuk menandai PR siap direview.

