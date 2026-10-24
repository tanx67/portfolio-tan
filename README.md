# Portfolio — Muhammad Fathan Agniyan

Website portofolio pribadi yang menampilkan profil, perjalanan pendidikan, pengalaman profesional, keahlian teknis, sertifikat, dan informasi kontak. Portofolio ini dibuat sebagai halaman web statis dengan HTML, CSS, dan JavaScript.

## Fitur

- **Profil dan pengenalan diri** dengan fokus pada DevOps, Cloud Computing, dan Computer Networking.
- **Riwayat pendidikan dan pengalaman**, termasuk pengalaman magang di PT. Kazee Digital Indonesia.
- **Daftar keahlian teknis** di bidang jaringan komputer, administrasi server, monitoring infrastruktur, virtualisasi, dan container.
- **Sertifikat dan penghargaan** dengan tautan untuk melihat sertifikat terkait.
- **Unduh CV** langsung dari halaman utama.
- **Tampilan responsif** untuk perangkat desktop maupun mobile.
- **Light/dark theme toggle** dengan preferensi tema yang disimpan di browser.
- **Animasi antarmuka**, efek teks berganti, preloader, dan smooth scrolling.
- **Navigasi mobile** serta tombol untuk menyalin alamat email.

## Teknologi yang Digunakan

- **HTML5** — struktur dan konten halaman.
- **CSS3** — tata letak, styling, dan responsive design.
- **JavaScript** — interaksi dan perilaku antarmuka.
- **GSAP & ScrollTrigger** — animasi elemen dan animasi saat halaman digulir.
- **Lenis** — smooth scrolling.
- **Font Awesome 6** — ikon.
- **Google Fonts (Inter)** — tipografi.

GSAP, ScrollTrigger, Lenis, Font Awesome, dan Google Fonts dimuat melalui CDN, sehingga koneksi internet diperlukan agar seluruh efek dan aset eksternal dapat tampil dengan semestinya.

## Struktur Proyek

```text
PortofolioV2/
├── index.html              # Halaman utama portofolio
├── README.md               # Dokumentasi proyek
└── assets/
    ├── css/
    │   └── style.css       # Styling dan responsive layout
    ├── docs/
    │   └── CV - Fathan.png # CV yang dapat diunduh
    ├── img/
    │   └── tan.png         # Foto/profil dan favicon
    └── js/
        └── script.js       # Interaksi, animasi, tema, dan navigasi
```

## Menjalankan Secara Lokal

Proyek ini merupakan website statis, jadi tidak membutuhkan instalasi package atau proses build.

### Opsi 1 — Buka langsung

1. Unduh atau clone repository ini.
2. Buka folder proyek.
3. Buka file `index.html` menggunakan browser.

### Opsi 2 — Menggunakan Visual Studio Code

1. Buka folder proyek di Visual Studio Code.
2. Pasang ekstensi **Live Server** bila belum tersedia.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.

## Menjalankan dari GitHub

```bash
git clone https://github.com/tanx67/portfolio-tan.git
cd portfolio-tan
```

Setelah itu, buka `index.html` di browser atau jalankan menggunakan Live Server.

## Deployment

Website dapat dipublikasikan sebagai website statis, misalnya melalui **GitHub Pages**:

1. Push file proyek ke branch `main` pada repository GitHub.
2. Buka **Settings → Pages** di repository.
3. Pada bagian *Build and deployment*, pilih *Deploy from a branch*.
4. Pilih branch `main` dan folder `/ (root)`, lalu simpan.
5. Setelah proses deployment selesai, alamat website akan ditampilkan di halaman Pages tersebut.

## Kustomisasi

- Ubah teks profil, pengalaman, pendidikan, dan kontak di `index.html`.
- Ubah warna, tata letak, serta breakpoint responsif di `assets/css/style.css`.
- Ubah animasi, efek teks, navigasi, dan perilaku tombol di `assets/js/script.js`.
- Ganti gambar profil di `assets/img/` dan perbarui referensinya di `index.html` bila nama file berubah.
- Saat mengganti CV, pastikan tautan tombol **Download CV** di `index.html` mengarah ke file yang benar.
- Periksa kembali tautan sertifikat dan informasi kontak sebelum memublikasikan perubahan.

## Kontak

- **GitHub:** [tanx67](https://github.com/tanx67)
- **LinkedIn:** [Muhammad Fathan Agniyan](https://www.linkedin.com/in/muhammadfathanagniyan)

---

Dibuat oleh **Muhammad Fathan Agniyan** · 2026
