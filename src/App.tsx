import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BrandIntroAnimation } from "@/components/site/BrandIntroAnimation";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import Gallery from "@/pages/Gallery";
import Initiatives from "@/pages/Initiatives";
import SpecialChild from "@/pages/initiatives/SpecialChild";
import WomenEmpowerment from "@/pages/initiatives/WomenEmpowerment";
import Livelihood from "@/pages/initiatives/Livelihood";
import Advocacy from "@/pages/initiatives/Advocacy";
import AgedCare from "@/pages/initiatives/AgedCare";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BrandIntroAnimation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/initiatives/special-child" element={<SpecialChild />} />
        <Route path="/initiatives/women-empowerment" element={<WomenEmpowerment />} />
        <Route path="/initiatives/livelihood" element={<Livelihood />} />
        <Route path="/initiatives/advocacy" element={<Advocacy />} />
        <Route path="/initiatives/aged-care" element={<AgedCare />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
