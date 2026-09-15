import { clients } from "../data/content";
import Reveal from "./Reveal";

/**
 * Section daftar klien — ditampilkan sebagai dua baris teks yang
 * berjalan otomatis ke samping (efek "marquee"), satu baris ke kiri
 * dan satu baris ke kanan, supaya terasa lebih dinamis.
 *
 * Trik loop tanpa putus: daftar client digandakan dua kali
 * ([...clients, ...clients]), lalu lewat CSS animasinya bergerak
 * sejauh -50% (setengah dari total lebar gabungan) — begitu sampai
 * di titik itu, tampilannya identik dengan posisi awal sehingga
 * terlihat menyambung mulus alih-alih "meloncat".
 */
export default function Clients() {
  return (
    <section className="vr-section light">
      <div className="vr-wrap">
        <Reveal className="vr-section-head">
          <h2>Klien yang pernah kami bantu</h2>
        </Reveal>
      </div>

      <div className="vr-marquee">
        {/* Baris pertama: bergerak ke kiri (lihat @keyframes marquee di index.css) */}
        <div className="vr-marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <span key={`a-${c}-${i}`}>{c}</span>
          ))}
        </div>
        {/* Baris kedua: arah berlawanan (marqueeRev) + opacity lebih redup,
            sebagai lapisan kedua yang menambah kesan ramai/dinamis */}
        <div className="vr-marquee-track rev">
          {[...clients, ...clients].reverse().map((c, i) => (
            <span key={`b-${c}-${i}`}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
