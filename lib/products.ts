export interface Product {
  id: string;
  name: string;
  description: string;
  colorHex: string;
  colorLight: string;
  price: number; // in cents USD
  priceDisplay: string;
  tagline: string;
}

export const products: Product[] = [
  {
    id: "negro",
    name: "Negro",
    description: "Cobertura intensa. Ideal para canas muy marcadas y cabello oscuro.",
    colorHex: "#1C1C1C",
    colorLight: "#4A4A4A",
    price: 2999, // $29.99 — UPDATE BEFORE LAUNCH
    priceDisplay: "$29.99",
    tagline: "Profundo y duradero",
  },
  {
    id: "castano-oscuro",
    name: "Castaño Oscuro",
    description: "Tono natural oscuro. Resultado elegante y sofisticado.",
    colorHex: "#3B1F0E",
    colorLight: "#6B3A22",
    price: 2999,
    priceDisplay: "$29.99",
    tagline: "Elegante y sofisticado",
  },
  {
    id: "castano-claro",
    name: "Castaño Claro",
    description: "Tono cálido y luminoso. Perfecto para un look natural y rejuvenecido.",
    colorHex: "#7B4F2E",
    colorLight: "#A67A54",
    price: 2999,
    priceDisplay: "$29.99",
    tagline: "Cálido y luminoso",
  },
  {
    id: "marron",
    name: "Marrón",
    description: "El clásico marrón natural. Versátil y favorecedor para todo tipo de cabello.",
    colorHex: "#5C3317",
    colorLight: "#8B5E3C",
    price: 2999,
    priceDisplay: "$29.99",
    tagline: "Natural y versátil",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
