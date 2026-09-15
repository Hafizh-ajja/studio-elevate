import { process } from "../data/content";
import Reveal from "./Reveal";
import ProcessBar from "./ProcessBar";

/**
 * Section "Proses" — menjelaskan 4 tahapan kerja studio.
 * Terdiri dari garis progres warna-warni (ProcessBar) di atas,
 * lalu grid 4 kolom penjelasan tiap tahap di bawahnya.
 */
export default function Process() {
  return (
    <section id="proses" className="vr-section">
      <div className="vr-wrap">
        <Reveal className="vr-section-head">
          <h2>Cara kami bekerja</h2>
          <p>Empat tahap, satu alur yang sama untuk setiap proyek.</p>
        </Reveal>

        {/* Garis progres animasi, warnanya diambil dari data `process` */}
        <ProcessBar steps={process} />

        <div className="vr-process-grid">
          {process.map((p, i) => (
            <Reveal as="div" delay={i * 100} className="vr-process-step" key={p.title}>
              {/* Titik warna kecil, warnanya sama dengan segmen di ProcessBar
                  di atas — jadi visualnya "menyambung" antara garis dan penjelasan */}
              <div className="num" style={{ background: p.color }} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
