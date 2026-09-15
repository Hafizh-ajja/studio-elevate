import { useEffect, useRef, useState } from "react";
import { navItems, studio } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";

/**
 * Navigasi atas (sticky). Berisi:
 *  - Logo (gambar + nama studio)
 *  - Menu desktop dengan garis indikator yang otomatis geser mengikuti
 *    section mana yang sedang dilihat user (scrollspy)
 *  - Menu mobile (hamburger) untuk layar sempit
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // status menu mobile: terbuka/tertutup

  const ids = navItems.map((n) => n.id);
  // `active` = id section yang sedang dilihat user (scrollspy),
  // `setActive` dipakai untuk memaksa update instan saat menu diklik.
  const [active, setActive] = useActiveSection(ids);

  // Referensi ke elemen DOM tiap tombol menu (untuk mengukur posisi &
  // lebarnya) dan ke elemen <ul> pembungkusnya (sebagai titik acuan/origin).
  const navListRef = useRef(null);
  const navRefs = useRef({});
  // Posisi & lebar garis indikator yang digambar di bawah menu aktif.
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // Setiap kali section aktif berubah, hitung ulang posisi tombol menu
  // yang bersangkutan, lalu pindahkan indikator ke sana.
  useEffect(() => {
    const compute = () => {
      const btn = navRefs.current[active];
      const list = navListRef.current;
      if (btn && list) {
        const b = btn.getBoundingClientRect();
        const l = list.getBoundingClientRect();
        // Posisi indikator dihitung relatif terhadap <ul> pembungkus,
        // bukan terhadap seluruh layar.
        setIndicator({ left: b.left - l.left, width: b.width, opacity: 1 });
      }
    };
    compute();
    // Ukuran/posisi tombol bisa berubah saat layar di-resize, jadi
    // hitung ulang juga di momen itu.
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [active]);

  // Dipanggil saat logo/menu diklik: tutup menu mobile (kalau terbuka),
  // langsung set section aktif (biar indikator responsif), lalu scroll
  // halus ke section tujuan.
  const go = (id) => {
    setMenuOpen(false);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="vr-header">
      <nav className="vr-wrap vr-nav">
        {/* Logo: gambar + nama studio, klik untuk scroll ke paling atas */}
        <a href="#top" className="vr-logo" onClick={(e) => { e.preventDefault(); go("top"); }}>
          <img src="/logo.png" alt="" className="vr-logo-mark" />
          {studio.name}
        </a>

        {/* Menu navigasi versi desktop */}
        <ul className="vr-navlinks" ref={navListRef}>
          {navItems.map((n) => (
            <li key={n.id}>
              <button
                // Simpan referensi elemen tombol ini ke dalam navRefs,
                // diberi key sesuai id section, supaya bisa diukur nanti.
                ref={(el) => (navRefs.current[n.id] = el)}
                className={active === n.id ? "is-active" : ""}
                onClick={() => go(n.id)}
              >
                <span className="dot" style={{ background: n.color }} />
                {n.label}
              </button>
            </li>
          ))}
          {/* Garis indikator yang "meluncur" mengikuti menu aktif */}
          <span
            className="vr-nav-indicator"
            style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
          />
        </ul>

        {/* Tombol buka/tutup menu, hanya tampil di layar sempit (diatur lewat CSS) */}
        <button className="vr-navtoggle" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen}>
          {menuOpen ? "Tutup" : "Menu"}
        </button>
      </nav>

      {/* Menu navigasi versi mobile (dropdown di bawah header) */}
      <ul className={`vr-mobilenav ${menuOpen ? "open" : ""}`}>
        {navItems.map((n) => (
          <li key={n.id}>
            <button onClick={() => go(n.id)}>
              <span className="dot" style={{ background: n.color }} />
              {n.label}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
