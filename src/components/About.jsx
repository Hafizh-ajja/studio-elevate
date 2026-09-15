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
            <strong>Elevate</strong> berarti segmen — bagian bambu yang dipisahkan buku, tumbuh satu
            demi satu namun tetap menyatu jadi satu batang. Begitu juga cara kami bekerja: setiap
            merek dibangun bertahap, ruas demi ruas, tanpa kehilangan arah keseluruhan.
          </p>
          <p>
            Kami bukan studio yang menjual satu gaya untuk semua klien. Setiap proyek dimulai dari
            riset — siapa yang bicara, siapa yang mendengar, dan apa yang ingin diingat orang
            setelah semuanya selesai.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
