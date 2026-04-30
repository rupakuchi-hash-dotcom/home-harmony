import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number; // INR
  type: "Apartment" | "Villa" | "Penthouse" | "Townhouse";
  status: "Buy" | "Rent";
  beds: number;
  baths: number;
  area: number; // sq ft
  image: string;
  gallery: string[];
  amenities: string[];
  description: string;
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "p1",
    title: "Skyline Residences",
    location: "Whitefield",
    city: "Bangalore",
    price: 12500000,
    type: "Apartment",
    status: "Buy",
    beds: 3,
    baths: 2,
    area: 1450,
    image: p1,
    gallery: [p1, p3, p5],
    amenities: ["Parking", "WiFi", "Gym", "Pool", "Security", "Power Backup"],
    description:
      "Premium 3 BHK apartment in the heart of Whitefield with floor-to-ceiling windows, modular kitchen, and access to a clubhouse with gym, pool and play area. Walking distance to top schools and IT parks.",
    featured: true,
  },
  {
    id: "p2",
    title: "Garden View Villa",
    location: "Baner",
    city: "Pune",
    price: 24500000,
    type: "Villa",
    status: "Buy",
    beds: 4,
    baths: 4,
    area: 2800,
    image: p2,
    gallery: [p2, p6, p5],
    amenities: ["Garden", "Parking", "Pool", "WiFi", "Security"],
    description:
      "Independent 4 BHK villa with private garden, terrace, and double car parking. Designed for joint families with spacious rooms and natural light throughout.",
    featured: true,
  },
  {
    id: "p3",
    title: "Marine Drive Penthouse",
    location: "Nariman Point",
    city: "Mumbai",
    price: 78000000,
    type: "Penthouse",
    status: "Buy",
    beds: 4,
    baths: 5,
    area: 3600,
    image: p3,
    gallery: [p3, p1, p5],
    amenities: ["Sea View", "Parking", "Gym", "Concierge", "Pool"],
    description:
      "Iconic penthouse overlooking the Arabian Sea. Wrap-around balcony, private elevator, and bespoke interiors finished by award-winning designers.",
    featured: true,
  },
  {
    id: "p4",
    title: "Greenwood Townhouse",
    location: "Kharadi",
    city: "Pune",
    price: 9800000,
    type: "Townhouse",
    status: "Buy",
    beds: 3,
    baths: 3,
    area: 1850,
    image: p4,
    gallery: [p4, p2, p5],
    amenities: ["Parking", "Garden", "Security", "Power Backup"],
    description:
      "Spacious 3 BHK townhouse in a gated community with tree-lined streets, ideal for growing families.",
    featured: true,
  },
  {
    id: "p5",
    title: "Sunlit Family Home",
    location: "Indiranagar",
    city: "Bangalore",
    price: 65000,
    type: "Apartment",
    status: "Rent",
    beds: 2,
    baths: 2,
    area: 1100,
    image: p5,
    gallery: [p5, p1, p3],
    amenities: ["Furnished", "WiFi", "Parking", "Power Backup"],
    description:
      "Fully furnished 2 BHK in vibrant Indiranagar, perfect for young families. Cafés, schools, and metro within walking distance.",
  },
  {
    id: "p6",
    title: "Palm Coast Villa",
    location: "Candolim",
    city: "Goa",
    price: 32000000,
    type: "Villa",
    status: "Buy",
    beds: 4,
    baths: 4,
    area: 3100,
    image: p6,
    gallery: [p6, p2, p3],
    amenities: ["Pool", "Garden", "Beach Access", "Parking", "WiFi"],
    description:
      "Beachside villa with private pool just 5 minutes from Candolim Beach. Perfect blend of holiday home and investment.",
    featured: true,
  },
];

export const formatINR = (n: number) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
};