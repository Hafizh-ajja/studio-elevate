/**
 * Ilustrasi SVG "ruas bambu" — empat kotak melengkung berwarna beda,
 * dipakai sebagai elemen dekoratif di Hero.
 * Tiap <rect> punya class "seg seg-1/2/3/4" yang dianimasikan melayang
 * naik-turun dengan delay berbeda lewat CSS keyframes "floaty"
 * (lihat index.css) — supaya terlihat "hidup", bukan statis.
 *
 * aria-hidden="true" karena elemen ini murni dekoratif, tidak
 * menyampaikan informasi yang perlu dibacakan screen reader.
 */
export default function SegmentMark({ size = 120 }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 84 110"
      aria-hidden="true"
      className="segment-mark"
    >
      <rect className="seg seg-1" x="20" y="0" width="34" height="24" rx="8" fill="var(--coral)" />
      <rect className="seg seg-2" x="8" y="26" width="46" height="24" rx="8" fill="var(--gold)" />
      <rect className="seg seg-3" x="18" y="54" width="40" height="24" rx="8" fill="var(--teal)" />
      <rect className="seg seg-4" x="4" y="82" width="46" height="24" rx="8" fill="var(--violet)" />
    </svg>
  );
}
