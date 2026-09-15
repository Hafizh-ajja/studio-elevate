import { useEffect, useState } from "react";

/**
 * Hook "scrollspy": memantau beberapa section sekaligus dan memberi
 * tahu id section mana yang sedang berada di tengah layar (paling
 * "aktif" dilihat user). Dipakai oleh Header untuk menggerakkan garis
 * indikator di bawah menu navigasi mengikuti section yang sedang dibaca.
 *
 * @param ids  array id section, misalnya ["tentang","layanan","karya"]
 *             — harus sama persis dengan atribut id={...} di elemen
 *             <section> masing-masing.
 *
 * @returns [active, setActive]
 *   active     id section yang sedang aktif
 *   setActive  fungsi untuk memaksa ganti section aktif secara instan
 *              (dipakai saat user klik link nav, supaya indikator
 *              langsung pindah tanpa menunggu scroll selesai)
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  // ids berupa array baru tiap render; gunakan versi string-nya sebagai
  // dependency supaya effect di bawah tidak jalan ulang terus-menerus
  // padahal isinya sama.
  const key = ids.join(",");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    // Satu IntersectionObserver dipasang untuk TIAP section.
    // rootMargin "-40% 0px -50% 0px" artinya: anggap section "masuk
    // viewport" hanya kalau posisinya melewati garis tengah layar —
    // supaya section yang dianggap "aktif" adalah section yang lagi
    // benar-benar dibaca, bukan yang baru mengintip di ujung layar.
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    // Cleanup: matikan semua observer saat komponen di-unmount
    return () => observers.forEach((o) => o && o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [active, setActive];
}
