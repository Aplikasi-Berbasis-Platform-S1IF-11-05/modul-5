<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> Javascript & JQueary </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Fajar Ario Abdillah</strong>
    <br>
    <strong>2311102114</strong>
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

## 1. Pengertian Javascript

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi lebih interaktif dan dinamis. Bahasa ini biasanya dijalankan di sisi klien (client-side), yaitu langsung di browser pengguna, sehingga memungkinkan halaman web merespons tindakan pengguna seperti klik, input, dan navigasi tanpa perlu memuat ulang halaman.

JavaScript dapat digunakan untuk berbagai keperluan, seperti memvalidasi form, memanipulasi elemen HTML dan CSS melalui DOM (Document Object Model), serta membuat animasi atau efek visual. Selain itu, dengan perkembangan teknologi, JavaScript juga dapat digunakan di sisi server (server-side) menggunakan platform seperti Node.js.

---

## 2. Sejarah dan Perkembangan Javascript

JavaScript pertama kali dikembangkan oleh Brendan Eich pada tahun 1995 saat bekerja di Netscape Communications. Bahasa ini awalnya dibuat dalam waktu singkat (sekitar 10 hari) dengan nama Mocha, kemudian berubah menjadi LiveScript, dan akhirnya dinamakan JavaScript untuk mengikuti popularitas bahasa Java pada saat itu.

Seiring waktu, JavaScript terus berkembang dan distandarisasi melalui spesifikasi yang disebut ECMAScript (ES), yang dikelola oleh organisasi ECMA International. Versi-versi ECMAScript terus diperbarui untuk menambahkan fitur baru dan meningkatkan performa, seperti ES5, ES6 (ES2015), hingga versi terbaru yang digunakan saat ini.

Saat ini, JavaScript tidak hanya digunakan di sisi klien, tetapi juga di sisi server melalui teknologi seperti Node.js. Selain itu, banyak framework dan library modern seperti React, Angular, dan Vue.js yang dikembangkan untuk mempermudah pembuatan aplikasi web berbasis JavaScript.

---

## 3. Dasar-Dasar Javascipt

Dasar-dasar JavaScript mencakup konsep awal yang perlu dipahami untuk dapat menulis dan menjalankan kode JavaScript. Penulisan kode JavaScript dapat disisipkan langsung ke dalam file HTML atau dipisahkan dalam file khusus berekstensi .js.

Beberapa komponen dasar dalam JavaScript meliputi variabel, tipe data, operator, dan struktur kontrol. Variabel digunakan untuk menyimpan data, dengan tipe data seperti string, number, boolean, dan array. Operator digunakan untuk melakukan operasi terhadap data, seperti perhitungan atau perbandingan.

Selain itu, JavaScript juga memiliki struktur kontrol seperti if-else, switch, serta perulangan seperti for dan while yang digunakan untuk mengatur alur eksekusi program. Pemahaman dasar ini sangat penting sebagai fondasi dalam pengembangan aplikasi berbasis JavaScript.

---

## 4. Fungsi dalam Javascipt

Fungsi dalam JavaScript adalah sekumpulan kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan kembali (reusable). Fungsi membantu membuat program menjadi lebih terstruktur, efisien, dan mudah dipelihara.

Fungsi dapat menerima parameter sebagai input dan dapat mengembalikan nilai (return value) sebagai output. Dalam JavaScript, fungsi dapat dibuat menggunakan beberapa cara, seperti deklarasi fungsi (function declaration) dan ekspresi fungsi (function expression).

### Contoh Fungsi dalam Javascript:

```html
// Membuat fungsi
function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}

// Memanggil fungsi
let hasil = hitungLuasPersegi(5);

// Menampilkan hasil
console.log("Luas persegi adalah: " + hasil);
```

---

## 5. DOM (Document Object Modal)

DOM (Document Object Model) adalah representasi struktur dari dokumen HTML atau XML dalam bentuk objek yang dapat diakses dan dimanipulasi menggunakan JavaScript. Dengan DOM, setiap elemen dalam halaman web seperti teks, gambar, dan tombol dianggap sebagai objek yang dapat diubah secara dinamis.

