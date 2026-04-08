<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> JAVASCRIPT & JQUERY </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Fattah Rizqy Adhipratama</strong>
    <br>
    <strong>2311102019</strong>
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


# Dasar Teori

<p align="justify">
JavaScript merupakan bahasa pemrograman tingkat tinggi yang bersifat interpreted dan digunakan untuk membuat halaman web menjadi interaktif dan dinamis. JavaScript berjalan di sisi client (browser) dan memungkinkan pengembang untuk memanipulasi elemen HTML, CSS, serta merespons berbagai event seperti klik tombol, input form, animasi, validasi data, hingga komunikasi asynchronous menggunakan AJAX. Bahasa ini menjadi salah satu teknologi utama dalam pengembangan web bersama HTML dan CSS. JavaScript juga mendukung berbagai paradigma pemrograman seperti prosedural, berorientasi objek, dan fungsional, sehingga fleksibel digunakan dalam berbagai kebutuhan pengembangan aplikasi web modern.
</p>

<p align="justify">
jQuery adalah library JavaScript yang dirancang untuk menyederhanakan penulisan kode JavaScript, terutama dalam manipulasi DOM, penanganan event, efek animasi, dan AJAX. jQuery memiliki filosofi “write less, do more”, yang berarti developer dapat menulis kode lebih singkat namun tetap menghasilkan fungsi yang kompleks. Dengan menggunakan selector yang mirip CSS, jQuery memudahkan proses pemilihan elemen HTML dan pemberian aksi pada elemen tersebut.
</p>

# Tugas 5 - Fitur Cairin THR
## 1. Source code index.html
```
<!-- 2311102019
Fattah Rizqy Adhipratama
S1IF-11-05 -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ramadhan Mubarak 1447 H</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet"/>
</head>
<body class="bg-dark text-light">

<div id="welcomeSurprise" class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 z-3">
  <div class="text-center">
    <h2 class="text-warning fw-bold mb-4">
      <i class="bi bi-cash-coin"></i> THR WOY!
    </h2>
    <button class="btn btn-warning btn-lg rounded-pill px-5 shadow-lg"
            data-bs-toggle="modal"
            data-bs-target="#thrModal"
            onclick="document.getElementById('welcomeSurprise').style.display='none'">
      🎁 Klaim THR Kaget
    </button>
  </div>
</div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary shadow-sm">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2 fw-bolder text-warning" href="#">
      <i class="bi bi-moon-stars-fill fs-3"></i>
      <span>RAMADHAN 1447H</span>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto gap-2">
        <li class="nav-item"><a class="nav-link active" href="#">Beranda</a></li>
        <li class="nav-item"><a class="nav-link" href="#jadwal">Jadwal</a></li>
        <li class="nav-item"><a class="nav-link" href="#doa">Doa</a></li>
        <li class="nav-item"><a class="nav-link btn btn-outline-warning btn-sm px-3 ms-lg-3" href="#tips">Tips Puasa</a></li>
      </ul>
    </div>
  </div>
</nav>

<header class="py-5 mb-5">
  <div class="container py-5">
    <div class="row align-items-center g-5">
      <div class="col-lg-6 text-center text-lg-start">
        <span class="badge text-bg-warning rounded-pill px-3 py-2 mb-3 fw-bold">Selamat Datang</span>
        <h1 class="display-2 fw-bold text-warning mb-3">Marhaban Ya <br><span class="text-white">Ramadhan</span></h1>
        <p class="lead text-light mb-4 fs-4">
          Waktu yang tepat untuk mensucikan hati dan mendekatkan diri kepada Sang Pencipta di tahun 1447 H.
        </p>
        <div class="d-flex justify-content-center justify-content-lg-start gap-3">
          <a href="#jadwal" class="btn btn-warning btn-lg rounded-pill px-5 shadow">Lihat Jadwal</a>
          <a href="#doa" class="btn btn-outline-light btn-lg rounded-pill px-5">Kumpulan Doa</a>
        </div>
      </div>
      <div class="col-lg-6 text-center">
        <div class="p-5">
          <i class="bi bi-mosque text-warning display-1 opacity-75"></i>
        </div>
      </div>
    </div>
  </div>
</header>

<section id="jadwal" class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold text-warning h1">Jadwal Ibadah</h2>
      <p class="text-secondary">Waktu Indonesia Barat (WIB)</p>
    </div>
    <div class="row g-3">
      <div class="col-6 col-md-4 col-lg-2">
        <div class="card bg-secondary bg-opacity-10 border-secondary text-center p-3 hover-lift h-100">
          <small class="text-warning fw-bold">Imsak</small>
          <h3 class="mb-0 mt-2 fw-bold text-white">04:19</h3>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="card bg-warning text-dark border-0 text-center p-3 hover-lift h-100 shadow">
          <small class="fw-bold">Subuh</small>
          <h3 class="mb-0 mt-2 fw-bold text-white">04:29</h3>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="card bg-secondary bg-opacity-10 border-secondary text-center p-3 hover-lift h-100">
          <small class="text-warning fw-bold">Dzuhur</small>
          <h3 class="mb-0 mt-2 fw-bold text-white">11:52</h3>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="card bg-secondary bg-opacity-10 border-secondary text-center p-3 hover-lift h-100">
          <small class="text-warning fw-bold">Ashar</small>
          <h3 class="mb-0 mt-2 fw-bold text-white">15:10</h3>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="card bg-danger bg-opacity-25 border-danger text-center p-3 hover-lift h-100">
          <small class="text-danger fw-bold">Maghrib</small>
          <h3 class="mb-0 mt-2 fw-bold text-white">18:05</h3>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <div class="card bg-secondary bg-opacity-10 border-secondary text-center p-3 hover-lift h-100">
          <small class="text-warning fw-bold">Isya</small>
          <h3 class="mb-0 mt-2 fw-bold text-white">19:18</h3>
        </div>
      </div>
    </div>
  </div>
</section>
```
**Source Code Lengkap:** [index.html](./index.html)

# Output
![alt text](<assets/Screenshot (1171).png>)
![alt text](<assets/Screenshot (1172).png>)

# Penjelasan
<p align="justify">
Program ini ditambahkan fitur surprise THR interaktif di awal halaman menggunakan komponen Bootstrap agar pengalaman pengguna terasa lebih menarik dan realistis. Saat website pertama kali dibuka, muncul overlay welcome dengan tombol “Klaim THR Kaget” yang berfungsi memancing interaksi user. Setelah tombol diklik, overlay akan hilang lalu muncul modal pop-up reward yang menampilkan pesan bahwa pengguna mendapatkan THR sebesar Rp 999.999.999, sehingga memberikan efek seperti sedang menerima hadiah digital. Ketika tombol “Ambil THR” ditekan, modal akan tertutup. Dengan alur ini, UI/UX website menjadi lebih hidup, engaging, dan memberi kesan reward yang menyenangkan bagi pengguna.
</p>
