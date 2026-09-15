import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaTint,
  FaSeedling,
  FaLeaf,
  FaShieldAlt,
  FaTruck,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { PRODUCTS, BENEFITS, USES } from "../../data/products.js";
import { GALLERY } from "../../data/gallery.js";
import { BUSINESS, whatsappLink } from "../../data/business.js";
import "./Home.css";

const benefitIcon = {
  water: <FaTint />,
  root: <FaSeedling />,
  leaf: <FaLeaf />,
  shield: <FaShieldAlt />,
};

const REVIEWS = [
  { name: "Priya M.", role: "Terrace gardener", text: "Best cocopeat I've used — my seedlings shot up. Super fine and clean." },
  { name: "Arjun K.", role: "Hydroponics hobbyist", text: "The 10kg buffered pack is fantastic value. Consistent quality every time." },
  { name: "Meera S.", role: "Nursery owner", text: "We switched fully to Shreeshanx. Great water retention and fast delivery." },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow"><FaLeaf /> {BUSINESS.brandLine} · {BUSINESS.tagline}</span>
            <h1 className="hero__title">
              Grow more with
              <span className="hero__accent"> pure cocopeat</span>
            </h1>
            <p className="hero__lead">{BUSINESS.intro}</p>
            <div className="hero__cta">
              <Link to="/shop" className="btn btn-primary">
                Shop now <FaArrowRight />
              </Link>
              <a className="btn btn-ghost" href={whatsappLink()} target="_blank" rel="noreferrer">
                <FaWhatsapp /> Order on WhatsApp
              </a>
            </div>
            <ul className="hero__usps">
              <li><FaCheckCircle /> 100% Natural</li>
              <li><FaCheckCircle /> Low EC · Double washed</li>
              <li><FaCheckCircle /> Fast delivery</li>
            </ul>
          </div>

          <div className="hero__media">
            <div className="hero__blob" />
            <img src="/osho/cocopeat-5kg.jpg" alt="SHREESHANX Cocopeat Powder 5 KG" />
            <div className="hero__rating">
              <div className="hero__stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              <span><strong>4.9/5</strong> from 600+ happy gardeners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust">
        <div className="container trust__inner">
          <div><FaLeaf /> 100% Organic Coir</div>
          <div><FaTint /> 8× Water Retention</div>
          <div><FaShieldAlt /> Low EC & pH Balanced</div>
          <div><FaTruck /> Pan-India Delivery</div>
        </div>
      </div>

      {/* Products */}
      <section className="section" id="shop">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our products</span>
            <h2>Cocopeat, in every size you need</h2>
            <p>From a handful for your balcony pots to bulk packs for the nursery.</p>
          </div>
          <div className="home__grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits">
        <div className="container benefits__inner">
          <div className="benefits__media">
            <img src="/osho/texture-7kg.jpg" alt="Cocopeat texture in hand" />
          </div>
          <div className="benefits__copy">
            <span className="eyebrow">Why cocopeat</span>
            <h2>Healthier soil, happier plants</h2>
            <p className="benefits__lead">
              Cocopeat is a natural, renewable growing medium made from coconut
              husk — the smarter, cleaner alternative to peat and heavy soil.
            </p>
            <div className="benefits__grid">
              {BENEFITS.map((b) => (
                <div className="benefit" key={b.title}>
                  <span className="benefit__icon">{benefitIcon[b.icon]}</span>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="section uses">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Perfect for</span>
            <h2>One medium, endless uses</h2>
          </div>
          <div className="uses__grid">
            {USES.map((u) => (
              <div className="use" key={u}>
                <FaSeedling />
                <span>{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Gallery</span>
            <h2>See it, feel the quality</h2>
          </div>
          <div className="gallery__grid">
            {GALLERY.map((g, i) => (
              <figure className={`gallery__item gallery__item--${i % 3}`} key={g.src}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery banner */}
      {/* <section className="deliver">
        <div className="container deliver__inner">
          <img src="/osho/banner-delivery.jpg" alt="Fast delivery" />
          <div className="deliver__copy">
            <h2>Fresh stock, delivered fast</h2>
            <p>
              Order today and get farm-fresh cocopeat delivered across India.
              Bulk and wholesale enquiries welcome.
            </p>
            <a className="btn btn-earth" href={whatsappLink()} target="_blank" rel="noreferrer">
              <FaWhatsapp /> Chat & order now
            </a>
          </div>
        </div>
      </section> */}

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
          <h2>Ready to grow better?</h2>
          <p>Get premium cocopeat delivered to your door. Message us for prices & bulk orders.</p>
          <div className="cta__btns">
            <Link to="/shop" className="btn btn-earth">Shop cocopeat <FaArrowRight /></Link>
            <a className="btn btn-ghost cta__ghost" href={whatsappLink()} target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
