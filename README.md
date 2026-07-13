# Rambak Siswanto Website

Website profil usaha dan katalog ringan untuk Rambak Siswanto. Pembelian retail diarahkan ke marketplace; pertanyaan produk dan kebutuhan besar diarahkan ke WhatsApp dengan pesan yang dapat diedit.

## Arsitektur

- Situs statis: HTML, CSS, dan JavaScript browser tanpa framework atau database.
- Cloudflare Workers Static Assets menyajikan isi folder `public/`.
- Folder `public/` adalah satu-satunya source of truth untuk produksi. File HTML/CSS/JS lama di root repository adalah arsip dan tidak ikut terdeploy.
- Harga, stok, promo, pembayaran, alamat pelanggan, dan status pemenuhan tetap dikelola di marketplace atau WhatsApp, bukan di website.

## Visual stakeholder demo

- Visual sementara disimpan terpisah di `public/images/concept/` dan tidak boleh diperlakukan sebagai dokumentasi usaha.
- Path, teks alternatif, dan `imageStatus` dikelola dari `public/business-content.js`.
- `public/visuals.js` menampilkan label konsep secara otomatis dan menghapusnya ketika status berubah menjadi `verified`.
- Daftar foto autentik yang harus disediakan terdapat di [`CONTENT_REQUIREMENTS.md`](CONTENT_REQUIREMENTS.md).
- Visual konsep tidak digunakan sebagai structured data, sertifikat, testimoni, atau bukti kapasitas operasional.

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

## Pemeriksaan sebelum rilis

1. Buka seluruh rute pada lebar 360, 390, 768, 1024, dan 1440 px.
2. Pastikan menu, skip link, fokus keyboard, search/filter katalog, dan reduced motion berfungsi.
3. Pastikan semua URL internal langsung 200, legacy `/order` mengarah ke `/cara-pesan`, dan rute acak menampilkan 404 berstatus 404.
4. Periksa seluruh tautan Shopee, Tokopedia, dan WhatsApp; tautan toko generik harus tetap dilabeli sebagai toko.
5. Pastikan tidak ada error console, aset gagal dimuat, atau data rahasia di source.
6. Simpan versi produksi terakhir agar rollback Cloudflare dapat dilakukan bila smoke test gagal.

## Data yang perlu dikonfirmasi pemilik

Website tidak boleh menebak informasi usaha. Sebelum promosi aktif, pemilik perlu menyediakan atau mengonfirmasi:

- foto asli setiap produk dan kemasan;
- komposisi, masa simpan, dan petunjuk penyimpanan;
- sertifikasi atau izin yang boleh dipublikasikan;
- minimum order, waktu pemenuhan, dan aturan kemitraan;
- apakah alamat menerima kunjungan dan boleh diberi tautan petunjuk arah;
- persetujuan penggunaan nomor WhatsApp dan alamat sebagai data kontak publik.

Jangan menambahkan testimoni, rating, sertifikasi, klaim kualitas, harga, atau stok tanpa sumber yang dapat diverifikasi.
