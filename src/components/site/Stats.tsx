import { useEffect, useRef, useState } from "react";
import { HandHeart, Smile, Users, UtensilsCrossed } from "lucide-react";

const stats = [
  { icon: Users, value: 320, suffix: "+", label: "Active Volunteers" },
  { icon: HandHeart, value: 12500, suffix: "+", label: "Donations Received" },
  { icon: Smile, value: 8500, suffix: "+", label: "Happy Beneficiaries" },
  { icon: UtensilsCrossed, value: 45, suffix: "+", label: "Food Relief Drives" },
];

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

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  started,
}: {
  icon: typeof Users;
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const display = useCountUp(value, started);
  return (
    <div className="reveal flex flex-col items-center gap-3 rounded-3xl px-6 py-10 text-center transition-shadow hover:bg-brand-cream">
      <span className="grid size-14 place-items-center rounded-full bg-primary/15 text-primary">
        <Icon className="size-6" />
      </span>
      <p className="font-display text-4xl font-bold text-brand-dark sm:text-5xl">
        {display.toLocaleString("en-IN")}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} started={started} />
        ))}
      </div>
    </section>
  );
}
