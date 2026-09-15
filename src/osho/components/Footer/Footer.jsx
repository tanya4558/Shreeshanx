import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import { BUSINESS, whatsappLink, telLink, mailLink } from "../../data/business.js";
import "./Footer.css";

export default function Footer() {
  const { address, trademark } = BUSINESS;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__mark"><FaLeaf /></span>
            <div>
              <span className="footer__name">SHREESHANX AGRO</span>
              <span className="footer__tag">Premium Triple-Washed Cocopeat Powder</span>
            </div>
          </div>
          <p className="footer__intro">{BUSINESS.intro}</p>
          <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noreferrer">
            <FaWhatsapp /> Order on WhatsApp
          </a>
        </div>

        <div className="footer__col">
          <h4>Shop</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">All products</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Reach us</h4>
          <a href={telLink}><FaPhoneAlt /> +91 {BUSINESS.phone}</a>
          <a href={mailLink}><FaEnvelope /> {BUSINESS.email}</a>
          <span className="footer__addr">
            <FaMapMarkerAlt />
            {address.line1}, {address.line2}, {address.city}, {address.state} - {address.pincode}
          </span>
        </div>
      </div>

      {/* <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p>
            {trademark.mark}™ · {trademark.class} · App. No. {trademark.applicationNo} · Proprietor: {trademark.proprietor}
          </p>
        </div>
      </div> */}
    </footer>
  );
}
