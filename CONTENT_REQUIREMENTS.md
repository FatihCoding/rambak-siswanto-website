# Kebutuhan Foto Autentik

Gambar di `public/images/concept/` hanya visual sementara untuk stakeholder demo. Gambar tersebut bukan dokumentasi pemilik, produk, kemasan, fasilitas, karyawan, stok, atau proses Rambak Siswanto.

Status dan path seluruh visual dikelola di `public/business-content.js`. Setelah foto asli disetujui, pindahkan fotonya ke `public/images/verified/`, lalu perbarui entry terkait (`src`, `srcset`, `alt`, dan `imageStatus: "verified"`). Label konsep akan hilang otomatis tanpa perubahan layout atau komponen.

## Daftar Pengganti

| Visual konsep | Dipakai pada | Foto autentik yang dibutuhkan | Arahan pengambilan |
| --- | --- | --- | --- |
| `hero-rambak-concept.webp` | Hero beranda dan kartu rambak | Rambak siap santap yang benar-benar dijual | Foto horizontal, cahaya alami, satu mangkuk atau piring bersih, tekstur terlihat jelas, tanpa properti yang tidak digunakan usaha |
| `krecek-concept.webp` | Kartu krecek beranda | Krecek aktual untuk memasak | Foto isi produk dan kemasan aktual secara terpisah; pastikan bentuk, warna, dan ukuran sesuai barang yang dijual |
| `kerupuk-concept.webp` | Kartu kerupuk beranda | Varian kerupuk aktual | Ambil tiap varian secara terpisah agar kerupuk tahu dan kerupuk ikan tidak memakai foto yang sama |
| `product-lineup-concept.webp` | Hero katalog | Jajaran kemasan aktif saat ini | Foto bagian depan kemasan yang benar-benar dipakai; label harus terbaca dan semua varian harus dikonfirmasi pemilik |
| `packing-workspace-concept.webp` | Hero profil | Proses penataan atau pengemasan yang nyata | Minta izin pemilik; wajah tidak wajib terlihat; jangan menambahkan alat, seragam, atau proses yang tidak benar-benar digunakan |
| `inventory-concept.webp` | Hero mitra | Stok atau persiapan pesanan pada hari normal | Tampilkan jumlah yang wajar dan kondisi nyata; jangan menata stok berlebihan hanya untuk memberi kesan kapasitas besar |

## Standar Penyerahan

- Sisi terpanjang minimal 2000 px, fokus tajam, dan pencahayaan natural.
- Sertakan versi horizontal untuk hero dan versi yang aman dipotong persegi untuk kartu produk.
- Jangan memakai filter berat, watermark, teks promosi, badge sertifikasi, atau klaim yang belum diverifikasi.
- Pastikan pemilik menyetujui foto lokasi, proses, tangan, atau orang sebelum dipublikasikan.
- Konfirmasi nama produk, isi bersih, kemasan aktif, dan varian sebelum memperbarui teks alternatif.
