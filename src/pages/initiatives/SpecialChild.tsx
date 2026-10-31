import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import cardSpecialChild from "@/assets/card-special-child.png";
import { Heart, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function SpecialChild() {
  useEffect(() => {
    document.title = "Special Child Care — Saraj Foundation";
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
              Special Care Initiative
            </div>
            <h1 className="mt-6 font-cursive text-5xl font-bold tracking-wide sm:text-6xl lg:text-7xl">
              Special Child Support &amp; Therapy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Empowering every child with special needs through inclusive learning, physical &amp; sensory therapy, and compassionate family counseling.
            </p>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#faf7f2]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={cardSpecialChild}
                  alt="Special Child Care"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-cursive text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                  Every Child Deserves to Blossom with Dignity
                </h2>
                <p className="mt-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                  In many rural communities, children with intellectual and developmental challenges lack access to specialized education and physical therapy. The Saraj Foundation creates safe, nurturing centers where every child receives individualized attention.
                </p>

                <div className="mt-8 space-y-3.5">
                  {[
                    "Pediatric physiotherapy & sensory integration therapy",
                    "Individualized educational plans (IEPs) with trained special educators",
                    "Nutritional supplements and specialized assistive devices",
                    "Caregiver counseling and parent empowerment support groups",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-stone-800">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Sponsor a Child's Care
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
