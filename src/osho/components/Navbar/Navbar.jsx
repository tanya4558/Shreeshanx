import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBasket, FaBars, FaTimes, FaLeaf, FaPhoneAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext.jsx";
import { BUSINESS, telLink } from "../../data/business.js";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/shop", label: "Shop" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__top">
        <div className="container nav__top-inner">
          <span><FaLeaf /> 100% Natural Cocopeat · Fast delivery across India</span>
          <a href={telLink}><FaPhoneAlt /> +91 {BUSINESS.phone}</a>
        </div>
      </div>

      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark"><FaLeaf /></span>
          <span className="nav__brandtext">
            <span className="nav__logo">SHREESHANX</span>
            <span className="nav__sub">AGRO</span>
          </span>
        </Link>

        <nav className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__cart"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <FaShoppingBasket />
            {count > 0 && <span className="nav__badge">{count}</span>}
          </button>
          <button
            className="nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`nav__backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`nav__drawer ${open ? "show" : ""}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `nav__drawer-link ${isActive ? "is-active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <a className="btn btn-primary btn-block" href={telLink}>
          <FaPhoneAlt /> Call to order
        </a>
      </aside>
    </header>
  );
}
