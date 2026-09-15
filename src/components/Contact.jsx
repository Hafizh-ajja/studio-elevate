import { studio } from "../data/content";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

/**
 * Section paling bawah sebelum footer — ajakan menghubungi studio,
 * berisi email (dengan efek "magnetic" saat di-hover) dan info kontak lain.
 * Semua datanya diambil dari objek `studio` di content.js.
 */
export default function Contact() {
  return (
    <section id="kontak" className="vr-contact">
      <div className="vr-wrap">
        <Reveal as="h2">Ceritakan rencana Anda pada kami.</Reveal>

        <Reveal delay={120} className="vr-contact-row">
          {/* mailto: link supaya klik langsung membuka aplikasi email default */}
          <Magnetic className="vr-contact-email" href={`mailto:${studio.email}`}>
            {studio.email}
          </Magnetic>
          <div className="vr-contact-meta">
            <div>{studio.address}</div>
            <div>{studio.hours}</div>
            <div>{studio.phone}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
