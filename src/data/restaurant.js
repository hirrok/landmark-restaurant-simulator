// ============================================================
// LANDMARK RESTAURANT SIMULATOR — Content Data
// arch-ember-restaurant-001 | Aurora Digital Foundry
// ============================================================
// DEMO DISCLAIMER: Demonstration environment.
// Representative business archetype. Not a real client.
// No real customer data. No real business credentials.
// ============================================================

export const restaurant = {
  name:        "The Landmark",
  tagline:     "Where every occasion becomes a memory worth keeping.",
  description: "A heritage dining destination in the heart of Lucena City. Celebrating Filipino cuisine, private celebrations, and the art of gathering together.",
  location:    "Lucena City, Quezon Province",
  address:     "Downtown Lucena City, Quezon Province",
  phone:       "TODO — Insert phone number",
  email:       "TODO — Insert email address",
  messenger:   "#",
  whatsapp:    "#",
  hours: {
    weekday:   "Tuesday–Friday: 11:00 AM – 10:00 PM",
    weekend:   "Saturday–Sunday: 10:00 AM – 11:00 PM",
    monday:    "Monday: Closed",
  },
  social: {
    facebook:  "#",
    instagram: "#",
  },
};

export const menu = {
  categories: [
    {
      id:    "starters",
      label: "Starters",
      items: [
        { name: "Kinilaw na Tanigue",        description: "Fresh Spanish mackerel cured in native vinegar, ginger, onion, and chilies. A classic Quezon appetizer." },
        { name: "Crispy Pork Belly Bites",   description: "Golden lechon kawali cubes served with native vinegar dipping sauce and pickled papaya." },
        { name: "Sinigang na Hipon Soup",    description: "Shrimp in a light tamarind broth with fresh tomatoes, radish, and kangkong. Small serving." },
        { name: "Ensaladang Pako",           description: "Wild fern salad with salted egg, tomatoes, and a coconut vinegar dressing. Garden-fresh daily." },
      ],
    },
    {
      id:    "mains",
      label: "Mains",
      items: [
        { name: "Kare-Kare",                 description: "Slow-braised oxtail and tripe in a rich peanut sauce, served with fermented shrimp paste and steamed rice." },
        { name: "Grilled Liempo",            description: "Marinated pork belly grilled over charcoal, served with garlic fried rice and pickled vegetables." },
        { name: "Adobong Pusit",             description: "Squid braised in a rich adobo sauce with its own ink. Served with steamed rice." },
        { name: "Lechon Kawali",             description: "Whole slab of pork belly, boiled then deep-fried to crackling perfection. A celebration dish." },
        { name: "Laing",                     description: "Taro leaves slow-cooked in coconut milk with dried fish and chilies. A Bicol-inspired classic." },
        { name: "Inihaw na Bangus",          description: "Whole stuffed milkfish marinated and grilled over open charcoal. Served with sawsawan." },
      ],
    },
    {
      id:    "grills",
      label: "From the Grill",
      items: [
        { name: "Barbecue Platter",          description: "Assorted skewers — pork, chicken, and isaw — grilled over charcoal with garlic fried rice and achara." },
        { name: "Inihaw na Liempo",          description: "Thick-cut marinated pork belly, slow-grilled to order. Served with steamed rice and sawsawan." },
        { name: "Grilled Tuna Panga",        description: "Yellowfin tuna jaw marinated in citrus and soy, grilled over charcoal. A Quezon coastal staple." },
        { name: "Grilled Chicken Inasal",    description: "Native-style grilled chicken marinated in calamansi, annatto, and native spices. Served with garlic rice." },
      ],
    },
    {
      id:    "desserts",
      label: "Desserts",
      items: [
        { name: "Halo-Halo",                 description: "Shaved ice with sweet beans, leche flan, ube halaya, jackfruit, and evaporated milk. A Filipino institution." },
        { name: "Bibingka",                  description: "Freshly baked clay-pot rice cake with butter, salted egg, and kesong puti. Available seasonally." },
        { name: "Mais con Yelo",             description: "Shaved ice with sweet corn, condensed milk, and coconut cream. Refreshing and simple." },
        { name: "Buko Pandan",               description: "Young coconut strips and pandan jelly in coconut cream. Light and aromatic." },
      ],
    },
    {
      id:    "drinks",
      label: "Drinks",
      items: [
        { name: "Fresh Buko Juice",          description: "Young coconut juice served cold, straight from the shell." },
        { name: "Calamansi Juice",           description: "Fresh-squeezed calamansi, served with sugar syrup. Sweetness to taste." },
        { name: "Salabat",                   description: "Traditional ginger tea served hot. Good for the soul." },
        { name: "House Iced Tea",            description: "Brewed black tea with calamansi and mint. Bottomless." },
        { name: "Soft Drinks & Water",       description: "Standard sodas, mineral water, and sparkling water." },
      ],
    },
  ],
  chefPicks: ["Kare-Kare", "Grilled Tuna Panga", "Kinilaw na Tanigue"],
  note:       "Prices vary by market availability and season. Ask your server for today's rates and specials.",
  dietary:    {
    vegetarian: ["Ensaladang Pako", "Laing", "Buko Pandan", "Mais con Yelo"],
    seafood:    ["Kinilaw na Tanigue", "Adobong Pusit", "Inihaw na Bangus", "Grilled Tuna Panga"],
  },
};

