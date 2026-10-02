# Project by Tirta — ID Card + QR Verification

Modul ID Card sekarang menyediakan **Designer ID Card**, **QR verification publik**, dan **Code 128**.

## Designer

Di menu ID Card, admin dapat mengubah nama perusahaan, mengunggah logo PNG/JPG/WEBP/SVG sampai 1 MB, memilih tema Bulan/Matahari/Galaksi/Blackhole/Nebula, serta menyalakan atau mematikan QR dan Code 128. Preferensi desain disimpan lokal pada perangkat admin.

## QR verification

QR tidak berisi nama, gaji, NIK, rekening, alamat, email, atau data sensitif. QR hanya mengarah ke URL publik dengan token acak yang tersimpan di `hris_id_card_tokens`.

Format route:

`#/verify/<token>`

Halaman verifikasi menampilkan hanya data yang aman: nama, ID karyawan, jabatan, departemen, dan status aktif/nonaktif. Kartu yang sudah tidak aktif akan tampil sebagai **ID TIDAK AKTIF**; token yang dicabut atau tidak dikenal akan tampil sebagai **ID TIDAK DITEMUKAN**.

Token mengikuti karyawan melalui `id_karyawan ON UPDATE CASCADE`, sehingga perubahan ID Karyawan tidak memutus QR yang sudah dicetak. QR tetap mengarah ke karyawan yang sama dan halaman verifikasi menampilkan ID terbarunya.

## URL publik

Default QR memakai origin aplikasi saat kartu dibuat. Untuk hasil yang konsisten ketika ID Card diekspor dari laptop/HP ke tempat lain, set:

`VITE_PUBLIC_VERIFY_BASE_URL=https://domain-resmi-anda/`

Contoh hasil:

`https://domain-resmi-anda/#/verify/ab12...`

## Supabase

Migration yang digunakan:

`supabase/migrations/20260927040000_id_card_secure_qr_verification.sql`

RPC admin:

`ensure_id_card_verification_token(text)`

RPC publik:

`verify_employee_id_card(text)`

RPC publik hanya mengembalikan field verifikasi yang telah ditentukan; akses langsung tabel token tetap dibatasi RLS.
