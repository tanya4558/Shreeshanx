import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaLeaf } from "react-icons/fa";
import {
  BUSINESS,
  fullAddress,
  whatsappLink,
  telLink,
  mailLink,
} from "../../data/business.js";
import "./Contact.css";

export default function Contact() {
  const { address, trademark } = BUSINESS;
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const msg = [
      `Hello ${BUSINESS.name},`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      "",
      form.message || "I'd like to enquire about your cocopeat powder.",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <div className="contact">
      <header className="contact__hero">
        <div className="container">
          <span className="eyebrow"><FaLeaf /> Get in touch</span>
          <h1>We'd love to help you grow</h1>
          <p>Questions, bulk orders or delivery — reach {BUSINESS.name} directly.</p>
        </div>
      </header>

      <div className="container section contact__grid">
        <div className="contact__cards">
          <a className="contact__card" href={whatsappLink()} target="_blank" rel="noreferrer">
            <span className="contact__icon contact__icon--wa"><FaWhatsapp /></span>
            <div>
              <h4>WhatsApp</h4>
              <p>Chat with us instantly</p>
              <strong>+91 {BUSINESS.phone}</strong>
            </div>
          </a>
          <a className="contact__card" href={telLink}>
            <span className="contact__icon"><FaPhoneAlt /></span>
            <div>
              <h4>Call us</h4>
              <p>Mon–Sat, 9am–7pm</p>
              <strong>+91 {BUSINESS.phone}</strong>
            </div>
          </a>
          <a className="contact__card" href={mailLink}>
            <span className="contact__icon"><FaEnvelope /></span>
            <div>
              <h4>Email</h4>
              <p>We reply within a day</p>
              <strong>{BUSINESS.email}</strong>
            </div>
          </a>
          <div className="contact__card contact__card--static">
            <span className="contact__icon"><FaMapMarkerAlt /></span>
            <div>
              <h4>Visit / Ship from</h4>
              <p>{address.line1}, {address.line2}</p>
              <strong>{address.city}, {address.state} - {address.pincode}</strong>
            </div>
          </div>
          <div className="contact__card contact__card--static">
            <span className="contact__icon"><FaUser /></span>
            <div>
              <h4>Proprietor</h4>
              <p>SHREESHANX AGRO</p>
              <strong>{BUSINESS.proprietor}</strong>
            </div>
          </div>
        </div>

        <div className="contact__side">
          <form className="contact__form" onSubmit={submit}>
            <h3>Send an enquiry</h3>
            <label>
              Your name
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Ramesh Patel"
              />
            </label>
            <label>
              Phone number
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="10-digit mobile"
              />
            </label>
            <label>
              Message
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you need (size, quantity, delivery city)…"
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </form>

          <div className="contact__map">
            <iframe
              title={`${BUSINESS.name} — Punagam, Surat`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* <div className="container contact__tm-wrap">
        <div className="contact__tm">
          <div className="contact__tm-head">
            <span className="contact__tm-badge">{trademark.mark}™</span>
            <div>
              <h3>Trademark &amp; ownership</h3>
              <p>Registered under the Trade Marks Act, 1999.</p>
            </div>
          </div>
          <ul>
            <li><span>Brand</span><strong>{trademark.mark} ({trademark.type})</strong></li>
            <li><span>Application No.</span><strong>{trademark.applicationNo}</strong></li>
            <li><span>Class</span><strong>{trademark.class}</strong></li>
            <li><span>Filed on</span><strong>{trademark.applicationDate}</strong></li>
            <li><span>Status</span><strong>{trademark.status}</strong></li>
            <li><span>Proprietor</span><strong>{trademark.proprietor}</strong></li>
            <li className="contact__tm-goods"><span>Goods</span><strong>{trademark.goods}</strong></li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
