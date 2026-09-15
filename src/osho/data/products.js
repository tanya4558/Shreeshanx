export const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const PRODUCTS = [
  {
    id: "cocopeat-5kg",
    name: "Cocopeat Powder 5 KG",
    weight: "5 KG",
    //category: "cocopeat",
    price: 179,
    mrp: 299,
    rating: 4.8,
    reviews: 132,
    badge: "Bestseller",
    image: "/osho/cocopeat-5kg.jpg",
    short:
      "100% pure & natural cocopeat powder — the perfect all-round grow medium.",
    tags: ["Triple washed", "Low EC"],
  },
  // {
  //   id: "cocopeat-7kg",
  //   name: "Cocopeat Powder 7 KG",
  //   weight: "7 KG",
  //   price: 199,
  //   mrp: 349,
  //   rating: 4.9,
  //   reviews: 208,
  //   badge: "Bestseller",
  //   image: "/osho/cocopeat-7kg.jpg",
  //   short: "The all-rounder pack for terrace gardens and mid-size planters.",
  //   tags: ["100% Natural", "High quality"],
  // },
  {
    id: "cocopeat-10kg",
    name: "Cocopeat Powder 10 KG",
    weight: "10 KG",
    // category: "cocopeat",
    price: 319,
    mrp: 549,
    rating: 4.9,
    reviews: 176,
    badge: "Best value",
    image: "/osho/cocopeat-10kg.jpg",
    short:
      "Triple washed & buffered — ideal for potting and hydroponics at scale.",
    tags: ["Buffered", "Hydroponics"],
  },
  {
    id: "cocopeat-block",
    name: "Cocopeat Block 1 KG",
    weight: "1 KG",
    price: 99,
    mrp: 179,
    rating: 5.0,
    reviews: 94,
    badge: "Compact",
    image: "/osho/cocopeat-block.jpg",
    short: "Compressed block that expands up to 15L — easy to store and carry.",
    tags: ["Expands 15L", "Eco-friendly"],
  },
  {
    id: "neem-cake",
    name: "Neem Cake Powder 1 KG",
    weight: "1 KG",
    category: "boosters",
    price: 149,
    mrp: 249,
    rating: 4.9,
    reviews: 132,
    badge: "Organic",
    image: "/osho/neem-cake.jpg",
    short:
      "Natural soil conditioner rich in organic nutrients — protects roots naturally.",
    tags: ["100% Organic", "Soil conditioner"],
  },
  {
    id: "epsom-salt",
    name: "Epsom Salt for Plants 1 KG",
    weight: "1 KG",
    category: "boosters",
    price: 129,
    mrp: 199,
    rating: 4.8,
    reviews: 98,
    badge: "Plant food",
    image: "/osho/epsom-salt.jpg",
    short:
      "Magnesium-rich boost for greener leaves, stronger stems and better blooms.",
    tags: ["Magnesium", "Greener leaves"],
  },
];

export const getById = (id) => PRODUCTS.find((p) => p.id === id);

export const BENEFITS = [
  {
    icon: "water",
    title: "Superb Water Retention",
    text: "Holds up to 8× its weight in water, so roots stay moist longer.",
  },
  {
    icon: "root",
    title: "Stronger Root Growth",
    text: "Light, airy structure lets roots breathe and spread freely.",
  },
  {
    icon: "leaf",
    title: "100% Natural & Organic",
    text: "Made from pure coconut coir — no chemicals, fully renewable.",
  },
  {
    icon: "shield",
    title: "Low EC, Double Washed",
    text: "Balanced pH and low salts, safe even for delicate seedlings.",
  },
];

export const USES = [
  "Seed starting & germination",
  "Potting & planting mix",
  "Soil conditioner",
  "Terrace & kitchen gardens",
  "Hydroponics & nurseries",
  "Lawn & bed preparation",
];
