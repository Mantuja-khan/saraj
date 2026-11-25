import f1 from "./foundation_1.jpeg";
import f2 from "./foundation_2.jpeg";
import f3 from "./foundation_3.jpeg";
import f4 from "./foundation_4.jpeg";
import f5 from "./foundation_5.jpeg";
import f6 from "./foundation_6.jpeg";
import f7 from "./foundation_7.jpeg";
import f8 from "./foundation_8.jpeg";
import f9 from "./foundation_9.jpeg";
import f10 from "./foundation_10.jpeg";
import f11 from "./foundation_11.jpeg";
import f12 from "./foundation_12.jpeg";
import f13 from "./foundation_13.jpeg";
import f14 from "./foundation_14.jpeg";
import f15 from "./foundation_15.jpeg";
import f16 from "./foundation_16.jpeg";
import f17 from "./foundation_17.jpeg";
import f18 from "./foundation_18.jpeg";
import f19 from "./foundation_19.jpeg";
import f20 from "./foundation_20.jpeg";
import f21 from "./foundation_21.jpeg";
import f22 from "./foundation_22.jpeg";
import f23 from "./foundation_23.jpeg";
import f25 from "./foundation_25.jpeg";
import f26 from "./foundation_26.jpeg";
import f27 from "./foundation_27.jpeg";
import f28 from "./foundation_28.jpeg";
import f29 from "./foundation_29.jpeg";
import f30 from "./foundation_30.jpeg";
import f31 from "./foundation_31.jpeg";
import f33 from "./foundation_33.jpeg";
import f34 from "./foundation_34.jpeg";
import f35 from "./foundation_35.jpeg";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  tag: string;
  images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: "vitran",
    name: "Vitran",
    tag: "Distribution & Relief",
    description: "Distribution of essential rations, clothing, educational kits, and humanitarian aid to rural communities.",
    images: [
      { id: 15, src: f15, alt: "Vitran - Foundation 15", category: "Vitran" },
      { id: 16, src: f16, alt: "Vitran - Foundation 16", category: "Vitran" },
      { id: 7, src: f7, alt: "Vitran - Foundation 7", category: "Vitran" },
      { id: 6, src: f6, alt: "Vitran - Foundation 6", category: "Vitran" },
      { id: 8, src: f8, alt: "Vitran - Foundation 8", category: "Vitran" },
      { id: 2, src: f2, alt: "Vitran - Foundation 2", category: "Vitran" },
      { id: 1, src: f1, alt: "Vitran - Foundation 1", category: "Vitran" },
      { id: 23, src: f23, alt: "Vitran - Foundation 23", category: "Vitran" },
      { id: 25, src: f25, alt: "Vitran - Foundation 25", category: "Vitran" },
    ],
  },
  {
    id: "gau-sewa",
    name: "Gau Sewa",
    tag: "Animal Welfare",
    description: "Dedicated daily feeding, healthcare, shelter, and compassionate care for cows.",
    images: [
      { id: 33, src: f33, alt: "Gau Sewa - Foundation 33", category: "Gau Sewa" },
      { id: 31, src: f31, alt: "Gau Sewa - Foundation 31", category: "Gau Sewa" },
      { id: 12, src: f12, alt: "Gau Sewa - Foundation 12", category: "Gau Sewa" },
      { id: 11, src: f11, alt: "Gau Sewa - Foundation 11", category: "Gau Sewa" },
    ],
  },
  {
    id: "kabutar-sewa",
    name: "Kabutar Sewa",
    tag: "Bird Care & Feeding",
    description: "Providing clean grain feeding stations and fresh water for pigeons and local birds.",
    images: [
      { id: 19, src: f19, alt: "Kabutar Sewa - Foundation 19", category: "Kabutar Sewa" },
      { id: 20, src: f20, alt: "Kabutar Sewa - Foundation 20", category: "Kabutar Sewa" },
      { id: 21, src: f21, alt: "Kabutar Sewa - Foundation 21", category: "Kabutar Sewa" },
      { id: 22, src: f22, alt: "Kabutar Sewa - Foundation 22", category: "Kabutar Sewa" },
      { id: 3, src: f3, alt: "Kabutar Sewa - Foundation 3", category: "Kabutar Sewa" },
      { id: 4, src: f4, alt: "Kabutar Sewa - Foundation 4", category: "Kabutar Sewa" },
      { id: 5, src: f5, alt: "Kabutar Sewa - Foundation 5", category: "Kabutar Sewa" },
    ],
  },
  {
    id: "visit",
    name: "Visit",
    tag: "Field & Village Visits",
    description: "On-ground inspections, village interactions, and direct community welfare visits across underserved areas.",
    images: [
      { id: 10, src: f10, alt: "Visit - Foundation 10", category: "Visit" },
      { id: 9, src: f9, alt: "Visit - Foundation 9", category: "Visit" },
      { id: 29, src: f29, alt: "Visit - Foundation 29", category: "Visit" },
      { id: 28, src: f28, alt: "Visit - Foundation 28", category: "Visit" },
      { id: 27, src: f27, alt: "Visit - Foundation 27", category: "Visit" },
      { id: 26, src: f26, alt: "Visit - Foundation 26", category: "Visit" },
      { id: 35, src: f35, alt: "Visit - Foundation 35", category: "Visit" },
      { id: 34, src: f34, alt: "Visit - Foundation 34", category: "Visit" },
      { id: 30, src: f30, alt: "Visit - Foundation 30", category: "Visit" },
    ],
  },
];

/** Flattened list of all categorized gallery images */
export const foundationGalleryItems = galleryCategories.flatMap((cat) => cat.images);

/** Curated 6 images for homepage gallery showcase (diverse mix across categories) */
export const homeGalleryImages = [
  { id: 15, src: f15, alt: "Vitran - Relief Distribution", category: "Vitran" },
  { id: 1, src: f1, alt: "Vitran - Village Support", category: "Vitran" },
  { id: 33, src: f33, alt: "Gau Sewa - Compassionate Cow Care", category: "Gau Sewa" },
  { id: 11, src: f11, alt: "Gau Sewa - Nourishment & Care", category: "Gau Sewa" },
  { id: 19, src: f19, alt: "Kabutar Sewa - Bird Feeding", category: "Kabutar Sewa" },
  { id: 10, src: f10, alt: "Field Visit & Community Outreach", category: "Visit" },
];

export {
  f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
  f11, f12, f13, f14, f15, f16, f17, f18, f19, f20,
  f21, f22, f23, f25, f26, f27, f28, f29, f30,
  f31, f33, f34, f35,
};
