import { useEffect, useState } from "react";

/**
 * Hook yang mengembalikan seberapa jauh halaman sudah di-scroll,
 * dalam bentuk persentase 0–100.
 * Dipakai oleh komponen ScrollProgress untuk menggambar bar tipis
 * di bagian atas layar.
 */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // `ticking` mencegah kita menghitung ulang berkali-kali dalam satu
    // frame yang sama walaupun event "scroll" bisa terpanggil puluhan
    // kali per detik — ini teknik "throttle" pakai requestAnimationFrame
    // supaya perhitungan tetap ringan/tidak membebani browser.
    let ticking = false;

    const compute = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      // Total jarak yang bisa di-scroll = tinggi seluruh halaman
      // dikurangi tinggi layar yang terlihat.
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? Math.min((scrollTop / height) * 100, 100) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(compute);
        ticking = true;
      }
    };

    compute(); // hitung sekali di awal (kalau halaman dibuka sambil sudah di-scroll)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll); // ukuran halaman bisa berubah saat resize
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}
