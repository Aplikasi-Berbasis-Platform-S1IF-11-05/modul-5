<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> Bootstrap Modal & JavaScript Interaktif </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Megan Sulthon Aryomukti</strong>
    <br>
    <strong>2311102119</strong>
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
  <strong>Apri Pandu Wicaksono</strong>
  <br>
  <strong>Hamka Zaenul Ardi</strong>
  <br />
  <h3>LABORATORIUM HIGH PERFORMANCE <br>FAKULTAS INFORMATIKA <br>UNIVERSITAS TELKOM PURWOKERTO <br>2026 </h3>
</div>

<hr>

# Dasar Teori

Bootstrap adalah framework front-end populer yang digunakan untuk membuat tampilan website secara cepat, responsif, dan konsisten tanpa harus menulis banyak CSS dari nol. Bootstrap menyediakan berbagai komponen siap pakai seperti navbar, tombol, card, grid system, dan form yang bisa langsung digunakan hanya dengan menambahkan class tertentu pada HTML. Selain itu, Bootstrap juga memiliki sistem grid berbasis flexbox yang memudahkan developer dalam mengatur layout agar tampil rapi di berbagai ukuran layar, mulai dari desktop hingga smartphone.

Keunggulan utama Bootstrap adalah kemudahan penggunaan dan dokumentasi yang lengkap, sehingga sangat cocok untuk pemula maupun developer profesional. Dengan bantuan JavaScript bawaan, Bootstrap juga mendukung fitur interaktif seperti modal, dropdown, carousel, dan tabs tanpa perlu coding yang rumit. Selain mempercepat proses pengembangan, Bootstrap membantu menjaga konsistensi desain dan membuat website terlihat modern, menarik, serta responsif di berbagai perangkat.

# Tugas 5 — Fitur Cairin THR

## Code

```html
<!-- 2311102119-Megan Sulthon Aryomukti -->
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mode Suci - Ramadan</title>

    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-light">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">🌙 Mode Suci</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Beranda</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Kegiatan</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Jadwal</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Kontak</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="container text-center py-5">
        <h1 class="display-4 fw-bold">Selamat Menjalankan Ibadah Puasa</h1>
        <p class="lead">Tingkatkan iman, perbanyak amal, dan raih keberkahan di bulan Ramadan 🌙</p>
        <span class="badge bg-success fs-6">#ModeSuciAktif</span>

        <!-- Tombol THR -->
        <button class="btn btn-warning btn-lg mt-4" data-bs-toggle="modal" data-bs-target="#thrModal">
            💰 Cairin THR
        </button>
    </section>

    <!-- Kegiatan Ramadan -->
    <section class="container py-4">
        <h2 class="text-center mb-4">Kegiatan Ramadan</h2>
        <div class="row g-4">

            <div class="col-md-4">
                <div class="card bg-secondary text-light h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title">🕌 Tarawih</h5>
                        <p class="card-text">Shalat malam yang memperkuat keimanan di bulan Ramadan.</p>
                        <a href="#" class="btn btn-success">Ikuti</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card bg-secondary text-light h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title">📖 Tadarus</h5>
                        <p class="card-text">Membaca dan memahami Al-Qur'an setiap hari.</p>
                        <a href="#" class="btn btn-success">Mulai</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card bg-secondary text-light h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title">🤲 Sedekah</h5>
                        <p class="card-text">Berbagi kepada sesama untuk keberkahan hidup.</p>
                        <a href="#" class="btn btn-success">Donasi</a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Jadwal -->
    <section class="container py-5">
        <h2 class="text-center mb-4">Jadwal Harian</h2>
        <table class="table table-dark table-striped text-center">
            <thead>
                <tr>
                    <th>Waktu</th>
                    <th>Kegiatan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>04:30</td>
                    <td>Sahur</td>
                </tr>
                <tr>
                    <td>18:00</td>
                    <td>Buka Puasa</td>
                </tr>
                <tr>
                    <td>19:30</td>
                    <td>Tarawih</td>
                </tr>
            </tbody>
        </table>
    </section>

    <!-- Footer -->
    <footer class="bg-success text-center py-3">
        <p class="mb-0">© 2026 Mode Suci Ramadan | Dibuat dengan Bootstrap</p>
    </footer>

    <!-- Modal THR -->
    <div class="modal fade" id="thrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-success text-light text-center">

                <div class="modal-header border-0">
                    <h5 class="modal-title w-100 fw-bold">🎉 Kejutan Ramadan!</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <h2 class="fw-bold">💸 Selamat!</h2>
                    <p class="fs-5">Anda mendapatkan THR!</p>
                    <span class="badge bg-warning text-dark fs-6">+ Rp 1.000.000</span>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                        Alhamdulillah 🤲
                    </button>
                    <button type="button" class="btn btn-warning">
                        Klaim Sekarang
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
## Output
<img width="1366" height="768" alt="Screenshot (1139)" src="https://github.com/user-attachments/assets/2d96a96a-0767-4a0c-b02a-7f55217208ba" />