JavaScript dapat menggunakan DOM untuk mengakses, mengubah, menambah, atau menghapus elemen HTML serta mengatur gaya (CSS) dari elemen tersebut. Hal ini memungkinkan halaman web menjadi lebih interaktif tanpa harus memuat ulang halaman.

### Contoh Manipulasi DOM:

```html
// Mengubah isi teks pada elemen dengan id "judul"
document.getElementById("judul").innerHTML = "Belajar JavaScript";

// Mengubah warna teks
document.getElementById("judul").style.color = "blue";
```

---

## 6. Event Handling dalam Javascript

Event handling dalam JavaScript adalah mekanisme untuk menangani berbagai kejadian (event) yang terjadi pada halaman web, seperti klik tombol, pergerakan mouse, penekanan keyboard, atau pengiriman form. Dengan adanya event handling, halaman web dapat merespons interaksi pengguna secara langsung.

JavaScript menyediakan berbagai cara untuk menangani event, seperti menggunakan atribut HTML, properti DOM, atau metode `addEventListener()`. Penggunaan event handling sangat penting untuk menciptakan aplikasi web yang interaktif dan responsif.

### Contoh Event Handling:

```html
// Menambahkan event click pada tombol
document.getElementById("tombol").addEventListener("click", function() {
    alert("Tombol telah diklik!");
});
```

---

## 7. Pengertian JQuery

jQuery adalah sebuah library JavaScript yang dirancang untuk menyederhanakan penulisan kode JavaScript, terutama dalam hal manipulasi DOM, penanganan event, serta pembuatan animasi. Dengan jQuery, penulisan kode menjadi lebih singkat, mudah dipahami, dan efisien dibandingkan dengan JavaScript murni.

jQuery bekerja dengan prinsip “write less, do more”, yang berarti pengembang dapat melakukan banyak hal dengan kode yang lebih sedikit. Library ini juga membantu mengatasi perbedaan antar browser (cross-browser compatibility), sehingga kode dapat berjalan dengan baik di berbagai jenis browser.

---

## 8. Keunggulan JQuery

jQuery memiliki berbagai keunggulan yang membuatnya banyak digunakan dalam pengembangan web. Salah satu keunggulan utamanya adalah penulisan kode yang lebih singkat dan sederhana dibandingkan JavaScript murni, sehingga memudahkan pengembang dalam membuat fungsi tertentu.

Selain itu, jQuery mendukung cross-browser compatibility, yang berarti kode yang ditulis dapat berjalan dengan baik di berbagai browser tanpa perlu penyesuaian tambahan. jQuery juga menyediakan banyak fungsi siap pakai untuk manipulasi DOM, penanganan event, serta efek dan animasi.

---

## 9. Sintaks Dasar JQuery

Sintaks dasar jQuery dirancang agar lebih sederhana dan mudah digunakan dibandingkan JavaScript murni. Struktur umum penulisan jQuery adalah:

```html
$(selector).action();
```

Di mana:
* `$(selector)` digunakan untuk memilih elemen HTML yang ingin dimanipulasi
* `.action()` adalah perintah atau aksi yang akan dilakukan terhadap elemen tersebut

jQuery menggunakan tanda `$` sebagai simbol utama untuk mengakses fungsi-fungsinya. Selector dalam jQuery mirip dengan CSS selector, seperti berdasarkan id, class, atau tag HTML.

### Contoh Sintaks JQuery:

```html
// Mengubah teks pada elemen dengan id "judul"
$("#judul").text("Belajar jQuery");

// Menyembunyikan elemen dengan class "konten"
$(".konten").hide();
```

---

## 10. Manipulasi Elemen dengan JQuery

Manipulasi elemen dengan jQuery adalah proses mengubah, menambah, atau menghapus elemen HTML pada halaman web secara dinamis. Dengan jQuery, manipulasi DOM menjadi lebih mudah dan efisien dibandingkan menggunakan JavaScript murni.

jQuery menyediakan berbagai metode untuk memanipulasi elemen, seperti mengubah isi teks atau HTML, mengatur atribut, serta mengubah gaya (CSS) dari suatu elemen. Selain itu, jQuery juga memungkinkan penambahan atau penghapusan elemen dengan mudah.

### Contoh Manipulasi Elemen:

