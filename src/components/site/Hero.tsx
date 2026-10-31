import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import sarajChildrenLogo from "@/assets/saraj-children-logo.png";
import heroBgSaraj from "@/assets/hero-bg-saraj.png";
import heroBgMobile from "@/assets/hero-bg-mobile.png";

const faces = ["A", "R", "M", "S"];

const slides = [
  {
    src: sarajChildrenLogo,
    alt: "Saraj Foundation happy children smiling together",
    title: "Saraj Foundation — Brighter Futures",
    badge: "Official Foundation",
    fitClass: "object-contain p-4 sm:p-8",
  },
  {
    src: heroSlide1,
    alt: "Artistic child portrait mosaic celebrating education and dreams",
    title: "Empowering Creative Minds",
    badge: "Creative Learning",
    fitClass: "object-contain lg:object-cover",
  },
  {
    src: heroSlide2,
    alt: "Rural school children smiling in classroom with notebooks and slates",
    title: "Classroom Education & Books",
    badge: "8,500+ Students",
    fitClass: "object-contain p-2 sm:p-6",
  },
  {
    src: heroSlide3,
    alt: "Protective hands holding smiling children under golden globe",
    title: "Protecting Every Child's Future",
    badge: "Community Care",
    fitClass: "object-contain lg:object-cover",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Changes image every 4 seconds
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="top" className="relative overflow-hidden bg-brand-dark text-white">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Desktop Hero Background */}
        <img
          src={heroBgSaraj}
          alt="Saraj Foundation Hero Background"
          className="hidden lg:block h-full w-full object-cover object-center"
        />

        {/* Small Screen / Mobile Hero Background (User Uploaded Image) */}
        <div className="block lg:hidden absolute inset-0">
          <img
            src={heroBgMobile}
            alt="Saraj Foundation Mobile Hero Background"
            className="h-full w-full object-cover object-center"
          />
          {/* Gentle dark gradient overlay for optimal text legibility on small screens */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-stone-950/70 to-stone-950/85" />
        </div>

        {/* Desktop scrim only over the text area so the image area has NO dark shading on any screen */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-transparent lg:w-[58%] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl lg:min-h-[660px] lg:grid-cols-2">
        {/* Left Column: Heading & CTA */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-28 xl:pl-14">


          <h1 className="mt-5 max-w-xl font-cursive text-5xl leading-[1.08] font-bold sm:text-6xl lg:text-7xl xl:text-[4.6rem] tracking-wide text-white drop-shadow-md">
            Help The Needy & bring back their smiles 
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
            Saraj Foundation works in India's underserved villages so every child can learn, grow
            healthy, and build a life full of possibility.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link to="/donate" className="btn-primary">
              Donate Now
              <ArrowRight className="size-4" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {faces.map((f) => (
                  <span
                    key={f}
                    className="grid size-10 place-items-center rounded-full border-2 border-brand-dark bg-brand-cream-deep font-display text-sm font-semibold text-brand-dark"
                  >
                    {f}
                  </span>
                ))}
                <span className="grid size-10 place-items-center rounded-full border-2 border-brand-dark bg-primary text-[10px] font-bold">
                  12k+
                </span>
              </div>
              <p className="max-w-[9rem] text-xs leading-snug text-white/70">
                12,500+ supporters already give monthly
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 4-Second Auto-Scaling Image Carousel with NO dark shadows/overlays */}
        <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-transparent">
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="relative h-full w-full flex items-center justify-center bg-transparent">
                  {isActive && (
                    <img
                      key={`hero-${current}`}
                      src={slide.src}
                      alt={slide.alt}
                      className={`h-full w-full ${slide.fitClass} animate-hero-zoom select-none`}
                    />
                  )}
                  {!isActive && (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className={`h-full w-full ${slide.fitClass} select-none`}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

