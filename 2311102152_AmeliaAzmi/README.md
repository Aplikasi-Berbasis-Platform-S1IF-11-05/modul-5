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
    <strong>Amelia Azmi</strong>
    <br>
    <strong>2311102135</strong>
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
JavaScript

JavaScript merupakan bahasa pemrograman yang digunakan untuk menambahkan perilaku dinamis pada halaman web. Dengan JavaScript, sebuah website tidak hanya menampilkan informasi secara statis, tetapi juga dapat merespon interaksi pengguna seperti klik tombol, input data, maupun perubahan tampilan secara langsung.

Dalam implementasinya, JavaScript sering digunakan untuk mengontrol elemen HTML melalui DOM (Document Object Model). Dengan DOM, pengembang dapat memodifikasi isi, atribut, maupun style dari elemen tanpa perlu melakukan reload halaman. Selain itu, JavaScript juga menyediakan fungsi waktu seperti setTimeout dan setInterval yang dapat digunakan untuk membuat animasi atau efek tertentu.

Pada aplikasi ini, JavaScript dimanfaatkan untuk menangani event klik tombol, menampilkan modal, serta menambahkan efek animasi seperti elemen yang bergerak (misalnya efek uang jatuh). Hal ini membuat tampilan menjadi lebih interaktif dan menarik bagi pengguna.

jQuery

jQuery adalah library berbasis JavaScript yang dirancang untuk menyederhanakan penulisan kode JavaScript. Dengan jQuery, banyak operasi yang sebelumnya membutuhkan kode panjang dapat ditulis dengan lebih singkat dan mudah dipahami.

Beberapa keunggulan jQuery antara lain kemampuannya dalam melakukan manipulasi DOM, menangani event, serta membuat animasi dengan cara yang lebih sederhana. Contohnya adalah penggunaan fungsi seperti $(selector).click() untuk menangani event klik, hide() dan show() untuk mengatur visibilitas elemen, serta fadeIn() dan fadeOut() untuk efek animasi.

Meskipun saat ini JavaScript modern sudah cukup powerful tanpa jQuery, library ini tetap sering digunakan karena kemudahan dan sintaksnya yang ringkas, terutama untuk pengembangan yang membutuhkan implementasi cepat.

Hubungan HTML, CSS, dan JavaScript

Dalam pengembangan web, HTML berperan sebagai struktur dasar halaman, CSS digunakan untuk mengatur tampilan visual, sedangkan JavaScript berfungsi untuk menambahkan interaksi. Ketiga teknologi ini saling melengkapi sehingga menghasilkan aplikasi web yang tidak hanya menarik secara visual tetapi juga responsif terhadap pengguna.

---

#

# Tugas 5
## 1. Source Kode html
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramadan Mode Suci</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-light">

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">🌙 Ramadan App</a>
        </div>
    </nav>

    <!-- HERO -->
    <div class="container text-center py-5">
        <h1 class="display-4 fw-bold text-warning">Mode Suci Ramadan</h1>
        <p class="text-light opacity-75">
            Tingkatkan ibadah dan kumpulkan pahala sebanyak-banyaknya ✨
        </p>

        <!-- TOMBOL THR -->
        <button 
            class="btn btn-warning btn-lg mt-4 fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#thrModal">
            🎁 Cairkan THR
        </button>
    </div>

    <!-- FITUR -->
    <div class="container pb-5">
        <div class="row g-4 text-center">

            <div class="col-md-4">
                <div class="card bg-success text-white shadow-lg border-0">
                    <div class="card-body">
                        <h5 class="card-title">🕌 Ibadah</h5>
                        <p>Catat aktivitas ibadah harianmu</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card bg-warning text-dark shadow-lg border-0">
                    <div class="card-body">
                        <h5 class="card-title">⏰ Jadwal</h5>
                        <p>Informasi waktu sahur & berbuka</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card bg-light text-dark shadow-lg border-0">
                    <div class="card-body">
                        <h5 class="card-title">💰 Sedekah</h5>
                        <p>Berbagi kebaikan di bulan Ramadan</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- MODAL THR -->
    <div class="modal fade" id="thrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">

                <div class="modal-header bg-warning">
                    <h5 class="modal-title fw-bold text-dark">🎉 SELAMAT!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <h4 class="text-success fw-bold mb-3">
                        Anda mendapatkan THR!
                    </h4>
                    <p class="fs-5">💸 Rp 250.000 💸</p>

                    <!-- BUTTON AMBIL -->
                    <button class="btn btn-success fw-bold" onclick="ambilTHR()">
                        Ambil Sekarang
                    </button>
                </div>

            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- SCRIPT THR -->
    <script>
        function ambilTHR() {
            for (let i = 0; i < 20; i++) {
                let uang = document.createElement("div");
                uang.innerHTML = "💸";
                uang.className = "position-fixed";
                uang.style.left = Math.random() * 100 + "vw";
                uang.style.top = "-20px";
                uang.style.fontSize = "24px";

                document.body.appendChild(uang);

                let jatuh = setInterval(() => {
                    let top = parseInt(uang.style.top);
                    uang.style.top = top + 5 + "px";

                    if (top > window.innerHeight) {
                        uang.remove();
                        clearInterval(jatuh);
                    }
                }, 20);
            }
        }
    </script>

</body>
</html>
```


Output:
<img width="1876" height="932" alt="thr" src="https://github.com/user-attachments/assets/6b85a048-1e15-4ead-a2b4-ec00f3f2f326" />




# Penjelasan
Program ini merupakan pengembangan dari halaman Ramadan sebelumnya dengan menambahkan fitur interaktif berupa tombol “Cairkan THR”. Fitur ini dirancang untuk memberikan pengalaman pengguna yang lebih menarik dan tidak hanya bersifat statis.

Pada bagian utama, terdapat tombol yang ketika ditekan akan memunculkan modal pop-up menggunakan komponen bawaan Bootstrap. Modal ini berisi informasi bahwa pengguna mendapatkan THR beserta jumlahnya.

Bootstrap digunakan secara maksimal dalam pembuatan tampilan, mulai dari navbar, button, card, hingga modal. Dengan memanfaatkan class bawaan, tampilan dapat dibuat rapi dan konsisten tanpa perlu banyak menggunakan CSS tambahan.

Ketika pengguna menekan tombol “Ambil Sekarang”, JavaScript akan dijalankan untuk menampilkan animasi uang jatuh. Efek ini dibuat dengan cara menambahkan elemen secara dinamis ke dalam halaman dan menggerakkannya ke bawah menggunakan interval.

Dengan adanya animasi tersebut, interaksi pengguna menjadi lebih hidup dan memberikan kesan seolah-olah benar-benar mendapatkan hadiah. Hal ini meningkatkan pengalaman pengguna secara keseluruhan.

Secara keseluruhan, fitur ini menunjukkan bagaimana kombinasi Bootstrap dan JavaScript dapat digunakan untuk menciptakan tampilan yang menarik sekaligus interaktif tanpa perlu menggunakan library tambahan lainnya.
