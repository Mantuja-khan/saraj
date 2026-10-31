import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Mail, MapPin, Phone, Send, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact Us — Saraj Foundation";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Contact Hero Banner */}
        <section className="relative overflow-hidden bg-brand-dark py-20 text-white lg:py-28">
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <Mail className="size-3.5" />
              Get in Touch
            </div>

            <h1 className="mt-6 font-cursive text-5xl font-bold tracking-wide sm:text-6xl lg:text-7xl">
              Contact Saraj Foundation
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-2xl mx-auto font-sans">
              Have questions about donating, volunteering, or partnering with us? We'd love to hear
              from you. Our team responds within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Info Cards + Form */}
        <section className="bg-[#fbfbf9] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Contact Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                    Reach Out Directly
                  </h2>
                  <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                    Feel free to visit our office, give us a call, or email our support staff anytime.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600">
                      <MapPin className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm uppercase">LOCATION</h3>
                      <p className="text-stone-700 text-xs sm:text-sm mt-1 leading-relaxed">
                        <a
                          href="https://sarajfoundation.com/contact-us"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-600 transition-colors"
                        >
                          TC - 524B/524C, CAPITALHIGH STREET, OPP. GANPATI PLAZA, BHIWADI, ALWAR (RAJ.) 301019
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-teal-500/15 text-teal-600">
                      <Phone className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm uppercase">PHONE</h3>
                      <p className="text-stone-700 text-xs sm:text-sm mt-1">
                        <a href="tel:9929984009" className="hover:text-primary transition-colors font-semibold">
                          9929984009
                        </a>
                      </p>
                      <p className="text-stone-400 text-xs mt-0.5">Mon–Sat from 9am to 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-orange-500/15 text-orange-600">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm uppercase">EMAIL</h3>
                      <p className="text-stone-700 text-xs sm:text-sm mt-1">
                        <a
                          href="mailto:sarajfoundation001@gmail.com"
                          className="hover:text-primary transition-colors font-semibold"
                        >
                          sarajfoundation001@gmail.com
                        </a>
                      </p>
                      <p className="text-stone-400 text-xs mt-0.5">Online support 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-stone-100 text-stone-700">
                      <Clock className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm uppercase">OPERATING HOURS</h3>
                      <p className="text-stone-700 text-xs sm:text-sm mt-1">
                        Monday – Saturday: 9:00 AM – 6:00 PM IST
                      </p>
                      <p className="text-stone-400 text-xs mt-0.5">Closed on National Holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-10 shadow-lg">
                  <h2 className="font-cursive text-3xl sm:text-4xl font-bold text-stone-900 text-center mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-center text-stone-600 text-sm mb-8">
                    We will get back to you with all details promptly.
                  </p>

                  {submitted ? (
                    <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-in fade-in duration-300">
                      <CheckCircle2 className="size-12 text-emerald-600 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-emerald-900">Thank You!</h3>
                      <p className="mt-1 text-sm text-emerald-700">
                        Your message has been sent successfully. Our team will contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="rahul@example.com"
                            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                            Subject *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Volunteer inquiry, Donation, etc."
                            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Your Message *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help you or how would you like to get involved?"
                          className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full !py-3.5 text-sm font-bold shadow-lg shadow-amber-500/20"
                      >
                        <Send className="size-4" />
                        Send Message
                      </button>
                    </form>
                  )}
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
