// =============================================================
// SATU-SATUNYA TEMPAT UNTUK MENGUBAH ISI/TEKS WEBSITE.
// Semua komponen mengambil datanya dari file ini — jadi kalau mau
// ganti nama layanan, tambah karya baru, ganti info kontak, dll,
// cukup edit di sini, tidak perlu sentuh file komponen (.jsx).
//
// Nilai seperti "var(--coral)" merujuk ke CSS variable warna yang
// didefinisikan di src/index.css bagian .vr-root — jadi warna tetap
// konsisten dan bisa diganti dari satu tempat (index.css).
// =============================================================

// Daftar menu navigasi di Header. `id` harus sama persis dengan
// atribut id={...} di elemen <section> tujuan (lihat komponen section).
export const navItems = [
  { id: "tentang", label: "Tentang", color: "var(--coral)" },
  { id: "layanan", label: "Layanan", color: "var(--gold)" },
  { id: "karya", label: "Karya", color: "var(--teal)" },
  { id: "proses", label: "Proses", color: "var(--violet)" },
  { id: "kontak", label: "Kontak", color: "var(--coral)" },
];

// Empat "pilar" layanan yang ditampilkan sebagai chip kecil di Hero.
export const pillars = [
  { key: "identitas", label: "Identitas Merek", color: "var(--coral)" },
  { key: "editorial", label: "Desain Editorial", color: "var(--gold)" },
  { key: "kemasan", label: "Kemasan", color: "var(--teal)" },
  { key: "digital", label: "Digital & Web", color: "var(--violet)" },
];

// Data lengkap untuk section Layanan (accordion yang bisa dibuka-tutup).
export const services = [
  {
    key: "identitas",
    name: "Identitas Merek",
    color: "var(--coral)",
    desc: "Logo, sistem warna, tipografi, dan panduan penggunaan yang bisa dipakai konsisten di semua media.",
  },
  {
    key: "editorial",
    name: "Desain Editorial",
    color: "var(--gold)",
    desc: "Buku, laporan tahunan, dan majalah — tata letak yang memandu mata pembaca, bukan sekadar menata halaman.",
  },
  {
    key: "kemasan",
    name: "Kemasan",
    color: "var(--teal)",
    desc: "Dari struktur dus sampai label kecil, tetap kuat bicara di rak yang ramai maupun di layar ponsel.",
  },
  {
    key: "digital",
    name: "Digital & Web",
    color: "var(--violet)",
    desc: "Situs dan aset digital yang menerjemahkan identitas visual ke layar tanpa kehilangan karakter.",
  },
];

// Contoh karya/portofolio yang ditampilkan sebagai kartu di section Work.
// `color` dipakai sebagai warna gradasi latar kartu (lihat WorkTile.jsx).
export const work = [
  { name: "Kedai Serat", cat: "Identitas merek", year: "2023", color: "var(--coral)" },
  { name: "Arsip Nusa", cat: "Editorial", year: "2022", color: "var(--gold)" },
  { name: "Loka Studio", cat: "Identitas & web", year: "2024", color: "var(--teal)" },
  { name: "Rimba Kertas", cat: "Kemasan", year: "2021", color: "var(--violet)" },
  { name: "Muara Fest", cat: "Identitas acara", year: "2023", color: "var(--coral)" },
  { name: "Tenun Ambo", cat: "Kemasan & label", year: "2020", color: "var(--gold)" },
];

// Empat tahapan kerja yang ditampilkan di section Process,
// termasuk warna untuk garis progres (ProcessBar.jsx).
export const process = [
  { title: "Riset", desc: "Memahami bisnis, audiens, dan pesaing.", color: "var(--coral)" },
  { title: "Arah", desc: "Menentukan satu arah visual yang jelas.", color: "var(--gold)" },
  { title: "Bangun", desc: "Mengembangkan sistem sampai siap dipakai.", color: "var(--teal)" },
  { title: "Serah terima", desc: "Panduan lengkap dan pendampingan tim.", color: "var(--violet)" },
];

// Daftar nama klien yang ditampilkan berjalan (marquee) di section Clients.
export const clients = [
  "Kedai Serat",
  "Arsip Nusa",
  "Loka Studio",
  "Rimba Kertas",
  "Muara Fest",
  "Tenun Ambo",
  "Kopi Jalur",
  "Panggung Kata",
];

// Tiga angka statistik yang dianimasikan "menghitung naik" di Hero
// (lihat StatBlock.jsx + hook useCountUp).
export const stats = [
  { label: "Tahun pengalaman", target: 8, suffix: "" },
  { label: "Orang di studio", target: 18, suffix: "" },
  { label: "Proyek selesai", target: 60, suffix: "+" },
];

// Info umum studio: dipakai di logo Header, Footer, dan section Contact.
export const studio = {
  name: "Studio Elevate",
  tagline: "Studio Elevate, Bekasi",
  email: "studioelevate@gmail.com",
  address: "Harvest City, Sekolah Developer Indonesia, Bekasi, Jawa Barat, Indonesia",
  hours: "Senin–Jumat, 09.00–17.00",
  phone: "+62 812 3456 7890",
};
