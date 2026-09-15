import useScrollProgress from "../hooks/useScrollProgress";

/**
 * Bar tipis (3px) yang menempel di paling atas layar, mengisi dari
 * kiri ke kanan sesuai seberapa jauh halaman sudah di-scroll.
 * Warnanya gradasi 4 warna brand (lihat .vr-progress di index.css).
 */
export default function ScrollProgress() {
  const progress = useScrollProgress(); // angka 0-100
  return <div className="vr-progress" style={{ width: `${progress}%` }} />;
}
