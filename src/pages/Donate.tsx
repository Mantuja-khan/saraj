import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import donateQr from "@/assets/donate-qr.png";
import {
  Heart,
  QrCode,
  Copy,
  Check,
  Building2,
  BadgeCheck,
  Phone,
  Mail,
} from "lucide-react";

const upiId = "120028786972";

export default function Donate() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Donate Now — Saraj Foundation";
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Clean Hero Header Banner */}
        <section className="relative overflow-hidden bg-brand-dark py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <Heart className="size-3.5 fill-primary text-primary" />
              Make A Difference Today
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Donate to Saraj Foundation
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/80 max-w-2xl mx-auto sm:text-lg">
              Every single rupee directly empowers underprivileged children with foundational
              education, nutritious meals, and quality healthcare.
            </p>
          </div>
        </section>

        {/* Main Donation Details & QR Code Section */}
        <section className="bg-[#fbfbf9] py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: QR Code Card */}
              <div className="lg:col-span-5 bg-white border border-stone-200/90 shadow-sm p-6 sm:p-8 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-5">
                  <QrCode className="size-4 text-amber-600" />
                  Instant UPI Payment
                </div>

                {/* QR Code Container with sharp clean styling */}
                <div className="relative p-3 bg-white border-2 border-stone-200 shadow-md">
                  <img
                    src={donateQr}
                    alt="Saraj Foundation UPI QR Code"
                    className="size-56 sm:size-64 object-contain select-none"
                  />
                </div>

                <p className="mt-4 text-sm font-semibold text-stone-800">
                  Scan to Pay with Any UPI App
                </p>

                {/* UPI Apps supported */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-stone-600">
                  <span className="px-2.5 py-1 bg-stone-100 border border-stone-200">Google Pay</span>
                  <span className="px-2.5 py-1 bg-stone-100 border border-stone-200">PhonePe</span>
                  <span className="px-2.5 py-1 bg-stone-100 border border-stone-200">Paytm</span>
                  <span className="px-2.5 py-1 bg-stone-100 border border-stone-200">BHIM</span>
                </div>
              </div>

              {/* Right Column: Account Details & Receipt Info */}
              <div className="lg:col-span-7 space-y-6">
                {/* Account Details Box */}
                <div className="bg-white border border-stone-200/90 shadow-sm p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100">
                    <Building2 className="size-5 text-amber-600" />
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                      Payment Details
                    </h2>
                  </div>

                  <dl className="mt-6 space-y-4 text-sm">
                    {/* Payee Name */}
                    <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-stone-100">
                      <dt className="font-semibold text-stone-500">Beneficiary Name</dt>
                      <dd className="font-bold text-stone-900 mt-1 sm:mt-0 flex items-center gap-1.5">
                        <BadgeCheck className="size-4 text-emerald-600" />
                        Saraj Foundation
                      </dd>
                    </div>

                    {/* Account No */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-stone-100">
                      <dt className="font-semibold text-stone-500">Account No</dt>
                      <dd className="mt-1 sm:mt-0 flex items-center gap-2">
                        <code className="bg-stone-100 px-2.5 py-1 text-xs font-mono font-bold text-stone-800 border border-stone-200">
                          {upiId}
                        </code>
                        <button
                          type="button"
                          onClick={copyToClipboard}
                          aria-label="Copy Account Number"
                          className="inline-flex items-center gap-1 bg-stone-900 text-white px-2.5 py-1 text-xs font-bold transition-colors hover:bg-amber-600"
                        >
                          {copied ? (
                            <>
                              <Check className="size-3.5 text-emerald-400" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="size-3.5" />
                              Copy
                            </>
                          )}
                        </button>
                      </dd>
                    </div>

                    {/* Bank */}
                    <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-stone-100">
                      <dt className="font-semibold text-stone-500">IFSC Code</dt>
                      <dd className="font-semibold text-stone-800 mt-1 sm:mt-0">
                        CNRB0010466
                      </dd>
                    </div>

                    {/* Currency */}
                    <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-stone-100">
                      <dt className="font-semibold text-stone-500">Currency</dt>
                      <dd className="font-semibold text-stone-800 mt-1 sm:mt-0">
                        Indian Rupee (INR ₹)
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Contact Notice Card */}
                <div className="bg-amber-50/70 border border-amber-200/90 p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    For Inquiries & Payment Receipts
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-stone-800">
                    <a
                      href="tel:9929984009"
                      className="inline-flex items-center gap-1.5 hover:text-amber-700 transition-colors"
                    >
                      <Phone className="size-3.5 text-amber-600" />
                      +91 9929984009
                    </a>
                    <a
                      href="mailto:sarajfoundation001@gmail.com"
                      className="inline-flex items-center gap-1.5 hover:text-amber-700 transition-colors"
                    >
                      <Mail className="size-3.5 text-amber-600" />
                      sarajfoundation001@gmail.com
                    </a>
                  </div>
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
