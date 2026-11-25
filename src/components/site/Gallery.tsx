import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { homeGalleryImages } from "@/assets/foundation";

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
    <section id="gallery" ref={ref} className="bg-brand-cream pb-12 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-600 uppercase">
          Moments of Hope &amp; Service
        </p>
        <h2 className="mt-2 font-cursive text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-[#1c1815]">
          Saraj Foundation Gallery
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Exactly 6 images shown on the home page */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {homeGalleryImages.map((t, i) => (
            <figure
              key={`${t.alt}-${i}`}
              className="reveal group relative aspect-[4/5] overflow-hidden rounded-xl border border-stone-200/80 shadow-sm transition-all duration-300 hover:shadow-md lg:aspect-auto lg:h-52"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark/0 transition-colors duration-300 group-hover:bg-brand-dark/20" />
              <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {t.category}
              </span>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            className="btn-primary !px-8 !py-3.5 text-xs font-bold tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            View Full Photo Gallery
            <ArrowRight className="size-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
