import { work } from "../data/content";
import Reveal from "./Reveal";
import WorkTile from "./WorkTile";

/**
 * Section "Karya" — grid berisi contoh portofolio.
 * Komponen ini sendiri sederhana: cuma mengambil data `work` dari
 * content.js dan me-render satu <WorkTile> untuk tiap item.
 * Semua logika animasi & tilt ada di dalam WorkTile.jsx.
 */
export default function Work() {
  return (
    <section id="karya" className="vr-section light">
      <div className="vr-wrap">
        <Reveal className="vr-section-head">
          <h2>Karya pilihan</h2>
          <p>Sebagian proyek yang pernah kami kerjakan bersama klien. Arahkan kursor untuk melihat lebih dekat.</p>
        </Reveal>

        <div className="vr-work-grid">
          {work.map((item, i) => (
            // delay berbeda tiap kartu supaya muncul bergantian saat di-scroll
            <WorkTile item={item} delay={i * 90} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
