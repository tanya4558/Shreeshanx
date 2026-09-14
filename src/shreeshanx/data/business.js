// Central business / brand information for SHREESHANX
export const BUSINESS = {
  name: "SHREESHANX",
  brandLine: "AGRO",
  tagline: "Natural · Organic · Sustainable",
  intro:
    "Premium triple-washed cocopeat and organic soil boosters for healthier roots, better water retention and greener growth — made in India for every grower.",
  owner: "Rudra Gabani",
  phone: "8238281373",
  phoneIntl: "918238281373",
  email: "rdrgabani@gmail.com",
  address: {
    line1: "Sy No. 258, Lasa Compound",
    line2: "Near Full Market, Umiyadham, Katargam",
    city: "Surat",
    state: "Gujarat",
    pincode: "395008",
    country: "India",
  },
};

export const fullAddress = [
  BUSINESS.address.line1,
  BUSINESS.address.line2,
  `${BUSINESS.address.city}, ${BUSINESS.address.state} - ${BUSINESS.address.pincode}`,
  BUSINESS.address.country,
].join(", ");

export const whatsappLink = (message) =>
  `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(
    message || "Hi SHREESHANX, I'd like to know more about your cocopeat products."
  )}`;

export const telLink = `tel:+${BUSINESS.phoneIntl}`;
export const mailLink = `mailto:${BUSINESS.email}`;
