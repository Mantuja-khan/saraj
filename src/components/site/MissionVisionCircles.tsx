import sarajChildrenLogo from "@/assets/saraj-children-logo.png";

interface ActionCardItem {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  buttonText: string;
  buttonVariant: "light" | "dark";
  bgGradient: string;
  href: string;
  zIndex: number;
}

const cards: ActionCardItem[] = [
  {
    id: "mission",
    title: "OUR\nMISSION",
    description:
      "Empowering underprivileged children, youth, and elderly with education, health, and sustainable livelihood.",
    detailedDescription:
      "Rooted in the belief that real change is achieved by addressing multifaceted community challenges. Empowering children, youth, and elderly with quality learning, health, and sustainable livelihood.",
    buttonText: "MORE",
    buttonVariant: "light",
    bgGradient: "from-[#f27a29] to-[#e65a19]",
    href: "#what-we-do",
    zIndex: 10,
  },
  {
    id: "vision",
    title: "OUR\nVISION",
    description:
      "A compassionate nation where every child thrives in school and every senior citizen lives with dignity and care.",
    detailedDescription:
      "An equitable, compassionate society where poverty is no barrier to human potential, where every child graduates with confidence, and every elder spends their golden years in dignity and comfort.",
    buttonText: "MORE",
    buttonVariant: "dark",
    bgGradient: "from-[#e24e2b] to-[#cf3817]",
    href: "#what-we-do",
    zIndex: 20,
  },
  {
    id: "values",
    title: "OUR\nVALUES",
    description:
      "Unyielding integrity, transparency, deep empathy, and community ownership guide every initiative we lead.",
    detailedDescription:
      "Unyielding integrity, radical empathy, 100% transparency, and grassroots community ownership guide every program, decision, and community partnership we lead across India.",
    buttonText: "MORE",
    buttonVariant: "dark",
    bgGradient: "from-[#c2331c] to-[#a82210]",
    href: "#what-we-do",
    zIndex: 30,
  },
  {
    id: "volunteer",
    title: "JOIN US\nVOLUNTEER!",
    description:
      "Be the driving force behind a smiling child. Dedicate your skills, volunteer on ground, or fund a campaign.",
    detailedDescription:
      "Be the driving force behind a smiling child and a transformed village. Join us on the ground, dedicate your professional skills, or support our ongoing causes to build a brighter future for all.",
    buttonText: "MORE",
    buttonVariant: "dark",
    bgGradient: "from-[#9a1a25] to-[#7f111c]",
    href: "#contact",
    zIndex: 40,
  },
];

interface MissionVisionCirclesProps {
  hideMoreButton?: boolean;
}

export function MissionVisionCircles({ hideMoreButton = false }: MissionVisionCirclesProps) {
  return (
    <section id="mission-vision" className="relative overflow-hidden bg-[#f4ebe1] py-16 sm:py-20 lg:py-24">
      {/* Anchor alias for causes */}
      <span id="causes" className="sr-only" />

      {/* Subtle background glow/texture */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fbfbf9] via-transparent to-[#fbfbf9]/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark uppercase">
            Together, We Can Make a Difference
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-stone-600 max-w-2xl mx-auto">
            Your support can bring hope, happiness, and a brighter future to those in need.
          </p>
        </div>

        {/* Desktop View: Child Image on Left + 4 Horizontally Overlapping Oval Circles */}
        <div className="hidden lg:flex items-center justify-center">
          {/* Child Image at Left Side */}
          <div className="relative z-0 shrink-0 -mr-12 xl:-mr-16 flex items-center justify-center">
            <img
              src={sarajChildrenLogo}
              alt="Saraj Foundation children"
              className="h-[360px] xl:h-[410px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* 4 Overlapping Oval Cards Chain */}
          <div className="flex items-center">
            {cards.map((card, idx) => (
              <div
                key={card.id}
                style={{ zIndex: card.zIndex }}
                className={`group relative flex w-[255px] xl:w-[285px] h-[360px] xl:h-[400px] shrink-0 flex-col ${
                  hideMoreButton ? "justify-center" : "justify-between"
                } rounded-[50%/42%] bg-gradient-to-br ${card.bgGradient} p-8 xl:p-9 text-white shadow-[0_18px_40px_-15px_rgba(0,0,0,0.38)] transition-all duration-300 hover:scale-105 hover:!z-50 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] cursor-pointer select-none ${
                  idx !== 0 ? "-ml-10 xl:-ml-14" : ""
                }`}
              >
                {/* Card Top: Title & Description */}
                <div className="pt-2 xl:pt-3 text-center">
                  <h3 className="font-display text-xl xl:text-2xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm whitespace-pre-line text-center uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-3 xl:mt-4 text-xs xl:text-sm leading-relaxed text-white/95 font-sans text-center">
                    {hideMoreButton ? card.detailedDescription : card.description}
                  </p>
                </div>

                {/* Card Bottom: Oval "more" button (omitted when hideMoreButton is true) */}
                {!hideMoreButton && (
                  <div className="pb-3 flex justify-center">
                    <a
                      href={card.href}
                      className={`inline-flex items-center justify-center rounded-full px-7 py-2 text-xs font-bold tracking-wider uppercase transition-transform duration-200 group-hover:scale-105 ${
                        card.buttonVariant === "light"
                          ? "bg-white text-[#2a1810] shadow-md hover:bg-stone-100"
                          : "bg-[#231713] text-white shadow-md hover:bg-black"
                      }`}
                    >
                      {card.buttonText}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View: Child Image on Left + 2-2 Red Area in Single Horizontal Layout */}
        <div className="lg:hidden flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Child Image at Left Side */}
          <div className="shrink-0 w-44 sm:w-56 flex items-center justify-center">
            <img
              src={sarajChildrenLogo}
              alt="Saraj Foundation children"
              className="max-h-[220px] sm:max-h-[320px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* 2-2 Red Area in 2 Columns */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 max-w-sm sm:max-w-md w-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`group relative flex w-full aspect-[4/5] max-w-[210px] shrink-0 flex-col ${
                  hideMoreButton ? "justify-center" : "justify-between"
                } rounded-[50%/42%] bg-gradient-to-br ${card.bgGradient} p-4 sm:p-5 text-white shadow-[0_14px_30px_-10px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 cursor-pointer mx-auto`}
              >
                <div className="pt-1 sm:pt-2 text-center">
                  <h3 className="font-display text-base sm:text-lg font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm whitespace-pre-line text-center uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[10px] sm:text-xs leading-tight sm:leading-snug text-white/95 text-center">
                    {hideMoreButton ? card.detailedDescription : card.description}
                  </p>
                </div>

                {!hideMoreButton && (
                  <div className="pb-1 sm:pb-2 flex justify-center">
                    <a
                      href={card.href}
                      className={`inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-1 text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-transform duration-200 group-hover:scale-105 ${
                        card.buttonVariant === "light"
                          ? "bg-white text-[#2a1810] shadow-md hover:bg-stone-100"
                          : "bg-[#231713] text-white shadow-md hover:bg-black"
                      }`}
                    >
                      {card.buttonText}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
