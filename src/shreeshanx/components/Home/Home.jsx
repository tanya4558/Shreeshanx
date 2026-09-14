import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaTint,
  FaLeaf,
  FaTruck,
  FaRecycle,
  FaSeedling,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { PRODUCTS, FEATURES, USES } from "../../data/products.js";
import { GALLERY } from "../../data/gallery.js";
import { BUSINESS, whatsappLink } from "../../data/business.js";
import "./Home.css";

const iconMap = {
  wash: <FaRecycle />,
  water: <FaTint />,
  leaf: <FaLeaf />,
  truck: <FaTruck />,
};

const REVIEWS = [
  { name: "Priya M.", role: "Terrace gardener", text: "Best cocopeat I've used — my seedlings shot up. Super fine and clean." },
  { name: "Arjun K.", role: "Hydroponics hobbyist", text: "The 10kg buffered pack is fantastic value. Consistent quality every time." },
  { name: "Meera S.", role: "Nursery owner", text: "We switched fully to Shreeshanx. Great water retention and fast delivery." },
];

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);
  const spotlight = PRODUCTS.find((p) => p.id === "cocopeat-10kg");

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__glow" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">{BUSINESS.tagline}</span>
            <h1 className="hero__title">
              Grow more with <span className="hero__hl">pure cocopeat</span>
            </h1>
            <p className="hero__lead">{BUSINESS.intro}</p>
            <div className="hero__cta">
              <Link to="/shop" className="btn btn-primary">
                Shop products <FaArrowRight />
              </Link>
              <a className="btn btn-ghost" href={whatsappLink()} target="_blank" rel="noreferrer">
                <FaWhatsapp /> Order on WhatsApp
              </a>
            </div>
            <div className="hero__trust">
              <span><FaCheckCircle /> Triple washed</span>
              <span><FaCheckCircle /> Low EC · pH balanced</span>
              <span><FaCheckCircle /> Made in India</span>
            </div>
          </div>

          <div className="hero__media">
            <img src="/shreeshanx/cocopeat-5kg.jpg" alt="Shreeshanx cocopeat powder" />
            <div className="hero__rating">
              <span className="stars">★★★★★</span>
              <div>
                <strong>4.9/5</strong>
                <span>800+ happy growers</span>
              </div>
            </div>
            <div className="hero__pill"><FaSeedling /> 100% Natural</div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marq">
        <div className="marq__track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="marq__row" key={i}>
              <span>Triple Washed & Buffered</span><i>◆</i>
              <span>8× Water Retention</span><i>◆</i>
              <span>Low EC</span><i>◆</i>
              <span>100% Organic</span><i>◆</i>
              <span>Fast Delivery</span><i>◆</i>
              <span>Made in India</span><i>◆</i>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="section features">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Shreeshanx</span>
            <h2>Built for stronger roots</h2>
            <p>Consistent, clean and grower-ready — every single pack.</p>
          </div>
          <div className="features__grid">
            {FEATURES.map((f) => (
              <div className="feat" key={f.title}>
                <span className="feat__icon">{iconMap[f.icon]}</span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section products">
        <div className="container">
          <div className="products__head">
            <div>
              <span className="eyebrow">Shop bestsellers</span>
              <h2>Our products</h2>
            </div>
            <Link to="/shop" className="products__all">
              View all <FaArrowRight />
            </Link>
          </div>
          <div className="products__grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight */}
      {spotlight && (
        <section className="section spotlight">
          <div className="container spotlight__inner">
            <div className="spotlight__media">
              <img src={spotlight.image} alt={spotlight.name} />
            </div>
            <div className="spotlight__copy">
              <span className="eyebrow">Grower favourite</span>
              <h2>Premium 10 KG — triple washed & buffered</h2>
              <p>Our best value pack for serious growers. Ready-to-use, low-EC coco medium ideal for potting mixes and hydroponics.</p>
              <ul className="spotlight__uses">
                {USES.map((u) => (
                  <li key={u}><FaCheckCircle /> {u}</li>
                ))}
              </ul>
              <Link to="/shop" className="btn btn-primary">
                Shop the 10 KG pack <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section gallery">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The range</span>
            <h2>Natural. Organic. Sustainable.</h2>
          </div>
          <div className="gallery__grid">
            {GALLERY.map((g, i) => (
              <figure className={`gallery__item ${i === 0 ? "gallery__item--big" : ""}`} key={g.src}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section reviews">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Loved by growers</span>
            <h2>What customers say</h2>
          </div>
          <div className="reviews__grid">
            {REVIEWS.map((r) => (
              <div className="review" key={r.name}>
                <span className="stars review__stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                <p>“{r.text}”</p>
                <div className="review__by">
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2>Ready to grow greener?</h2>
            <p>Message us for pricing, bulk orders and pan-India delivery.</p>
          </div>
          <a className="btn btn-dark" href={whatsappLink()} target="_blank" rel="noreferrer">
            <FaWhatsapp /> Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
