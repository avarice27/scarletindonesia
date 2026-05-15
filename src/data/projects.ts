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
  {
    id: "fmcg-roadshow",
    badge: "Roadshow",
    client: "Unilever",
    title: "City-to-City Brand Roadshow",
    loc: "5 Cities · 14 Days",
    desc: "Multi-city roadshow menjangkau 5 kota besar dengan setup booth identik, sampling massal, dan integrated digital amplification setiap stop.",
    highlights: [
      "5 kota: JKT, BDG, SBY, MDN, MKS",
      "Sampling 50,000+ produk",
      "Daily content production",
      "Local KOL di setiap kota",
    ],
    objective: "Memperluas distribusi awareness brand secara merata ke konsumen Tier-1 dan Tier-2.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=900&q=70" },
    ],
  },
  {
    id: "automotive-launch",
    badge: "Product Launch",
    client: "Premium Auto Brand",
    title: "EV Flagship Reveal Night",
    loc: "Senayan · 1 Night · 800 VIPs",
    desc: "Gala launch event untuk peluncuran EV flagship dengan immersive stage reveal, projection mapping, dan test drive area eksklusif.",
    highlights: [
      "Projection mapping 360°",
      "VIP test drive lounge",
      "12 media partner coverage",
      "Live broadcast multi-platform",
    ],
    objective: "Menciptakan momen peluncuran yang ikonik dan memposisikan brand sebagai pemimpin di kategori EV premium.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=70" },
    ],
  },
  {
    id: "tech-conference",
    badge: "Conference",
    client: "Global Tech Co",
    title: "Developer Summit Jakarta",
    loc: "JCC · 3 Days · 3,500 devs",
    desc: "Konferensi developer 3 hari dengan 40+ sesi paralel, hands-on workshop, expo hall, dan after-party dengan live music.",
    highlights: [
      "40+ talks & workshop",
      "Expo hall 24 sponsor",
      "Hackathon 48 jam",
      "Hybrid streaming ke 12 negara",
    ],
    objective: "Membangun komunitas developer regional dan memposisikan brand sebagai partner teknologi pilihan.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900&q=70" },
    ],
  },
  {
    id: "fashion-week",
    badge: "Fashion Show",
    client: "Designer Collective",
    title: "Jakarta Fashion Week Showcase",
    loc: "Plaza Senayan · 2 Nights",
    desc: "Runway production dengan custom stage, lighting design, dan backstage management untuk 8 desainer dalam 2 malam berturut-turut.",
    highlights: [
      "Custom T-shape runway 30m",
      "8 designers · 120 looks",
      "Live stream multi-cam",
      "After-show cocktail experience",
    ],
    objective: "Menyajikan platform premium bagi desainer lokal untuk menjangkau buyer & media internasional.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=70" },
    ],
  },
  {
    id: "fb-popup",
    badge: "Pop-Up Store",
    client: "Lifestyle F&B",
    title: "Artisan Coffee Pop-Up",
    loc: "PIK Avenue · 30 Days",
    desc: "Pop-up store experiential selama 30 hari dengan barista showcase, brewing class, dan limited merchandise drop setiap minggu.",
    highlights: [
      "30 hari operasional non-stop",
      "Weekly drop merchandise",
      "Brewing class 4x/minggu",
      "Foot traffic 18,000+ visitor",
    ],
    objective: "Membangun brand love melalui pengalaman sensorial dan komunitas pecinta kopi.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=70" },
    ],
  },
  {
    id: "sports-activation",
    badge: "Sports Event",
    client: "Sportswear Brand",
    title: "City Run 10K Series",
    loc: "GBK · 1 Day · 5,000 runners",
    desc: "Race production lengkap: route management, water station, medical, finish festival, dan integrated app untuk timing & leaderboard.",
    highlights: [
      "5,000 runner · 3 kategori",
      "Real-time leaderboard app",
      "Finish festival 6 brand zone",
      "Sustainability: zero plastic",
    ],
    objective: "Menggerakkan komunitas urban runner dan memposisikan brand sebagai sahabat gaya hidup aktif.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=900&q=70" },
    ],
  },
  {
    id: "csr-campaign",
    badge: "CSR Activation",
    client: "Banking Group",
    title: "Education for All Campaign",
    loc: "12 Sekolah · 6 Bulan",
    desc: "Program CSR jangka panjang: renovasi 12 sekolah, donasi alat belajar, dan workshop literasi finansial untuk 4,000+ siswa.",
    highlights: [
      "12 sekolah direnovasi",
      "4,000+ siswa terdampak",
      "Workshop bulanan",
      "Documentary film output",
    ],
    objective: "Memperkuat brand purpose melalui dampak sosial yang terukur dan storytelling yang otentik.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=70" },
      { type: "image", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=70" },
    ],
  },
];

