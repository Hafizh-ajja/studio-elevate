import { useEffect, useRef, useState } from "react";

/**
 * Hook untuk animasi "muncul saat di-scroll" (scroll reveal).
 *
 * Cara pakai:
 *   const [ref, visible] = useReveal();
 *   <div ref={ref} className={visible ? "reveal-in" : ""}>...</div>
 *
 * `ref`     → tempelkan ke elemen yang mau dipantau posisinya.
 * `visible` → otomatis berubah jadi true begitu elemen tsb pertama
 *             kali masuk area yang terlihat di layar (viewport),
 *             lalu TETAP true seterusnya (animasi tidak diulang lagi
 *             kalau elemen di-scroll keluar-masuk berkali-kali).
 *
 * `threshold` (0-1) mengatur seberapa besar bagian elemen yang harus
 * kelihatan dulu sebelum dianggap "visible". 0.15 = 15% elemen kelihatan.
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Browser lama yang tidak punya IntersectionObserver:
    // langsung anggap visible saja supaya konten tetap muncul.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // IntersectionObserver = API browser untuk mendeteksi kapan
    // sebuah elemen masuk/keluar viewport, TANPA perlu event listener
    // "scroll" manual yang berat secara performa.
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el); // sudah pernah muncul, berhenti memantau (hemat resource)
        }
      },
      { threshold }
    );
    obs.observe(el);

    // Cleanup: hentikan observer kalau komponen di-unmount
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}
