import useReveal from "../hooks/useReveal";

/**
 * Komponen pembungkus generik untuk animasi "muncul saat di-scroll".
 * Bisa membungkus elemen apa saja (div, h2, p, dst) lewat prop `as`.
 *
 * Contoh pakai:
 *   <Reveal as="h2" delay={120}>Judul Section</Reveal>
 *   <Reveal className="kartu" delay={200}>{...}</Reveal>
 *
 * `delay` (ms) berguna untuk membuat efek "muncul bertahap" kalau
 * dipakai berulang dalam sebuah list (delay berbeda tiap item).
 */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, style = {}, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      // Class "reveal" = state awal (transparan, sedikit turun).
      // Class "reveal-in" ditambahkan begitu `visible` true, memicu
      // transisi CSS ke posisi normal (lihat .reveal / .reveal-in di index.css).
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      // transitionDelay ditunda sampai visible=true, supaya delay
      // hanya berlaku untuk animasi "muncul", bukan animasi lain.
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
