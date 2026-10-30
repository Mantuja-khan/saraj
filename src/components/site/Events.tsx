import { CalendarDays, Clock, MapPin } from "lucide-react";
import eventOutreach from "@/assets/event-outreach.jpg";
import eventHealthCamp from "@/assets/event-health-camp.jpg";
import galleryPlay from "@/assets/gallery-play.jpg";

const events = [
  {
    image: eventOutreach,
    day: "08",
    month: "Nov",
    title: "Back-to-School Kit Distribution",
    date: "8 Nov 2026",
    time: "9:00 AM – 2:00 PM",
    place: "Chandauli, Uttar Pradesh",
  },
  {
    image: eventHealthCamp,
    day: "14",
    month: "Dec",
    title: "Free Health & Eye Check-up Camp",
    date: "14 Dec 2026",
    time: "10:00 AM – 4:00 PM",
    place: "Khunti, Jharkhand",
  },
  {
    image: galleryPlay,
    day: "10",
    month: "Jan",
    title: "Annual Sports Day for Village Schools",
    date: "10 Jan 2027",
    time: "8:00 AM – 1:00 PM",
    place: "Banka, Bihar",
  },
];

export function Events() {
  return (
    <section id="events" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-xl text-center">
          <p className="section-label justify-center">Our Events</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
            Join Our Upcoming Events
          </h2>
          <p className="mt-4 text-muted-foreground">
            Show up, lend a hand, or simply cheer the children on — everyone is welcome.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="reveal group overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-28px_rgba(28,23,16,0.4)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  width={1408}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 grid size-16 place-items-center rounded-2xl bg-primary text-center text-white shadow-lg">
                  <span className="font-display text-2xl leading-none font-bold">{e.day}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">{e.month}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold leading-snug text-brand-dark transition-colors group-hover:text-primary">
                  {e.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2.5">
                    <CalendarDays className="size-4 shrink-0 text-primary" />
                    {e.date}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="size-4 shrink-0 text-primary" />
                    {e.time}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MapPin className="size-4 shrink-0 text-primary" />
                    {e.place}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
