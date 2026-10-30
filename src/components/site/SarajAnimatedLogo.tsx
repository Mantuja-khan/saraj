import { useEffect, useState } from "react";
import sarajOfficialLogo from "@/assets/saraj-official-logo.png";

type AnimatedLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "dark" | "light";
};

const sizeMap = {
  sm: {
    container: "h-12 w-12",
    logoSize: 48,
    titleSize: "text-xl",
    subSize: "text-[9px]",
  },
  md: {
    container: "h-16 w-16 sm:h-18 sm:w-18",
    logoSize: 68,
    titleSize: "text-2xl sm:text-3xl",
    subSize: "text-[11px]",
  },
  lg: {
    container: "h-24 w-24 sm:h-28 sm:w-28",
    logoSize: 104,
    titleSize: "text-4xl",
    subSize: "text-xs",
  },
  xl: {
    container: "h-36 w-36 sm:h-44 sm:w-44",
    logoSize: 160,
    titleSize: "text-5xl",
    subSize: "text-sm",
  },
};

export function SarajAnimatedLogo({
  className = "",
  size = "md",
  showText = true,
  variant = "dark",
}: AnimatedLogoProps) {
  const [mounted, setMounted] = useState(false);
  const cfg = sizeMap[size];

  useEffect(() => {
    setMounted(true);
  }, []);

  const wordColor = variant === "dark" ? "text-brand-dark" : "text-white";
  const subColor = variant === "dark" ? "text-stone-500" : "text-white/80";

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Animated Emblem Container */}
      <div className={`relative flex items-center justify-center shrink-0 ${cfg.container}`}>
        {/* 1. Sunlight Rays Glowing Outward (Pulsing Amber/Gold Flare) */}
        <div
          className="pointer-events-none absolute -inset-2.5 sm:-inset-3.5 rounded-full bg-gradient-to-r from-amber-400/35 via-yellow-300/45 to-orange-400/35 blur-md animate-sunlight-pulse"
          style={{ willChange: "transform, opacity" }}
        />

        {/* 1b. Radiating Sunbeams Fan (12 rotating delicate rays) */}
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute inset-[-14%] size-[128%] animate-sunbeams-rotate opacity-75"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="sunbeam-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="50"
              y1="50"
              x2="50"
              y2="2"
              stroke="url(#sunbeam-grad)"
              strokeWidth="2.8"
              strokeLinecap="round"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
        </svg>

        {/* 2. Blue Circular Emblem with gentle smooth rotation */}
        <div className="relative h-full w-full rounded-full overflow-visible animate-emblem-sway">
          {/* Authentic High-Res Logo Image with original colors, details & proportions intact */}
          <img
            src={sarajOfficialLogo}
            alt="Saraj Foundation Logo"
            className="h-full w-full object-contain drop-shadow-lg relative z-10 transition-transform duration-300"
            draggable={false}
          />

          {/* 3. White Hands & Bird Floating & Elegant Breathing Highlight Overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center animate-dove-hands-float"
            aria-hidden="true"
          >
            <div className="size-1/2 rounded-full bg-white/20 blur-sm animate-pulse-gentle" />
          </div>

          {/* 4. Flowers & Leaves Swaying Micro-Aura */}
          <div
            className="pointer-events-none absolute bottom-0 inset-x-0 h-1/3 z-20 animate-leaves-sway bg-gradient-to-t from-emerald-500/15 via-transparent to-transparent rounded-b-full blur-[2px]"
            aria-hidden="true"
          />

          {/* 5. Cinematic Light Shimmer Sweep across the emblem */}
          <div
            className="pointer-events-none absolute inset-0 z-30 rounded-full overflow-hidden"
            aria-hidden="true"
          >
            <div className="h-full w-full bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full animate-cinematic-shimmer" />
          </div>
        </div>
      </div>

      {/* Brand Name Typography with Curved/Cinematic Reveal Styling */}
      {showText && (
        <div id="navbar-brand-text" className="flex flex-col leading-none">
          <span
            className={`font-display font-extrabold tracking-tight uppercase transition-colors ${cfg.titleSize} ${wordColor} drop-shadow-sm`}
          >
            SARAJ
          </span>
          <span
            className={`mt-1 font-sans font-bold tracking-[0.42em] uppercase transition-colors ${cfg.subSize} ${subColor} animate-text-glow`}
          >
            FOUNDATION
          </span>
        </div>
      )}
    </div>
  );
}
