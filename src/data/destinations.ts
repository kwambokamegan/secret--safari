export interface Destination {
  id: number;
  name: string;
  category: string;
  location: string;
  image: string;
  description: string;
  accommodation: {
    name: string;
    description: string;
  };
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Maralal Wildlife Sanctuary",
    category: "Wildlife & Safari",
    location: "Northern Kenya",
    image: "/images/destinations/maralal.jpeg",
    description:
      "A hidden wilderness escape offering authentic safari experiences with wildlife encounters, nature walks, photography, and Samburu cultural experiences.",
    accommodation: {
      name: "Maralal Safari Lodge",
      description:
        "A comfortable nature retreat surrounded by the peaceful landscapes of northern Kenya.",
    },
  },

  {
    id: 2,
    name: "Mzima Springs",
    category: "Wildlife & Safari",
    location: "Tsavo West, Kenya",
    image: "/images/destinations/mzima-springs.jpeg",
    description:
      "A breathtaking oasis famous for crystal-clear waters, underwater viewing chambers, hippos, crocodiles, and scenic nature walks.",
    accommodation: {
      name: "Kilanguni Serena Safari Lodge",
      description:
        "A luxury safari lodge offering comfort, relaxation, and beautiful wilderness views.",
    },
  },

  {
    id: 3,
    name: "Crescent Island",
    category: "Wildlife & Safari",
    location: "Lake Naivasha, Kenya",
    image: "/images/destinations/crescent-island.jpeg",
    description:
      "A unique walking safari destination where visitors can encounter giraffes, zebras, wildebeests, and antelopes in a natural setting.",
    accommodation: {
      name: "Lake Naivasha Crescent Camp",
      description:
        "A peaceful lakeside camp offering a relaxing stay surrounded by nature.",
    },
  },

  {
    id: 4,
    name: "Giraffe Centre",
    category: "Wildlife & Conservation",
    location: "Nairobi, Kenya",
    image: "/images/destinations/giraffe-centre.jpeg",
    description:
      "A famous conservation attraction where visitors interact with Rothschild’s giraffes and learn about wildlife protection.",
    accommodation: {
      name: "Giraffe Manor Hotel",
      description:
        "A unique luxury hotel offering unforgettable giraffe encounters and excellent hospitality.",
    },
  },

  {
    id: 5,
    name: "Ol Pejeta Conservancy",
    category: "Wildlife & Safari",
    location: "Laikipia, Kenya",
    image: "/images/destinations/ol-pejeta.jpeg",
    description:
      "A leading conservation destination offering wildlife viewing, rhino experiences, game drives, and unforgettable safari adventures.",
    accommodation: {
      name: "Olesamara Collection",
      description:
        "A luxury safari retreat combining comfort, nature, and authentic wilderness experiences.",
    },
  },

  {
    id: 6,
    name: "Aberdare Forest",
    category: "Scenic & Landscape",
    location: "Aberdare Range, Kenya",
    image: "/images/destinations/aberdare.jpeg",
    description:
      "A magical forest destination known for misty mountains, waterfalls, hiking trails, wildlife, and breathtaking scenery.",
    accommodation: {
      name: "The Ark Lodge",
      description:
        "A unique lodge overlooking a wildlife waterhole with close animal encounters.",
    },
  },

  {
    id: 7,
    name: "Mambrui Sand Dunes",
    category: "Scenic & Landscape",
    location: "Malindi, Kenya",
    image: "/images/destinations/mambrui-dunes.jpeg",
    description:
      "A stunning coastal landscape featuring golden dunes perfect for adventure, photography, and spectacular sunsets.",
    accommodation: {
      name: "Coral Village Bungalow",
      description:
        "A peaceful coastal retreat offering comfort near Kenya’s beautiful shoreline.",
    },
  },

  {
    id: 8,
    name: "Chalbi Desert",
    category: "Scenic & Landscape",
    location: "Northern Kenya",
    image: "/images/destinations/chalbi-desert.jpeg",
    description:
      "Kenya’s only true desert offering dramatic landscapes, camel adventures, cultural experiences, and remote wilderness.",
    accommodation: {
      name: "Desert Rose Kenya",
      description:
        "A comfortable desert stay surrounded by the beauty of northern Kenya.",
    },
  },

  {
    id: 9,
    name: "Champagne Ridge",
    category: "Scenic & Landscape",
    location: "Great Rift Valley, Kenya",
    image: "/images/destinations/champagne-ridge.jpeg",
    description:
      "A scenic destination offering panoramic Rift Valley views, hiking, nature walks, and unforgettable sunsets.",
    accommodation: {
      name: "Oolorien House Kajiado",
      description:
        "An elegant accommodation offering comfort and stunning landscape views.",
    },
  },

  {
    id: 10,
    name: "Mount Ololbutot (Ol Eburu)",
    category: "Scenic & Landscape",
    location: "Naivasha, Kenya",
    image: "/images/destinations/ol-eburu.jpeg",
    description:
      "A hidden volcanic mountain with lush forests, geothermal landscapes, hiking trails, and beautiful Rift Valley views.",
    accommodation: {
      name: "Ol Eburu Cottage Naivasha",
      description:
        "A cozy nature retreat perfect for exploring the surrounding wilderness.",
    },
  },

  {
    id: 11,
    name: "Chale Island",
    category: "Coastal & Cultural",
    location: "Kwale, Kenya",
    image: "/images/destinations/chale-island.jpeg",
    description:
      "A private island paradise featuring white beaches, turquoise waters, snorkeling, and peaceful tropical scenery.",
    accommodation: {
      name: "Chale Island Resort",
      description:
        "A luxury island resort offering privacy, relaxation, and coastal charm.",
    },
  },

  {
    id: 12,
    name: "Watamu Marine National Park",
    category: "Coastal & Cultural",
    location: "Watamu, Kenya",
    image: "/images/destinations/watamu.jpeg",
    description:
      "A marine paradise with coral reefs, clear waters, diving, snorkeling, and exciting ocean adventures.",
    accommodation: {
      name: "Hemingways Watamu",
      description:
        "A luxury beachfront resort offering elegant rooms and beautiful ocean views.",
    },
  },

  {
    id: 13,
    name: "Tiwi Beach",
    category: "Coastal & Cultural",
    location: "South Coast, Kenya",
    image: "/images/destinations/tiwi-beach.jpeg",
    description:
      "A peaceful coastal escape featuring quiet beaches, natural pools, snorkeling, and relaxation.",
    accommodation: {
      name: "Hillpark Amare Resort",
      description:
        "A comfortable beachfront stay ideal for a relaxing coastal holiday.",
    },
  },

  {
    id: 14,
    name: "Lamu",
    category: "Coastal & Cultural",
    location: "Lamu Island, Kenya",
    image: "/images/destinations/lamu.jpeg",
    description:
      "A historic island rich in Swahili culture, traditional architecture, dhow sailing, and coastal charm.",
    accommodation: {
      name: "Siyu-Sabour House",
      description:
        "A boutique hotel showcasing authentic Swahili design and island heritage.",
    },
  },

  {
    id: 15,
    name: "Kisumu",
    category: "Coastal & Cultural",
    location: "Lake Victoria, Kenya",
    image: "/images/destinations/kisumu.jpeg",
    description:
      "A vibrant lakeside destination offering beautiful sunsets, waterfront views, culture, and relaxation.",
    accommodation: {
      name: "Bingo Beach Resort",
      description:
        "A charming lakeside retreat with peaceful accommodation overlooking Lake Victoria.",
    },
  },
];