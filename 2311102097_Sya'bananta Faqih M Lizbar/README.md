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
    <strong>Sya'bananta Faqih M Lizbar</strong>
    <br>
    <strong>2311102097</strong>
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
    <title>Ramadan THR Mode 💸</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-light">

<!-- NAVBAR -->
<nav class="navbar navbar-dark bg-success">
    <div class="container">
        <span class="navbar-brand">Ramadan Kareem 🌙</span>
    </div>
</nav>

<!-- HERO -->
<div class="container text-center mt-5">
    <h1 class="display-4 text-warning fw-bold">Mode Suci Aktif ✨</h1>
    <p class="lead">Klik tombol di bawah ini untuk keberkahan tak terduga 😏</p>

    <!-- TOMBOL THR -->
    <button class="btn btn-danger btn-lg mt-3 px-4 py-2"
        data-bs-toggle="modal" data-bs-target="#thrModal">
        🎁 Cairin THR
    </button>
</div>

<!-- MODAL -->
<div class="modal fade" id="thrModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content text-center">

      <!-- HEADER -->
      <div class="modal-header bg-success text-white">
        <h5 class="modal-title">🎉 Selamat!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- BODY -->
      <div class="modal-body">
        <h2 class="fw-bold text-success">💸 THR CAIR! 💸</h2>
        <h3 class="text-warning mt-2">+Rp 1.000.000</h3>

        <p class="mt-3 fs-5">
            Selamat, Anda mendapatkan THR! 🥳
        </p>

        <div class="alert alert-warning">
            Jangan lupa berbagi ya... minimal ke aku 😭🙏
        </div>
      </div>

      <!-- FOOTER -->
      <div class="modal-footer justify-content-center">
        <button class="btn btn-success" data-bs-dismiss="modal">
            Alhamdulillah 🤲
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
🔗 [Klik di sini untuk membuka file `index.html`](index.html)

Output:
<img src="output 1.png" alt="preview" style="width:100%; max-width:900px;">
<img src="output 2.png" alt="preview" style="width:100%; max-width:900px;">


## Penjelasan
Fitur “Cairin THR” dibuat menggunakan komponen modal Bootstrap yang akan muncul ketika tombol diklik dengan memanfaatkan atribut data-bs-toggle dan data-bs-target. Modal ini berfungsi sebagai pop-up interaktif yang menampilkan pesan hadiah sehingga meningkatkan pengalaman pengguna tanpa perlu menggunakan JavaScript tambahan.
