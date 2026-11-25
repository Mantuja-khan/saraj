import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Camera } from "lucide-react";
import { galleryCategories } from "@/assets/foundation";

const categoryFilterTabs = [
  { id: "all", label: "All" },
  { id: "vitran", label: "Vitran" },
  { id: "gau-sewa", label: "Gau Sewa" },
  { id: "kabutar-sewa", label: "Kabutar Sewa" },
  { id: "visit", label: "Visit" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    document.title = "Photo Gallery — Saraj Foundation";
  }, []);

  const displayedCategories =
    activeTab === "all"
      ? galleryCategories
      : galleryCategories.filter((cat) => cat.id === activeTab);

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
              Moments of Hope &amp; Service
            </div>

            <h1 className="mt-6 font-cursive text-5xl font-bold tracking-wide sm:text-6xl lg:text-7xl">
              Our Photo Gallery
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-2xl mx-auto font-sans">
              Explore authentic glimpses of our on-ground service initiatives across Vitran, Gau Sewa,
              Kabutar Sewa, and village visits.
            </p>
          </div>
        </section>

        {/* Gallery Section with Category Tabs and Distinct Category Sections */}
        <section className="bg-[#fbfbf9] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
              {categoryFilterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-amber-500 text-white shadow-md shadow-amber-500/25 scale-105"
                      : "bg-white text-stone-700 border border-stone-200 hover:border-amber-400 hover:bg-stone-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category Sections: Name ABOVE, Images BELOW */}
            <div className="space-y-16 sm:space-y-20">
              {displayedCategories.map((category) => (
                <div key={category.id} className="scroll-mt-24">
                  {/* Category Name ABOVE */}
                  <div className="border-b border-stone-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-amber-700 mb-2">
                        {category.tag}
                      </div>
                      <h2 className="font-cursive text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-[#1c1815]">
                        {category.name}
                      </h2>
                      <p className="mt-1 text-sm sm:text-base leading-relaxed text-stone-600 font-sans max-w-3xl">
                        {category.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <span className="rounded-full bg-stone-200/80 px-3.5 py-1 text-xs font-bold text-stone-700">
                        {category.images.length} Photos
                      </span>
                    </div>
                  </div>

                  {/* Their Images BELOW */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {category.images.map((item, idx) => (
                      <div
                        key={`${category.id}-${item.id}-${idx}`}
                        className="group relative overflow-hidden rounded-none bg-stone-100 border border-stone-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className="h-full w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
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
