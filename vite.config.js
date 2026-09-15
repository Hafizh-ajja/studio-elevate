// Konfigurasi Vite untuk proyek ini.
// Vite adalah build tool yang menjalankan dev server super cepat
// dan membundle proyek saat production build (npm run build).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // plugin resmi supaya Vite mengerti JSX & fast refresh React

export default defineConfig({
  // Daftar plugin yang dipakai. react() mengaktifkan dukungan JSX,
  // Fast Refresh (komponen ter-update tanpa reload penuh saat coding),
  // dan transformasi kode React lainnya.
  plugins: [react()],
});
