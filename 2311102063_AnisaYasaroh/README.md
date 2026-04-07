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
    <strong>Anisa Yasaroh</strong>
    <br>
    <strong>2311102063</strong>
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

## Dasar Teori

Bootstrap adalah framework yang digunakan untuk mempermudah pembuatan tampilan website agar lebih cepat, rapi, dan responsif di berbagai ukuran layar. Bootstrap menyediakan kumpulan class siap pakai untuk mengatur layout, warna, ukuran teks, tombol, kartu, hingga komponen interaktif tanpa harus membuat gaya dari awal. Salah satu konsep utama Bootstrap adalah grid system, yaitu sistem pembagian halaman menggunakan `container`, `row`, dan `col` sehingga elemen tersusun teratur dalam baris dan kolom. Selain itu, Bootstrap memiliki banyak utility class seperti `text-center`, `bg-success`, `fw-bold`, `rounded`, dan `shadow` yang berfungsi mengatur tampilan elemen secara cepat dan konsisten.

Selain untuk desain visual, Bootstrap juga menyediakan komponen antarmuka interaktif seperti `navbar`, `card`, `alert`, `button`, `modal`, `carousel`, dan `form` yang dapat langsung digunakan. Komponen-komponen ini bekerja dengan bantuan file Bootstrap dan JavaScript sehingga memudahkan pembuatan website modern tanpa banyak kode tambahan. Bootstrap juga mendukung integrasi dengan Bootstrap Icons untuk menambahkan ikon pada halaman web. Dengan menggunakan Bootstrap, pengembang dapat membuat antarmuka yang responsif, konsisten, dan lebih efisien karena sebagian besar kebutuhan desain sudah tersedia dalam framework tersebut.

## Penjelasan Kode Bootstrap

Kode ini menggunakan Bootstrap untuk membuat tampilan web responsif dan rapi. Class Bootstrap dipakai untuk mengatur layout dan warna. Modal THR dibuat interaktif dengan JavaScript.

## Task 5: Fitur Cairin THR

