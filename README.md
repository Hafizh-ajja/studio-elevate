# Studio Ruas — Company Profile (React + Vite)

Website company profile untuk studio desain fiktif "Studio Ruas", dibangun dengan
React + Vite. Semua konten (teks, warna, data karya/klien) dipisah dalam
`src/data/content.js` supaya gampang diganti tanpa menyentuh komponen.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Build untuk produksi:

```bash
npm run build
npm run preview
```

## Struktur folder

```
src/
  data/
    content.js        # semua teks & data (nav, layanan, karya, klien, kontak, dst)
  hooks/
    useReveal.js         # animasi muncul saat elemen di-scroll ke viewport
    useCountUp.js        # animasi angka menghitung naik
    useScrollProgress.js # persentase scroll halaman
    useActiveSection.js  # scrollspy — tahu section mana yang sedang dilihat
  components/
    ScrollProgress.jsx   # bar progress scroll di atas layar
    Header.jsx           # navigasi + indikator aktif + menu mobile
    Hero.jsx              # bagian hero (headline, ilustrasi, statistik)
    About.jsx
    Services.jsx          # accordion layanan
    Work.jsx               # grid karya (pakai WorkTile)
    Process.jsx            # tahapan kerja (pakai ProcessBar)
    Clients.jsx             # marquee daftar klien
    Contact.jsx
    Footer.jsx
    Reveal.jsx              # wrapper reusable untuk animasi scroll-reveal
    SplitHeadline.jsx        # animasi headline muncul kata per kata
    SegmentMark.jsx           # ilustrasi SVG "ruas" bambu
    StatBlock.jsx              # satu angka statistik + count-up
    ProcessBar.jsx              # garis progres berwarna
    WorkTile.jsx                 # satu kartu karya + efek tilt 3D
    Magnetic.jsx                  # wrapper efek "magnetic" untuk tombol/link
  App.jsx                # menyusun semua section
  main.jsx               # entry point React
  index.css              # semua styling, warna, dan animasi
```

## Tentang komentar di kode

Semua file `.jsx`, `.js`, `.css`, dan `.html` sudah diberi komentar
yang menjelaskan kegunaan tiap bagian kode — supaya gampang dipahami
walau baru pertama kali buka proyeknya.

Satu file yang **tidak** diberi komentar adalah `package.json` — format
JSON murni tidak mendukung komentar sama sekali. Penjelasan singkat
isinya:
- `scripts.dev` → menjalankan server pengembangan (`npm run dev`)
- `scripts.build` → build untuk production (`npm run build`)
- `scripts.preview` → mencoba hasil build secara lokal (`npm run preview`)
- `dependencies` → library yang dibutuhkan saat aplikasi berjalan (React)
- `devDependencies` → alat yang hanya dibutuhkan saat development (Vite)

## Mengganti konten

Cukup edit `src/data/content.js` — ubah nama studio, layanan, daftar karya,
klien, tahapan kerja, atau info kontak. Semua komponen otomatis mengikuti.

## Mengganti warna

Warna diatur lewat CSS custom properties di `src/index.css`, di dalam
`.vr-root`:

```css
--ink: #15171a;      /* warna dasar gelap */
--paper: #f4f0e6;    /* warna dasar terang */
--coral: #ff6b4a;
--gold: #ffc145;
--teal: #2ec4b6;
--violet: #8c6fff;
```

## Aksesibilitas

Semua animasi otomatis nonaktif jika perangkat pengguna mengaktifkan
"reduce motion" (lihat media query `prefers-reduced-motion` di `index.css`).
