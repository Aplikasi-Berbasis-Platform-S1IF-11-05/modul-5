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
    <strong>Verdi Pangestu</strong>
    <br>
    <strong>2311102100</strong>
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

Bootstrap adalah framework front-end populer yang digunakan untuk membuat tampilan website secara cepat, responsif, dan konsisten tanpa harus menulis banyak CSS dari nol. Bootstrap menyediakan berbagai komponen siap pakai seperti navbar, tombol, card, grid system, dan form yang bisa langsung digunakan hanya dengan menambahkan class tertentu pada HTML. Selain itu, Bootstrap juga memiliki sistem grid berbasis flexbox yang memudahkan developer dalam mengatur layout agar tampil rapi di berbagai ukuran layar, mulai dari desktop hingga smartphone.

Keunggulan utama Bootstrap adalah kemudahan penggunaan dan dokumentasi yang lengkap, sehingga sangat cocok untuk pemula maupun developer profesional. Dengan bantuan JavaScript bawaan, Bootstrap juga mendukung fitur interaktif seperti modal, dropdown, carousel, dan tabs tanpa perlu coding yang rumit. Selain mempercepat proses pengembangan, Bootstrap membantu menjaga konsistensi desain dan membuat website terlihat modern, menarik, serta responsif di berbagai perangkat.

# Tugas 5 — Fitur Cairin THR

## Deskripsi

Pada tugas ini, fitur **"Cairin THR"** ditambahkan ke halaman Ramadan dari Tugas 4. Fitur ini berupa tombol khusus yang saat diklik akan menampilkan modal pop-up dengan konten kejutan berupa animasi THR yang interaktif dan menarik.

## Code

```html
<!-- 2311102100-Verdi Pangestu -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramadan Hub - Pure Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        /* Animasi Tombol Surprise */
        @keyframes pulse-yellow {
            0% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(255, 193, 7, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0); }
        }
        .btn-surprise { animation: pulse-yellow 2s infinite; }
    </style>
</head>
<body class="bg-black min-vh-100 d-flex flex-column text-light">

    <nav class="navbar navbar-expand-lg navbar-dark py-4 container">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold fs-4 tracking-wider text-info" href="#">
                <i class="bi bi-moon-stars-fill me-2"></i>RAMADAN<span class="text-light opacity-75">HUB</span>
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-lg-4 text-center">
                    <li class="nav-item"><a class="nav-link active fw-semibold" href="#">BERANDA</a></li>
                    <li class="nav-item"><a class="nav-link text-white-50" href="#">IMSAYKIYAH</a></li>
                    <li class="nav-item"><a class="nav-link text-white-50" href="#">MUTABAAH</a></li>
                    <li class="nav-item"><a class="nav-link btn btn-primary rounded-pill px-4 ms-lg-2 text-info" href="#">DONASI</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container my-auto py-5">
        <div class="row align-items-center g-5">
            <div class="col-lg-6 text-center text-lg-start">
                <h2 class="display-6 fw-light mb-0 text-white-50">Sambut Bulan Suci</h2>
                <h1 class="display-1 fw-bold mb-0">Ramadan</h1>
                <h1 class="display-3 fw-bold text-info mb-4">Kareem 1447 H</h1>
                
                <div class="bg-info bg-opacity-10 border-start border-info border-4 p-4 mb-5 rounded-end">
                    <p class="lead text-white-75 mb-0 fs-6 italic">
                        "Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa." (QS. Al-Baqarah: 183)
                    </p>
                </div>

                <div class="row g-3 mb-5">
                    <div class="col-6 col-md-4">
                        <div class="p-4 rounded-4 text-center border border-info border-opacity-25 bg-white bg-opacity-10 shadow-sm">
                            <i class="bi bi-clock-history text-info fs-2"></i>
                            <p class="small mb-0 mt-3 fw-medium">Jadwal Shalat</p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4">
                        <div class="p-4 rounded-4 text-center border border-info border-opacity-25 bg-white bg-opacity-10 shadow-sm">
                            <i class="bi bi-book text-info fs-2"></i>
                            <p class="small mb-0 mt-3 fw-medium">Kajian Harian</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="p-4 rounded-4 text-center border border-info border-opacity-25 bg-white bg-opacity-10 shadow-sm">
                            <i class="bi bi-heart-pulse text-info fs-2"></i>
                            <p class="small mb-0 mt-3 fw-medium">Info Zakat</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                    <a href="#" class="btn btn-info btn-lg rounded-pill px-5 py-3 fw-bold shadow">JADWAL IMSAK</a>
                    <button type="button" class="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold btn-surprise text-dark" onclick="gasTHR()">
                        <i class="bi bi-gift-fill me-2"></i>SURPRISE THR!
                    </button>
                </div>
            </div>

            <div class="col-lg-6 position-relative text-center">
                <div class="position-absolute top-0 end-0 mt-n5 me-5 opacity-25 d-none d-lg-block">
                    <i class="bi bi-stars display-1 text-info"></i>
                </div>
                <div class="position-relative py-5">
                    <div class="position-absolute top-50 start-50 translate-middle rounded-circle bg-info opacity-10 shadow-lg" style="width: 300px; height: 300px; filter: blur(80px);"></div>
                    <i class="bi bi-mosque text-info opacity-75 position-relative" style="font-size: 14rem; z-index: 2;"></i>
                    <div class="mt-5">
                        <span class="badge rounded-pill bg-info bg-opacity-25 text-info px-4 py-3 border border-info border-opacity-25">
                            <i class="bi bi-geo-alt-fill me-2"></i>Waktu Indonesia Barat (WIB)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <div class="modal fade" id="modalTHR" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark border-info border-opacity-50 rounded-4 text-white shadow-lg">
                <div class="modal-body text-center p-5">
                    <i class="bi bi-cash-stack text-warning display-1 mb-4"></i>
                    <h2 class="fw-bold mb-3">MABRUK! 🎉</h2>
                    <h4 class="text-info mb-4">Selamat, Anda mendapatkan THR!</h4>
                    <p class="opacity-75 mb-4">Semoga berkah Ramadan melancarkan rezekimu. Amin!</p>
                    <button type="button" class="btn btn-info rounded-pill px-5 fw-bold" data-bs-dismiss="modal">ALHAMDULILLAH!</button>
                </div>
            </div>
        </div>
    </div>

    <footer class="py-5 mt-auto bg-dark bg-opacity-25 border-top border-secondary border-opacity-10">
        <div class="container text-center text-md-start">
            <div class="row align-items-center">
                <div class="col-md-6 d-flex justify-content-center justify-content-md-start gap-4 mb-4 mb-md-0">
                    <a href="#" class="text-info opacity-75 fs-4"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-info opacity-75 fs-4"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="text-info opacity-75 fs-4"><i class="bi bi-youtube"></i></a>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <p class="small text-white-50 mb-0">Ramadan Hub &copy; 2026. Semoga keberkahan menyertai kita semua.</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        function gasTHR() {
            var modal = new bootstrap.Modal(document.getElementById('modalTHR'));
            modal.show();
            var duration = 3 * 1000;
            var animationEnd = Date.now() + duration;
            (function frame() {
                var timeLeft = animationEnd - Date.now();
                if (timeLeft <= 0) return;
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#0dcaf0', '#ffc107']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#0dcaf0', '#ffc107']
                });
                requestAnimationFrame(frame);
            }());
        }
    </script>
</body>
</html>
```

## Output

<img width="1917" height="965" alt="Cuplikan layar 2026-04-07 121409" src="https://github.com/user-attachments/assets/252ccd80-d339-44cc-881f-3b3927bafcb4" />
