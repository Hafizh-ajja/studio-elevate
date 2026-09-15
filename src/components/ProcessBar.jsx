import useReveal from "../hooks/useReveal";

/**
 * Garis progres yang terbagi jadi beberapa segmen warna (satu segmen
 * per langkah kerja). Tiap segmen "terisi" dari kiri ke kanan
 * (scaleX 0 → 1) begitu garis ini terlihat di layar, dengan jeda
 * (delay) berbeda per segmen supaya efeknya berjalan berurutan.
 */
export default function ProcessBar({ steps }) {
  const [ref, visible] = useReveal(0.5);

  return (
    <div ref={ref} className="vr-process-track">
      {steps.map((step, i) => (
        <span
          key={step.title}
          style={{
            background: step.color,
            // scaleX(0) = garis belum terisi sama sekali,
            // scaleX(1) = garis terisi penuh — transisinya diatur di CSS (.vr-process-track span)
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transitionDelay: `${i * 140}ms`, // tiap segmen menyusul 140ms setelah segmen sebelumnya
          }}
        />
      ))}
    </div>
  );
}
