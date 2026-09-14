import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import { BUSINESS, fullAddress, whatsappLink, telLink, mailLink } from "../../data/business.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="sfoot">
      <div className="container sfoot__grid">
        <div className="sfoot__brand">
          <Link to="/" className="sfoot__logo">
            <span className="sfoot__mark"><FaLeaf /></span>
            <span className="sfoot__name">
              {BUSINESS.name}<i>{BUSINESS.brandLine}</i>
            </span>
          </Link>
          <p>{BUSINESS.intro}</p>
          <a className="sfoot__wa" href={whatsappLink()} target="_blank" rel="noreferrer">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        <div className="sfoot__col">
          <h5>Explore</h5>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="sfoot__col">
          <h5>Products</h5>
          <Link to="/shop">Cocopeat Powder</Link>
          <Link to="/shop">Cocopeat Block</Link>
          <Link to="/shop">Neem Cake</Link>
          <Link to="/shop">Epsom Salt</Link>
        </div>

        <div className="sfoot__col sfoot__contact">
          <h5>Contact</h5>
          <a href={telLink}><FaPhoneAlt /> +91 {BUSINESS.phone}</a>
          <a href={mailLink}><FaEnvelope /> {BUSINESS.email}</a>
          <span><FaMapMarkerAlt /> {fullAddress}</span>
        </div>
      </div>

      <div className="sfoot__bar">
        <div className="container sfoot__bar-inner">
          <span>© {new Date().getFullYear()} {BUSINESS.name} {BUSINESS.brandLine}. All rights reserved.</span>
          <span>Proprietor: {BUSINESS.owner}</span>
        </div>
      </div>
    </footer>
  );
}
