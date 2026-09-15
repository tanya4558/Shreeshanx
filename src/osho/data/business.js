// Central business / brand information for OSHO ENTERPRISE
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
  // trademark: {
  //   mark: "OSHO ENTERPRISE",
  //   type: "Word Mark",
  //   applicationNo: "7989574",
  //   class: "Class 31",
  //   applicationDate: "11 September 2026",
  //   status: "Ready for Examination",
  //   proprietor: "Bhavanaben Sureshbhai Satani",
  //   goods:
  //     "Raw and unprocessed agricultural, horticultural & forestry products; grains and seeds; fresh fruits, vegetables & herbs; natural plants and flowers; bulbs, seedlings and seeds for planting.",
  // },
};

export const fullAddress = [
  BUSINESS.address.line1,
  BUSINESS.address.line2,
  `${BUSINESS.address.city}, ${BUSINESS.address.state} - ${BUSINESS.address.pincode}`,
  BUSINESS.address.country,
].join(", ");

export const whatsappLink = (message) =>
  `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(
    message ||
      "Hi SHREESHANX, I'd like to know more about your cocopeat products.",
  )}`;

export const telLink = `tel:+${BUSINESS.phoneIntl}`;
export const mailLink = `mailto:${BUSINESS.email}`;
