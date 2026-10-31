import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HeartHandshake, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const initiativeItems = [
  { label: "Special Child", href: "/initiatives/special-child" },
  { label: "Women Empowerment", href: "/initiatives/women-empowerment" },
  { label: "Sustainable Livelihood", href: "/initiatives/livelihood" },
  { label: "Advocacy & Awareness", href: "/initiatives/advocacy" },
  { label: "Aged Care Routine", href: "/initiatives/aged-care" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [initiativesOpen, setInitiativesOpen] = useState(false);
  const [mobileInitiativesOpen, setMobileInitiativesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInitiativesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)] border-stone-200" : "border-stone-100"
      }`}
    >
      <div className="mx-auto flex h-[88px] sm:h-[96px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Official Animated Logo (Increased Size) */}
        <div className="flex shrink-0 items-center">
          <Link to="/" className="min-w-0" aria-label="Saraj Foundation home">
            <Logo size="md" />
          </Link>
        </div>

        {/* Center: Navigation Links + Simple Initiatives Dropdown */}
        <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700 transition-colors hover:text-primary"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700 transition-colors hover:text-primary"
              >
                ABOUT
              </Link>
            </li>

            {/* Simple Initiatives Dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setInitiativesOpen(true)}
              onMouseLeave={() => setInitiativesOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/initiatives"
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700 hover:text-primary transition-colors"
                >
                  INITIATIVES
                </Link>
                <button
                  type="button"
                  onClick={() => setInitiativesOpen((v) => !v)}
                  className="ml-1 p-0.5 text-stone-400 hover:text-primary transition-colors"
                  aria-expanded={initiativesOpen}
                  aria-label="Toggle initiatives menu"
                >
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      initiativesOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Simple Dropdown Menu (Only Button Names, No Icons/Descriptions) */}
              {initiativesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2.5 z-50 w-60">
                  <div className="overflow-hidden rounded-xl border border-stone-200 bg-white py-2 shadow-xl animate-in fade-in slide-in-from-top-1 duration-150">
                    {initiativeItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        onClick={() => setInitiativesOpen(false)}
                        className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 transition-colors hover:bg-amber-500/10 hover:text-amber-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t border-stone-100 mt-1 pt-1">
                      <Link
                        to="/initiatives"
                        onClick={() => setInitiativesOpen(false)}
                        className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-600 transition-colors hover:text-amber-700 hover:bg-amber-500/10"
                      >
                        ALL INITIATIVES →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/gallery"
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700 transition-colors hover:text-primary"
              >
                GALLERY
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700 transition-colors hover:text-primary"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Corner: Desktop Donate Now Button & Mobile Hamburger Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/donate"
            className="btn-primary hidden lg:inline-flex !px-7 !py-3 text-xs font-bold shadow-md shadow-primary/25"
          >
            <HeartHandshake className="size-4" />
            Donate
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-stone-200 text-stone-800 lg:hidden hover:bg-stone-50 transition-colors"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (opened like previously) */}
      {mobileOpen && (
        <div className="border-t border-stone-200 bg-white px-6 py-5 lg:hidden max-h-[80vh] overflow-y-auto shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-1.5">
            <li>
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:bg-stone-50"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:bg-stone-50"
              >
                ABOUT
              </Link>
            </li>

            {/* Mobile Initiatives Accordion */}
            <li>
              <div className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:bg-stone-50">
                <Link
                  to="/initiatives"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1"
                >
                  INITIATIVES
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileInitiativesOpen((v) => !v)}
                  className="p-1"
                  aria-label="Toggle initiatives submenu"
                >
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      mobileInitiativesOpen ? "rotate-180 text-amber-500" : "text-stone-400"
                    }`}
                  />
                </button>
              </div>

              {mobileInitiativesOpen && (
                <div className="ml-3 my-1.5 space-y-1 border-l-2 border-amber-400/40 pl-3">
                  {initiativeItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileInitiativesOpen(false);
                      }}
                      className="block rounded-lg px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-amber-50 hover:text-amber-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/initiatives"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileInitiativesOpen(false);
                    }}
                    className="block rounded-lg px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-amber-600 hover:bg-amber-50"
                  >
                    ALL INITIATIVES →
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/gallery"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:bg-stone-50"
              >
                GALLERY
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:bg-stone-50"
              >
                CONTACT
              </Link>
            </li>

            {/* Donate Now Button inside the Toggle Bar Section */}
            <li className="pt-3">
              <Link
                to="/donate"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full !py-3.5 text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20"
              >
                <HeartHandshake className="size-4" />
                DONATE NOW
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
