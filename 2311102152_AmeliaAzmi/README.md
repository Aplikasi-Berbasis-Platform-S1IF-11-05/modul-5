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

```


Output:




# Penjelasan
Program ini merupakan pengembangan dari halaman Ramadan sebelumnya dengan menambahkan fitur interaktif berupa tombol “Cairkan THR”. Fitur ini dirancang untuk memberikan pengalaman pengguna yang lebih menarik dan tidak hanya bersifat statis.

Pada bagian utama, terdapat tombol yang ketika ditekan akan memunculkan modal pop-up menggunakan komponen bawaan Bootstrap. Modal ini berisi informasi bahwa pengguna mendapatkan THR beserta jumlahnya.

Bootstrap digunakan secara maksimal dalam pembuatan tampilan, mulai dari navbar, button, card, hingga modal. Dengan memanfaatkan class bawaan, tampilan dapat dibuat rapi dan konsisten tanpa perlu banyak menggunakan CSS tambahan.

Ketika pengguna menekan tombol “Ambil Sekarang”, JavaScript akan dijalankan untuk menampilkan animasi uang jatuh. Efek ini dibuat dengan cara menambahkan elemen secara dinamis ke dalam halaman dan menggerakkannya ke bawah menggunakan interval.

Dengan adanya animasi tersebut, interaksi pengguna menjadi lebih hidup dan memberikan kesan seolah-olah benar-benar mendapatkan hadiah. Hal ini meningkatkan pengalaman pengguna secara keseluruhan.

Secara keseluruhan, fitur ini menunjukkan bagaimana kombinasi Bootstrap dan JavaScript dapat digunakan untuk menciptakan tampilan yang menarik sekaligus interaktif tanpa perlu menggunakan library tambahan lainnya.