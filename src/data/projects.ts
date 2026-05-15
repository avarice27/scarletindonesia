export type ProjectMedia =
  | { type: "image"; src: string; alt?: string }
  | {
      type: "video";
      src: string;
      poster?: string;
      provider?: "mp4" | "youtube" | "vimeo";
    };

export type Project = {
  id: string;
  badge: string;
  client: string;
  title: string;
  loc: string;
  desc: string;
  highlights: string[];
  objective: string;
  media: ProjectMedia[];
};

// Tip: paste your 10–20 Canva entries here. Each project supports up to 6 media items
// (any mix of images and videos). Videos can be MP4, YouTube, or Vimeo URLs.
export const projects: Project[] = [
  {
    id: "guardian-raya",
    badge: "Mobile Activation",
    client: "Guardian",
    title: "Guardian Raya On the Go",
    loc: "Blok M · 6–8 Maret 2026",
    desc: "A mobile activation by Guardian that brings a practical and interactive shopping experience closer to consumers during the Ramadan season.",
    highlights: [
      "Product trial & on-ground education",
      "Exclusive Raya promotions",
      "Games & instant rewards",
      "On-site direct purchase",
    ],
    objective:
      "To drive awareness, engagement, and direct sales through a closer, faster, and more relevant consumer approach.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=70", alt: "Guardian booth" },
      { type: "image", src: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=900&q=70", alt: "Crowd" },
      { type: "image", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=70", alt: "Activation" },
      { type: "video", provider: "youtube", src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", poster: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=900&q=70", alt: "Hampers" },
      { type: "image", src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=70", alt: "Apparel" },
    ],
  },
  {
    id: "luxury-skincare",
    badge: "Flagship Launch",
    client: "Premium Beauty Brand",
    title: "Luxury Skincare Launch — Plaza Indonesia",
    loc: "Jakarta · 5 Days",
    desc: "Activation premium di Atrium Plaza Indonesia: experiential booth dengan touch-screen diagnosis, mini-treatment area, KOL meet & greet, dan gift hampers customized untuk setiap pengunjung.",
    highlights: [
      "Custom 120sqm experiential booth",
      "12 Beauty Advisor terlatih",
      "8 KOL appearance, 24 content pieces",
      "Reach 1.2M impression organik",
    ],
    objective:
      "Memperkenalkan rangkaian skincare premium dengan storytelling yang sensorial dan eksklusif kepada target high-end consumer.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=70" },
    ],
  },
  {
    id: "nusantara-festival",
    badge: "Music Festival",
    client: "National FMCG Brand",
    title: "Nusantara Music Festival",
    loc: "Bandung · 2 Days · 12,000 attendees",
    desc: "Produksi festival musik 2 hari dengan main stage, 6 booth brand experience, sampling station, dan integrated content team. End-to-end production dari permit hingga teardown.",
    highlights: [
      "Main stage 18m × 12m + LED wall",
      "6 brand experience zones",
      "30+ artist coordination",
      "Real-time content team & livestream",
    ],
    objective:
      "Membangun engagement skala nasional melalui festival yang autentik, social-first, dan merepresentasikan semangat brand untuk Gen-Z.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=70" },
    ],
  },
];
