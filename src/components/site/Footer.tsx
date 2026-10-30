import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { useInViewReveal } from "./Gallery";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Initiatives", href: "/initiatives" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Donate", href: "/donate" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  const ref = useInViewReveal();

  return (
    <div className="w-full">
      {/* Large SARAJ FOUNDATION typography covering full width of screen, touching the footer top edge */}
      <div className="w-full overflow-hidden bg-transparent select-none pt-10 sm:pt-16 leading-none">
        <h2 className="w-full text-center font-display font-black text-[10.8vw] tracking-tighter uppercase text-stone-900 leading-[0.72] whitespace-nowrap -mb-1 sm:-mb-2 md:-mb-3 select-none">
          SARAJ FOUNDATION
        </h2>
      </div>

      {/* Main footer with clean dark background (no background image) */}
      <footer id="contact" ref={ref} className="relative overflow-hidden bg-brand-dark text-white">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:py-20 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-8">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Saraj Foundation is a non-profit working across India for children's education, health
              and nutrition — run by local communities, funded by people like you.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Our Causes</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>Education for Every Child</li>
              <li>Mothers &amp; Infants Health</li>
              <li>Daily Meal Kitchens</li>
              <li>Winter Clothing Drives</li>
              <li>Sports &amp; Arts Days</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wider">GET IN TOUCH</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <a
                  href="https://sarajfoundation.com/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors leading-relaxed"
                >
                  TC - 524B/524C, CAPITALHIGH STREET, OPP. GANPATI PLAZA, BHIWADI, ALWAR (RAJ.) 301019
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href="tel:9929984009" className="hover:text-primary transition-colors font-semibold">
                  9929984009
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href="mailto:sarajfoundation001@gmail.com" className="hover:text-primary transition-colors">
                  sarajfoundation001@gmail.com
                </a>
              </li>
            </ul>
            <form
              className="mt-6"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1.5">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/40"
                />
                <button type="submit" className="btn-primary !px-5 !py-2.5">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
            <p>© 2026 Saraj Foundation. All rights reserved.</p>
            <p>Made with hope, for every child.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
