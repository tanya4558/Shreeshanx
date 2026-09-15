import { FaTimes, FaTrashAlt, FaMinus, FaPlus, FaWhatsapp, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { formatINR } from "../../data/products.js";
import { BUSINESS, whatsappLink } from "../../data/business.js";
import "./CartDrawer.css";

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, count, clear } = useCart();

  const checkout = () => {
    const lines = items.map(
      (i) => `• ${i.name} × ${i.qty} = ${formatINR(i.price * i.qty)}`
    );
    const msg = [
      `Hello ${BUSINESS.name}, I'd like to place an order:`,
      "",
      ...lines,
      "",
      `Total: ${formatINR(total)}`,
      "",
      "Please confirm availability and delivery. Thank you!",
    ].join("\n");
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <>
      <div className={`cart__backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`cart ${open ? "show" : ""}`} aria-hidden={!open}>
        <header className="cart__head">
          <h3><FaShoppingBasket /> Your Cart {count > 0 && <span>({count})</span>}</h3>
          <button className="cart__close" onClick={() => setOpen(false)} aria-label="Close cart">
            <FaTimes />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="cart__empty">
            <span className="cart__empty-icon"><FaShoppingBasket /></span>
            <p>Your cart is empty.</p>
            <Link to="/shop" className="btn btn-primary" onClick={() => setOpen(false)}>
              Shop cocopeat
            </Link>
          </div>
        ) : (
          <>
            <div className="cart__items">
              {items.map((i) => (
                <div className="cart__item" key={i.id}>
                  <img src={i.image} alt={i.name} />
                  <div className="cart__item-info">
                    <h4>{i.name}</h4>
                    <span className="cart__item-price">{formatINR(i.price)}</span>
                    <div className="cart__qty">
                      <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease">
                        <FaMinus />
                      </button>
                      <span>{i.qty}</span>
                      <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase">
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <div className="cart__item-right">
                    <strong>{formatINR(i.price * i.qty)}</strong>
                    <button className="cart__remove" onClick={() => remove(i.id)} aria-label="Remove">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <footer className="cart__foot">
              <div className="cart__total">
                <span>Total</span>
                <strong>{formatINR(total)}</strong>
              </div>
              <button className="btn btn-primary btn-block cart__checkout" onClick={checkout}>
                <FaWhatsapp /> Order on WhatsApp
              </button>
              <button className="cart__clear" onClick={clear}>Clear cart</button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