export const featured = [
  { name: "Kare-Kare",           tag: "Heritage Favorite",   image: "/images/dish-kare-kare.jpg",   description: "Our signature slow-braised oxtail in rich peanut sauce." },
  { name: "Grilled Tuna Panga",  tag: "From the Grill",       image: "/images/dish-tuna-panga.jpg",  description: "Yellowfin tuna jaw — a Quezon coastal classic." },
  { name: "Kinilaw na Tanigue",  tag: "Chef's Recommendation",image: "/images/dish-kinilaw.jpg",    description: "Fresh fish cured in native vinegar. Pure simplicity." },
];

export const occasions = [
  "Birthday Celebration",
  "Anniversary Dinner",
  "Business Lunch",
  "Corporate Event",
  "Date Night",
  "Family Gathering",
  "Group Dinner",
  "Other",
];

export const faqs = [
  {
    category: "Reservations",
    questions: [
      {
        q: "Do I need to reserve a table?",
        a: "Walk-ins are always welcome, but we strongly recommend a reservation for dinner on weekends and for groups of 5 or more. We can usually accommodate walk-ins for lunch on weekdays.",
      },
      {
        q: "How early should I reserve?",
        a: "For regular tables, 1–2 days in advance is usually enough. For private events and large groups (15+), we recommend at least a week ahead to ensure your preferred date and room setup.",
      },
      {
        q: "How do you confirm reservations?",
        a: "We confirm all reservations via call or message within 2 hours of your inquiry. You'll receive a confirmation message with your booking details.",
      },
      {
        q: "What happens if I'm late?",
        a: "We hold reserved tables for 15 minutes. If you're running late, please let us know and we'll do our best to accommodate you.",
      },
    ],
  },
  {
    category: "Menu & Dietary",
    questions: [
      {
        q: "Do you have vegetarian options?",
        a: "Yes. Ensaladang Pako, Laing, and our dessert selections are vegetarian-friendly. Please inform your server when ordering and we can also suggest daily specials that fit.",
      },
      {
        q: "Is there a halal option?",
        a: "Please call us in advance and we will do our best to prepare suitable dishes. Our kitchen can accommodate dietary requirements with prior notice.",
      },
      {
        q: "Can I bring my own cake?",
        a: "Yes, outside cakes are welcome for celebrations. We provide complimentary cake-cutting service. Just let us know when you reserve.",
      },
      {
        q: "Are prices on the menu?",
        a: "Prices vary by market availability and season. Your server will provide today's pricing when you're seated. We post specials and seasonal rates at the front.",
      },
    ],
  },
  {
    category: "Private Events",
    questions: [
      {
        q: "Do you accommodate private events and functions?",
        a: "Yes. We have a private dining area for functions, birthdays, corporate lunches, and celebrations. We can accommodate groups from 15 to 60 guests.",
      },
      {
        q: "What is the minimum number of guests for a private event?",
        a: "Our private event arrangements are typically for 15 guests or more. For smaller intimate gatherings, we can arrange a semi-private area within the main dining room.",
      },
      {
        q: "Do you offer catering?",
        a: "Yes, we offer catering for events within Lucena City and nearby areas. Please send us an inquiry with your event details and expected number of guests.",
      },
    ],
  },
  {
    category: "Payments & Practical",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept cash and GCash. Credit card arrangements can be discussed for larger events. Please confirm payment method when reserving for functions.",
      },
      {
        q: "Is there parking available?",
        a: "Yes, there is parking available near our location. Street parking is typically available on weekday evenings. We recommend arriving 10–15 minutes early on busy weekends.",
      },
      {
        q: "How do I get there?",
        a: "We're located in the heart of downtown Lucena City, Quezon Province. Contact us for specific directions or drop us a message and we'll send you a map pin.",
      },
    ],
  },
];

export const trustPillars = [
  {
    icon:  "heritage",
    title: "Heritage Recipe",
    text:  "Our signature dishes follow recipes passed down across generations — unchanged, uncompromised, and cooked with the same care as always.",
  },
  {
    icon:  "local",
    title: "Local Ingredients",
    text:  "We source from local Quezon suppliers. Seafood arrives daily from coastal markets. Vegetables come from nearby farms when in season.",
  },
  {
    icon:  "events",
    title: "Private Events",
    text:  "From intimate anniversaries to corporate lunches to birthday celebrations — we have a private space and a dedicated team for your occasion.",
  },
];

export const disclaimer = "Demonstration environment. Representative business archetype. Not a real client. No real customer data. Built by Aurora Digital Foundry.";
