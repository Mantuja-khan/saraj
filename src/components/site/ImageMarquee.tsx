import { useRef, useState } from "react";
import cardEducation from "@/assets/card-education.png";
import cardSpecialChild from "@/assets/card-special-child.png";
import cardLivelihood from "@/assets/card-livelihood.png";
import cardAgedCare from "@/assets/card-aged-care.png";
import causeWomenEmpowerment from "@/assets/cause-women-empowerment.jpg";
import causeNutrition from "@/assets/cause-nutrition.jpg";
import galleryPlay from "@/assets/gallery-play.jpg";
import eventHealthCamp from "@/assets/event-health-camp.jpg";
import eventOutreach from "@/assets/event-outreach.jpg";

const marqueeImages = [
  { src: cardEducation, label: "Education & Literacy" },
  { src: cardSpecialChild, label: "Special Needs Child Care" },
  { src: causeWomenEmpowerment, label: "Women Empowerment" },
  { src: cardLivelihood, label: "Sustainable Livelihood" },
  { src: cardAgedCare, label: "Aged Care Routine" },
  { src: causeNutrition, label: "Nutritious Food Kits" },
  { src: galleryPlay, label: "Child Development & Sports" },
  { src: eventHealthCamp, label: "Community Health Camps" },
  { src: eventOutreach, label: "Rural Awareness & Outreach" },
];

export function ImageMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="our-families" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden select-none bg-transparent">
      {/* Centered Heading */}
      <div className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c1815] uppercase">
          OUR FAMILIES
        </h2>
      </div>

      {/* Soft edge fade masks for seamless look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

      {/* Dragging + Infinite Marquee Container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`overflow-x-auto scrollbar-none flex ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-6 hover:[animation-play-state:paused]">
          {[...marqueeImages, ...marqueeImages].map((item, idx) => (
            <div
              key={idx}
              className="group relative h-44 sm:h-56 md:h-64 w-60 sm:w-72 md:w-80 shrink-0 overflow-hidden rounded-none transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={item.src}
                alt={item.label}
                draggable={false}
                className="h-full w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              <span className="absolute bottom-3 left-4 text-xs sm:text-sm font-bold text-white drop-shadow tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
