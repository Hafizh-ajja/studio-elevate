import { pricing } from "../data/content";
import Reveal from "./Reveal";

/**
 * Section "Harga" — tiga paket harga dalam bentuk kartu.
 * Datanya diambil dari `pricing` di content.js (edit harga/fitur di sana).
 * Semua tombol mengarah ke section Kontak dengan scroll halus.
 */
export default function Pricing() {
  const goContact = (e) => {
    e.preventDefault();
    document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="harga" className="vr-section">
      <div className="vr-wrap">
        <Reveal className="vr-pricing-head">
          <h2>Paket harga yang jelas, tanpa biaya tersembunyi.</h2>
          <p>Butuh sesuatu yang custom? Kami susun penawaran sesuai skala proyek Anda.</p>
        </Reveal>

        <div className="vr-pricing-grid">
          {pricing.map((plan, i) => (
            <Reveal
              delay={i * 100} // kartu muncul bergantian
              key={plan.key}
              className={`vr-price-card ${plan.featured ? "is-featured" : ""}`}
            >
              <div className="vr-price-name">{plan.name}</div>
              <div className="vr-price-amount">
                {plan.price}
                {plan.unit && <span>{plan.unit}</span>}
              </div>
              <p className="vr-price-desc">{plan.desc}</p>

              <ul className="vr-price-list">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a href="#kontak" className="vr-price-btn" onClick={goContact}>
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}