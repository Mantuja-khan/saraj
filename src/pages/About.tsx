import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MissionVisionCircles } from "@/components/site/MissionVisionCircles";
import aboutChildPortrait from "@/assets/about-child-portrait.jpg";
import {
  Sparkles,
  Heart,
  HeartHandshake,
  CheckCircle2,
  Users,
  Award,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us — Saraj Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* About Hero Banner */}
        <section className="relative overflow-hidden bg-brand-dark py-20 text-white lg:py-26">
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <Sparkles className="size-3.5" />
              WHO WE ARE
            </div>

            <h1 className="mt-6 font-cursive text-5xl font-bold tracking-wide sm:text-6xl lg:text-7xl">
              About Saraj Foundation
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-3xl mx-auto font-sans">
              At Saraj Foundation, our mission is rooted in the belief that real change is achieved by
              addressing the multifaceted challenges faced by communities in need. Our approach is
              thoughtfully designed to create a lasting impact, focusing on every level of transformation.
            </p>
          </div>
        </section>

        {/* Short About Content & Image Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#faf7f2]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Image Side */}
              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-amber-50">
                  <img
                    src={aboutChildPortrait}
                    alt="Saraj Foundation Child"
                    className="h-[420px] sm:h-[480px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Short About Content Side */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-700 mb-3">
                  <Heart className="size-3.5 text-amber-500" />
                  OUR APPROACH
                </div>

                <h2 className="font-cursive text-4xl sm:text-5xl font-bold tracking-wide text-[#1c1815]">
                  A Commitment to Lasting Human Dignity
                </h2>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-700 font-sans">
                  At Saraj Foundation, our mission is rooted in the belief that real change is achieved by addressing the multifaceted challenges faced by communities in need. Our approach is thoughtfully designed to create a lasting impact, focusing on every level of transformation.
                </p>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                  From grassroots initiatives that empower individuals and families, to community-wide programs that foster inclusivity and social cohesion, and even advocating for policy changes to reshape entire societies, we are committed to driving comprehensive, sustainable, and positive change at every level. Together, we are building a brighter and more equitable future for all.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Grassroots empowerment for families & individuals",
                    "Community-wide inclusivity & social cohesion",
                    "Advocacy for systemic & long-term policy change",
                    "Comprehensive & sustainable transformation for all",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-amber-600 shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm font-semibold text-stone-800">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    JOIN OUR MISSION
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/initiatives"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3 text-xs font-bold tracking-wider uppercase text-stone-700 hover:bg-stone-50 transition-colors shadow-sm"
                  >
                    VIEW INITIATIVES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Together, We Can Make a Difference Section */}
        <MissionVisionCircles hideMoreButton={true} />

        {/* Core Values Section */}
        <section className="bg-[#faf7f2] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-[#1c1815]">
                Our Core Values
              </h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-stone-600">
                The ethical bedrock that shapes every program, partnership, and decision.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Users,
                  title: "COMMUNITY OWNERSHIP",
                  desc: "We work directly alongside local families and elders to design programs tailored to real needs.",
                },
                {
                  icon: ShieldCheck,
                  title: "100% TRANSPARENCY",
                  desc: "Every rupee donated is accounted for, with published reports and transparent fund allocation.",
                },
                {
                  icon: Award,
                  title: "SUSTAINABLE IMPACT",
                  desc: "Rather than short-term relief, we build lasting literacy, health systems, and self-reliance.",
                },
                {
                  icon: Heart,
                  title: "UNCONDITIONAL DIGNITY",
                  desc: "Every special child, mother, and senior citizen is treated with unconditional warmth and respect.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group rounded-3xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-500/40 text-center"
                  >
                    <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-amber-500/15 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white mb-6">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-600 font-sans">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Page Dedicated Call To Action (CTA) Section */}
        <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20 lg:py-24 text-white">
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary mb-4">
              <Sparkles className="size-3.5" />
              MAKE A LASTING DIFFERENCE
            </div>

            <h2 className="font-cursive text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white">
              Join Us to Bring Hope and Smiles
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/80 max-w-2xl mx-auto font-sans">
              Every child deserves learning, every elder deserves dignity, and every community deserves a chance to thrive.
              Partner with us today to empower underserved families across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/donate" className="btn-primary !px-8 !py-3.5 text-sm font-bold shadow-lg shadow-primary/25">
                <HeartHandshake className="size-4" />
                Donate Now
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
