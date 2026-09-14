import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBag, FaBars, FaTimes, FaLeaf } from "react-icons/fa";
import { useCart } from "../../context/CartContext.jsx";
import { BUSINESS } from "../../data/business.js";
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
    <header className={`snav ${scrolled ? "snav--scrolled" : ""}`}>
      <div className="snav__strip">
        <FaLeaf /> Natural · Organic · Sustainable — Fast delivery across India
      </div>
      <div className="container snav__inner">
        <Link to="/" className="snav__brand" onClick={() => setOpen(false)}>
          <span className="snav__mark"><FaLeaf /></span>
          <span className="snav__brandtext">
            <span className="snav__name">{BUSINESS.name}</span>
            <span className="snav__sub">{BUSINESS.brandLine}</span>
          </span>
        </Link>

        <nav className="snav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `snav__link ${isActive ? "is-active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="snav__actions">
          <button className="snav__cart" onClick={() => setCartOpen(true)} aria-label="Open cart">
            <FaShoppingBag />
            {count > 0 && <span className="snav__badge">{count}</span>}
          </button>
          <Link to="/shop" className="btn btn-primary snav__shopbtn">Shop now</Link>
          <button className="snav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`snav__backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`snav__drawer ${open ? "show" : ""}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `snav__drawer-link ${isActive ? "is-active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/shop" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
          Shop now
        </Link>
      </aside>
    </header>
  );
}
