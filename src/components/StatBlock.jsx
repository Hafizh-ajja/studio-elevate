import useReveal from "../hooks/useReveal";
import useCountUp from "../hooks/useCountUp";

/**
 * Satu blok statistik (misal "60+  Proyek selesai") yang angkanya
 * animasi menghitung naik dari 0 begitu blok ini terlihat di layar.
 * Menggabungkan dua hook:
 *  - useReveal   → mendeteksi kapan blok ini masuk viewport
 *  - useCountUp  → menjalankan animasi angka, dipicu oleh hasil useReveal
 */
export default function StatBlock({ stat, delay = 0 }) {
  const [ref, visible] = useReveal(0.6); // threshold 0.6 = baru dianggap "terlihat" kalau 60% blok kelihatan
  const value = useCountUp(stat.target, visible, 1200 + delay);

  return (
    <div ref={ref} className={`stat reveal ${visible ? "reveal-in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <strong>
        {value}
        {stat.suffix}
      </strong>
      <span>{stat.label}</span>
    </div>
  );
}
