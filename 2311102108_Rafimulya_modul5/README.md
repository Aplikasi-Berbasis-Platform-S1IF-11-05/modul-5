<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> Bootstrap </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Rafi Mulya </strong>
    <br>
    <strong>2311102108</strong>
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

# Dasar Teori Bootstrap

## Pengertian Bootstrap
Bootstrap adalah framework CSS (dan JavaScript) open-source yang digunakan untuk membangun antarmuka website yang responsive, cepat, dan konsisten. Bootstrap menyediakan kumpulan class siap pakai seperti layout grid, typography, button, form, dan komponen UI lainnya sehingga developer tidak perlu menulis CSS dari nol.

Bootstrap merupakan framework front-end yang dikembangkan untuk mempermudah proses pembuatan tampilan website yang responsif dan mobile-first. Dengan menggunakan sistem grid berbasis 12 kolom serta berbagai komponen siap pakai seperti navbar, card, button, dan alert, Bootstrap memungkinkan pengembang untuk membangun antarmuka pengguna secara cepat dan konsisten tanpa harus menulis banyak kode CSS secara manual. Selain itu, Bootstrap juga mendukung kompatibilitas lintas browser dan menyediakan utilitas class untuk pengaturan layout, warna, dan spacing.

## Contoh Implementasi
```html
<button class="btn btn-primary">Klik Saya</button>
```

### Source code - html
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ramadan Kareem</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

  <!-- Hero Section -->
  <div class="container text-center py-5">
    <span class="badge bg-success-subtle text-success px-3 py-2">Marhaban Ya Ramadan</span>
    <h1 class="display-4 mt-3">رمضان مبارك</h1>
    <p class="lead">Momen Suci untuk Menyucikan Hati</p>
    <div class="mt-3">
      <a href="#" class="btn btn-success me-2">Lihat Kultum</a>
      <a href="#" class="btn btn-outline-secondary me-2">Panduan Puasa</a>
      <!-- Surprise Button -->
      <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#thrModal">🎁 Surprise THR</button>
    </div>
  </div>

  <!-- Content Section -->
  <div class="container pb-5">
    <div class="row g-4">
      <!-- Waktu Sholat -->
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-header bg-success text-white">
            Waktu Sholat - Purwokerto
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between">Imsak <span>04:27</span></li>
            <li class="list-group-item d-flex justify-content-between">Subuh <span>04:37</span></li>
            <li class="list-group-item d-flex justify-content-between">Dzuhur <span>11:55</span></li>
            <li class="list-group-item d-flex justify-content-between">Ashar <span>15:11</span></li>
            <li class="list-group-item d-flex justify-content-between">Maghrib <span>17:55</span></li>
            <li class="list-group-item d-flex justify-content-between">Isya <span>19:05</span></li>
          </ul>
        </div>
      </div>

      <!-- Tips -->
      <div class="col-md-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <span class="badge bg-warning text-dark mb-2">Tips Sehat</span>
            <h5 class="card-title">Tetap Hidrasi Saat Puasa</h5>
            <p class="card-text">Minum air cukup saat sahur dan berbuka agar tubuh tetap bugar.</p>
            <a href="#" class="text-success">Baca Selengkapnya →</a>
          </div>
        </div>
      </div>

      <!-- Amalan -->
      <div class="col-md-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <span class="badge bg-info text-dark mb-2">Amalan</span>
            <h5 class="card-title">Keutamaan Sedekah</h5>
            <p class="card-text">Sedekah di bulan Ramadan memiliki pahala yang berlipat ganda.</p>
            <a href="#" class="text-success">Baca Selengkapnya →</a>
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
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <h3 class="text-success">Anda mendapatkan THR! 💸</h3>
          <p class="mt-3">Semoga berkah dan jangan lupa berbagi ya 😄</p>
          <button class="btn btn-success mt-3" data-bs-dismiss="modal">Alhamdulillah!</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

Output:
<img src="assets/home.png" alt="preview" style="width:100%; max-width:900px;">
<img src="assets/popup.png" alt="preview" style="width:100%; max-width:900px;">


## Penjelasan
Fitur “Cairin THR” dibuat menggunakan komponen modal Bootstrap yang akan muncul ketika tombol diklik dengan memanfaatkan atribut data-bs-toggle dan data-bs-target. Modal ini berfungsi sebagai pop-up interaktif yang menampilkan pesan hadiah sehingga meningkatkan pengalaman pengguna.