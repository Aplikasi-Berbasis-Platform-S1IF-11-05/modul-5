<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> BOOTSTRAP </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Anisah Syifa Mustika Riyanto</strong>
    <br>
    <strong>2311102080</strong>
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
  <h3>LABORATORIUM HIGH PERFORMANCE <br>FAKULTAS INFORMATIKA <br>UNIVERSITAS TELKOM PURWOKERTO <br>2026</h3>
</div>

<hr>

### Dasar Teori

Bootstrap merupakan framework front-end berbasis HTML, CSS, dan JavaScript yang digunakan untuk mempermudah pengembangan tampilan website agar lebih responsif dan modern. Framework ini menyediakan berbagai komponen siap pakai seperti navbar, button, card, grid system, dan lain-lain yang dapat langsung digunakan tanpa perlu menulis CSS dari awal. Dengan menggunakan Bootstrap, pengembang dapat mengatur tata letak halaman secara fleksibel melalui sistem grid yang berbasis baris (row) dan kolom (column), sehingga tampilan dapat menyesuaikan berbagai ukuran layar seperti desktop, tablet, maupun smartphone. Selain itu, Bootstrap juga memiliki banyak class utility yang memungkinkan pengaturan warna, spacing, tipografi, dan elemen visual lainnya secara cepat hanya dengan menambahkan class tertentu pada elemen HTML. Hal ini membuat proses pengembangan menjadi lebih efisien, konsisten, dan mudah dipelajari, terutama bagi pemula dalam pengembangan web.

### Tugas 5 - Fitur Cairin THR

#### Source Code

```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mode Suci - Ramadan</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light text-dark">

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-success">
    <div class="container">
      <a class="navbar-brand fw-bold text-white" href="#">🌙 Ramadan Kareem</a>
    </div>
  </nav>

  <!-- Hero -->
  <div class="container text-center py-5">
    <h1 class="display-4 fw-bold text-success">Selamat Menjalankan Ibadah Puasa 🌙</h1>
    <p class="lead">Semoga Ramadan penuh berkah dan rezeki</p>

    <!-- Tombol THR -->
    <button
      class="btn btn-warning btn-lg mt-4 fw-bold shadow"
      data-bs-toggle="modal"
      data-bs-target="#thrModal">
      💸 Cairin THR
    </button>
  </div>

  <!-- Card Section -->
  <div class="container py-4">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-success">Jadwal Puasa</h5>
            <p class="card-text">Lihat waktu sahur dan berbuka.</p>
            <button class="btn btn-success">Lihat</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-success">Doa Harian</h5>
            <p class="card-text">Kumpulan doa Ramadan.</p>
            <button class="btn btn-success">Baca</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-success">Amalan Sunnah</h5>
            <p class="card-text">Amalan yang dianjurkan.</p>
            <button class="btn btn-success">Pelajari</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal THR -->
  <div class="modal fade" id="thrModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-center">

        <div class="modal-header bg-success text-white">
          <h5 class="modal-title w-100">🎉 Selamat!</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <h3 class="fw-bold text-success">💸 Anda mendapatkan THR!</h3>
          <p class="mt-3">Semoga rezekinya berkah dan tidak hanya di web ini 😭🙏</p>

          <div class="alert alert-warning mt-3">
            +Rp 1.000.000 masuk ke hati ❤️
          </div>
        </div>

        <div class="modal-footer justify-content-center">
          <button class="btn btn-success" data-bs-dismiss="modal">Alhamdulillah</button>
        </div>

      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-success text-center text-white py-3">
    <p class="mb-0">© 2026 Ramadan Web | THR Edition 💸</p>
  </footer>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>

```

### Hasil Output

![Hasil Output](modul5-1.png)

![Hasil Output](modul5-2.png)

### Deskripsi Kode

```
Halaman web bertema Ramadan ini merupakan lanjutan dari Modul 4, di mana perbedaannya terletak pada penambahan fitur interaktif berupa tombol “Cairin THR” yang memunculkan modal pop-up menggunakan komponen Bootstrap. Jika pada modul sebelumnya fokus pada pembuatan tampilan statis menggunakan berbagai class bawaan Bootstrap, pada modul ini ditambahkan elemen interaksi untuk meningkatkan pengalaman pengguna tanpa menggunakan JavaScript secara manual. Struktur halaman tetap diawali dengan bagian <head> yang menghubungkan Bootstrap melalui CDN agar seluruh komponen dan fitur dapat digunakan dengan mudah.

Pada bagian <body>, digunakan class bg-light dan text-dark untuk menciptakan tampilan yang cerah dan nyaman dibaca. Navbar menggunakan class navbar dan bg-success sebagai identitas visual dengan nuansa Ramadan. Bagian hero menampilkan judul utama dengan class display-4, fw-bold, dan text-success, serta tombol utama “Cairin THR” yang menggunakan class btn btn-warning btn-lg agar terlihat mencolok. Tombol ini memiliki atribut data-bs-toggle="modal" dan data-bs-target="#thrModal" yang berfungsi untuk memicu munculnya modal pop-up saat diklik.

Bagian konten utama masih menggunakan sistem grid Bootstrap dengan row dan col-md-4 untuk membuat layout responsif dalam tiga kolom. Setiap kolom berisi card dengan class card dan card-body yang menampilkan informasi seperti jadwal puasa, doa harian, dan amalan sunnah. Penambahan class shadow-sm memberikan efek visual yang lebih modern dan menarik.

Fitur utama pada modul ini adalah modal pop-up yang dibuat menggunakan class modal, modal-dialog-centered, dan modal-content sehingga tampil di tengah layar. Modal ini berisi pesan “Selamat, Anda mendapatkan THR!” yang ditampilkan menggunakan kombinasi class seperti fw-bold dan text-success, serta didukung elemen alert alert-warning untuk memberikan kesan interaktif seolah pengguna benar-benar menerima hadiah. Modal juga dilengkapi tombol penutup dengan class btn btn-success.

Terakhir, bagian footer menggunakan class bg-success dan text-white untuk menjaga konsistensi warna dengan keseluruhan tema. Secara keseluruhan, halaman ini menunjukkan pengembangan dari modul sebelumnya dengan menambahkan fitur interaktif berbasis Bootstrap, sehingga tidak hanya menampilkan desain yang responsif tetapi juga meningkatkan pengalaman pengguna melalui interaksi yang lebih menarik.
```
