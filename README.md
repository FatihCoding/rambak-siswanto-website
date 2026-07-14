# Rambak Siswanto Website

Website profil usaha dan katalog ringan untuk Rambak Siswanto. Pembelian retail diarahkan ke marketplace; pertanyaan produk dan kebutuhan besar diarahkan ke WhatsApp dengan pesan yang dapat diedit.

## Source of truth dan deployment

- Situs statis: HTML, CSS, dan JavaScript browser tanpa framework atau database.
- Cloudflare Workers Static Assets menyajikan isi folder `public/`, sesuai `wrangler.jsonc`.
- Branch produksi adalah `main`. Branch pull request mendapat preview Cloudflare terpisah.
- Folder `public/` adalah satu-satunya source of truth untuk situs Cloudflare.
- File HTML/CSS/JS lama di root repository adalah implementasi lama. Entry point HTML lama mengarahkan pengunjung ke situs Cloudflare dan tidak boleh diedit sebagai halaman aktif.
- Harga, stok, promo, pembayaran, alamat pelanggan, dan status pemenuhan tetap dikelola di marketplace atau WhatsApp, bukan di website.

## Visual dan konten

- Belum ada foto usaha autentik yang disetujui di repository.
- Situs memakai panel tipografi netral agar tidak menyamarkan ilustrasi sebagai produk atau kemasan asli.
- Kebutuhan foto, ukuran, dan penempatan tercatat di [`PHOTO_ASSET_REQUIREMENTS.md`](PHOTO_ASSET_REQUIREMENTS.md).
- Foto baru hanya boleh masuk ke `public/images/verified/` setelah asal, isi gambar, dan izin publikasinya dikonfirmasi pemilik.
- Jangan memakai foto generatif, mockup kemasan, sertifikat, testimoni, atau visual proses sebagai bukti usaha.

Konten utama diperbarui langsung di file HTML terkait. Gaya bersama berada di `public/brand.css`, perilaku navigasi dan animasi ringan di `public/site.js`, sedangkan pencarian katalog berada di `public/catalog.js`.

## Rute publik

- `/` - beranda dan ringkasan produk
- `/profil` - identitas dan cerita usaha
- `/produk` - katalog serta filter produk
- `/mitra` - kebutuhan reseller dan pesanan besar
- `/cara-pesan` - pilihan kanal pemesanan
- `/kontak` - kontak, marketplace, dan alamat usaha
- `/privasi` - praktik privasi website

URL internal menggunakan bentuk tanpa `.html`. Cloudflare tetap menangani URL lama dan menyediakan halaman 404 yang bisa dipakai untuk kembali ke situs.

## Menjalankan lokal

Gunakan Wrangler agar perilaku routing mendekati Cloudflare:

```powershell
npx wrangler dev
```

Jangan menjalankan `wrangler deploy` sebelum preview diperiksa dan pemilik menyetujui perubahan produksi.

Jalankan pemeriksaan statis tanpa dependency:

```powershell
node scripts/verify-site.mjs
node --check public/site.js
node --check public/catalog.js
```

## Pemeriksaan sebelum rilis

1. Buka seluruh rute pada lebar 360, 390, 768, 1024, dan 1440 px.
2. Pastikan menu, skip link, fokus keyboard, search/filter katalog, dan reduced motion berfungsi.
3. Pastikan semua URL internal langsung 200, legacy `/order` mengarah ke `/cara-pesan`, dan rute acak menampilkan 404 berstatus 404.
4. Periksa seluruh tautan Shopee, Tokopedia, dan WhatsApp; tautan toko generik harus tetap dilabeli sebagai toko.
5. Pastikan tidak ada error console, aset gagal dimuat, atau data rahasia di source.
6. Simpan versi produksi terakhir agar rollback Cloudflare dapat dilakukan bila smoke test gagal.

## Data yang perlu dikonfirmasi pemilik

Website tidak boleh menebak informasi usaha. Sebelum promosi aktif, pemilik perlu menyediakan atau mengonfirmasi:

- foto asli produk, kemasan, dan konteks usaha sesuai `PHOTO_ASSET_REQUIREMENTS.md`;
- komposisi, masa simpan, dan petunjuk penyimpanan;
- sertifikasi atau izin yang boleh dipublikasikan;
- minimum order, waktu pemenuhan, dan aturan kemitraan;
- alamat lengkap yang boleh dipublikasikan, titik Google Maps, dan apakah kunjungan diperbolehkan;
- persetujuan penggunaan nomor WhatsApp dan alamat sebagai data kontak publik.

Jangan menambahkan testimoni, rating, sertifikasi, klaim kualitas, harga, atau stok tanpa sumber yang dapat diverifikasi.