```html
// Mengubah isi teks
$("#judul").text("Judul Baru");

// Mengubah HTML
$("#konten").html("<b>Konten Baru</b>");

// Mengubah CSS
$("#judul").css("color", "red");

// Menambahkan elemen
$("#list").append("<li>Item Baru</li>");
```

---

## 11. Event Handling dengan JQuery

Event handling dengan jQuery adalah cara untuk menangani berbagai kejadian (event) yang terjadi pada elemen HTML, seperti klik, hover, atau input dari pengguna. jQuery menyediakan metode yang lebih sederhana dan ringkas dibandingkan JavaScript murni dalam menangani event.

Beberapa metode yang sering digunakan dalam jQuery untuk event handling antara lain `.click()`, `.dblclick()`, `.hover()`, serta `.on()` yang lebih fleksibel untuk berbagai jenis event. Dengan jQuery, penulisan kode menjadi lebih singkat dan mudah dipahami.

### Contoh Event Handling dengan jQuery:

```html
// Event click pada tombol
$("#tombol").click(function() {
    alert("Tombol diklik!");
});

// Menggunakan metode .on()
$("#tombol").on("click", function() {
    console.log("Tombol ditekan");
});
```

---

# Tugas 5 — Fitur Cairin THR

## 1. Tambahkan menu navbar baru

Di bagian navbar, tambahkan item `THR` setelah menu `Pesan`:

```html
<li class="nav-item">
    <a class="nav-link" href="#thr">THR</a>
</li>
```

## 2. Tambahkan Section THR

Letakkan di bawah section `Pesan Ramadan` dan sebelum footer:

```html
<!-- Fitur Cairin THR -->
<section id="thr" class="py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card border-0 shadow-lg text-center">
                    <div class="card-body p-4 p-md-5">
                        <span class="badge text-bg-warning fs-6 mb-3">Task 5 - Fitur Cairin THR</span>
                        <h2 class="fw-bold text-success mb-3">Kejutan Spesial Ramadan</h2>
                        <p class="text-secondary mb-4">
                            Klik tombol di bawah ini untuk membuka kejutan spesial dan rasakan sensasi
                            seperti benar-benar mendapatkan THR.
                        </p>

                        <button type="button" class="btn btn-warning btn-lg fw-bold shadow px-5 py-3"
                            data-bs-toggle="modal" data-bs-target="#modalTHR">
                            🎁 Cairkan THR Sekarang
                        </button>

                        <div class="mt-4">
                            <span class="badge text-bg-success me-2">Berkah</span>
                            <span class="badge text-bg-info me-2">Kejutan</span>
                            <span class="badge text-bg-danger">Ramadan Special</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

## 3. Tambahkan modal Bootstrap

Letakkan sebelum tag `</body>`, tepat di atas script Bootstrap:

```html
<!-- Modal THR -->
<div class="modal fade" id="modalTHR" tabindex="-1" aria-labelledby="modalTHRLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4">

            <div class="modal-header bg-warning text-dark">
                <h5 class="modal-title fw-bold" id="modalTHRLabel">🎉 Kejutan Ramadan</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body text-center p-5">
                <div class="display-1 mb-3">💸</div>
                <h2 class="fw-bold text-success">Selamat, Anda mendapatkan THR!</h2>
                <p class="text-secondary mt-3">
                    Alhamdulillah, rezeki tambahan datang di bulan yang penuh berkah.
                    Semoga harimu semakin bahagia dan puasamu makin semangat.
                </p>

                <div class="alert alert-success mt-4 fw-semibold" role="alert">
                    THR berhasil dicairkan! Jangan lupa traktir diri sendiri secukupnya 😄
                </div>
            </div>

            <div class="modal-footer justify-content-center border-0 pb-4">
                <button type="button" class="btn btn-success px-4" data-bs-dismiss="modal">
                    Alhamdulillah
                </button>
                <button type="button" class="btn btn-outline-warning px-4" data-bs-dismiss="modal">
                    Tutup Dulu
                </button>
            </div>

        </div>
    </div>
</div>
```

> Kode lengkap tersedia di file `index.html`

## Output

![Bukti](assets/Screenshot%202026-04-07%20221153.png)