import { FaPlus, FaStar } from "react-icons/fa";
import { formatINR } from "../../data/products.js";
import { useCart } from "../../context/CartContext.jsx";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const off = Math.round((1 - product.price / product.mrp) * 100);

  return (
    <article className="pcard">
      <div className="pcard__media">
        {product.badge && <span className="pcard__badge">{product.badge}</span>}
        <span className="pcard__off">{off}% OFF</span>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="pcard__body">
        <div className="pcard__tags">
          {product.tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
        <h3 className="pcard__name">{product.name}</h3>
        <div className="pcard__rate">
          <FaStar />
          <span>{product.rating}</span>
          <span className="pcard__reviews">({product.reviews})</span>
        </div>
        <p className="pcard__desc">{product.short}</p>

        <div className="pcard__foot">
          <div className="pcard__price">
            <span className="pcard__now">{formatINR(product.price)}</span>
            <span className="pcard__mrp">{formatINR(product.mrp)}</span>
          </div>
          <button
            className="pcard__add"
            onClick={() => add(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <FaPlus /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
