import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import cardAgedCare from "@/assets/card-aged-care.png";
import { Heart, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function AgedCare() {
  useEffect(() => {
    document.title = "Aged Care Routine — Saraj Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Banner */}
        <section className="relative overflow-hidden bg-brand-dark py-20 text-white lg:py-28">
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <Sparkles className="size-3.5" />
              Elder Care Initiative
            </div>
            <h1 className="mt-6 font-cursive text-5xl font-bold tracking-wide sm:text-6xl lg:text-7xl">
              Aged People Care Routine
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Ensuring the dignity, physical health, and emotional comfort of senior citizens through regular healthcare, food, and companionship.
            </p>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#faf7f2]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={cardAgedCare}
                  alt="Aged People Care Routine"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-cursive text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                  Honoring and Caring for Our Elders
                </h2>
                <p className="mt-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                  Elderly citizens in underserved hamlets frequently suffer from untreated chronic conditions, isolation, and lack of nutritional support. The Saraj Foundation coordinates monthly home health visits, delivery of medicines and warm meals, and intergenerational social activities.
                </p>

                <div className="mt-8 space-y-3.5">
                  {[
                    "Monthly door-to-door physician visits and vital monitoring",
                    "Free chronic prescription medicines, eye checkups & spectacles",
                    "Nutritious grain and oil kits for senior citizens living alone",
                    "Volunteer companion visits and community recreational gatherings",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-stone-800">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Adopt an Elder's Care
                    <Heart className="size-4" />
                  </Link>
                  <Link
                    to="/initiatives"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-xs font-bold tracking-wider uppercase text-stone-700 hover:bg-stone-50 transition-colors"
                  >
                    All Initiatives
                    <ArrowRight className="size-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
