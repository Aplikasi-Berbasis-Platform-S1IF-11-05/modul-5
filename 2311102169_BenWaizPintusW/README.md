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
    <strong>Ben Waiz Pintus Widyosaputro</strong>
    <br>
    <strong>2311102169</strong>
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
JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif dan dinamis. Bahasa ini berjalan di sisi client (browser) dan memungkinkan pengembang untuk memanipulasi elemen HTML, mengatur tampilan CSS, serta merespon berbagai event seperti klik, input, dan submit. Selain itu, JavaScript juga mendukung pemrograman berbasis objek (OOP) dan dapat digunakan untuk berkomunikasi dengan server melalui teknik seperti AJAX, sehingga data dapat diperbarui tanpa harus me-reload halaman secara keseluruhan.
</p>

<p align="justify">
jQuery adalah library JavaScript yang dirancang untuk mempermudah penulisan kode JavaScript, terutama dalam manipulasi DOM, penanganan event, animasi, dan AJAX. Dengan sintaks yang lebih sederhana dan ringkas, jQuery membantu pengembang menghemat waktu serta mengurangi kompleksitas kode dibandingkan JavaScript murni. Selain itu, jQuery juga kompatibel dengan berbagai browser, sehingga meminimalkan masalah perbedaan perilaku antar browser dalam pengembangan aplikasi web.
</p>

# Tugas 5 - Fitur Cairin THR
## 1. Source code index.html
```
<!-- 2311102169
Ben Waiz Pintus W
S1IF-11-05 -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Mode Suci Ramadan 🌙</title>

    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-success bg-gradient text-light">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">🌙 Ramadan Kareem</a>
        </div>
    </nav>

    <!-- Content -->
    <div class="container text-center mt-5">

        <h1 class="fw-bold mb-3">Selamat Menjalankan Ibadah Puasa</h1>
        <p class="lead mb-4">
            Semoga Ramadan kali ini membawa berkah, ampunan, dan kedamaian 🌙✨
        </p>

        <!-- Card Utama -->
        <div class="card mx-auto shadow-lg" style="max-width: 400px;">
            <div class="card-body text-dark">
                <h5 class="card-title">Untuk Kamu ❤️</h5>
                <p class="card-text">
                    Di bulan penuh berkah ini, aku cuma mau bilang...<br>
                    Semoga kita selalu diberi kesehatan,<br>
                    dan tetap saling menjaga satu sama lain 🤍
                </p>
                <button class="btn btn-success w-100">Aamiin 🤲</button>
            </div>
        </div>

        <!-- Tombol THR -->
        <button class="btn btn-warning btn-lg mt-4 shadow"
                data-bs-toggle="modal"
                data-bs-target="#thrModal">
            💸 Cairin THR
        </button>

        <!-- Grid Info -->
        <div class="row mt-5">
            <div class="col-md-4 mb-3">
                <div class="card text-dark shadow">
                    <div class="card-body">
                        <h5 class="card-title">🌙 Puasa</h5>
                        <p class="card-text">Menahan diri dari lapar dan hawa nafsu.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card text-dark shadow">
                    <div class="card-body">
                        <h5 class="card-title">🕌 Tarawih</h5>
                        <p class="card-text">Sholat malam untuk mendekatkan diri.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card text-dark shadow">
                    <div class="card-body">
                        <h5 class="card-title">🤲 Doa</h5>
                        <p class="card-text">Waktu terbaik untuk memohon ampunan.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Modal THR -->
    <div class="modal fade" id="thrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">

                <div class="modal-header bg-success text-light">
                    <h5 class="modal-title w-100">🎉 Kejutan Ramadan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <h3 class="fw-bold text-success">Selamat! 🎊</h3>
                    
                    <p class="fs-5 mt-3">
                        Anda mendapatkan THR sebesar:
                    </p>

                    <h2 class="text-warning fw-bold">
                        Rp 500.000.000
                    </h2>

                    <p class="text-muted mt-2">
                        Semoga berkah dan tidak langsung habis ya 😆
                    </p>
                </div>

                <div class="modal-footer justify-content-center">
                    <button class="btn btn-success px-4" data-bs-dismiss="modal">
                        Aamiin
                    </button>
                </div>

            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
```

# Output
![alt text](<p1.png>)
![alt text](<p2.png>)

# Penjelasan
<p align="justify">
Program ini merupakan pengembangan dari halaman Ramadan dengan menambahkan fitur interaktif berupa tombol “Cairin THR” yang terhubung dengan komponen modal dari Bootstrap. Tombol dibuat menggunakan class seperti btn, btn-warning, btn-lg, dan shadow agar terlihat mencolok dan menarik perhatian pengguna. Atribut data-bs-toggle dan data-bs-target digunakan pada tombol untuk menghubungkannya dengan modal, sehingga ketika tombol diklik, modal akan muncul secara otomatis tanpa perlu menambahkan JavaScript secara manual.

Modal yang digunakan memanfaatkan struktur bawaan Bootstrap yang terdiri dari modal, modal-dialog, dan modal-content. Di dalamnya terdapat bagian header, body, dan footer yang berfungsi untuk menampilkan informasi secara terstruktur. Pada bagian body, ditampilkan pesan ucapan serta nominal THR yang sudah ditentukan secara tetap, sehingga setiap kali pengguna membuka modal, nilai yang ditampilkan akan selalu sama. Class seperti text-center, text-success, fw-bold, dan text-warning digunakan untuk memperkuat tampilan visual agar lebih menarik. Tombol pada bagian footer menggunakan atribut data-bs-dismiss agar dapat menutup modal dengan mudah. Dengan memanfaatkan komponen Bootstrap ini, fitur interaktif dapat dibuat secara sederhana, responsif, dan tetap memberikan pengalaman pengguna yang menarik.
</p>
