import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

// Define TypeScript interfaces for type safety
interface Facility {
  bedrooms: number;
  bathrooms: number;
  parkings: number;
}

interface Property {
  title: string;
  image: any; // React Native uses `require` or number for images
  category: string;
  address: string;
  country: string;
  city: string;
  area: number;
  price: number;
  description: string;
  facilities: Facility;
}

interface Blog {
  id: number;
  title: string;
  image: any;
  category: string;
  content: string;
}

interface FooterLink {
  title: string;
  links: string[];
}

interface FooterContactInfo {
  title: string;
  links: { label: string; value: string }[];
}

interface SocialLink {
  icon: JSX.Element;
  id: string;
}

// Properties data
export const PROPERTIES: Property[] = [
  {
    title: "Kampala Hills Luxury Villa",
    image: require('../assets/img1.png'),
    category: "Villa",
    address: "Kololo Heights Road",
    country: "Uganda",
    city: "Kampala",
    area: 450,
    price: 450000000, // UGX
    description: "Spacious 3-bedroom villa with panoramic city views, modern finishes and secure compound.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Entebbe Waterfront Residence",
    image: require('../assets/img2.png'),
    category: "Bungalow",
    address: "Lakeside Drive",
    country: "Uganda",
    city: "Entebbe",
    area: 500,
    price: 600000000, // UGX
    description: "Beautiful Lake Victoria-facing property with private beach access and tropical gardens.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Jinja Executive Home",
    image: require('../assets/img3.png'),
    category: "House",
    address: "Nile Crescent",
    country: "Uganda",
    city: "Jinja",
    area: 420,
    price: 350000000, // UGX
    description: "Modern family home near the Nile with large outdoor entertaining area.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Mbarara Ranch-Style Property",
    image: require('../assets/img4.png'),
    category: "Ranch",
    address: "Ankole Road",
    country: "Uganda",
    city: "Mbarara",
    area: 550,
    price: 400000000, // UGX
    description: "Spacious ranch with traditional Ankole architecture and modern comforts.",
    facilities: {
      bedrooms: 5,
      bathrooms: 4,
      parkings: 3,
    },
  },
  {
    title: "Fort Portal Holiday Cottage",
    image: require('../assets/img1.png'),
    category: "Cottage",
    address: "Rwenzori View Lane",
    country: "Uganda",
    city: "Fort Portal",
    area: 470,
    price: 280000000, // UGX
    description: "Charming cottage with mountain views, perfect for holidays or permanent living.",
    facilities: {
      bedrooms: 3,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Kampala City Penthouse",
    image: require('../assets/img3.png'),
    category: "Penthouse",
    address: "Nakasero Hill",
    country: "Uganda",
    city: "Kampala",
    area: 520,
    price: 850000000, // UGX
    description: "Luxurious top-floor apartment with 360° city views and premium amenities.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Kabale Lakeview Home",
    image: require('../assets/img2.png'),
    category: "House",
    address: "Bunyonyi Road",
    country: "Uganda",
    city: "Kabale",
    area: 480,
    price: 320000000, // UGX
    description: "Peaceful family home overlooking Lake Bunyonyi with lush gardens.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Gulu Modern Apartment",
    image: require('../assets/img5.png'),
    category: "Apartment",
    address: "Acholi Avenue",
    country: "Uganda",
    city: "Gulu",
    area: 430,
    price: 250000000, // UGX
    description: "Contemporary apartment in Gulu's growing business district.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Masaka Coffee Farm Villa",
    image: require('../assets/img4.png'),
    category: "Farmhouse",
    address: "Ssekanyonyi Road",
    country: "Uganda",
    city: "Masaka",
    area: 460,
    price: 380000000, // UGX
    description: "Working coffee farm with luxurious main residence and guest cottages.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
];

// Blogs data
export const BLOGS: Blog[] = [
  {
    id: 1,
    title: "Uganda Property Market Trends 2025",
    image: require('../assets/blog1.jpg'),
    category: "Market Update",
    content:
      "Uganda's real estate market continues to grow steadily in 2025, with Kampala, Entebbe and emerging cities like Gulu and Mbarara seeing increased demand. The middle-class housing sector is booming, with more Ugandans investing in suburban homes. Commercial real estate remains strong in business districts, while holiday properties around Lake Victoria and national parks attract both local and foreign buyers. Government infrastructure projects are opening up new areas for development across the country.",
  },
  {
    id: 2,
    title: "Renting in Kampala: Best Neighborhoods",
    image: require('../assets/blog2.jpg'),
    category: "Renting Guide",
    content:
      "Finding the perfect rental in Kampala requires understanding the different neighborhoods. Kololo and Nakasero remain premium areas for expats and executives, while Ntinda and Naalya offer more affordable options with good amenities. For students and young professionals, areas like Kisaasi and Bukoto provide convenient access to universities and business hubs. We break down rental prices, security, transportation links and amenities in each area to help you find your ideal Kampala home.",
  },
  {
    id: 3,
    title: "Luxury Living in Uganda: Top Properties",
    image: require('../assets/blog3.jpg'),
    category: "Luxury Homes",
    content:
      "Uganda's luxury property market offers stunning options from lakeside mansions in Entebbe to hilltop villas in Kampala. These high-end homes feature modern African architecture, smart home technology, and premium finishes. Many include staff quarters, swimming pools, and extensive security systems. The luxury rental market is also growing, catering to diplomats and executives on short-term assignments. We showcase some of Uganda's most exclusive properties currently available.",
  },
  {
    id: 4,
    title: "Affordable Housing Projects in Uganda",
    image: require('../assets/blog4.jpg'),
    category: "Affordable Homes",
    content:
      "With Uganda's rapid urbanization, affordable housing has become a government priority. Several projects in Greater Kampala, Wakiso and emerging towns offer quality homes at accessible prices. These developments often include community amenities like schools, markets and health centers. First-time homebuyers can benefit from mortgage programs offered by Ugandan banks. We review the best value housing projects across the country and financing options available.",
  },
];

// Footer section
export const FOOTER_LINKS: FooterLink[] = [
  {
    title: "Learn More",
    links: [
      "About Homely Uganda",
      "New Listings",
      "Special Offers",
      "Popular Areas",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Services",
    links: [
      "Property Valuation",
      "Home Tours",
      "Real Estate Consultancy",
    ],
  },
];

export const FOOTER_CONTACT_INFO: FooterContactInfo = {
  title: "Contact Us",
  links: [
    { label: "Uganda Office", value: "+256 41 425 8098" },
    { label: "Mobile", value: "+256 77 254 8098" },
    { label: "Email", value: "info@homely.ug" },
  ],
};

export const SOCIALS = {
  title: "Follow Us",
  links: [
    { icon: React.createElement(FontAwesome, { name: "facebook", size: 24 }), id: "facebook" },
    { icon: React.createElement(FontAwesome, { name: "instagram", size: 24 }), id: "instagram" },
    { icon: React.createElement(FontAwesome, { name: "twitter", size: 24 }), id: "twitter" },
    { icon: React.createElement(FontAwesome, { name: "youtube", size: 24 }), id: "youtube" },
    { icon: React.createElement(FontAwesome, { name: "linkedin", size: 24 }), id: "linkedin" },
    { icon: React.createElement(FontAwesome, { name: "music", size: 24 }), id: "tiktok" }, // Replace "tiktok" with a similar supported icon like "music"
  ],
};