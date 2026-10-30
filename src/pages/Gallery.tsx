import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Camera } from "lucide-react";

import causeEducation from "@/assets/cause-education-clean.png";
import causeHealth from "@/assets/cause-health.jpg";
import causeNutrition from "@/assets/cause-nutrition.jpg";
import eventOutreach from "@/assets/event-outreach.jpg";
import eventHealthCamp from "@/assets/event-health-camp.jpg";
import galleryPlay from "@/assets/gallery-play.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import aboutChildPortrait from "@/assets/about-child-portrait.jpg";
import causeWomenEmpowerment from "@/assets/cause-women-empowerment.jpg";
import cardSpecialChild from "@/assets/card-special-child.png";

const galleryItems = [
  {
    src: causeEducation,
    category: "Education",
    title: "Classroom Learning Sessions",
    caption: "Children engaged in joyful foundational reading in rural Bengal.",
  },
  {
    src: eventOutreach,
    category: "Outreach",
    title: "School Kits Distribution",
    caption: "Volunteers distributing notebooks, stationery, and backpacks.",
  },
  {
    src: causeHealth,
    category: "Healthcare",
    title: "Mother & Infant Wellness",
    caption: "Periodic health screenings and maternal nutritional support.",
  },
  {
    src: galleryPlay,
    category: "Activities",
    title: "Sports & Creative Play",
    caption: "Outdoor games that foster team spirit, fitness, and happiness.",
  },
  {
    src: causeNutrition,
    category: "Nutrition",
    title: "Nutritious Midday Meals",
    caption: "Wholesome, hot lunches prepared daily for growing school children.",
  },
  {
    src: eventHealthCamp,
    category: "Healthcare",
    title: "Free Medical Health Camps",
    caption: "Doctors and pediatricians providing free consultations and medicine.",
  },
  {
    src: cardSpecialChild,
    category: "Special Care",
    title: "Special Needs Therapy",
    caption: "Individual sensory therapy and loving care for specially-abled children.",
  },
  {
    src: causeWomenEmpowerment,
    category: "Livelihood",
    title: "Vocational Tailoring Workshops",
    caption: "Empowering rural women with skills to achieve financial independence.",
  },
  {
    src: heroSlide2,
    category: "Education",
    title: "Smiles with New Books",
    caption: "Young learners celebrating the arrival of school library books.",
  },
  {
    src: aboutChildPortrait,
    category: "Special Care",
    title: "Eyes Full of Hope",
    caption: "A warm shawl and an encouraging environment to nurture dreams.",
  },
  {
    src: heroSlide1,
    category: "Activities",
    title: "Art & Creativity Day",
    caption: "Unleashing the imagination of young creators through painting.",
  },
  {
    src: heroSlide3,
    category: "Outreach",
    title: "Community Protective Circle",
    caption: "Ensuring safety, child rights, and continuous family counseling.",
  },
];

const categories = ["All", "Education", "Healthcare", "Nutrition", "Activities", "Special Care", "Livelihood", "Outreach"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Photo Gallery — Saraj Foundation";
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Gallery Hero Banner */}
        <section className="relative overflow-hidden bg-brand-dark py-20 text-white lg:py-28">
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <Camera className="size-3.5" />
              Moments of Hope
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Our Photo Gallery
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-2xl mx-auto font-sans">
              A glimpse into the smiles, classrooms, health clinics, and community initiatives made
              possible by your generous support.
            </p>
          </div>
        </section>

        {/* Gallery Section with Category Filter */}
        <section className="bg-[#fbfbf9] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-amber-500 text-white shadow-md shadow-amber-500/25 scale-105"
                      : "bg-white text-stone-700 border border-stone-200 hover:border-amber-400 hover:bg-stone-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid - Only images without content or border curves */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-none bg-stone-100 border border-stone-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title || "Saraj Foundation Gallery"}
                      loading="lazy"
                      className="h-full w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
