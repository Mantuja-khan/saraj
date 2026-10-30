import { useEffect, useState } from "react";

interface LetterData {
  char: string;
  startX: number;
  startY: number;
  startRot: number;
  startScale: number;
  delay: number;
}

// Pre-calculated deterministic pseudo-random offsets for smooth SSR/hydration consistency
const SARAJ_OFFSETS: LetterData[] = [
  { char: "S", startX: -540, startY: -320, startRot: -65, startScale: 2.4, delay: 0 },
  { char: "A", startX: 420, startY: -480, startRot: 55, startScale: 0.4, delay: 60 },
  { char: "R", startX: -600, startY: 280, startRot: -85, startScale: 1.8, delay: 120 },
  { char: "A", startX: 520, startY: 360, startRot: 75, startScale: 0.5, delay: 180 },
  { char: "J", startX: -180, startY: -550, startRot: -45, startScale: 2.2, delay: 240 },
];

const FOUNDATION_OFFSETS: LetterData[] = [
  { char: "F", startX: -480, startY: 420, startRot: 60, startScale: 0.3, delay: 90 },
  { char: "O", startX: 380, startY: -380, startRot: -70, startScale: 2.0, delay: 150 },
  { char: "U", startX: -650, startY: -180, startRot: 45, startScale: 0.4, delay: 210 },
  { char: "N", startX: 580, startY: 190, startRot: -50, startScale: 1.9, delay: 270 },
  { char: "D", startX: -260, startY: 520, startRot: 80, startScale: 0.5, delay: 330 },
  { char: "A", startX: 320, startY: 500, startRot: -60, startScale: 1.7, delay: 390 },
  { char: "T", startX: -400, startY: -420, startRot: 50, startScale: 0.4, delay: 450 },
  { char: "I", startX: 620, startY: -260, startRot: -90, startScale: 2.1, delay: 510 },
  { char: "O", startX: -150, startY: 560, startRot: 40, startScale: 0.5, delay: 570 },
  { char: "N", startX: 460, startY: 380, startRot: -75, startScale: 1.6, delay: 630 },
];

export function BrandIntroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"scattered" | "converged" | "flying" | "done">("done");
  const [flyTarget, setFlyTarget] = useState<{ x: number; y: number; scale: number }>({
    x: -300,
    y: -300,
    scale: 0.25,
  });

  useEffect(() => {
    setMounted(true);

    try {
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      const isReload =
        (navEntries.length > 0 && navEntries[0].type === "reload") ||
        (performance.navigation as any)?.type === 1;
      const hasOpened = sessionStorage.getItem("saraj_has_opened");

      // Only show on first open or reload
      if (hasOpened && !isReload) {
        setPhase("done");
        return;
      }
      sessionStorage.setItem("saraj_has_opened", "true");
    } catch {
      // storage error fallback
    }

    // Start with scattered
    setPhase("scattered");

    // 1. Kick off convergence into center after initial mount
    const timer1 = setTimeout(() => {
      setPhase("converged");
    }, 80);

    // 2. Prepare destination coordinates and trigger fly-to-navbar animation
    const timer2 = setTimeout(() => {
      const targetEl = document.getElementById("navbar-brand-text");
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const targetCenterX = rect.left + rect.width / 2;
        const targetCenterY = rect.top + rect.height / 2;
        const deltaX = targetCenterX - centerX;
        const deltaY = targetCenterY - centerY;
        const scale = Math.max(0.18, Math.min(0.36, rect.height / 120));
        setFlyTarget({ x: deltaX, y: deltaY, scale });
      } else {
        const isMobile = window.innerWidth < 640;
        setFlyTarget({
          x: isMobile ? -window.innerWidth * 0.28 : -window.innerWidth * 0.36,
          y: -window.innerHeight * 0.44,
          scale: isMobile ? 0.22 : 0.28,
        });
      }
      setPhase("flying");
    }, 2000);

    // 3. Mark done and unmount
    const timer3 = setTimeout(() => {
      setPhase("done");
    }, 2900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!mounted || phase === "done") {
    return null;
  }

  const isScattered = phase === "scattered";
  const isFlying = phase === "flying";

  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-none select-none flex items-center justify-center transition-opacity duration-800 ${
        isFlying ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Clean White Backdrop */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-700 ${
          isFlying ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Subtle soft ambient light glow at center */}
      <div
        className={`pointer-events-none absolute size-[500px] sm:size-[700px] rounded-full bg-gradient-to-r from-stone-200/60 via-amber-100/40 to-transparent blur-3xl transition-opacity duration-1000 ${
          isScattered ? "opacity-0 scale-50" : isFlying ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
      />

      {/* Main Words Wrapper: Centers on white screen, then flies up to the Navbar */}
      <div
        style={{
          transform: isFlying
            ? `translate3d(${flyTarget.x}px, ${flyTarget.y}px, 0) scale(${flyTarget.scale})`
            : "translate3d(0, 0, 0) scale(1)",
          transformOrigin: "center center",
          transition: isFlying
            ? "transform 850ms cubic-bezier(0.22, 1, 0.36, 1), opacity 850ms ease-out"
            : "none",
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
      >
        {/* Word 1: SARAJ in Crisp Black Typography */}
        <div className="flex items-center justify-center leading-none">
          {SARAJ_OFFSETS.map((item, idx) => {
            const transform = isScattered
              ? `translate3d(${item.startX}px, ${item.startY}px, 0) rotate(${item.startRot}deg) scale(${item.startScale})`
              : "translate3d(0, 0, 0) rotate(0deg) scale(1)";

            return (
              <span
                key={idx}
                style={{
                  transform,
                  transition: `transform 1200ms cubic-bezier(0.16, 1, 0.3, 1) ${item.delay}ms, opacity 800ms ease-out ${item.delay}ms, filter 900ms ease-out ${item.delay}ms`,
                  filter: isScattered ? "blur(12px)" : "blur(0px)",
                  opacity: isScattered ? 0 : 1,
                }}
                className="inline-block font-display text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-[#1c1815] drop-shadow-sm"
              >
                {item.char}
              </span>
            );
          })}
        </div>

        {/* Word 2: FOUNDATION in Crisp Black Typography */}
        <div className="flex items-center justify-center mt-3 sm:mt-5 tracking-[0.42em] sm:tracking-[0.48em] leading-none">
          {FOUNDATION_OFFSETS.map((item, idx) => {
            const transform = isScattered
              ? `translate3d(${item.startX}px, ${item.startY}px, 0) rotate(${item.startRot}deg) scale(${item.startScale})`
              : "translate3d(0, 0, 0) rotate(0deg) scale(1)";

            return (
              <span
                key={idx}
                style={{
                  transform,
                  transition: `transform 1200ms cubic-bezier(0.16, 1, 0.3, 1) ${item.delay}ms, opacity 800ms ease-out ${item.delay}ms, filter 900ms ease-out ${item.delay}ms`,
                  filter: isScattered ? "blur(10px)" : "blur(0px)",
                  opacity: isScattered ? 0 : 1,
                }}
                className="inline-block font-sans text-xs sm:text-xl md:text-2xl font-extrabold uppercase text-stone-800 tracking-[0.42em] sm:tracking-[0.48em]"
              >
                {item.char}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
