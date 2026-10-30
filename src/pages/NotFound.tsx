import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found — Saraj Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-stone-900">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-stone-800">Page not found</h2>
          <p className="mt-2 text-sm text-stone-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="btn-primary inline-flex !px-6 !py-3 text-xs font-bold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
