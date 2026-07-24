# Matriks Publikasi Produk V2.1

Tanggal audit: 21 Juli 2026

Rekonsiliasi Phase 1: 24 Juli 2026. Pernyataan bahwa katalog disusun dari kanal marketplace usaha berstatus `USER_ASSERTED`. Untuk setiap P-001 sampai P-012, nama, ukuran, status aktif, kepemilikan akun, kecocokan tujuan, foto, dan izin publikasi tetap `REQUIRES_VERIFICATION`. Tidak ada baris yang naik menjadi `VERIFIED` pada Phase 1.

Status tautan di bawah memeriksa bentuk URL dan kecocokan teks URL dengan kartu. Status aktif, kepemilikan toko, varian yang tersedia, dan tujuan akhir belum dapat dikonfirmasi melalui marketplace. Shopee menampilkan pembatasan login/traffic; akses Tokopedia diblokir oleh kebijakan keamanan browser QA.

| Product ID | Current name | Verified name | Size | Shopee link type | Tokopedia link type | Authentic photo | Owner approval | Public status | Required correction |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P-001 | Rambak Kulit Sapi 200 g | Belum disahkan pemilik | 200 g | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | STORE-LEVEL | None approved | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi nama, ukuran aktif, tujuan Shopee, dan foto khusus 200 g. |
| P-002 | Rambak Kulit Sapi 250 g | Belum disahkan pemilik | 250 g | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | DA-012 is composite only; DA-021 size unclear | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi status aktif, kedua tujuan, dan foto kemasan 250 g yang disetujui. |
| P-003 | Rambak Kulit Sapi 500 g | Belum disahkan pemilik | 500 g | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | STORE-LEVEL | None approved | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi nama, ukuran aktif, tujuan Shopee, dan foto khusus 500 g. |
| P-004 | Rambak Mentah Siap Goreng 1 kg | Belum disahkan pemilik | 1 kg | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | None approved | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi istilah "mentah siap goreng", status aktif, kedua tujuan, dan foto yang cocok. |
| P-005 | Krecek Rambak Sayur | Belum disahkan pemilik | 250-500 g | PRODUCT-SPECIFIC 500 g URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC 250 g URL, DESTINATION UNVERIFIED | DA-014 candidate, not approved | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi kedua ukuran aktif, nama publik, kedua tujuan, dan kemasan pada foto. |
| P-006 | Kerupuk Tahu Kotak 200 g | Belum disahkan pemilik | 200 g | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | STORE-LEVEL | None approved | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi status aktif, tujuan Shopee, dan foto khusus 200 g. |
| P-007 | Kerupuk Tahu Kotak 500 g | Belum disahkan pemilik | 500 g | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | DA-002 is composite only | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi status aktif, kedua tujuan, dan foto autentik yang disetujui. |
| P-008 | Kerupuk Tahu Kotak 1 kg | Belum disahkan pemilik | 1 kg | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | DA-011 is composite only | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi status aktif, kedua tujuan, dan foto autentik yang disetujui. |
| P-009 | Kerupuk Ikan Tongkol 500 g | Belum disahkan pemilik | 500 g | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | DA-005 candidate, not approved | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi status aktif, kedua tujuan, varian rasa, dan kemasan terkini. |
| P-010 | Paket 5 x 70 g Rambak | Belum disahkan pemilik | 5 x 70 g | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | DA-006 is composite only | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi isi paket, ukuran aktif, kedua tujuan, dan foto autentik. |
| P-011 | Paket 10 x 35 g Rambak | Belum disahkan pemilik | 10 x 35 g | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | DA-009 is composite only | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi isi paket, ukuran aktif, kedua tujuan, dan foto autentik. |
| P-012 | Bawang Goreng Siswanto | Belum disahkan pemilik | Belum ditampilkan | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | PRODUCT-SPECIFIC URL, DESTINATION UNVERIFIED | DA-015 candidate, not approved | Required | PUBLISH AFTER OWNER APPROVAL | Konfirmasi produk masih dijual, ukuran, kedua tujuan, dan izin foto. |

## Keputusan Katalog

- Dua belas kartu tetap tersedia pada draft owner-review dan tetap terlihat tanpa JavaScript.
- Tidak ada entri yang diberi status `PUBLISH` karena belum ada daftar produk aktif atau persetujuan pemilik.
- Tiga tautan Tokopedia yang menuju halaman toko tetap dilabeli `Buka Toko`.
- Materi promosi komposit tidak dianggap foto produk autentik.
- Harga, stok, rasa, bahan, masa simpan, penyimpanan, sertifikasi, dan kapasitas tidak ditambahkan.
- HTTP 200 hanya membuktikan respons teknis. Itu tidak membuktikan kepemilikan toko, listing aktif, produk yang sama, ukuran yang benar, atau persetujuan owner.

