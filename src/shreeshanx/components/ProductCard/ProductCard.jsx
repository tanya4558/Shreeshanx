import { FaShoppingBag, FaCheck } from "react-icons/fa";
import { formatINR } from "../../data/products.js";
import { useCart } from "../../context/CartContext.jsx";
import { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const off = Math.round((1 - product.price / product.mrp) * 100);

  const onAdd = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="scard">
      <div className="scard__media">
        {product.badge && <span className="scard__badge">{product.badge}</span>}
        <span className="scard__off">-{off}%</span>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="scard__body">
        <div className="scard__tags">
          {product.tags.map((t) => (
            <span className="scard__tag" key={t}>{t}</span>
          ))}
        </div>
        <h3 className="scard__name">{product.name}</h3>
        <div className="scard__rate">
          <span className="stars">★★★★★</span>
          <span>{product.rating} · {product.reviews} reviews</span>
        </div>
        <p className="scard__desc">{product.short}</p>

        <div className="scard__foot">
          <div className="scard__price">
            <span className="scard__now">{formatINR(product.price)}</span>
            <span className="scard__mrp">{formatINR(product.mrp)}</span>
          </div>
          <button
            className={`scard__add ${added ? "is-added" : ""}`}
            onClick={onAdd}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? <FaCheck /> : <FaShoppingBag />}
            {added ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
