import { useState } from "react";
import { services } from "../data/content";
import Reveal from "./Reveal";

/**
 * Section "Layanan" — daftar 4 layanan dalam bentuk accordion
 * (klik judul untuk buka/tutup deskripsinya). Hanya satu item yang
 * bisa terbuka dalam satu waktu.
 */
export default function Services() {
  // Menyimpan `key` dari layanan yang sedang terbuka.
  // Defaultnya layanan pertama sudah terbuka saat halaman dimuat.
  const [openKey, setOpenKey] = useState(services[0]?.key ?? null);

  return (
    <section id="layanan" className="vr-section">
      <div className="vr-wrap">
        <Reveal className="vr-section-head">
          <h2>Layanan</h2>
          <p>Empat area yang kami dalami, bukan daftar panjang yang dangkal.</p>
        </Reveal>

        <div className="vr-services">
          {services.map((s, i) => {
            const isOpen = openKey === s.key;
            return (
              <Reveal
                as="div"
                delay={i * 80} // tiap baris muncul menyusul 80ms setelah baris sebelumnya
                key={s.key}
                className={`vr-service ${isOpen ? "is-open" : ""}`}
                // Warna garis atas ikut warna layanan hanya saat sedang terbuka
                style={{ borderTopColor: isOpen ? s.color : "transparent" }}
              >
                <button
                  className="vr-service-head"
                  // Klik: kalau sedang terbuka → tutup (null),
                  // kalau tertutup → buka (otomatis menutup yang lain
                  // karena hanya ada satu state openKey).
                  onClick={() => setOpenKey(isOpen ? null : s.key)}
                  aria-expanded={isOpen}
                >
                  {s.name}
                  <span className="plus">+</span> {/* diputar 45° jadi tanda "×" saat terbuka, lihat CSS */}
                </button>
                <div className="vr-service-body">
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
