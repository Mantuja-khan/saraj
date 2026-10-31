import { useEffect, useRef } from "react";
import causeEducation from "@/assets/cause-education-clean.png";
import causeHealth from "@/assets/cause-health.jpg";
import causeNutrition from "@/assets/cause-nutrition.jpg";
import eventOutreach from "@/assets/event-outreach.jpg";
import eventHealthCamp from "@/assets/event-health-camp.jpg";
import galleryPlay from "@/assets/gallery-play.jpg";
import newImage1 from "@/assets/image copy.png";
import newImage2 from "@/assets/image copy 2.png";
import newImage3 from "@/assets/image copy 3.png";
import newImage4 from "@/assets/image copy 4.png";
import newImage5 from "@/assets/image copy 5.png";
import newImage6 from "@/assets/image copy 6.png";

const tiles = [
  { src: causeEducation, alt: "Children studying in a village classroom" },
  { src: newImage1, alt: "Community youth and volunteers together" },
  { src: causeHealth, alt: "A mother with her healthy baby at a clinic" },
  { src: newImage3, alt: "Grassroots outreach support drive" },
  { src: galleryPlay, alt: "Children running and laughing in a field" },
  { src: newImage4, alt: "Essential items and kits distribution" },
  { src: causeNutrition, alt: "Children enjoying a warm midday meal" },
  { src: newImage5, alt: "Community healthcare camp" },
  { src: eventHealthCamp, alt: "Doctor checking a child at a health camp" },
  { src: newImage6, alt: "Smiling young beneficiaries" },
  { src: eventOutreach, alt: "Volunteers handing school kits to children" },
  { src: newImage2, alt: "Mentorship and education guidance" },
];

/** In-page scroll reveal for the gallery strip. */
export function useInViewReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-inview");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Gallery() {
  const ref = useInViewReveal();
  return (
    <section id="gallery" ref={ref} className="bg-brand-cream pb-2 pt-6">
      <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 lg:grid-cols-6">
        {tiles.map((t, i) => (
          <figure
            key={t.alt}
            className="reveal group relative aspect-[4/5] overflow-hidden rounded-none lg:aspect-auto lg:h-48"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <img
              src={t.src}
              alt={t.alt}
              loading="lazy"
              className="h-full w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-dark/0 transition-colors duration-300 group-hover:bg-brand-dark/20" />
          </figure>
        ))}
      </div>
    </section>
  );
}
