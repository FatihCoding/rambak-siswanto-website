# Kebutuhan Foto Autentik Rambak Siswanto

Status rilis: **belum terpenuhi**. Repository belum memiliki foto usaha autentik yang telah disetujui pemilik. Sampai aset berikut tersedia, situs memakai panel tipografi netral dan tidak menampilkan ilustrasi produk, kemasan, pemilik, fasilitas, atau proses.

Dokumen ini mendefinisikan kebutuhan pengambilan foto. Status setiap aset yang sudah diterima berada di [`docs/PHOTO_ASSET_MANIFEST.md`](docs/PHOTO_ASSET_MANIFEST.md); formulir keputusan owner berada di [`docs/PUBLICATION_APPROVAL_DRAFT_ID.md`](docs/PUBLICATION_APPROVAL_DRAFT_ID.md).

## Daftar Foto

| ID | Penempatan | Foto yang dibutuhkan | Orientasi dan ukuran minimum | Catatan verifikasi |
| --- | --- | --- | --- | --- |
| `home-hero` | Hero beranda | Rambak kulit sapi yang benar-benar dijual, disajikan sederhana | Horizontal 3:2, 2400 x 1600 px | Bentuk dan warna produk harus sesuai barang aktual; tanpa kemasan rekaan atau properti yang tidak digunakan usaha |
| `product-rambak` | Beranda dan katalog | Rambak kulit sapi beserta kemasan aktif | Persegi 1:1, 1600 x 1600 px | Nama produk dan isi bersih pada kemasan harus terbaca dan dikonfirmasi |
| `product-krecek` | Beranda dan katalog | Krecek untuk masak beserta kemasan aktif | Persegi 1:1, 1600 x 1600 px | Jangan memakai foto rambak siap santap untuk mewakili krecek |
| `product-kerupuk` | Beranda dan katalog | Kerupuk tahu kotak dan kerupuk ikan sebagai foto terpisah | Persegi 1:1, 1600 x 1600 px per produk | Setiap foto hanya mewakili varian yang tampak |
| `packaging-lineup` | Hero katalog | Jajaran kemasan produk yang masih dijual | Horizontal 16:10, 2400 x 1500 px | Hapus produk lama sebelum pemotretan; label dan warna tidak boleh diubah saat penyuntingan |
| `business-context` | Halaman Cerita | Pemilik, lokasi, penataan produk, atau proses nyata yang diizinkan | Horizontal 3:2, 2400 x 1600 px | Wajah tidak wajib; catat siapa yang memberi izin dan apa yang benar-benar terlihat |
| `large-order-context` | Halaman Mitra | Persiapan pesanan dalam jumlah wajar pada kegiatan normal | Horizontal 3:2, 2400 x 1600 px | Tidak boleh ditata untuk menyiratkan kapasitas, mesin, atau skala yang tidak dimiliki |

## Standar Penyerahan

- Simpan master asli tanpa filter dan catat nama pengirim serta tanggal penerimaan.
- Gunakan pencahayaan natural, fokus tajam, proporsi realistis, dan latar yang bersih tetapi tetap sesuai kondisi usaha.
- Jangan mengubah bentuk produk, warna, teks kemasan, isi bersih, label, sertifikasi, atau kondisi fasilitas.
- Jangan menambahkan watermark, badge, klaim promosi, pelanggan, karyawan, mesin, atau dokumen yang tidak ada pada foto asli.
- Pastikan pemilik menyetujui setiap foto lokasi, proses, tangan, atau orang sebelum publikasi.

## Alur Integrasi

1. Simpan aset yang disetujui di `public/images/verified/` dengan nama berdasarkan ID di atas.
2. Buat turunan WebP atau AVIF untuk desktop dan mobile tanpa mengubah isi gambar.
3. Tambahkan `width`, `height`, `srcset`, `sizes`, dan teks alternatif yang menjelaskan hal yang benar-benar tampak.
4. Muat gambar hero secara prioritas dan gunakan `loading="lazy"` untuk gambar di bawah lipatan pertama.
5. Catat path sumber, persetujuan pemilik, dan halaman pemakaian pada pull request.
6. Uji ketajaman pada 1440 px, ukuran transfer pada mobile, dan tampilan saat gambar gagal dimuat.

