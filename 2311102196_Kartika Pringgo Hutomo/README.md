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
    <strong>Kartika Pringgo Hutomo</strong>
    <br>
    <strong>2311102196</strong>
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

<p align="justify">
Berikut **landasan teori dalam bentuk paragraf**:

Landasan teori pada pengembangan fitur “Cairin THR” dalam halaman Ramadan ini berfokus pada pemanfaatan framework Bootstrap untuk menciptakan antarmuka yang interaktif tanpa perlu menulis kode CSS maupun JavaScript secara manual. Bootstrap menyediakan berbagai komponen siap pakai, salah satunya adalah modal, yaitu elemen pop-up yang digunakan untuk menampilkan informasi penting tanpa harus berpindah halaman. Modal dalam Bootstrap bekerja dengan memanfaatkan atribut data seperti data-bs-toggle dan data-bs-target yang secara otomatis terhubung dengan sistem JavaScript bawaan Bootstrap, sehingga interaksi seperti membuka dan menutup pop-up dapat berjalan dengan mudah.

Selain itu, Bootstrap juga menyediakan berbagai class utility untuk meningkatkan tampilan dan pengalaman pengguna (UI/UX), seperti penggunaan warna, tipografi, layout, serta efek visual. Dalam fitur ini, tombol digunakan sebagai trigger untuk memunculkan modal, sementara komponen modal dirancang dengan struktur tertentu seperti modal-dialog, modal-content, modal-header, modal-body, dan modal-footer agar tampil rapi dan terorganisir. Penggunaan class seperti modal-dialog-centered memberikan efek posisi pop-up berada di tengah layar sehingga lebih fokus dan menarik perhatian pengguna.

Konsep UI/UX juga menjadi bagian penting dalam fitur ini, di mana interaksi dibuat sederhana namun memberikan efek kejutan (surprise effect) ketika tombol diklik. Hal ini bertujuan untuk meningkatkan pengalaman pengguna agar terasa lebih menyenangkan dan interaktif. Dengan memanfaatkan Bootstrap secara maksimal, fitur ini dapat diimplementasikan secara efisien, responsif, dan konsisten di berbagai perangkat tanpa perlu pengembangan tambahan yang kompleks. Secara keseluruhan, penggunaan komponen modal dalam Bootstrap menjadi solusi praktis untuk menghadirkan fitur interaktif yang menarik dalam halaman web berbasis framework.

</p>

# Tugas 5 - Fitur Cairin THR
## 1. Source code index.html
```
<!-- 2311102195
Kartika Pringgo Hutomo
S1IF-11-05 -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ramadan Mode Suci</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-light">

  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="display-4 text-warning">Ramadan Kareem 🌙</h1>
      <p class="lead">Semoga ibadah kita diterima dan hati kita semakin bersih</p>
      <!-- Tombol THR -->
      <button class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#thrModal">
        Cairin THR 💸
      </button>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card text-center shadow-lg">
          <div class="card-body">
            <h5 class="card-title text-success">Pesan Spesial</h5>
            <p class="card-text">
              Selamat menjalankan ibadah puasa 🤍<br>
              Semoga kita selalu diberi kesehatan, keberkahan,
              dan dipertemukan dengan kemenangan di hari yang fitri.
            </p>
            <a href="#" class="btn btn-warning">Kirim Doa ✨</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5 text-center">
      <div class="col-md-4">
        <div class="p-3 border rounded">
          <h5>Sahur</h5>
          <p>Jangan lupa niat dan makan yang cukup</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 border rounded">
          <h5>Puasa</h5>
          <p>Jaga hati, lisan, dan perbuatan</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 border rounded">
          <h5>Berbuka</h5>
          <p>Awali dengan yang manis dan penuh syukur</p>
        </div>
      </div>
    </div>

    <footer class="text-center mt-5">
      <p class="text-secondary">Dibuat dalam Mode Suci 🕌</p>
    </footer>
  </div>

  <!-- Modal THR -->
  <div class="modal fade" id="thrModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-center">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title">🎉 Kejutan!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <h3 class="text-success">💸 Selamat!</h3>
          <p class="fs-5">Anda mendapatkan THR!</p>
          <h2 class="text-warning" id="nominalTHR">Rp 0</h2>
          <p class="text-muted">Semoga berkah dan jangan lupa traktir 😆</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Alhamdulillah 🤲</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    const thrModal = document.getElementById('thrModal');
    thrModal.addEventListener('show.bs.modal', function () {
      const nominal = Math.floor(Math.random() * 900000 + 100000);
      document.getElementById('nominalTHR').innerText = 'Rp ' + nominal.toLocaleString('id-ID');
    });
  </script>
</body>
</html>

```
**Source Code Lengkap:** [index.html](./index.html)

# Output
![alt text](<image.png>)


# Penjelasan
<p align="justify">
Berikut **penjelasan kode fitur “Cairin THR” dalam bentuk paragraf**:

Pada penambahan fitur “Cairin THR”, digunakan komponen modal dari Bootstrap yang berfungsi untuk menampilkan pop-up saat tombol diklik. Tombol dengan teks “Cairin THR” memiliki atribut data bs toggle modal dan data bs target yang mengarah ke id modal, sehingga ketika tombol ditekan, Bootstrap secara otomatis akan menampilkan modal tanpa perlu pengaturan manual yang rumit. Modal tersebut memiliki struktur yang terdiri dari modal dialog, modal content, modal header, modal body, dan modal footer yang digunakan untuk mengatur tampilan agar rapi dan terstruktur.

Di dalam bagian modal body, ditambahkan elemen untuk menampilkan nominal THR dengan id tertentu, sehingga nilainya dapat diubah secara dinamis. Awalnya, nilai nominal ditampilkan sebagai Rp 0 sebagai placeholder. Selanjutnya, digunakan script JavaScript yang memanfaatkan event show bs modal, yaitu event yang dijalankan saat modal akan ditampilkan. Pada event ini, sistem akan menghasilkan angka acak menggunakan fungsi Math random yang dikombinasikan dengan Math floor untuk menghasilkan bilangan bulat dalam rentang tertentu, yaitu antara 100 ribu hingga 1 juta.

Nilai acak tersebut kemudian diformat ke dalam bentuk mata uang Rupiah menggunakan fungsi toLocaleString dengan parameter id ID agar sesuai dengan format Indonesia. Setelah itu, nilai tersebut dimasukkan ke dalam elemen HTML yang memiliki id nominalTHR menggunakan innerText, sehingga setiap kali modal dibuka, nominal THR akan berubah secara otomatis. Dengan adanya fitur ini, pengalaman pengguna menjadi lebih interaktif dan menarik karena memberikan efek kejutan berupa nominal THR yang berbeda setiap kali tombol diklik.

</p>