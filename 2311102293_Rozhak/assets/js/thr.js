/**
 * THRController - Mengelola Interaksi Modal THR (Tunjangan Hari Raya)
 * 
 * Menangani interaksi pengguna dengan tombol kejutan THR, mengelola tampilan modal,
 * animasi, dan umpan balik pengguna untuk pengalaman perayaan yang menyenangkan.
 * 
 * @class
 * @example
 * const controller = new THRController();
 */
class THRController {
    /**
     * Inisialisasi THR Controller
     * 
     * Menyiapkan referensi elemen DOM dan menginisialisasi event listeners.
     * Secara otomatis memanggil init() saat instantiasi.
     * 
     * @constructor
     */
    constructor() {
        this.thrButton = document.getElementById('thrButton');
        
        this.thrModal = new bootstrap.Modal(document.getElementById('thrModal'));
        
        this.giftIcon = document.getElementById('giftIcon');

        this.init();
    }

    /**
     * Inisialisasi event listeners
     * 
     * Melampirkan penanganan acara klik ke tombol THR untuk interaksi pengguna.
     * 
     * @private
     */
    init() {
        this.thrButton.addEventListener('click', () => this.handleClick());
    }

    /**
     * Menangani acara klik tombol THR
     * 
     * Memicu animasi penekanan tombol, menampilkan modal setelah penundaan,
     * dan memulai urutan animasi bounce ikon hadiah.
     * 
     * @private
     */
    handleClick() {
        this.thrButton.style.transform = 'scale(0.95)';

        setTimeout(() => {
            this.thrButton.style.transform = 'scale(1)';
            this.thrModal.show();
            this.animateGiftIcon();
        }, 100);
    }

    /**
     * Animasi ikon hadiah dengan efek bounce
     * 
     * Mereset status animasi dan memicu 3 siklus bounce.
     * Menggunakan trik reflow animasi untuk memulai ulang animasi yang sama.
     * 
     * @private
     */
    animateGiftIcon() {
        this.giftIcon.style.animation = 'none';

        setTimeout(() => {
            this.giftIcon.style.animation = 'bounce 0.6s ease-in-out 3';
        }, 10);
    }
}

/**
 * Inisialisasi controller saat DOM siap
 * 
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    new THRController();
});