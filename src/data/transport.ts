export interface TransportOption {
  id: string;
  name: string;
  type: "Safari Vehicle" | "Personal Luxury" | "Boat" | "Yacht";

  tagline: string;
  description: string;

  price: number;
  unit: "day" | "trip";

  capacity: number;
  luggage: number;

  transmission?: "Automatic" | "Manual";
  fuel?: "Diesel" | "Petrol";

  location: string;

  rating: number;
  reviews: number;

  availability: "Available" | "Limited";

  driverIncluded: boolean;
  airConditioning: boolean;

  features: string[];

  image: string;
}

export const transportOptions: TransportOption[] = [
  // ==========================
  // Safari Vehicles
  // ==========================
  {
    id: "lc-v8",
    name: "Toyota Land Cruiser V8",
    type: "Safari Vehicle",
    tagline: "Luxury meets the wild.",
    description:
      "Designed for premium safari adventures, the Toyota Land Cruiser V8 comfortably handles Kenya's rugged terrain while providing excellent wildlife viewing and unmatched reliability.",
    price: 8000,
    unit: "day",
    capacity: 7,
    luggage: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    location: "Nairobi",
    rating: 4.9,
    reviews: 218,
    availability: "Available",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "4x4 Drive",
      "Pop-up Roof",
      "Air Conditioning",
      "Charging Ports",
      "Professional Driver",
      "First Aid Kit"
    ],
    image: "/images/transport/lc-v8.jpeg"
  },

  {
    id: "prado",
    name: "Toyota Prado",
    type: "Safari Vehicle",
    tagline: "Comfort for every adventure.",
    description:
      "A versatile safari SUV perfect for family trips, photography expeditions, and cross-country exploration with exceptional comfort.",
    price: 6500,
    unit: "day",
    capacity: 7,
    luggage: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    location: "Nairobi",
    rating: 4.8,
    reviews: 176,
    availability: "Available",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "4x4 Drive",
      "Comfort Seats",
      "Pop-up Roof",
      "Charging Ports",
      "Professional Driver"
    ],
    image: "/images/transport/prado.jpeg"
  },

  {
    id: "safari-van",
    name: "Safari Van",
    type: "Safari Vehicle",
    tagline: "Perfect for groups.",
    description:
      "An affordable safari vehicle ideal for large families, school excursions, and group wildlife adventures across Kenya.",
    price: 5000,
    unit: "day",
    capacity: 12,
    luggage: 10,
    transmission: "Manual",
    fuel: "Diesel",
    location: "Nairobi",
    rating: 4.6,
    reviews: 131,
    availability: "Available",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "Large Windows",
      "Pop-up Roof",
      "Spacious Cabin",
      "Professional Driver"
    ],
    image: "/images/transport/safari-van.jpeg"
  },

  {
    id: "defender",
    name: "Land Rover Defender",
    type: "Safari Vehicle",
    tagline: "Built for untamed terrain.",
    description:
      "A legendary off-road vehicle built to tackle challenging landscapes while delivering a thrilling safari experience.",
    price: 9000,
    unit: "day",
    capacity: 5,
    luggage: 4,
    transmission: "Manual",
    fuel: "Diesel",
    location: "Nairobi",
    rating: 4.9,
    reviews: 96,
    availability: "Limited",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "Heavy-Duty 4x4",
      "Off-road Suspension",
      "Pop-up Roof",
      "Charging Ports"
    ],
    image: "/images/transport/defender.jpeg"
  },

  // ==========================
  // Luxury Cars
  // ==========================
  {
    id: "e-class",
    name: "Mercedes E-Class Wagon",
    type: "Personal Luxury",
    tagline: "Executive comfort on every journey.",
    description:
      "Travel Kenya in refined luxury with a spacious interior, premium finishes, and a smooth ride for city tours or airport transfers.",
    price: 12000,
    unit: "day",
    capacity: 5,
    luggage: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Nairobi",
    rating: 4.9,
    reviews: 108,
    availability: "Available",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "Leather Seats",
      "Wi-Fi",
      "Phone Charging",
      "Premium Audio",
      "Professional Chauffeur"
    ],
    image: "/images/transport/e-class.jpeg"
  },

  {
    id: "v8-luxury",
    name: "Toyota V8 Land Cruiser",
    type: "Personal Luxury",
    tagline: "Luxury beyond the ordinary.",
    description:
      "A premium SUV offering luxury, power, and comfort for executive travel and exclusive holiday experiences.",
    price: 10000,
    unit: "day",
    capacity: 7,
    luggage: 6,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Nairobi",
    rating: 4.8,
    reviews: 142,
    availability: "Available",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "Leather Interior",
      "Sunroof",
      "Premium Sound",
      "Executive Driver"
    ],
    image: "/images/transport/v8-luxury.jpeg"
  },

  {
    id: "rr-sport",
    name: "Range Rover Sport",
    type: "Personal Luxury",
    tagline: "Travel in prestige.",
    description:
      "A luxury SUV designed for travelers seeking sophistication, comfort, and top-tier performance.",
    price: 15000,
    unit: "day",
    capacity: 5,
    luggage: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Nairobi",
    rating: 5.0,
    reviews: 84,
    availability: "Limited",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "Leather Interior",
      "Panoramic Roof",
      "Wi-Fi",
      "Executive Chauffeur",
      "Premium Audio"
    ],
    image: "/images/transport/rr-sport.jpeg"
  },

  // ==========================
  // Boats
  // ==========================
  {
    id: "speed-boat",
    name: "Speed Boat",
    type: "Boat",
    tagline: "Adventure on the ocean.",
    description:
      "Experience thrilling rides along Kenya's coastline with breathtaking views and unforgettable marine adventures.",
    price: 7000,
    unit: "trip",
    capacity: 8,
    luggage: 2,
    location: "Diani Beach",
    rating: 4.8,
    reviews: 120,
    availability: "Available",
    driverIncluded: true,
    airConditioning: false,
    features: [
      "Captain Included",
      "Life Jackets",
      "Island Tours",
      "Snorkeling Stops"
    ],
    image: "/images/transport/speed-boat.jpeg"
  },

  {
    id: "fishing-boat",
    name: "Fishing Boat",
    type: "Boat",
    tagline: "Catch unforgettable memories.",
    description:
      "Perfect for deep-sea fishing experiences with professional guides and quality fishing equipment included.",
    price: 4000,
    unit: "trip",
    capacity: 6,
    luggage: 2,
    location: "Watamu",
    rating: 4.7,
    reviews: 89,
    availability: "Available",
    driverIncluded: true,
    airConditioning: false,
    features: [
      "Fishing Equipment",
      "Experienced Guide",
      "Safety Gear",
      "Refreshments"
    ],
    image: "/images/transport/fishing-boat.jpeg"
  },

  {
    id: "glass-bottom",
    name: "Glass Bottom Boat",
    type: "Boat",
    tagline: "See beneath the waves.",
    description:
      "Discover vibrant coral reefs and colorful marine life without getting into the water.",
    price: 5000,
    unit: "trip",
    capacity: 10,
    luggage: 2,
    location: "Malindi",
    rating: 4.8,
    reviews: 97,
    availability: "Available",
    driverIncluded: true,
    airConditioning: false,
    features: [
      "Marine Viewing",
      "Guided Tour",
      "Life Jackets",
      "Photography Friendly"
    ],
    image: "/images/transport/glass-bottom.jpeg"
  },

  // ==========================
  // Yachts
  // ==========================
  {
    id: "private-yacht",
    name: "Private Yacht Cruise",
    type: "Yacht",
    tagline: "Luxury on the Indian Ocean.",
    description:
      "A private luxury yacht featuring spacious decks, fine dining, and a dedicated crew for an unforgettable coastal escape.",
    price: 50000,
    unit: "day",
    capacity: 12,
    luggage: 10,
    location: "Mombasa",
    rating: 5.0,
    reviews: 58,
    availability: "Limited",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "Private Crew",
      "Fine Dining",
      "Sun Deck",
      "Luxury Lounge",
      "Music System"
    ],
    image: "/images/transport/private-yacht.jpeg"
  },

  {
    id: "sunset-cruise",
    name: "Sunset Cruise",
    type: "Yacht",
    tagline: "Watch the sun melt into the sea.",
    description:
      "Enjoy a romantic evening cruise with gourmet meals, live entertainment, and spectacular sunset views over the Indian Ocean.",
    price: 35000,
    unit: "day",
    capacity: 20,
    luggage: 15,
    location: "Diani Beach",
    rating: 4.9,
    reviews: 72,
    availability: "Available",
    driverIncluded: true,
    airConditioning: true,
    features: [
      "Live Music",
      "Buffet Dinner",
      "Professional Crew",
      "Open Deck",
      "Photography Spots"
    ],
    image: "/images/transport/sunset-cruise.jpeg"
  }
];