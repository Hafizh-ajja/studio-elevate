// Komponen akar (root) aplikasi.
// Tugasnya cuma menyusun urutan section dari atas ke bawah halaman —
// tidak menyimpan data atau logika apa pun sendiri.
// Kalau mau mengubah urutan section, atau menambah/menghapus section,
// cukup ubah di sini.
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    // .vr-root: class pembungkus utama, tempat semua CSS variable warna
    // (--ink, --paper, --coral, dst) didefinisikan di index.css
    <div className="vr-root">
      <ScrollProgress /> {/* bar tipis di atas layar yang mengisi sesuai posisi scroll */}
      <Header />         {/* navigasi atas, sticky, dengan indikator section aktif */}

      <main id="top">
        <Hero />      {/* judul besar + ilustrasi + statistik */}
        <About />     {/* penjelasan tentang studio */}
        <Services />  {/* daftar layanan berbentuk accordion */}
        <Work />      {/* grid contoh karya/portofolio */}
        <Process />   {/* tahapan cara kerja studio */}
        <Clients />   {/* daftar klien berjalan (marquee) */}
        <Pricing />   {/* paket harga */}
        <Contact />   {/* ajakan menghubungi + info kontak */}
      </main>

      <Footer /> {/* baris copyright & sosial media di paling bawah */}
    </div>
  );
}
