const CONTACT = {
  phoneDisplay: "0700 610 091",
  phoneHref: "tel:+256700610091",
  whatsappHref: "https://wa.me/256700610091",
};

const flavorlists = [
  {
    name: "Watermelon Pineapple",
    img: "/images/freshpick/flavor-watermelon.jpg",
    rotation: "md:rotate-[-8deg] rotate-0",
    desc: "Sweet watermelon and juicy pineapple, cold-pressed together.",
  },
  {
    name: "Papaya Sunrise",
    img: "/images/freshpick/flavor-papaya.jpg",
    rotation: "md:rotate-[8deg] rotate-0",
    desc: "Silky papaya juice, fresh and naturally sweet.",
  },
  {
    name: "Passion Fruit",
    img: "/images/freshpick/flavor-passionfruit.jpg",
    rotation: "md:rotate-[-8deg] rotate-0",
    desc: "Tangy passion fruit, pressed fresh with no added sugar.",
  },
  {
    name: "Avocado Cream",
    img: "/images/freshpick/flavor-avocado.jpg",
    rotation: "md:rotate-[8deg] rotate-0",
    desc: "Rich, creamy avocado blended fresh — a customer favorite.",
    price: { large: 5000, small: 4000 },
  },
  {
    name: "Minty Citrus",
    img: "/images/freshpick/flavor-mintcitrus.jpg",
    rotation: "md:rotate-[-8deg] rotate-0",
    desc: "Zesty citrus lifted with a hint of fresh mint.",
  },
  {
    name: "Mango Tango",
    img: "/images/freshpick/flavor-mango.jpg",
    rotation: "md:rotate-[8deg] rotate-0",
    desc: "Ripe mango pressed fresh, thick, smooth and golden.",
    price: { large: 5000, small: 4000 },
  },
  {
    name: "Guava Fusion",
    img: "/images/freshpick/promo-guava.jpg",
    sliderImg: "/images/freshpick/flavor-guava-crop.jpg",
    rotation: "md:rotate-[-8deg] rotate-0",
    desc: "Pink guava blended fresh with a bright, tropical finish.",
    price: { large: 5000, small: 4000 },
  },
];

const branches = [
  {
    name: "KIU",
    desc: "Visit FreshPick at our KIU branch for fresh juices, shawarma and toast.",
    landmark: "Near Kampala International University (KIU) main campus",
    mapQuery: "Kampala International University, Kampala, Uganda",
  },
  {
    name: "JB Mall",
    desc: "Visit FreshPick at our JB Mall branch for fresh juices, shawarma and toast.",
    landmark: "At JB Mall",
    mapQuery: "JB Mall, Kampala, Uganda",
  },
  {
    name: "Soya",
    desc: "Visit FreshPick at our Soya branch for fresh juices, shawarma and toast.",
    landmark: "In Soya, Kampala",
    mapQuery: "Soya, Kampala, Uganda",
  },
  {
    name: "Bunga",
    desc: "Visit FreshPick at our Bunga branch for fresh juices, shawarma and toast.",
    landmark: "In Bunga, Kampala",
    mapQuery: "Bunga, Kampala, Uganda",
  },
];

const blogTopics = [
  {
    title: "FreshPick's Guide to Choosing Your Perfect Juice",
    excerpt:
      "A simple guide to choosing a juice based on flavour preferences and the kind of refreshment you want.",
    tag: "Fresh Juice",
    img: "/images/freshpick/best-watermelon.jpg",
  },
  {
    title: "Why Fresh Fruit Drinks Make a Great Everyday Pick",
    excerpt:
      "A brand-friendly look at enjoying fruit-based drinks as part of everyday meals and breaks.",
    tag: "Fresh Juice",
    img: "/images/freshpick/best-avocado.jpg",
  },
  {
    title: "Juice, Shawarma or Toast? What Are You Picking Today?",
    excerpt:
      "A fun comparison piece introducing the three core parts of the FreshPick menu.",
    tag: "Food & Flavours",
    img: "/images/freshpick/best-mango.jpg",
  },
  {
    title: "A Quick Guide to Shawarma: What to Look For",
    excerpt:
      "An accessible food article that introduces shawarma and what makes a satisfying serving.",
    tag: "Shawarma",
    img: "/images/freshpick/store-1.jpg",
  },
  {
    title: "5 Ways to Enjoy Your FreshPick Break",
    excerpt:
      "Ideas for enjoying a juice or food item during study breaks, work breaks, meet-ups and casual outings.",
    tag: "Kampala Food & Lifestyle",
    img: "/images/freshpick/best-papaya.jpg",
  },
  {
    title: "Meet FreshPick: Four Branches, One Fresh Experience",
    excerpt: "Introducing KIU, JB Mall, Soya and Bunga.",
    tag: "FreshPick News",
    img: "/images/freshpick/store-2.jpg",
  },
  {
    title: "Behind the FreshPick Counter",
    excerpt:
      "A behind-the-scenes look using real photographs and verified information about preparation and service.",
    tag: "Behind the Scenes",
    img: "/images/freshpick/team-1.jpg",
  },
  {
    title: "What Makes a Great Juice Blend?",
    excerpt: "Discussing flavour balance and fruit combinations.",
    tag: "Fresh Juice",
    img: "/images/freshpick/best-passionfruit.jpg",
  },
];

const nutrientLists = [
  { label: "Vitamin C", amount: "80mg" },
  { label: "Potassium", amount: "320mg" },
  { label: "Vitamin A", amount: "210mcg" },
  { label: "Fiber", amount: "3g" },
  { label: "Sugar Added", amount: "0g" },
];

const cards = [
  {
    img: "/images/freshpick/best-watermelon.jpg",
    rotation: "rotate-z-[-10deg]",
    name: "Watermelon Pineapple",
    translation: "translate-y-[-5%]",
  },
  {
    img: "/images/freshpick/best-mango.jpg",
    rotation: "rotate-z-[4deg]",
    name: "Tropical Mix",
  },
  {
    img: "/images/freshpick/best-papaya.jpg",
    rotation: "rotate-z-[-4deg]",
    name: "Papaya Sunrise",
    translation: "translate-y-[-5%]",
  },
  {
    img: "/images/freshpick/best-avocado.jpg",
    rotation: "rotate-z-[4deg]",
    name: "Avocado Cream",
    translation: "translate-y-[5%]",
  },
  {
    img: "/images/freshpick/best-passionfruit.jpg",
    rotation: "rotate-z-[-10deg]",
    name: "Passion Fruit",
  },
  {
    img: "/images/freshpick/best-citrus.jpg",
    rotation: "rotate-z-[4deg]",
    name: "Citrus Sunrise",
    translation: "translate-y-[5%]",
  },
  {
    img: "/images/freshpick/best-grape.jpg",
    rotation: "rotate-z-[-3deg]",
    name: "Berry Grape Blend",
    translation: "translate-y-[10%]",
  },
];

export { CONTACT, flavorlists, nutrientLists, cards, branches, blogTopics };
