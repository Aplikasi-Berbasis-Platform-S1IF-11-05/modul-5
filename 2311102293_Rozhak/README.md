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

Bootstrap merupakan **framework CSS** yang digunakan untuk mempercepat proses pengembangan tampilan web dengan menyediakan kumpulan class siap pakai. Dengan Bootsrap, developer tidak perlu menulis styling dari nol karena sudah tersedia komponen seperti grid system, navbar, card, button, utilities, yang dapat langsung digunakan untuk membangun antarmuka yang konsisten dan responsif.

Salah satu konsep utama dalam Bootstrap adalah **grid system**, yaitu sistem layout berbasis baris (`row`) dan kolom (`col`) yang memudahkan pengaturan posisi elemen secara fleksibel dan otomatis menyesuaikan berbagai ukuran layar. Hal ini menjadikan tampilan web lebih responsif tanpa perlu penulisan CSS tambahan.

Bootstrap juga menyediakan berbagai **komponen UI** seperti navbar, card, button, dan alert yang dapat digunakan dengan hanya menambahkan class tertentu pada elemen HTML. Selain itu, terdapat **utility class** seperti pengaturan warna (`bd-*`, `text-*`), spacing (`m-*`, `p-*`), serta alignment yang membantu mempercepat proses styling tanpa perlu membuat file CSS terpisah.

Dalam penggunaannya, Bootstrap biasanya diintegrasikan melalui **CDN (Content Delivery Network)** sehingga dapat langsung digunakan tanpa instalasi. Dengan pendekatan ini, pengembangan halaman menjadi lebih cepat, terstruktur, dan efisien, terutama untuk membangun tampilan modern berbasis komponen.

## Tugas 4: Mode Suci (Edisi Ramadan)

### 1. Source Code

```html
...
    <!-- THR Modal -->
    <div class="modal fade" id="thrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark border-success border-4">
                
                <!-- Header -->
                <div class="modal-header bg-success border-success border-bottom-3">
                    <h5 class="modal-title fw-bolder text-dark">
                        <i class="bi bi-gift-fill me-2"></i>Kejutan Spesial!
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                
                <!-- Body -->
                <div class="modal-body text-center py-5">
                    <!-- Icon -->
                    <div class="mb-4">
                        <i class="bi bi-moon-stars text-warning" style="font-size: 3rem;"></i>
                    </div>
                    
                    <!-- Main Message -->
                    <h2 class="fw-bolder text-success mb-3" style="font-size: 2rem;">SELAMAT!</h2>
                    
                    <!-- Subtitle -->
                    <p class="lead text-light mb-3">Anda Mendapatkan</p>
                    
                    <!-- THR Card -->
                    <div class="card bg-success border-success border-2 mb-4 p-4">
                        <h3 class="fw-bolder text-dark mb-2">Tunjangan Hari Raya</h3>
                        <p class="text-dark small mb-0">Semoga membawa berkah untuk Anda dan keluarga</p>
                    </div>
                    
                    <!-- Doa -->
                    <p class="text-secondary fst-italic mb-0">
                        "Semoga setiap rezeki yang Anda terima menjadi berkah dan kebaikan"
                    </p>
                </div>
                
                <!-- Footer -->
                <div class="modal-footer bg-dark border-success border-top-3">
                    <button type="button" class="btn btn-success fw-bold" data-bs-dismiss="modal">
                        <i class="bi bi-check-circle me-2"></i>Terima Kasih
                    </button>
                </div>
            </div>
        </div>
    </div>
...
```

**Kode Lengkap:** [index.html](index.html)

### 2. Penjelasan

Fitur THR pada halaman ini dibuat dengan memanfaatkan komponen **Modal** dari Bootstrap. Tombol **Buka Surprise** sudah diatur menggunakan atribut `data-bs-toggle="modal"` dan `data-bs-target="#thrModal"`, sehingga ketika tombol tersebut diklik, modal akan muncul secara otomatis tanpa memerlukan JavaScript tambahan. Cara ini membuat interaksi menjadi lebih sederhana, langsung, dan tetap sesuai dengan kebutuhan tugas.

Modal yang digunakan juga disusun agar tetap selaras dengan tema Ramadan yang diterapkan pada halaman utama. Bagian `modal-dialog-centered` digunakan supaya posisi modal tampil di tengah layar, sedangkan `modal-content bg-dark border-success border-4` memberi kesan gelap namun tetap serasi dengan warna hijau sebagai aksen utama. Pada bagian header, terdapat judul kejutan dengan ikon hadiah, lalu pada bagian body ditampilkan pesan utama, yaitu **"Selamat, Anda mendapatkan THR!"**, beserta informasi pendukung yang memperkuat isi modal.

Selain itu, bagian footer pada modal menyediakan tombol **Terima Kasih** yang menggunakan atribut `data-bs-dismiss="modal"` untuk menutup modal secara langsung. Dengan susunan tersebut, fitur THR tidak hanya berfungsi sebagai kejutan, tetapi juga tetap memberikan pengalaman pengguna yang rapi, jelas, dan nyaman saat dijalankan.

### 3. Output

![Task 5 THR Modal Feature](assets/images/task5_thr_modal.png)

## Kesimpulan

Bootstrap memudahkan pembuatan halaman yang responsif dan interaktif melalui komponen siap pakai seperti navbar, card, button, dan modal, sehingga fitur THR dapat ditampilkan dengan cepat, rapi, dan sesuai tema Ramadan.