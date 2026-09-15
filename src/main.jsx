// Entry point React: file pertama yang dijalankan di sisi client.
// Tugasnya cuma satu — merender komponen <App /> ke elemen #root
// yang ada di index.html.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // import CSS global sekali di sini, otomatis berlaku ke semua komponen

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode: bantuan dari React saat development untuk mendeteksi
  // potensi bug (efek samping ganda, dsb). Tidak berpengaruh ke hasil
  // build production.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
