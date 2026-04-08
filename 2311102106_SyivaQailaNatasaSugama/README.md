<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> Javascript & JQUERY </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Syiva Qaila Natasha Sugama</strong>
    <br>
    <strong>2311102106</strong>
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

# Dasar Teori JavaScript dan jQuery

## 1. JavaScript (JS)
JavaScript adalah bahasa pemrograman *high-level*, *scripting*, *untyped*, dan *interpreted* yang menjadi standar untuk pengembangan web interaktif. JavaScript memungkinkan pengembang untuk mengimplementasikan fitur-fitur kompleks pada halaman web, seperti pembaruan konten secara dinamis, peta interaktif, animasi grafis 2D/3D, dan banyak lagi.

### Karakteristik Utama JavaScript:
- **Client-Side Scripting**: Kode JavaScript dieksekusi di browser pengguna (client), bukan di server. Ini mengurangi beban server dan memberikan respon yang lebih cepat.
- **Interpreted**: JavaScript tidak memerlukan proses kompilasi sebelum dijalankan. Browser membaca dan mengeksekusi kode secara langsung.
- **Event-Driven**: JavaScript dapat merespons berbagai kejadian (event) yang dilakukan oleh pengguna, seperti klik mouse, input keyboard, atau pengambilan data dari server.
- **DOM Manipulation**: JavaScript memiliki kemampuan untuk mengakses dan memodifikasi *Document Object Model* (DOM), yang memungkinkan perubahan struktur, gaya, dan konten HTML secara dinamis.

---

## 2. jQuery
jQuery adalah sebuah *library* atau pustaka JavaScript yang cepat, kecil, dan kaya akan fitur. jQuery dirancang untuk menyederhanakan penulisan JavaScript dengan moto utamanya: **"Write Less, Do More"**. jQuery menangani banyak hal yang rumit dalam JavaScript biasa, seperti manipulasi DOM, penanganan event, animasi, dan AJAX, dengan sintaks yang jauh lebih sederhana.

### Fitur dan Keuntungan jQuery:
- **Selektor yang Mudah**: Menggunakan sintaks CSS untuk memilih elemen DOM (contoh: `$('.btn')` untuk memilih kelas, `$('#id')` untuk memilih ID).
- **Cross-Browser Compatibility**: jQuery menangani perbedaan cara kerja JavaScript di berbagai browser secara otomatis, sehingga pengembang tidak perlu menulis kode berbeda untuk setiap browser.
- **Manipulasi DOM**: Menyediakan metode intuitif untuk menambah, menghapus, atau mengubah elemen dan atribut HTML.
- **Handling AJAX**: Menyederhanakan proses pengiriman permintaan HTTP asinkron ke server untuk mengambil data tanpa harus memuat ulang halaman secara keseluruhan.
- **Efek dan Animasi**: Menyediakan fungsi bawaan untuk membuat efek transisi yang mulus seperti `.fadeIn()`, `.slideUp()`, dan `.toggle()`.

---

## 3. AJAX (Asynchronous JavaScript and XML)
AJAX adalah teknik pengembangan web yang memungkinkan halaman web untuk berkomunikasi dengan server di latar belakang secara asinkron. Dengan AJAX, aplikasi web dapat mengirim dan menerima data dari server tanpa mengganggu tampilan atau perilaku halaman yang sedang aktif (tanpa *full page reload*).

---

## 4. JSON (JavaScript Object Notation)
JSON adalah format pertukaran data yang ringan, mudah dibaca manusia, dan mudah diproses oleh mesin. JSON sering digunakan dalam pengembangan web untuk mengirim data antara server dan aplikasi web sebagai alternatif XML. Dalam proyek ini, JSON digunakan sebagai *database flat-file* untuk menyimpan informasi produk.


### Source code - html
```html
<!DOCTYPE html>
<html lang="id" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mode Suci - Edisi Ramadan 1445H</title>
    <!-- Bootstrap 5.3 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <style>
        /* Modern Hero with Glassmorphism Overlay */
        .hero-section {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('ramadan_hero.png') center/cover no-repeat;
            min-height: 85vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card-ramadan:hover {
            transform: translateY(-10px);
            transition: all 0.3s ease;
            border-color: #198754 !important;
        }
    </style>
</head>
<body class="bg-black text-light">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg border-bottom border-success border-opacity-10 sticky-top bg-black bg-opacity-75" style="backdrop-filter: blur(10px);">
        <div class="container py-2">
            <a class="navbar-brand fw-bold text-success d-flex align-items-center" href="#">
                <i class="bi bi-moon-stars-fill fs-3 me-2"></i>
                <span class="tracking-widest">MODE SUCI</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-lg-4 text-uppercase small fw-bold">
                    <li class="nav-item"><a class="nav-link text-success" href="#">Beranda</a></li>
                    <li class="nav-item"><a class="nav-link text-secondary" href="#jadwal">Imsakiyah</a></li>
                    <li class="nav-item"><a class="nav-link text-secondary" href="#quotes">Mutiara</a></li>
                    <li class="nav-item">
                        <button class="btn btn-success btn-sm rounded-pill px-4 shadow-lg" data-bs-toggle="modal" data-bs-target="#thrModal">Klaim THR</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Selebihnya dapat cek pada file "index.html" -->
```
🔗 [Klik di sini untuk membuka file `index.html`](index.html)

Output:
<img src="button.png" alt="preview" style="width:100%; max-width:900px;">
<img src="alert.png" alt="preview" style="width:100%; max-width:900px;">

## Penjelasan
Website "Mode Suci" ini merupakan landing page bertema Ramadan yang dirancang secara modern dan responsif menggunakan framework Bootstrap 5.3. Halaman ini menyajikan informasi jadwal imsakiyah, kartu target ibadah harian, serta fitur interaktif klaim THR virtual untuk memberikan pengalaman pengguna yang religius dan menarik.
