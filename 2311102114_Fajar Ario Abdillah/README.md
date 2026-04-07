<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 5 <br> Bootstrap Modal & JavaScript Interaktif </h3>
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

## 1. Bootstrap Modal

Bootstrap adalah framework CSS yang digunakan untuk mempermudah pembuatan tampilan website secara cepat dan responsif tanpa harus menulis CSS dari nol. Bootstrap menyediakan berbagai class siap pakai seperti layout grid, navbar, button, card, form, dan komponen lainnya yang dapat langsung digunakan pada HTML. Dengan menggunakan Bootstrap, developer dapat membuat desain yang rapi, konsisten, dan menyesuaikan berbagai ukuran layar (mobile, tablet, desktop) hanya dengan memanfaatkan class bawaan tanpa perlu banyak styling manual.

---

## 2. Struktur Dasar Modal Bootstrap

```html
<!-- Trigger Button -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contohModal">
  Buka Modal
</button>

<!-- Modal -->
<div class="modal fade" id="contohModal" tabindex="-1" aria-labelledby="contohModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="contohModalLabel">Judul Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        Isi konten modal di sini.
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
        <button type="button" class="btn btn-primary">Simpan</button>
      </div>

    </div>
  </div>
</div>
```

### Atribut Penting Modal:

| Atribut | Fungsi |
|---------|--------|
| `data-bs-toggle="modal"` | Menandai elemen sebagai trigger pembuka modal |
| `data-bs-target="#id"` | Menentukan modal mana yang akan dibuka (berdasarkan ID) |
| `data-bs-dismiss="modal"` | Menutup modal saat elemen diklik |
| `modal-dialog-centered` | Membuat modal tampil di tengah layar secara vertikal |
| `modal fade` | Menambahkan efek transisi fade saat modal muncul |

---

## 3. Modal Events (JavaScript)

Bootstrap menyediakan event lifecycle untuk modal yang bisa dimanfaatkan dengan JavaScript:

```javascript
const myModal = document.getElementById('myModal');

// Dipanggil tepat sebelum modal ditampilkan
myModal.addEventListener('show.bs.modal', () => {
  console.log('Modal akan terbuka...');
});

// Dipanggil setelah modal sepenuhnya terlihat
myModal.addEventListener('shown.bs.modal', () => {
  console.log('Modal sudah terbuka!');
});

// Dipanggil setelah modal sepenuhnya tersembunyi
myModal.addEventListener('hidden.bs.modal', () => {
  console.log('Modal sudah tertutup!');
});
```

Event `show.bs.modal` sangat berguna untuk menginisialisasi konten dinamis (seperti animasi atau data) tepat sebelum modal muncul ke pengguna.

---

## 4. Animasi CSS untuk Interaktivitas

Pada tugas ini digunakan beberapa teknik CSS Animation untuk meningkatkan UX:

### Keyframe Animation

```css
/* Animasi bounce untuk elemen emoji */
@keyframes envelope-bounce {
  0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
  60%  { transform: scale(1.2) rotate(5deg);  opacity: 1; }
  100% { transform: scale(1) rotate(0deg);    opacity: 1; }
}

.elemen {
  animation: envelope-bounce 0.6s ease-out 0.3s both;
}
```

### Shimmer / Sweep Effect

```css
/* Efek kilatan cahaya pada tombol */
.btn-thr::before {
  content: '';
  position: absolute;
  top: -50%; left: -60%;
  width: 40%; height: 200%;
  background: rgba(255,255,255,0.35);
  transform: skewX(-20deg);
  animation: sweep 2.5s ease-in-out infinite;
}

@keyframes sweep {
  0%   { left: -60%;  }
  60%  { left: 120%;  }
  100% { left: 120%;  }
}
```

### Pulse Glow

```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 24px rgba(201,168,76,0.5); }
  50%       { box-shadow: 0 0 48px rgba(201,168,76,0.9); }
}
```

---

## 5. DOM Manipulation dengan JavaScript

### Membuat Elemen Dinamis (Confetti)

```javascript
function spawnConfetti() {
  const container = document.getElementById('confettiContainer');
  container.innerHTML = ''; // Reset

  for (let i = 0; i < 55; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    piece.style.animationDuration = (1.4 + Math.random() * 1.8) + 's';
    container.appendChild(piece);
  }
}
```

### Animasi Counter (Count-Up)

```javascript
function animateTHR() {
  const target = 1000000;
  let current = 0;
  const step = target / 60;

  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    thrAmountEl.textContent = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(Math.floor(current));
  }, 16); // ~60fps
}
```

`Intl.NumberFormat` adalah API bawaan JavaScript untuk memformat angka sesuai locale, termasuk format mata uang Indonesia (Rp).

---

## 6. Integrasi Modal Event dengan JavaScript

```javascript
const modalTHR = document.getElementById('modalTHR');

// Jalankan animasi setiap kali modal dibuka
modalTHR.addEventListener('show.bs.modal', () => {
  spawnConfetti();
  animateTHR();
});
```

Dengan memanfaatkan event `show.bs.modal`, animasi confetti dan counter THR akan selalu dijalankan ulang setiap kali modal dibuka — memberikan pengalaman yang konsisten dan interaktif.

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