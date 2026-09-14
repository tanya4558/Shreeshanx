import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { PRODUCTS, CATEGORIES } from "../../data/products.js";
import { whatsappLink } from "../../data/business.js";
import "./Shop.css";

export default function Shop() {
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <div className="shop">
      <section className="shop__hero">
        <div className="container">
          <span className="eyebrow">Our store</span>
          <h1>Shop Shreeshanx</h1>
          <p>Triple-washed cocopeat and organic soil boosters — grower-ready, delivered across India.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shop__filters">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={`shop__chip ${cat === c.key ? "is-active" : ""}`}
                onClick={() => setCat(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="shop__grid">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="shop__help">
            <p>Need bulk pricing or a custom pack size?</p>
            <a className="btn btn-primary" href={whatsappLink("Hi Shreeshanx, I'd like bulk pricing details.")} target="_blank" rel="noreferrer">
              <FaWhatsapp /> Chat with us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
