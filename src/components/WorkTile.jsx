import { useState } from "react";
import useReveal from "../hooks/useReveal";

/**
 * Satu kartu karya di grid section "Karya".
 * Menggabungkan dua efek:
 *  1. Scroll-reveal  → kartu fade-up saat pertama kali terlihat (useReveal)
 *  2. Tilt 3D        → kartu miring mengikuti posisi kursor saat di-hover,
 *                       seolah-olah kartu fisik yang dipegang dan dimiringkan.
 *
 * Kedua efek ini sama-sama mengontrol properti CSS `transform`, jadi
 * digabung jadi satu string transform di bagian bawah supaya tidak
 * saling menimpa (kalau dipisah jadi dua elemen/dua transform terpisah,
 * salah satunya akan menang begitu saja, bukan digabung).
 */
export default function WorkTile({ item, delay = 0 }) {
  const [ref, visible] = useReveal();
  // Menyimpan sudut kemiringan (rx = putar sumbu X, ry = putar sumbu Y)
  // berdasarkan posisi kursor relatif terhadap kartu.
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, active: false });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    // Ubah posisi kursor jadi angka -0.5 s/d 0.5 relatif terhadap kartu
    // (0 = tengah kartu, -0.5 = tepi kiri/atas, 0.5 = tepi kanan/bawah)
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    // Kalikan dengan sudut maksimum (9 derajat) — sumbu dibalik (py * -9)
    // supaya gerakannya terasa natural: kursor di atas → kartu "mendongak".
    setTilt({ rx: py * -9, ry: px * 9, active: true });
  };
  const onLeave = () => setTilt({ rx: 0, ry: 0, active: false }); // kembali rata saat kursor pergi

  // Posisi dasar dari animasi reveal (naik dari bawah saat pertama muncul)
  const base = visible ? "translateY(0)" : "translateY(26px)";
  // Efek tilt hanya aktif saat kursor sedang di atas kartu
  const tiltTransform = tilt.active
    ? ` perspective(700px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-6px) scale(1.02)`
    : "";

  return (
    <div
      ref={ref}
      className="vr-work-tile"
      style={{
        // Latar kartu: gradasi dari warna solid ke warna yang sama tapi transparan (CC = ~80% opacity)
        background: `linear-gradient(160deg, ${item.color}, ${item.color}CC)`,
        opacity: visible ? 1 : 0,
        transform: base + tiltTransform, // gabungan reveal + tilt dalam satu transform
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="vr-work-tag">{item.cat}</span>
      <span className="vr-work-name">{item.name}</span>
      <span className="vr-work-meta">{item.year}</span>
    </div>
  );
}
