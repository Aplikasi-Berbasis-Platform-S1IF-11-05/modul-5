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
    <strong>Rasyid Nafsyarie</strong>
    <br>
    <strong>2311102011</strong>
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
<div class="modal fade" id="thrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">

                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">🎉 Kejutan Ramadan!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <h3 class="fw-bold text-success">💸 Selamat!</h3>
                    <p class="fs-5">Anda mendapatkan THR!</p>
                    <p class="text-muted">Sejumlah Rp 5.000.000 </p>
                </div>

                <div class="modal-footer justify-content-center">
                    <button class="btn btn-success" data-bs-dismiss="modal">
                        Alhamdulillah 🙏
                    </button>
                </div>

            </div>
        </div>
    </div>
// Selebihnya dapat cek pada file "index.html"
```
🔗 [Klik di sini untuk membuka file `index.html`](index.html)

Output:
<img src="assets/home.png" alt="preview" style="width:100%; max-width:900px;">
<img src="assets/popup.png" alt="preview" style="width:100%; max-width:900px;">


## Penjelasan
Fitur “Cairin THR” dibuat menggunakan komponen modal Bootstrap yang akan muncul ketika tombol diklik dengan memanfaatkan atribut data-bs-toggle dan data-bs-target. Modal ini berfungsi sebagai pop-up interaktif yang menampilkan pesan hadiah sehingga meningkatkan pengalaman pengguna tanpa perlu menggunakan JavaScript tambahan.
