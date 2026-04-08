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
    <strong>Zahra Tsuroyya Poetri</strong>
    <br>
    <strong>2311102127</strong>
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

Bootstrap adalah framework CSS berbasis komponen yang digunakan untuk membangun antarmuka web secara cepat dan responsif. Framework ini menyediakan berbagai elemen siap pakai seperti grid system, tombol, navigasi, serta komponen UI lainnya yang memudahkan pengembang dalam mengatur tampilan website secara konsisten. Selain itu, Bootstrap juga didukung oleh plugin JavaScript yang membantu meningkatkan interaktivitas dan stabilitas dalam pengembangan antarmuka.

Bootstrap banyak digunakan baik dalam proyek pendidikan maupun aplikasi bisnis karena kemudahan penggunaan, dokumentasi yang lengkap, serta kemampuannya dalam mempercepat proses pengembangan website.

### Tugas 5 - Fitur Cairin THR

#### Source Code 

```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramadan</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
</head>

<body class="bg-success-subtle">

<nav class="navbar bg-success shadow-sm">
    <div class="container">
        <span class="navbar-brand text-white fw-bold fs-4">
            <i class="bi bi-moon-stars-fill"></i> Ramadan Mubarak
        </span>
    </div>
</nav>


<div class="container text-center py-5">
    <h1 class="display-5 text-success fw-bold">
        🌙 Selamat Menunaikan Ibadah Puasa
    </h1>
    <p class="lead text-muted">
        Semoga Ramadan membawa keberkahan, kedamaian, dan kebahagiaan bagi kita semua.
    </p>

    <button class="btn btn-success btn-lg mt-3 shadow"
        data-bs-toggle="modal"
        data-bs-target="#thrModal">
        🎁 Buka Kejutan Ramadan
    </button>
</div>

<div class="container pb-5">
    <div class="row g-4">

        <div class="col-md-6">
            <div class="card shadow-sm rounded-4">
                <div class="card-header bg-success text-white fw-bold">
                    Jadwal Buka Puasa
                </div>

                <table class="table mb-0 text-center">
                    <thead class="table-success">
                        <tr>
                            <th>Hari</th>
                            <th>Imsak</th>
                            <th>Subuh</th>
                            <th>Maghrib</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Hari ini</td><td>04:23</td><td>04:33</td><td>17:55</td></tr>
                        <tr><td>Selasa</td><td>04:22</td><td>04:32</td><td>17:55</td></tr>
                        <tr><td>Rabu</td><td>04:21</td><td>04:31</td><td>17:56</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card shadow-sm rounded-4">
                <div class="card-header bg-success text-white fw-bold">
                    Menu Rekomendasi Berbuka
                </div>

                <div class="card-body">
                    <div class="row text-center g-3">

                        <div class="col-6">
                            <div class="card h-100 shadow-sm">
                                <div class="card-body">🥤<br>Es Kelapa Muda</div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card h-100 shadow-sm">
                                <div class="card-body">🍢<br>Kolak Pisang</div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card h-100 shadow-sm">
                                <div class="card-body">🌴<br>Kurma</div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card h-100 shadow-sm">
                                <div class="card-body">🍜<br>Soto Ayam</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="card shadow-sm rounded-4">
                <div class="card-header bg-success text-white fw-bold">
                    Tips Puasa Lancar
                </div>

                <div class="card-body">
                    <div class="row g-3 text-center">

                        <div class="col-md-3">
                            <div class="alert alert-success">
                                💧 Minum air cukup
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-info">
                                🍽 Jangan melewatkan sahur
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-warning">
                                📖 Perbanyak ibadah
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-danger">
                                🤝 Berbagi sesama
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<div class="modal fade" id="thrModal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center">

            <div class="modal-header justify-content-center">
                <h5 class="modal-title w-100 text-center">Surprise!!!</h5>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <h4 class="text-success fw-bold">
                    Selamat, Anda mendapatkan THR!
                </h4>
                <p class="text-muted">
                    Kado Ramadan sudah terbuka!
                    Semoga rezekinya juga ikut kebuka ya ✨
                </p>
            </div>

            <div class="modal-footer justify-content-center">
                <button class="btn btn-success" data-bs-dismiss="modal">
                    Ambil THR
                </button>
            </div>

        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<script>
$(document).ready(function(){

    $(".card-body .card").click(function(){
        let menu = $(this).text().trim();
        alert("Kamu memilih: " + menu);
    });

    $("button[data-bs-target='#thrModal']").click(function(){
        $(this).addClass("active");

        setTimeout(() => {
            $(this).removeClass("active");
        }, 300);
    });

});
</script>

</body>
</html>

```

### Hasil Output

![Hasil Output](modul5(1).png)

![Hasil Output](modul5(2).png)

### Deskripsi Kode

Kode tersebut merupakan halaman web bertema Ramadan yang dibuat menggunakan HTML dengan memanfaatkan framework Bootstrap. Halaman ini dirancang untuk menampilkan beberapa informasi penting, seperti navbar sebagai header, ucapan Ramadan, jadwal buka puasa, menu rekomendasi berbuka, serta tips agar ibadah puasa dapat berjalan dengan lancar. Susunan elemen pada halaman dibuat secara terstruktur sehingga mudah dipahami oleh pengguna, serta dilengkapi dengan fitur tambahan berupa tombol kejutan yang dapat digunakan untuk “mencairkan THR” sebagai elemen interaktif pada halaman.

Penggunaan Bootstrap pada kode ini terlihat dari pemanfaatan berbagai komponen yang telah disediakan, seperti navbar untuk bagian header, grid system untuk mengatur tata letak agar responsif, card untuk mengelompokkan konten, table untuk menampilkan data jadwal, serta alert untuk menyajikan tips dengan tampilan yang lebih menarik. Selain itu, digunakan pula utility class untuk membantu proses styling secara cepat dan Bootstrap Icons untuk menambahkan elemen visual, sehingga tidak diperlukan penggunaan CSS secara manual. Fitur THR diimplementasikan menggunakan komponen modal dari Bootstrap yang akan muncul ketika tombol ditekan.

Hasil output dari kode tersebut adalah sebuah halaman web bertema Ramadan yang menampilkan informasi seputar Ramadan secara informatif dan terstruktur, serta memiliki fitur interaktif berupa kejutan THR yang muncul dalam bentuk pop-up.

### Refrensi
[1] Santoso, M. (2025). Perbandingan efektivitas bootstrap dan tailwind CSS dalam pengembangan UI web responsif. Jurnal Teknologi dan Sistem Informasi Bisnis, 7(4), 489–497.

[2] Sari, I. P., Azzahrah, A., Qathrunada, I. F., Lubis, N., & Anggraini, T. (2022). Perancangan sistem absensi pegawai kantoran secara online pada website berbasis HTML dan CSS. Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Muhammadiyah Sumatera Utara.
