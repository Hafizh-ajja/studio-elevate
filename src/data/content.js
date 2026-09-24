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
  { id: "harga", label: "Harga", color: "var(--teal)" },
  { id: "kontak", label: "Kontak", color: "var(--coral)" },
];

// Enam layanan yang ditampilkan sebagai chip kecil di Hero.
export const pillars = [
  { key: "web", label: "Web Development", color: "var(--coral)" },
  { key: "uiux", label: "UI/UX Design", color: "var(--gold)" },
  { key: "ecommerce", label: "E-Commerce", color: "var(--teal)" },
  { key: "api", label: "API & Integrasi", color: "var(--violet)" },
  { key: "maintenance", label: "Maintenance & Support", color: "var(--coral)" },
  { key: "seo", label: "Performa & SEO", color: "var(--gold)" },
];

// Data lengkap untuk section Layanan (accordion yang bisa dibuka-tutup).
export const services = [
  {
    key: "web",
    name: "Web Development",
    color: "var(--coral)",
    desc: "Aplikasi web custom dengan React, Next.js, dan arsitektur backend yang skalabel.",
  },
  {
    key: "uiux",
    name: "UI/UX Design",
    color: "var(--gold)",
    desc: "Riset pengguna, wireframe, hingga design system yang konsisten dan mudah dipelihara.",
  },
  {
    key: "ecommerce",
    name: "E-Commerce",
    color: "var(--teal)",
    desc: "Toko online performa tinggi terintegrasi payment gateway, inventori, dan analitik.",
  },
  {
    key: "api",
    name: "API & Integrasi",
    color: "var(--violet)",
    desc: "REST/GraphQL API, integrasi pihak ketiga, dan otomatisasi antar sistem Anda.",
  },
  {
    key: "maintenance",
    name: "Maintenance & Support",
    color: "var(--coral)",
    desc: "Pemantauan, patch keamanan, dan dukungan teknis berkelanjutan pasca-peluncuran.",
  },
  {
    key: "seo",
    name: "Performa & SEO",
    color: "var(--gold)",
    desc: "Optimasi Core Web Vitals, aksesibilitas, dan struktur teknis yang ramah mesin pencarian.",
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


// Paket harga yang ditampilkan di section Harga (Pricing.jsx).
// `featured: true` = kartu yang tampil menonjol (warna terbalik).
// Kosongkan `unit` kalau harganya bukan per proyek (contoh: "Custom").
export const pricing = [
  {
    key: "starter",
    name: "Starter",
    price: "Rp 300.000+",
    unit: "/proyek",
    desc: "Untuk landing page atau website profil bisnis.",
    features: ["Hingga 5 halaman", "Desain UI custom", "Responsif penuh", "SEO dasar", "Revisi 2x"],
    cta: "Pilih Starter",
    featured: false,
  },
  {
    key: "growth",
    name: "Growth",
    price: "Rp 1jt+",
    unit: "/proyek",
    desc: "Untuk aplikasi web dengan sistem backend & autentikasi.",
    features: [
      "Halaman & fitur tanpa batas wajar",
      "Design system lengkap",
      "API & integrasi pihak ketiga",
      "Dashboard admin",
      "Support 3 bulan",
    ],
    cta: "Pilih Growth",
    featured: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: "Custom",
    unit: "",
    desc: "Untuk sistem skala besar dengan kebutuhan khusus.",
    features: [
      "Arsitektur microservices",
      "SLA & dedicated engineer",
      "Audit keamanan berkala",
      "Infrastruktur multi-region",
      "Support prioritas 24/7",
    ],
    cta: "Hubungi Kami",
    featured: false,
  },
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
