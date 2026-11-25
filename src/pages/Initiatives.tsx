import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, HandHeart } from "lucide-react";

import cardSpecialChild from "@/assets/card-special-child.png";
import cardLivelihood from "@/assets/card-livelihood.png";
import cardAgedCare from "@/assets/card-aged-care.png";
import causeWomenEmpowerment from "@/assets/foundation/foundation_27.jpeg";
import eventOutreach from "@/assets/foundation/foundation_4.jpeg";

export const allInitiatives = [
  {
    id: "special-child",
    path: "/initiatives/special-child",
    title: "Special Child",
    tagline: "Sensory therapy, inclusive education & loving care",
    description:
      "The Saraj Foundation provides specialized support for children with special needs. Our programs focus on inclusive education, sensory integration therapy, adaptive learning materials, and community support so every child thrives with dignity.",
    image: cardSpecialChild,
    impact: "650+ Special Children receiving weekly therapy & special education",
  },
  {
    id: "women-empowerment",
    path: "/initiatives/women-empowerment",
    title: "Women Empowerment",
    tagline: "Vocational skills, financial independence & self-help",
    description:
      "Empowering women with tailoring workshops, financial literacy, and community self-help groups. We support rural mothers in gaining sustainable income, family dignity, and leadership roles across their villages.",
    image: causeWomenEmpowerment,
    impact: "1,200+ Women trained in vocational crafts and running home businesses",
  },
  {
    id: "livelihood",
    path: "/initiatives/livelihood",
    title: "Livelihood",
    tagline: "Skills training, artisan crafts & sustainable incomes",
    description:
      "The Saraj Foundation supports livelihood initiatives, providing skills training, modern agricultural tools, artisan market linkages, and micro-grants for individuals to secure sustainable incomes and build lasting resilience.",
    image: cardLivelihood,
    impact: "3,400+ Families connected to sustainable livelihood opportunities",
  },
  {
    id: "advocacy",
    path: "/initiatives/advocacy",
    title: "Advocacy and Raising Awareness",
    tagline: "Child rights, healthcare access & community welfare",
    description:
      "Championing children's rights, healthcare access, disability inclusion, and community welfare awareness campaigns across India. We engage local leaders, conduct school rallies, and partner with institutions for systemic change.",
    image: eventOutreach,
    impact: "25,000+ Community members reached across 48 rural awareness drives",
  },
  {
    id: "aged-care",
    path: "/initiatives/aged-care",
    title: "Aged People Care Routine",
    tagline: "Daily medical care, nutrition & companion support",
    description:
      "The Saraj Foundation implements care routines for the elderly, ensuring their well-being through tailored healthcare access, routine medical visits, nutritious meals, social engagement activities, and community companionship.",
    image: cardAgedCare,
    impact: "800+ Senior citizens receiving routine medical checkups and food kits",
  },
];

export default function Initiatives() {
  useEffect(() => {
    document.title = "Our Initiatives — Saraj Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-brand-dark py-20 text-white lg:py-28">
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <HandHeart className="size-3.5" />
              Our Core Programs
            </div>

            <h1 className="mt-6 font-cursive text-5xl font-bold tracking-wide sm:text-6xl lg:text-7xl">
              Saraj Foundation Initiatives
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/85 max-w-2xl mx-auto font-sans">
              Dedicated pillars designed to create lasting, sustainable transformation in education,
              special child development, women empowerment, and senior care.
            </p>
          </div>
        </section>

        {/* Initiatives Full-Width Content Sections (No Boxes) */}
        <section className="w-full">
          {allInitiatives.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`w-full py-16 sm:py-20 lg:py-24 border-b border-stone-200/70 last:border-b-0 ${
                  isEven ? "bg-[#faf7f2]" : "bg-white"
                }`}
              >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Image Column */}
                    <div
                      className={`relative overflow-hidden rounded-3xl h-[340px] sm:h-[420px] lg:h-[460px] w-full shadow-xl lg:col-span-6 ${
                        isEven ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute bottom-5 left-5 rounded-full bg-amber-500/95 px-4 py-1.5 text-xs font-bold text-white shadow-md">
                        {item.tagline}
                      </span>
                    </div>

                    {/* Text Column */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : ""}`}>
                      <h2 className="font-cursive text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                        {item.title}
                      </h2>

                      <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-700 font-sans">
                        {item.description}
                      </p>

                      <div className="mt-6 border-l-4 border-amber-500 pl-4 py-2 bg-amber-500/5 rounded-r-xl">
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                          Measurable Impact
                        </p>
                        <p className="mt-1 text-base font-semibold text-stone-800 font-sans">
                          {item.impact}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                          to={item.path}
                          className="btn-primary !py-3 text-xs font-bold"
                        >
                          Learn More
                          <ArrowRight className="size-4" />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-xs font-bold tracking-wider uppercase text-stone-700 hover:bg-stone-50 transition-colors"
                        >
                          Support This Cause
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
