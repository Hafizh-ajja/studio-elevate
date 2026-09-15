import { useRef, useState } from "react";

/**
 * Komponen generik yang membuat elemen (link/tombol apa pun) sedikit
 * "tertarik" mengikuti kursor saat di-hover — efek yang biasa disebut
 * "magnetic button". Dipakai untuk tombol email di section Contact,
 * tapi bisa dipakai ulang untuk tombol/link lain mana pun.
 *
 * @param strength  seberapa kuat elemen mengikuti kursor (0-1).
 *                  Nilai kecil (0.3) = gerakan halus/subtle.
 * @param as        elemen HTML yang dipakai, default "a" (bisa diganti
 *                  "button" dsb lewat prop ini).
 */
export default function Magnetic({ children, className = "", href, strength = 0.3, as: Tag = "a", ...rest }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    // Jarak kursor dari titik tengah elemen, dikalikan `strength`
    // supaya elemen tidak mengikuti kursor 100% (akan terasa "berat"/lambat mengejar).
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };
  const onLeave = () => setPos({ x: 0, y: 0 }); // kembali ke posisi semula saat kursor pergi

  return (
    <Tag
      ref={ref}
      href={href}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
