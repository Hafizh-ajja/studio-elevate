import { useEffect, useState } from "react";

/**
 * Hook untuk animasi angka "menghitung naik" dari 0 sampai `target`.
 *
 * @param target    angka akhir yang ingin dicapai (misalnya 60)
 * @param active    animasi baru mulai berjalan begitu nilai ini true
 *                  (biasanya dihubungkan ke hasil useReveal, supaya
 *                  angka baru mulai menghitung saat terlihat di layar)
 * @param duration  lama animasi dalam milidetik
 *
 * Cara pakai:
 *   const [ref, visible] = useReveal();
 *   const value = useCountUp(60, visible);
 *   <div ref={ref}>{value}</div>
 */
export default function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return; // belum waktunya jalan, jangan lakukan apa-apa

    let raf;      // menyimpan id requestAnimationFrame, untuk cleanup
    let start = null; // waktu mulai animasi (diisi di frame pertama)

    // Fungsi ini dipanggil berulang kali oleh browser tiap frame
    // (idealnya 60x per detik), menghitung progres 0 → 1 berdasarkan
    // waktu yang sudah berlalu, lalu mengubah angka yang ditampilkan.
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1); // 0 → 1
      setValue(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step); // lanjut ke frame berikutnya
    };

    raf = requestAnimationFrame(step);

    // Cleanup: batalkan animasi kalau komponen hilang di tengah jalan
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}
