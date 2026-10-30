import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ImageMarquee } from "@/components/site/ImageMarquee";
import { HopeSection } from "@/components/site/HopeSection";
import { ActionCards } from "@/components/site/ActionCards";
import { MissionVisionCircles } from "@/components/site/MissionVisionCircles";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Saraj Foundation — Give Every Child the Gift of a Future";
    // Reveal-on-scroll for every section marked with .reveal
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-inview");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ImageMarquee />
        <HopeSection />
        <ActionCards />
        <MissionVisionCircles />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
