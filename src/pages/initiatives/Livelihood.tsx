import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import cardLivelihood from "@/assets/card-livelihood.png";
import { Heart, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Livelihood() {
  useEffect(() => {
    document.title = "Sustainable Livelihood — Saraj Foundation";
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
              Livelihood Initiative
            </div>
            <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Sustainable Livelihood Programs
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Creating long-term financial self-reliance through market-driven skills, artisan training, and modern trade linkages.
            </p>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#faf7f2]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={cardLivelihood}
                  alt="Sustainable Livelihood Program"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-stone-900">
                  Skills that Power Dignified Self-Sufficiency
                </h2>
                <p className="mt-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                  Poverty is broken when families have reliable, dignified sources of income. Our livelihood programs provide practical, certified training in agriculture, small-scale manufacturing, and digital services along with startup toolkits.
                </p>

                <div className="mt-8 space-y-3.5">
                  {[
                    "Organic farming methods & climate-resilient crop guidance",
                    "Artisan craft enhancement and direct fair-price market access",
                    "Vocational plumbing, electrical, and computer literacy courses",
                    "Micro-credit counseling and cooperative formation assistance",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-stone-800">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Fund a Livelihood Kit
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
