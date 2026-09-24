import { studio } from "../data/content";

/**
 * Baris paling bawah halaman: copyright + link sosial media.
 * Tahun copyright dihitung otomatis dari tanggal saat ini
 * (jadi tidak perlu diupdate manual tiap pergantian tahun).
 */
export default function Footer() {
  return (
    <footer className="vr-wrap vr-footer">
      <span>© {new Date().getFullYear()} {studio.name}</span>
      <span> <a href={studio.instagram} target="_blank" rel="https://www.instagram.com/studioelevate.id/">Instagram</a> · <a href={studio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
    </footer>
  );
}
   