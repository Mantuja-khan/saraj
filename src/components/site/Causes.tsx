import { GraduationCap, HeartPulse, UtensilsCrossed } from "lucide-react";
import causeEducation from "@/assets/cause-education-clean.png";
import causeHealth from "@/assets/cause-health.jpg";
import causeNutrition from "@/assets/cause-nutrition.jpg";

const causes = [
  {
    image: causeEducation,
    icon: GraduationCap,
    category: "Education",
    title: "The Classroom is Waiting for Our Precious Kids",
    description:
      "Books, uniforms, digital learning tools and a patient teacher in every village classroom we adopt.",
    raised: 840000,
    goal: 1200000,
  },
  {
    image: causeHealth,
    icon: HeartPulse,
    category: "Health",
    title: "Care a Little More for a Healthy Beginning",
    description:
      "Nutrition, vaccinations and check-up camps for mothers and infants in underserved communities.",
    raised: 510000,
    goal: 900000,
  },
  {
    image: causeNutrition,
    icon: UtensilsCrossed,
    category: "Nutrition",
    title: "A Warm Meal, a Brighter Day for Every Child",
    description:
      "Daily midday meals at community kitchens so no child has to learn on an empty stomach.",
    raised: 375000,
    goal: 600000,
  },
];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function Causes() {
  return (
    <section id="causes" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-xl text-center">
          <p className="section-label justify-center">Our Donations</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
            Find the Popular Cause
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick the cause closest to your heart. Every gift is used where it is promised — and you
            see exactly how.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((c) => {
            const pct = Math.round((c.raised / c.goal) * 100);
            return (
              <article
                key={c.title}
                className="reveal group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_10px_40px_-24px_rgba(28,23,16,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-28px_rgba(28,23,16,0.4)]"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={912}
                    height={1104}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-widest text-brand-dark uppercase">
                    <c.icon className="size-3.5 text-primary" />
                    {c.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug text-brand-dark">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>

                  <div className="mt-6">
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="font-semibold text-brand-dark">
                        Raised: <span className="text-primary">{inr(c.raised)}</span>
                      </span>
                      <span className="text-muted-foreground">Goal: {inr(c.goal)}</span>
                    </div>
                  </div>

                  <a href="#contact" className="btn-primary mt-6 w-full !py-3">
                    Donate for {c.category}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
