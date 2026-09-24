import Reveal from "./Reveal";

/**
 * Section "Tentang" — penjelasan singkat tentang studio.
 * Teksnya ditulis langsung di sini (bukan di content.js) karena
 * paragraf naratif seperti ini biasanya lebih enak diedit langsung
 * sebagai teks utuh, bukan dipecah jadi variabel.
 */
export default function About() {
  return (
    <section id="tentang" className="vr-section light">
      <div className="vr-wrap vr-about-grid">
        <Reveal className="vr-section-head">
          <h2>Tentang studio</h2>
          <p>Kecil dengan sengaja, dekat dengan setiap proyek.</p>
        </Reveal>

        {/* delay={120} supaya paragraf ini muncul sedikit setelah judul di sebelah kiri */}
        <Reveal delay={120}>
          <p>
            <strong>Elevate</strong> berarti mengangkat sesuatu ke level yang lebih tinggi. Itu yang
            kami kerjakan: mengubah ide, bisnis, atau sistem yang sudah berjalan menjadi produk
            digital yang lebih cepat, lebih rapi, dan siap tumbuh.
          </p>
          <p>
            Kami studio pengembangan web di Bekasi. Dari desain UI/UX, website, dan toko online
            sampai API dan integrasi, semuanya dikerjakan satu tim, jadi desain dan kode berjalan
            searah sejak awal. Setelah peluncuran pun kami tetap mendampingi, karena produk yang
            baik dirawat, bukan dilepas begitu saja.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
