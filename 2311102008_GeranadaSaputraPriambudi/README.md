<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> BOOTSTRAP </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Geranada Saputra Priambudi</strong>
    <br>
    <strong>2311102008</strong>
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

## Bootstrap
1. Pengertian Bootstrap

Bootstrap adalah framework CSS yang digunakan untuk mempermudah pengembangan tampilan (front-end) website agar lebih cepat, responsif, dan konsisten. Bootstrap menyediakan kumpulan class siap pakai untuk desain layout, komponen UI, serta styling tanpa harus menulis CSS dari nol.

2. Fungsi dan Kegunaan Bootstrap

Bootstrap digunakan untuk:

Membuat tampilan website yang responsif (menyesuaikan berbagai ukuran layar)
Mempercepat proses desain antarmuka (UI)
Menyediakan komponen siap pakai seperti navbar, card, button, modal, dll
Menjaga konsistensi desain antar halaman
3. Kelebihan Bootstrap

Beberapa keunggulan Bootstrap antara lain:

Mudah digunakan, bahkan untuk pemula
Responsive grid system (12 kolom)
Banyak komponen UI siap pakai
Dokumentasi lengkap
Mendukung berbagai browser (cross-browser)
4. Sistem Grid pada Bootstrap

Bootstrap menggunakan sistem grid berbasis 12 kolom yang memungkinkan developer mengatur layout dengan mudah. Grid ini bersifat fleksibel dan responsif.


### Source code - html
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mode Suci: Ramadan Kareem</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
    <style>
        /* Floating Button Style */
        .btn-surprise {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(45deg, #ffca2c, #ff9800);
            border: none;
            box-shadow: 0 10px 20px rgba(255, 152, 0, 0.4);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            animation: pulse-gold 2s infinite;
        }
        .btn-surprise:hover {
            transform: scale(1.1) rotate(15deg);
            box-shadow: 0 15px 30px rgba(255, 152, 0, 0.6);

    <!-- Selebihnya dapat cek pada file "index.html" -->
```
🔗 [Klik di sini untuk membuka file `index.html`](index.html)

Output:
<img src="popup.png" alt="preview" style="width:100%; max-width:900px;">
<img src="tombol.png" alt="preview" style="width:100%; max-width:900px;">

## Penjelasan
Membuat website landing page Ramadan interaktif yang tidak hanya menampilkan amalan harian dan jadwal imsakiyah, tetapi juga memiliki fitur tambahan berupa tombol “Cairin THR” yang menampilkan modal pop-up sebagai elemen interaktif dan hiburan bagi pengguna.