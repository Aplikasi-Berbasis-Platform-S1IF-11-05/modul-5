<div align="center">
    <br />
    <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
    <br />
    <h3>MODUL 6 <br> JAVASCRIPT & JQUERY </h3>
    <br />
    <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
    <br />
    <br />
    <br />
    <h3>Disusun Oleh :</h3>
    <p>
        <strong>Rozhak</strong>
        <br>
        <strong>2311102293</strong>
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

JavaScript merupakan bahasa pemrograman yang digunakan untuk menambahkan interaktivitas pada halaman web. JavaScript berjalan di sisi client (browser) dan memungkinkan halaman web merespons aksi pengguna seperti klik, input, maupun perubahan elemen secara dinamis.

Dalam pengembangan web, JavaScript bekerja bersama HTML dan CSS dengan peran yang berbeda, yaitu HTML sebagai struktur, CSS sebagai pengendali logika serta interaksi. Dengan JavaScript, elemen HTML dapat dimanipulasi secara langsung melalui DOM (Document Object Model), seperti mengubah isi, atribut, maupun gaya satu elemen.

Salah satu konsep penting dalam JavaScript adalah **event handling**, yaitu kemampuan untuk menangani berbagai aksi pengguna seperti `click`, `submit`, dan `hover`. Event ini digunakan untuk menjalankan fungsi tertentu sehingga halaman web menjadi lebih responsif dan interaktif.

Selain JavaScript, terdapat library bernama **jQuery** yang dikembangkan oleh Resig pada tahun 2006 untuk menyederhanakan penulisan kode JavaScript. jQuery memungkinkan manipulasi elemen HTML dilakukan dengan sintaks yang lebih ringkas dan efisien.

Beberapa fitur utama jQuery meliputi kemampuan untuk melakukan manipulasi DOM dengan selector yang sederhana, menangani event dengan lebih mudah, mendukung teknologi AJAX untuk komunikasi data secara asynchronous, serta menyediakan berbagai animasi bawaan yang dapat digunakan untuk halaman web. Selain itu, jQuery memiliki ukuran file yang relatif ringan sehingga tetap efisien untuk digunakan dalam pengembangan aplikasi web.

Dengan kombinasi JavaScript dan jQuery, proses pengembangan halaman web menjadi lebih cepat, terstruktur, dan mampu menghasilkan interaksi yang lebih dinamis serta meningkatkan pengalaman pengguna.

## Tugas 4: Mode Suci (Edisi Ramadan)

### 1. Source Code

```javascript
class THRController {
    constructor() {
        this.thrButton = document.getElementById('thrButton');
        
        this.thrModal = new bootstrap.Modal(document.getElementById('thrModal'));
        
        this.giftIcon = document.getElementById('giftIcon');

        this.init();
    }

    init() {
        this.thrButton.addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        this.thrButton.style.transform = 'scale(0.95)';

        setTimeout(() => {
            this.thrButton.style.transform = 'scale(1)';
            this.thrModal.show();
            this.animateGiftIcon();
        }, 100);
    }

    animateGiftIcon() {
        this.giftIcon.style.animation = 'none';

        setTimeout(() => {
            this.giftIcon.style.animation = 'bounce 0.6s ease-in-out 3';
        }, 10);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new THRController();
});
```

**Kode Lengkap:** [assets/js/thr.js](assets/js/thr.js)

```html
...
    <!-- THR Modal -->
    <div class="modal fade" id="thrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                
                <!-- Header -->
                <div class="modal-header pt-4 pb-0">
                    ...
                </div>
                
                <!-- Body -->
                <div class="modal-body">
                    <!-- Crescent & Star -->
                    <div class="mb-4">
                        <i class="bi bi-moon-stars text-warning" style="font-size: 2.5rem;"></i>
                    </div>
                    
                    <!-- Main Blessing -->
                    <h2 class="fw-bolder mb-3 text-warning">SELAMAT</h2>
                    
                    <!-- Subtitle -->
                    <p class="text-light mb-1 fw-semibold" style="font-size: 1.1rem;">Anda Mendapatkan</p>
                    <p class="text-warning fw-bold mb-5 decoration-text">TUNJANGAN HARI RAYA</p>
                    
                    <!-- THR Gift Card -->
                    <div class="gift-card">
                        ...
                    </div>
                    
                    <!-- Doa/Blessing -->
                    <div class="doa-section">
                        ...
                    </div>
                    
                    <!-- Bottom -->
                    <p class="text-warning fw-bold decoration-text">✧ ✧ ✧</p>
                </div>
                
                <!-- Footer -->
                <div class="modal-footer pb-4">
                    ...
                </div>
            </div>
        </div>
    </div>
...
```

**Kode Lengkap:** [index.html](index.html)

### 2. Penjelasan

Kode JavaScript pada fitur ini menggunakan pendekatan **Object-Oriented Programming (OOP)** melalui class `THRController` untuk mengelola interaksi tombol THR dan modal secara terstruktur. Pada construktor, dilakukan inisialisasi elemen DOM seperti tombol (`thrButton`), modal (`thrModal`), dan ikon hadiah (`gidtIcon`) yang akan digunakan dalam proses interaksi.

Modal diinisialisasi menggunakan `new bootstrap.Model()` yang menggunakan API bawaan Bootstrap untuk mengontrol modal melalui JavaScript tanpa perlu atribut HTML tambahan. Hal ini memberikan fleksibilitas lebih dalam mengatur perilaku modal secara dinamis.

Event handling diterapkan pada method `init()` dengan menambahkan event listiner `click` pada tombol THR. Ketika tombol di klik, method `handleClick()` akan dijalankan untuk memberikan efek animasi skala (scale) sebagai feedback visual, kemudian menampilkan modal menggunakan method `.show()` dari Bootstrap.

Selain itu, terdapat method `animateGiftIcon()` yang berfungsi untuk memicu animasi pada ikon hadian dengan cara mereset dan mengaktifkan kembali properti CSS animation. Teknik ini digunakan agar animasi dapat diputar ulang setiap kali modal ditampilkan.

Terakhir, penggunaan `DomContentLoaded` memastikan bahwa seluruh elemen HTML telah dimuat sebelum inisialisasi class dijalankan, sehingga menghindari error akibat elemen yang belum tersedia di DOM.

### 3. Output

![Task 5 THR Modal Feature](assets/images/task5_thr_modal.png)

## Kesimpulan

JavaScript memungkinkan pembuatan fitur interaktif yang terstruktur dan dinamis melalui pengelolaan event, manipulasi DOM, serta integrasi dan komponen Bootstrap seperti modal.