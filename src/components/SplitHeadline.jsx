/**
 * Menampilkan judul besar yang animasinya muncul KATA PER KATA
 * (bukan sekaligus satu baris) begitu halaman dimuat.
 * Dipakai khusus untuk headline di Hero.
 *
 * Triknya: tiap kata dibungkus 2 <span> —
 *  - span luar (.split-word-mask) overflow:hidden, berfungsi sebagai
 *    "jendela" yang menyembunyikan kata sebelum animasi selesai.
 *  - span dalam (.split-word) yang benar-benar bergerak dari bawah
 *    (translateY(100%)) ke posisi normal, lewat CSS keyframes "wordUp".
 * Delay animasi tiap kata dibuat berbeda (i * 0.05s) supaya muncul
 * bergantian, bukan bersamaan.
 */
export default function SplitHeadline({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <h1 className={`split-headline ${className}`}>
      {words.map((w, i) => (
        <span className="split-word-mask" key={i}>
          <span className="split-word" style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
            {w}
            {/* spasi non-breaking supaya kata tidak nempel satu sama lain,
                kecuali untuk kata terakhir */}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </h1>
  );
}
