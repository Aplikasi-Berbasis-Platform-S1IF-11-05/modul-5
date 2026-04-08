<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> JavaScript & jQuery </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Muhammad Aulia Muzzaki Nugraha</strong>
    <br>
    <strong>2311102051</strong>
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

## Pengertian JavaScript
JavaScript adalah bahasa pemrograman yang berjalan di browser untuk membuat halaman web menjadi interaktif. Dengan JavaScript, website tidak hanya menampilkan konten statis, tetapi juga bisa merespons aksi pengguna seperti klik tombol, pengisian form, animasi, hingga pengolahan data secara dinamis.

## Konsep Dasar JavaScript
1. Variabel dan tipe data digunakan untuk menyimpan nilai seperti teks, angka, dan boolean.
2. Fungsi dipakai untuk membungkus logika agar kode lebih terstruktur dan bisa digunakan ulang.
3. DOM (Document Object Model) memungkinkan JavaScript mengakses dan mengubah elemen HTML secara langsung.
4. Event handling digunakan untuk menangani interaksi pengguna, misalnya klik, submit, atau input.
5. JavaScript modern mendukung asynchronous programming (contoh: Promise, async/await) untuk proses yang berjalan tanpa memblokir tampilan.

## Pengertian jQuery
jQuery adalah library JavaScript yang menyederhanakan penulisan kode JavaScript, terutama untuk manipulasi DOM, event handling, animasi, dan AJAX. jQuery membantu developer menulis kode lebih singkat dan konsisten di berbagai browser.

## Keunggulan jQuery
1. Sintaks lebih ringkas dibanding JavaScript murni untuk tugas DOM sederhana.
2. Mempermudah seleksi elemen HTML dengan selector berbasis CSS.
3. Menyediakan banyak utilitas siap pakai untuk event, efek, dan request data.
4. Cocok untuk pembelajaran dasar interaktivitas web sebelum beralih ke framework modern.

---

## Cara Menggunakan JavaScript dan jQuery (CDN)
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contoh JavaScript dan jQuery</title>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
  <h1 id="judul">Hello JavaScript & jQuery</h1>
  <button id="btnUbah">Ubah Teks</button>

  <script>
    document.getElementById("judul").style.color = "teal";

    $("#btnUbah").on("click", function () {
      $("#judul").text("Teks berhasil diubah dengan jQuery");
    });
  </script>
</body>
</html>
```

### Source code - html
```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Masjid Al-Hikmah - Mode Suci Ramadan</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body class="text-dark">
    <nav class="navbar navbar-expand-lg sticky-top py-3">
      <div class="container">
        <div class="navbar navbar-dark rounded-5 w-100 px-3 px-lg-4 mica-panel">
          <a class="navbar-brand fw-bold fs-4" href="#">Masjid Al-Hikmah</a>
          <button
            class="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navRamadan"
// Source Code lengkap dapat di akses "index.html"
```
🔗 [Klik di sini untuk membuka file `index.html`](./index.html)


Output:
<img src="./assets/task1.png" alt="preview" style="width:100%; max-width:900px;">

<img src="./assets/task2.png" alt="preview" style="width:100%; max-width:900px;">

# Penjelasan
Halaman website bertema Ramadan untuk Masjid Al-Hikmah pada versi ini memadukan Bootstrap 5.3 untuk struktur tampilan dan JavaScript serta jQuery untuk interaktivitas. Bagian layout seperti navbar sticky, section beranda, jadwal, program, dan donasi disusun menggunakan grid system dan komponen Bootstrap agar responsif di desktop maupun mobile. Pada sisi logika, JavaScript digunakan untuk mengatur perilaku dinamis seperti simulasi nominal THR acak, animasi hitung angka, perubahan status transfer, dan aksi tombol "Acak Lagi". jQuery membantu menyederhanakan proses seleksi elemen serta event handling, sehingga fitur seperti klik tombol dan pembaruan konten dapat ditulis lebih ringkas dan mudah dipelajari.