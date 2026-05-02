import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";
import { useEffect, useState } from "react";

const slides = [
  { img: p1, title: "Luxury Apartments", subtitle: "Premium high-rise living in Bangalore" },
  { img: p3, title: "Family Villas", subtitle: "Spacious homes for growing families" },
  { img: p5, title: "Modern Townhouses", subtitle: "Community living in Pune & Goa" },
];

const thumbs = [p1, p2, p3, p4, p5, p6, p1, p2, p3, p4, p5, p6];

export const AutoScrollGallery = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="container py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Showcase</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2">A glimpse of our homes</h2>
      </div>

      {/* Auto-rotating hero slider */}
      <div className="relative h-[280px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-elevated">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === i ? 1 : 0 }}
          >
            <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
              <h3 className="font-display font-bold text-2xl md:text-4xl">{s.title}</h3>
              <p className="mt-2 text-white/85 text-sm md:text-base">{s.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 right-6 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-10 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 w-max animate-[marquee_30s_linear_infinite]">
          {thumbs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="h-40 w-64 object-cover rounded-xl shadow-card flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};