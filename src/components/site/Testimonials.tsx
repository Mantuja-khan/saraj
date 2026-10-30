import { Quote } from "lucide-react";

const testimonials = [
  {
    initials: "AS",
    name: "Ananya Sharma",
    role: "Monthly Donor, Pune",
    quote:
      "Saraj sends photos, school reports and honest numbers every quarter. Giving here feels like watching a child you know grow up.",
  },
  {
    initials: "RV",
    name: "Rahul Verma",
    role: "Weekend Volunteer, Delhi",
    quote:
      "I joined for one kit-distribution drive and never stopped. The gratitude on a child's face when they get their first school bag stays with you.",
  },
  {
    initials: "MI",
    name: "Meera Iyer",
    role: "Partner NGO Lead, Chennai",
    quote:
      "Their health camps are the most organised I have seen — doctors, records and follow-ups. Villages trust them because they keep coming back.",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="bg-brand-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-xl text-center">
          <p className="section-label justify-center">Testimonials</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
            What Our Supporters Say
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-[2rem] bg-white p-8 shadow-[0_10px_40px_-24px_rgba(28,23,16,0.25)]"
            >
              <Quote className="size-8 text-primary" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-dark font-display text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-display text-base font-semibold text-brand-dark">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
