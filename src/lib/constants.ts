export const COLORS = {
  background: "#F8F3EE",
  backgroundAlt: "#F4EEE7",
  primaryBrown: "#3A2418",
  coffeeBrown: "#5D3B2B",
  accentGold: "#C69A63",
  cream: "#FFF9F5",
  text: "#2D221C",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
] as const;

export const TREATS = [
  {
    name: "Chocolate Muffin",
    description: "Rich dark chocolate with a moist, tender crumb.",
    price: "$2.75",
    image:
      "https://images.unsplash.com/photo-1611614010348-7df489604fe3?q=90&w=800&auto=format&fit=crop",
  },
  {
    name: "Butter Croissant",
    description: "Flaky, buttery layers baked fresh every morning.",
    price: "$3.50",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=90&auto=format&fit=crop",
  },
  {
    name: "Cookies",
    description: "Handcrafted cookies with premium chocolate chips.",
    price: "$2.25",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=90&auto=format&fit=crop",
  },
  {
    name: "Berry Cheesecake",
    description: "Creamy cheesecake topped with fresh seasonal berries.",
    price: "$4.95",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=90&auto=format&fit=crop",
  },
] as const;

export const LOYALTY_FEATURES = [
  {
    icon: "coffee" as const,
    title: "Earn Points",
    description: "Collect points with every purchase and redeem rewards.",
  },
  {
    icon: "gift" as const,
    title: "Rewards",
    description: "Unlock exclusive member-only treats and discounts.",
  },
  {
    icon: "star" as const,
    title: "Exclusive Offers",
    description: "Be first to know about seasonal specials and events.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Jessica M.",
    review:
      "The best coffee I've ever had. The atmosphere is warm and inviting — my favorite spot in the city.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=90&auto=format&fit=crop",
  },
  {
    name: "Michael R.",
    review:
      "Every visit feels special. The pastries are incredible and the staff truly cares about quality.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=90&auto=format&fit=crop",
  },
  {
    name: "Sarah L.",
    review:
      "A hidden gem. The latte art alone is worth the visit, but the flavors keep me coming back.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=90&auto=format&fit=crop",
  },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  menu: [
    { label: "Coffee", href: "#menu" },
    { label: "Pastries", href: "#menu" },
    { label: "Seasonal", href: "#menu" },
    { label: "Merchandise", href: "#menu" },
  ],
  about: [
    { label: "Our Story", href: "#about" },
    { label: "Sustainability", href: "#about" },
    { label: "Careers", href: "#about" },
    { label: "Press", href: "#about" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
  { label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" as const },
  { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" as const },
] as const;
