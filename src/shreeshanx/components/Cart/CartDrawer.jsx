import { FaTimes, FaTrash, FaWhatsapp, FaShoppingBag, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { formatINR } from "../../data/products.js";
import { BUSINESS, whatsappLink } from "../../data/business.js";
import "./CartDrawer.css";

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, count, clear } = useCart();

  const checkout = () => {
    if (!items.length) return;
    const lines = items.map(
      (i) => `• ${i.name} × ${i.qty} — ${formatINR(i.price * i.qty)}`
    );
    const msg = [
      `Hello ${BUSINESS.name}, I'd like to order:`,
      "",
      ...lines,
      "",
      `Total: ${formatINR(total)}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <>
      <div className={`scart__backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`scart ${open ? "show" : ""}`} aria-hidden={!open}>
        <header className="scart__head">
          <h3><FaShoppingBag /> Your Cart {count > 0 && <span>({count})</span>}</h3>
          <button onClick={() => setOpen(false)} aria-label="Close cart"><FaTimes /></button>
        </header>

        {items.length === 0 ? (
          <div className="scart__empty">
            <span className="scart__empty-icon"><FaShoppingBag /></span>
            <p>Your cart is empty.</p>
            <Link to="/shop" className="btn btn-primary" onClick={() => setOpen(false)}>
              Browse products
            </Link>
          </div>
        ) : (
          <>
            <div className="scart__items">
              {items.map((i) => (
                <div className="scart__item" key={i.id}>
                  <img src={i.image} alt={i.name} />
                  <div className="scart__info">
                    <strong>{i.name}</strong>
                    <span className="scart__wt">{i.weight}</span>
                    <div className="scart__qty">
                      <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease"><FaMinus /></button>
                      <span>{i.qty}</span>
                      <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase"><FaPlus /></button>
                    </div>
                  </div>
                  <div className="scart__right">
                    <span className="scart__price">{formatINR(i.price * i.qty)}</span>
                    <button className="scart__remove" onClick={() => remove(i.id)} aria-label="Remove"><FaTrash /></button>
                  </div>
                </div>
              ))}
            </div>

            <footer className="scart__foot">
              <div className="scart__total">
                <span>Total</span>
                <strong>{formatINR(total)}</strong>
              </div>
              <button className="btn btn-primary btn-block" onClick={checkout}>
                <FaWhatsapp /> Checkout on WhatsApp
              </button>
              <button className="scart__clear" onClick={clear}>Clear cart</button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
