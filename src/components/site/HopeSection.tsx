import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Sparkles } from "lucide-react";
import aboutChildPortrait from "@/assets/about-child-portrait.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide1 from "@/assets/hero-slide-1.jpg";

function useCountUp(target: number, started: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return value;
}


function StatCounterItem({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const display = useCountUp(value, started);
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <div className="flex items-baseline font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1c1815]">
        <span>{display}</span>
        {suffix && <span className="text-amber-500 font-bold ml-0.5">{suffix}</span>}
      </div>
      <p className="text-xs sm:text-sm font-medium text-stone-500 leading-snug">{label}</p>
    </div>
  );
}

export function HopeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-[#fbfbf9] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered Section Heading */}
        <div className="reveal mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold tracking-wide text-amber-500 uppercase">
            Welcome To Saraj Foundation
          </p>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.14] text-[#1c1815]">
            We Can Donate for Better Future
          </h2>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: 3 Diagonal Rounded Capsule Boxes */}
          <div className="reveal relative flex justify-center lg:col-span-6">
            {/* Background warm soft organic blob */}
            <div className="pointer-events-none absolute -inset-6 sm:-inset-10 rounded-[3rem] bg-gradient-to-tr from-[#f5ede1] via-[#faeedd]/70 to-transparent -rotate-6" />

            <div className="relative flex items-center justify-center gap-3.5 sm:gap-5 -rotate-[22deg] sm:-rotate-[25deg] py-8 sm:py-12">
              {/* Box 1 (Left Frame: Classroom Children) */}
              <div className="relative h-[250px] sm:h-[300px] w-20 sm:w-28 overflow-hidden rounded-none border-4 border-white bg-amber-100 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src={heroSlide2}
                  alt="Rural children studying in classroom"
                  className="h-full w-full object-cover rounded-none rotate-[22deg] sm:rotate-[25deg] scale-[1.6]"
                />
              </div>

              {/* Box 2 (Center Hero Frame: Hopeful Child Portrait) */}
              <div className="relative h-[360px] sm:h-[440px] w-32 sm:w-44 overflow-hidden rounded-none border-4 border-white bg-amber-50 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-2xl -my-6 z-10">
                <img
                  src={aboutChildPortrait}
                  alt="Child wrapped in warm shawl with hopeful eyes"
                  className="h-full w-full object-cover rounded-none rotate-[22deg] sm:rotate-[25deg] scale-[1.35]"
                />
              </div>

              {/* Box 3 (Right Frame: Creative Learning) */}
              <div className="relative h-[270px] sm:h-[330px] w-22 sm:w-32 overflow-hidden rounded-none border-4 border-white bg-amber-100 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src={heroSlide1}
                  alt="Artistic child education mosaic"
                  className="h-full w-full object-cover rounded-none rotate-[22deg] sm:rotate-[25deg] scale-[1.6]"
                />
              </div>
            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-4 right-6 sm:right-12 z-20 flex items-center gap-2.5 rounded-full border border-amber-200/80 bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
              <Sparkles className="size-4 text-amber-500" />
              <span className="text-xs font-bold text-stone-800">8,500+ Children Supported</span>
            </div>
          </div>

          {/* Right Column: Copy, CTA & Call Us */}
          <div className="reveal lg:col-span-6">
            <p className="text-sm sm:text-base leading-relaxed text-stone-700">
              At Saraj Foundation, our mission is rooted in the belief that real change is achieved by
              addressing the multifaceted challenges faced by communities in need. Our approach is
              thoughtfully designed to create a lasting impact, focusing on every level of transformation.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
              From grassroots initiatives that empower individuals and families, to community-wide programs
              that foster inclusivity and social cohesion, and even advocating for policy changes to reshape
              entire societies, we are committed to driving comprehensive, sustainable, and positive change
              at every level. Together, we are building a brighter and more equitable future for all.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-[#f59e0b] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:bg-[#d97706] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                MORE ABOUT US
              </Link>

              <a
                href="tel:9929984009"
                className="group flex items-center gap-3.5 transition-colors"
              >
                <span className="grid size-12 place-items-center rounded-full border border-teal-500/30 bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                  <Phone className="size-5" />
                </span>
                <div>
                  <span className="block text-xs font-medium text-stone-500 uppercase tracking-wide">Call Us:</span>
                  <span className="block text-sm sm:text-base font-bold text-stone-900 group-hover:text-teal-600 transition-colors">
                    9929984009
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

