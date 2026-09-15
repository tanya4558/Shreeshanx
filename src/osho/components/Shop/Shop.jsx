import ProductCard from "../ProductCard/ProductCard.jsx";
import { PRODUCTS } from "../../data/products.js";
import { FaLeaf, FaTruck, FaShieldAlt } from "react-icons/fa";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <header className="shop__hero">
        <div className="container">
          <span className="eyebrow"><FaLeaf /> Shop SHREESHANX</span>
          <h1>Premium Cocopeat Powder</h1>
          <p>100% natural, low-EC, double-washed coco coir — pick your pack size.</p>
        </div>
      </header>

      <div className="shop__bar">
        <div className="container shop__bar-inner">
          <div><FaLeaf /> 100% Natural</div>
          <div><FaShieldAlt /> Low EC · pH Balanced</div>
          <div><FaTruck /> Pan-India Delivery</div>
        </div>
      </div>

      <div className="container section">
        <div className="shop__grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