```html
<!-- 2311102063
Anisa Yasaroh
IF-11-REG05 -->

<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8">
  <title>Ramadan Kareem</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
</head>

<body class="min-vh-100 position-relative">

  <img src="bgramadhan.jpg" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
    alt="Ramadan Background">

  <div
    class="position-relative d-flex flex-column align-items-center justify-content-center min-vh-100 text-center px-3">
    <div class="bg-dark bg-opacity-75 rounded-4 p-5 shadow-lg w-100 w-md-75">

      <p class="text-warning fw-bold text-uppercase small mb-2">— Ramadan —</p>
      <h1 class="display-4 fw-bolder mb-3 text-white">Ramadan <span class="text-warning">Kareem</span></h1>
      <p class="fs-5 mb-3 text-white">
        Saatnya hati bersinar dengan ketenangan, memperbanyak amal, dan menyebarkan kebaikan kepada semua orang.
      </p>
      <p class="fs-6 mb-3 text-white">
        Semoga setiap doa diterima, setiap langkah membawa keberkahan, dan bulan suci ini menjadi momen untuk
        introspeksi serta memperkuat iman.
      </p>

      <div class="mb-4 d-flex justify-content-center gap-3 flex-wrap">
        <span class="badge rounded-pill bg-warning text-dark px-4 py-2 fs-6 d-inline-flex align-items-center gap-2">
          <i class="bi bi-moon-stars-fill"></i> Ramadan 1447 H
        </span>

        <button id="klaimThrBtn" class="btn btn-secondary fw-bold rounded-pill px-4 py-2" data-bs-toggle="modal"
          data-bs-target="#thrModal">
          <i class="bi bi-gift me-2"></i> Klaim THR
        </button>
      </div>

      <div class="row g-4 mt-4">
        <div class="col-md-6 col-lg-3">
          <div class="card text-center p-4 shadow-sm bg-dark bg-opacity-50 border border-light rounded-4 h-100">
            <i class="bi bi-sun fs-1 text-warning mb-3"></i>
            <h5 class="fw-bold text-white mb-2">Jadwal Sholat</h5>
            <p class="small text-white mb-1">Subuh 04:30</p>
            <p class="small text-white mb-1">Dzuhur 12:00</p>
            <p class="small text-white mb-1">Ashar 15:15</p>
            <p class="small text-white mb-1">Maghrib 18:10</p>
            <p class="small text-white mb-0">Isya 19:30</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card text-center p-4 shadow-sm bg-dark bg-opacity-50 border border-light rounded-4 h-100">
            <i class="bi bi-book fs-1 text-warning mb-3"></i>
            <h5 class="fw-bold text-white mb-2">Hadist</h5>
            <p class="small text-white mb-1">
              “Barang siapa yang berpuasa di bulan Ramadan karena iman dan mengharap pahala, maka diampuni dosanya yang
              lalu.”
            </p>
            <p class="small text-white mb-1">
              Hadist ini mengingatkan kita untuk berpuasa dengan niat yang ikhlas dan memohon ridha Allah. Mari
              perbanyak amal dan kebaikan selama bulan suci.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card text-center p-4 shadow-sm bg-dark bg-opacity-50 border border-light rounded-4 h-100">
            <i class="bi bi-moon-stars fs-1 text-warning mb-3"></i>
            <h5 class="fw-bold text-white mb-2">Ibadah</h5>
            <p class="small text-white mb-1">
              Perbanyak dzikir dan sholat sunnah, baca Al-Quran setiap hari agar hati semakin tenang dan iman bertambah.
              Jangan lupa bersyukur.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card text-center p-4 shadow-sm bg-dark bg-opacity-50 border border-light rounded-4 h-100">
            <i class="bi bi-heart fs-1 text-warning mb-3"></i>
            <h5 class="fw-bold text-white mb-2">Berbagi</h5>
            <p class="small text-white mb-1">
              Bagikan senyum dan doa. Bantu yang membutuhkan dengan sedekah atau makanan berbuka.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="modal fade" id="thrModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-dark text-center rounded-4 border border-warning">

        <div class="modal-header border-0">
          <button class="btn-close btn-close-white ms-auto" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body px-5 pb-5">
          <div id="step1">
            <i class="bi bi-gift text-warning fs-1 mb-3"></i>
            <h5 class="text-white fw-bold">THR Ramadan Tersedia!</h5>
            <p class="text-white small">Klik tombol di bawah untuk membuka hadiahmu.</p>
            <button id="bukaThr" class="btn btn-warning text-dark fw-bold rounded-pill w-100 mt-3">Buka Hadiah</button>
          </div>

          <div id="step2" class="d-none">
            <i class="bi bi-envelope-open text-warning fs-1 mb-3"></i>
            <h5 class="text-white fw-bold">Selamat, Anda mendapatkan THR!</h5>
            <p class="text-white small">Tunjangan Hari Raya Ramadan 1447 H</p>
            <h3 class="text-warning fw-bolder my-3">Rp 100.000</h3>
            <button class="btn btn-outline-light rounded-pill w-100" data-bs-dismiss="modal">Tutup</button>
          </div>
        </div>

      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    const klaimBtn = document.getElementById("klaimThrBtn");
    const bukaBtn = document.getElementById("bukaThr");

    klaimBtn.addEventListener("click", () => {
      klaimBtn.classList.remove("btn-secondary");
      klaimBtn.classList.add("btn-warning");
    });

    bukaBtn.onclick = function () {
      document.getElementById("step1").classList.add("d-none");
      document.getElementById("step2").classList.remove("d-none");
    };
  </script>

</body>

</html>
```
### Screenshot Output
<img src="outputthr1.jpg" alt="Keterangan Foto" width="100%">
<img src="outputthr2.jpg" alt="Keterangan Foto" width="100%">
<img src="outputthr3.jpg" alt="Keterangan Foto" width="100%">

## Penjelasan Code

Kode HTML ini membuat halaman web bertema Ramadan Kareem. Layout halaman diatur dengan Bootstrap Grid System (`row` dan `col`) dan utility classes seperti `text-center`, `bg-dark`, `fw-bold`, `rounded-4`, serta `shadow-lg` untuk tata letak, warna, tipografi, dan efek visual. Konten utama menampilkan teks ucapan Ramadan, badge, tombol Klaim THR, dan empat card informasi (Jadwal Sholat, Hadist, Ibadah, Berbagi) dengan ikon dari Bootstrap Icons.

Halaman juga menampilkan fitur modal interaktif THR menggunakan komponen modal Bootstrap. Tombol Klaim THR memicu modal, dan tombol Buka Hadiah mengubah tampilan modal dari step awal ke step kedua menggunakan JavaScript dengan `classList.add('d-none')` dan `classList.remove('d-none')`. Semua fungsionalitas interaktif seperti modal dan tombol dijalankan melalui Bootstrap JS (`bootstrap.bundle.min.js`), sehingga halaman tetap modern, interaktif, dan efisien tanpa kode styling tambahan.