import { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";
import {
  BUSINESS,
  fullAddress,
  whatsappLink,
  telLink,
  mailLink,
} from "../../data/business.js";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const msg = [
      `Hi ${BUSINESS.name}, I'd like to enquire.`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank");
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="contact">
      <section className="contact__hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Let's talk cocopeat</h1>
          <p>Questions, bulk orders or delivery — we're happy to help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact__grid">
          <div className="contact__cards">
            <a className="ccard" href={whatsappLink()} target="_blank" rel="noreferrer">
              <span className="ccard__icon ccard__icon--wa"><FaWhatsapp /></span>
              <div>
                <h4>WhatsApp</h4>
                <p>+91 {BUSINESS.phone}</p>
              </div>
            </a>
            <a className="ccard" href={telLink}>
              <span className="ccard__icon"><FaPhoneAlt /></span>
              <div>
                <h4>Call us</h4>
                <p>+91 {BUSINESS.phone}</p>
              </div>
            </a>
            <a className="ccard" href={mailLink}>
              <span className="ccard__icon"><FaEnvelope /></span>
              <div>
                <h4>Email</h4>
                <p>{BUSINESS.email}</p>
              </div>
            </a>
            <div className="ccard ccard--static">
              <span className="ccard__icon"><FaMapMarkerAlt /></span>
              <div>
                <h4>Visit / Ships from</h4>
                <p>{fullAddress}</p>
              </div>
            </div>
            <div className="ccard ccard--static">
              <span className="ccard__icon"><FaUser /></span>
              <div>
                <h4>Proprietor</h4>
                <p>{BUSINESS.owner}</p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={submit}>
            <h3>Send an enquiry</h3>
            <p className="contact__form-sub">We'll reply on WhatsApp.</p>
            <label>
              <span>Your name</span>
              <input type="text" required value={form.name} onChange={set("name")} placeholder="Full name" />
            </label>
            <label>
              <span>Phone number</span>
              <input type="tel" required value={form.phone} onChange={set("phone")} placeholder="10-digit mobile" />
            </label>
            <label>
              <span>Message</span>
              <textarea rows="4" required value={form.message} onChange={set("message")} placeholder="What do you need?" />
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              <FaPaperPlane /> Send via WhatsApp
            </button>
          </form>
        </div>

        <div className="container contact__map">
          <iframe
            title="Shreeshanx location"
            src="https://www.google.com/maps?q=Katargam,Surat,Gujarat%20395008&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
