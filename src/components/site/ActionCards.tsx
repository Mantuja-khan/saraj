import { Link } from "react-router-dom";
import { HandHeart, ArrowRight } from "lucide-react";
import cardLivelihood from "@/assets/card-livelihood.png";
import cardEducation from "@/assets/card-education.png";
import cardSpecialChild from "@/assets/card-special-child.png";

interface CauseCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const causeCards: CauseCard[] = [
  {
    id: "education",
    title: "Education",
    description:
      "We believe in the power of education as a catalyst for change. Saraj Foundation strives to provide access to quality learning for underprivileged children, equipping them with knowledge and skills to break the cycle of poverty.",
    image: cardEducation,
  },
  {
    id: "special-child",
    title: "Special child",
    description:
      "The Saraj Foundation provides specialized support for children with special needs. Our programs focus on inclusive education, therapy, and community support to help every child thrive with dignity.",
    image: cardSpecialChild,
  },
  {
    id: "livelihood",
    title: "Livelihood",
    description:
      "The Saraj Foundation supports livelihood initiatives, providing skills training, resources, and opportunities for individuals to secure sustainable incomes and improve their quality of life.",
    image: cardLivelihood,
  },
];

export function ActionCards() {
  return (
    <section id="what-we-do" className="relative overflow-hidden bg-[#faf7f2] py-16 sm:py-20 lg:py-24">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[500px] rounded-full bg-amber-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-orange-200/20 blur-3xl" />

      {/* Centered Section Header */}
      <div className="reveal mx-auto max-w-3xl text-center mb-10 sm:mb-14 px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-700 mb-3">
          <HandHeart className="size-3.5 text-amber-500" />
          What We Do
        </div>

        <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-[#1c1815]">
          What We Do
        </h2>

        <p className="mt-3 text-base sm:text-lg leading-relaxed text-stone-600 max-w-2xl mx-auto">
          Explore our core initiatives dedicated to sustainable change, education, and compassionate care.
        </p>
      </div>

      {/* Only 3 cards in a single row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {causeCards.map((card) => (
            <div
              key={card.id}
              className="reveal group relative flex h-[420px] sm:h-[460px] lg:h-[490px] w-full overflow-hidden rounded-none bg-stone-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Full Background Image */}
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Scrim for optimal contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:via-black/40 transition-colors duration-300" />

              {/* Content Over Background Image: Centered Heading & Description */}
              <div className="relative z-10 flex h-full w-full flex-col justify-end p-6 sm:p-7 text-white text-center">
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-md leading-tight">
                  {card.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/90 font-sans line-clamp-4 drop-shadow-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to view all initiatives */}
        <div className="reveal mt-12 text-center">
          <Link
            to="/initiatives"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-stone-800 shadow-sm transition-all duration-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:shadow-md"
          >
            Explore All Initiatives
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
