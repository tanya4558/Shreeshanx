// Product catalogue for SHREESHANX AGRO
export const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const CATEGORIES = [
  { key: "all", label: "All products" },
  { key: "cocopeat", label: "Coco Peat" },
  { key: "boosters", label: "Soil Boosters" },
];

export const PRODUCTS = [
  {
    id: "cocopeat-5kg",
    name: "Cocopeat Powder 5 KG",
    weight: "5 KG",
    category: "cocopeat",
    price: 179,
    mrp: 299,
    rating: 4.9,
    reviews: 246,
    badge: "Bestseller",
    image: "/shreeshanx/cocopeat-5kg.jpg",
    short: "100% pure & natural cocopeat powder — the perfect all-round grow medium.",
    tags: ["Triple washed", "Low EC"],
  },
  {
    id: "cocopeat-10kg",
    name: "Cocopeat Powder 10 KG",
    weight: "10 KG",
    category: "cocopeat",
    price: 319,
    mrp: 549,
    rating: 5.0,
    reviews: 188,
    badge: "Best value",
    image: "/shreeshanx/cocopeat-10kg.jpg",
    short: "Triple washed & buffered — ideal for potting and hydroponics at scale.",
    tags: ["Buffered", "Hydroponics"],
  },
  {
    id: "cocopeat-block",
    name: "Cocopeat Block 1 KG",
    weight: "1 KG",
    category: "cocopeat",
    price: 99,
    mrp: 179,
    rating: 4.8,
    reviews: 154,
    badge: "Compact",
    image: "/shreeshanx/cocopeat-block.jpg",
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
    image: "/shreeshanx/neem-cake.jpg",
    short: "Natural soil conditioner rich in organic nutrients — protects roots naturally.",
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
    image: "/shreeshanx/epsom-salt.jpg",
    short: "Magnesium-rich boost for greener leaves, stronger stems and better blooms.",
    tags: ["Magnesium", "Greener leaves"],
  },
];

export const getById = (id) => PRODUCTS.find((p) => p.id === id);

export const FEATURES = [
  {
    icon: "wash",
    title: "Triple Washed & Buffered",
    text: "Low salts and balanced pH — safe even for delicate seedlings.",
  },
  {
    icon: "water",
    title: "8× Water Retention",
    text: "Holds moisture longer so roots stay hydrated between watering.",
  },
  {
    icon: "leaf",
    title: "100% Natural & Organic",
    text: "Pure coconut coir and organic boosters — zero harmful chemicals.",
  },
  {
    icon: "truck",
    title: "Fast Pan-India Delivery",
    text: "Packed fresh and shipped quickly, straight from Surat, Gujarat.",
  },
];

export const USES = [
  "Potting & grow mix",
  "Seed starting",
  "Hydroponics",
  "Terrace & home gardens",
  "Nurseries & farming",
  "Soil conditioning",
];
