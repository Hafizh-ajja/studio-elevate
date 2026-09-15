import { useRef, useState } from "react";
import { pillars, stats, studio } from "../data/content";
import SplitHeadline from "./SplitHeadline";
import StatBlock from "./StatBlock";
import SegmentMark from "./SegmentMark";

/**
 * Section paling atas halaman: headline besar, ilustrasi, chip layanan,
 * dan statistik studio. Juga mengatur efek "parallax" — blob warna dan
 * ilustrasi bergerak halus mengikuti posisi kursor untuk kesan hidup/3D.
 */
export default function Hero() {
  const heroRef = useRef(null); // dipakai untuk mengukur posisi kursor relatif terhadap section ini
  const [mouse, setMouse] = useState({ x: 0, y: 0 }); // posisi kursor, dinormalisasi ke -0.5 s/d 0.5

  const onMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };
  const onLeave = () => setMouse({ x: 0, y: 0 }); // kembali ke tengah saat kursor keluar section

  return (
    <section className="vr-hero" ref={heroRef} onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* Blob gradasi warna di belakang konten. Bergerak mengikuti kursor
          (translate berdasarkan `mouse`), sekaligus punya animasi denyut
          otomatis (blobPulse) lewat CSS — dua gerakan ini digabung di
          dua elemen berbeda supaya tidak saling menimpa transform. */}
      <div className="vr-blob-wrap" style={{ transform: `translate(${mouse.x * 26}px, ${mouse.y * 26}px)` }}>
        <div className="vr-blob" />
      </div>

      <div className="vr-wrap vr-hero-grid">
        <div>
          <p className="vr-hero-kicker">
            <span className="dot" /> {studio.tagline}
          </p>

          {/* Headline yang animasinya muncul kata per kata */}
          <SplitHeadline text="Kami merancang identitas yang tumbuh ruas demi ruas." />

          <p className="lead">
            Dari nama sampai sistem visual lengkap — kami membangun merek yang punya alasan jelas
            di balik setiap pilihan bentuk dan warnanya.
          </p>

          {/* Chip kecil menampilkan 4 layanan utama */}
          <div className="vr-pillars">
            {pillars.map((p, i) => (
              <span className="vr-pillar" style={{ animationDelay: `${0.75 + i * 0.08}s` }} key={p.key}>
                <span className="dot" style={{ background: p.color }} />
                {p.label}
              </span>
            ))}
          </div>

          {/* Tiga angka statistik, masing-masing menghitung naik sendiri */}
          <div className="vr-stats">
            {stats.map((s, i) => (
              <StatBlock stat={s} key={s.label} delay={1100 + i * 100} />
            ))}
          </div>
        </div>

        {/* Ilustrasi ruas bambu, bergerak berlawanan arah dari blob
            (dikalikan angka negatif) untuk memberi kesan kedalaman (depth) */}
        <div
          className="vr-hero-illustration"
          style={{ transform: `translate(${mouse.x * -18}px, ${mouse.y * -18}px)` }}
        >
          <SegmentMark />
        </div>
      </div>
    </section>
  );
}
