<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br> APLIKASI BERBASIS PLATFORM </h1>
  <br />
  <h3>MODUL 3 <br> JAVASCRIPT & JQUERY </h3>
  <br />
  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/724a3291-bcf9-448d-a395-3886a8659d79" />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Arsya Fathiha Rahman</strong>
    <br>
    <strong>2311102152</strong>
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
## 📚 Dasar Teori

### JavaScript
JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif.

Di fitur ini digunakan untuk:
- Mengatur perpindahan tampilan (hero → loading → result)
- Mengatur waktu dengan `setTimeout`
- Menangani event klik tombol
- Membuat animasi sederhana (efek uang jatuh)

---

### jQuery
jQuery adalah library dari JavaScript yang mempermudah penulisan kode.

Kelebihan:
- Lebih simpel
- Mudah manipulasi HTML
- Mudah buat animasi

Contoh:
- `hide()` → sembunyikan elemen
- `show()` → tampilkan elemen
- `click()` → event klik

Catatan: di project ini lebih banyak pakai JavaScript biasa.

---

### HTML, CSS, JavaScript
- HTML → struktur
- CSS → tampilan/design
- JavaScript → interaksi


---

#

# Tugas 5
## 1. Source Kode html
```
//2311102152
//Arsya Fathiha Rahman

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ramadan THR Aesthetic</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<style>
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #d0616e, #f399a5);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* ORNAMEN */
.moon {
    position: absolute;
    top: 60px;
    right: 80px;
    font-size: 60px;
    opacity: 0.8;
}

.star {
    position: absolute;
    color: #fff5;
    animation: blink 2s infinite alternate;
}

@keyframes blink {
    from { opacity: 0.3; }
    to { opacity: 1; }
}

/* HERO */
.hero {
    text-align: center;
    max-width: 600px;
    padding: 40px;
    border-radius: 25px;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    animation: fadeIn 1.2s ease;
}

.hero-title {
    font-size: 38px;
    font-weight: bold;
    color: #fff;
}

.hero-subtitle {
    margin-top: 15px;
    color: #fff;
    opacity: 0.9;
    line-height: 1.6;
}

.hero-badge {
    margin-top: 20px;
    display: inline-block;
    padding: 8px 18px;
    border-radius: 50px;
    background: rgba(255,255,255,0.3);
    color: #fff;
    font-size: 14px;
}

/* BUTTON */
.thr-btn {
    margin-top: 25px;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    border: none;
    padding: 15px 35px;
    border-radius: 50px;
    font-weight: 600;
    color: #7a2e3a;
    transition: 0.3s;
}

.thr-btn:hover {
    transform: scale(1.07);
}

/* CARD */
.card-box {
    margin-top: 20px;
    background: rgba(255,255,255,0.3);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
}

/* LOADER */
.loader {
    width: 60px;
    height: 60px;
    border: 5px solid rgba(255,255,255,0.4);
    border-top: 5px solid #ff6f91;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

@keyframes spin {
    100% { transform: rotate(360deg); }
}

/* RESULT */
.success-icon {
    font-size: 60px;
}

/* MONEY */
.money {
    position: fixed;
    top: -50px;
    font-size: 22px;
    animation: fall linear forwards;
}

@keyframes fall {
    to {
        transform: translateY(110vh);
    }
}

/* HIDDEN */
.hidden {
    display: none;
}

/* FADE */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
</head>

<body>

<!-- ORNAMEN -->
<div class="moon">🌙</div>

<div class="star" style="top:20%; left:15%;">✨</div>
<div class="star" style="top:30%; left:70%;">✨</div>
<div class="star" style="top:70%; left:20%;">✨</div>
<div class="star" style="top:60%; left:80%;">✨</div>

<!-- HERO -->
<div id="hero" class="hero">
    <h1 class="hero-title">Ramadan Kareem 🌙</h1>
    <p class="hero-subtitle">
        Semoga Ramadan ini membawa kebahagiaan dan keberkahan untukmu 💖  
        Ada hadiah spesial yang sudah menunggumu hari ini ✨
    </p>

    <div class="hero-badge">🎁 THR Special Gift</div>

    <button class="thr-btn" onclick="startProcess()">
        🎀 Cairkan THR
    </button>
</div>

<!-- LOADING -->
<div id="loading" class="card-box hidden">
    <h5>Memproses hadiahmu...</h5>
    <div class="loader"></div>
    <p>Sedang mengambil THR dari server Ramadan 💕</p>
</div>

<!-- RESULT -->
<div id="result" class="card-box hidden">
    <div class="success-icon">🎉</div>
    <h4>Yay! Kamu Dapet THR 💸</h4>
    <p>Rp 250.000 sudah siap diambil 💖</p>

    <button class="btn btn-light mt-3" onclick="takeMoney()">
        Ambil Sekarang
    </button>
</div>

<script>
function startProcess() {
    document.getElementById("hero").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");
    }, 2500);
}

function takeMoney() {
    for (let i = 0; i < 25; i++) {
        let money = document.createElement("div");
        money.classList.add("money");
        money.innerHTML = "💸";

        money.style.left = Math.random() * 100 + "vw";
        money.style.animationDuration = (Math.random() * 2 + 2) + "s";

        document.body.appendChild(money);

        setTimeout(() => {
            money.remove();
        }, 4000);
    }
}
</script>

</body>
</html>

```


Output:

# Penjelasan
# 🎁 Fitur Cairin THR - Ramadan Web

## 📌 Deskripsi
Fitur **Cairin THR** adalah fitur interaktif pada website bertema Ramadan yang dibuat untuk memberikan pengalaman menarik kepada pengguna.

Pengguna dapat menekan tombol untuk mencairkan THR, lalu sistem akan menampilkan proses hingga akhirnya muncul hasil bahwa pengguna mendapatkan THR. Fitur ini dibuat agar tidak terlihat instan, tapi memiliki alur seperti aplikasi digital modern.

---

## ⚙️ Cara Kerja
Alur fitur ini:

1. User melihat tampilan awal (banner/hero Ramadan)
2. Klik tombol **Cairkan THR**
3. Muncul proses loading (simulasi verifikasi)
4. Setelah beberapa detik, muncul hasil THR
5. User klik **Ambil THR**
6. Muncul animasi efek uang

