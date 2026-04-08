<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> JavaScript & jQuery </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Muhammad Zaki Fauzan</strong>
    <br>
    <strong>2311102084</strong>
    <br>
    <strong>S1 IF-11-REG05</strong>
  </p>
  <br />
  <h3>Dosen Pengampu :</h3>
  <p>
    <strong>Dedi Agung Prabowo, S.Kom., M.Kom</strong>
  </p>
  <br />
  <br />
  <h4>Asisten Praktikum :</h4>
  <strong>Apri Pandu Wicaksono </strong>
  <br>
  <strong>Hamka Zaenul Ardi</strong>
  <br />
  <h3>LABORATORIUM HIGH PERFORMANCE <br>FAKULTAS INFORMATIKA <br>UNIVERSITAS TELKOM PURWOKERTO <br>2026 </h3>
</div>

<hr>

# Dasar Teori JavaScript & jQuery

## Pengertian JavaScript
JavaScript adalah bahasa pemrograman dinamis yang berfungsi sebagai "otak" di balik interaktivitas sebuah situs web. Jika HTML membangun struktur dan CSS mengatur estetika, JavaScript berperan memberikan instruksi agar elemen-elemen tersebut dapat bergerak dan merespons tindakan pengguna secara real-time. Dengan kemampuan memanipulasi Document Object Model (DOM), JavaScript memungkinkan pengembang untuk mengubah konten, memvalidasi formulir, hingga menciptakan animasi kompleks tanpa harus memuat ulang seluruh halaman. Di era modern, kegunaannya meluas dari sekadar skrip sisi klien (client-side) di browser hingga ke sisi server (server-side) melalui lingkungan seperti Node.js, menjadikannya fondasi utama dalam pengembangan aplikasi web yang responsif dan canggih..

## Konsep Dasar JavaScript
1. Variabel & Tipe Data: Tempat menyimpan informasi menggunakan const (tetap) atau let (bisa berubah), baik berupa teks, angka, maupun status benar/salah.

2. Fungsi (Functions): Sekumpulan perintah yang dibungkus dalam satu nama agar bisa digunakan berulang kali tanpa menulis ulang kode.

3. Logika & Kondisi: Penggunaan if-else untuk membuat keputusan dan loop (perulangan) untuk menjalankan tugas berkali-kali secara otomatis.

4. DOM (Document Object Model): Jembatan yang memungkinkan JavaScript mengubah isi, struktur, atau gaya (CSS) halaman HTML secara instan.

5. Event (Kejadian): Kemampuan mendeteksi aksi pengguna, seperti klik tombol, ketikan keyboard, atau pergerakan kursor.

6. Asynchronous: Menjalankan proses berat (seperti mengambil data dari internet) di latar belakang agar tampilan web tidak macet/hang.

## Pengertian jQuery
jQuery adalah sebuah library (pustaka) JavaScript yang dirancang untuk menyederhanakan interaksi antara JavaScript dengan dokumen HTML. Dengan prinsip "Write Less, Do More", jQuery memungkinkan pengembang untuk menulis kode yang kompleks menjadi jauh lebih singkat, sehingga mempercepat proses pembuatan fitur interaktif pada website.


### Source code - html
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramadan Kareem - Fitur THR</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #0f5132 0%, #198754 100%);
            min-height: 100vh;
        }
        .btn-thr {
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .btn-thr:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body class="d-flex align-items-center justify-content-center">

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
                
                <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
                    <div class="card-header bg-success bg-gradient text-white text-center py-4 border-0">
                        <h2 class="fw-bold mb-0">Ramadan Kareem</h2>
                        <small class="text-white-50 text-uppercase tracking-widest">1447 Hijriah</small>
                    </div>

                    <div class="card-body p-5 text-center">
                        <div class="mb-4">
                            <span class="display-1">🌙</span>
                        </div>
                        
                        <h4 class="card-title fw-semibold text-dark mb-3">Marhaban Ya Ramadan</h4>
                        <p class="card-text text-secondary mb-4 small">
                            "Wahai orang-orang yang beriman, diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa."
                        </p>

                        <div class="d-grid gap-2 mb-4">
                            <button type="button" class="btn btn-warning btn-lg rounded-pill fw-bold text-dark btn-thr py-3" data-bs-toggle="modal" data-bs-target="#thrModal">
                                💰 CAIRIN THR DISINI! 💰
                            </button>
                        </div>

                        <div class="list-group list-group-flush mb-0 rounded-3 border">
                            <div class="list-group-item d-flex justify-content-between align-items-center bg-light">
                                <span class="fw-medium">Imsak</span>
                                <span class="badge bg-success rounded-pill px-3">04:28 WIB</span>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center bg-light">
                                <span class="fw-medium">Maghrib</span>
                                <span class="badge bg-danger rounded-pill px-3">18:05 WIB</span>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer bg-white border-0 text-center pb-4">
                        <p class="small text-muted mb-0">Mohon Maaf Lahir & Batin</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
// Selebihnya dapat cek pada file "index.html"
```
🔗 [Klik di sini untuk membuka file `index.html`](index.html)

Output:
<img src="assets/home-page.png" alt="preview" style="width:100%; max-width:900px;">

<img src="assets/pop-up.png" alt="preview" style="width:100%; max-width:900px;">


## Penjelasan
Penerapan fitur "Cairin THR" ini memanfaatkan komponen Bootstrap Modal yang diintegrasikan dengan trigger atribut data-bs-toggle dan data-bs-target pada elemen tombol bertipe btn-warning untuk menciptakan interaksi pop-up yang instan. Struktur modal dirancang menggunakan kelas modal-dialog-centered agar muncul tepat di tengah layar, sementara efek transisi halus dikelola oleh kelas fade guna meningkatkan pengalaman pengguna (user experience). Secara keseluruhan, logika pemanggilan jendela pesan ini sepenuhnya ditangani oleh Bootstrap JS Bundle, sehingga memungkinkan pembuatan elemen antarmuka yang interaktif dan responsif tanpa perlu menulis baris kode JavaScript manual tambahan.