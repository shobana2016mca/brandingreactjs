// constants.ts

interface SocialMediaLinks {
  facebook: string;
  twitter: string;
  instagram: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string; // Replace with actual image URLs
  socialMedia: SocialMediaLinks;
}

interface BreadCrumbs {
  title: string;
  image: string;
  description: string;
}

export const BreadCrumbsList: BreadCrumbs[] = [
  {
    title: "About Us",
    image: "About-bg-img.png.png",
    description:
      "Ensuring the best return on investment for your bespoke SEO campaign requirement.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Archer Barlow",
    role: "Sales Manager",
    image: "our-team-img-1.jpg", // Replace with actual image URLs
    socialMedia: {
      facebook: "https://facebook.com/archer",
      twitter: "https://twitter.com/archer",
      instagram: "https://instagram.com/archer",
    },
  },
  {
    name: "Freddy Mcphee",
    role: "CEO & Founder",
    image: "our-team-4.jpg", // Replace with actual image URLs
    socialMedia: {
      facebook: "https://facebook.com/freddy",
      twitter: "https://twitter.com/freddy",
      instagram: "https://instagram.com/freddy",
    },
  },
  {
    name: "Valerie Allison",
    role: "HR Manager",
    image: "our-team-3.jpg", // Replace with actual image URLs
    socialMedia: {
      facebook: "https://facebook.com/valerie",
      twitter: "https://twitter.com/valerie",
      instagram: "https://instagram.com/valerie",
    },
  },
  {
    name: "Archer Barlow",
    role: "Sales Manager",
    image: "our-team-2.jpg", // Replace with actual image URLs
    socialMedia: {
      facebook: "https://facebook.com/archer",
      twitter: "https://twitter.com/archer",
      instagram: "https://instagram.com/archer",
    },
  },
];

interface NewsBlog {
  id: number;
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export const newsBlogs: NewsBlog[] = [
  {
    id: 1,
    image: "single-post-img.jpg",
    title: "Use keywords strategically throughout the blog post.",
    content: "content",
    author: "teja",
    date: "03-07-2024",
    category: "uncategorized",
  },
  {
    id: 2,
    image: "single-post-img1.jpg",
    title: "What is SEO? An explanation for beginners",
    content: "content",
    author: "teja",
    date: "03-07-2024",
    category: "Seo  ",
  },
  {
    id: 3,
    image: "single-post-img2.jpg",
    title: "What is SEO? An explanation for beginners",
    content: "content",
    author: "teja",
    date: "03-07-2024",
    category: "Seo",
  },
  {
    id: 4,
    image: "single-post-img.jpg",
    title: "Use keywords strategically throughout the blog post.",
    content: "content",
    author: "teja",
    date: "03-07-2024",
    category: "keywords strategically",
  },
  {
    id: 5,
    image: "single-post-img.jpg",
    title: "Use keywords strategically throughout the blog post.",
    content: "content",
    author: "teja",
    date: "03-07-2024",
    category: "uncategorized",
  },
  {
    id: 6,
    image: "single-post-img1.jpg",
    title: "What is SEO? An explanation for beginners",
    content: "content",
    author: "teja",
    date: "03-07-2024",
    category: "Seo  ",
  },
  {
    id: 7,
    image: "single-post-img2.jpg",
    title: "What is SEO? An explanation for beginners",
    content: "content",
    author: "teja",
    date: "03-07-2024",
    category: "Seo",
  },
  {
    id: 8,
    image: "single-post-img.jpg",
    title: "Use keywords strategically throughout the blog post.",
    content: "content",
    author: "teja",
    date: "03-07-2024",
    category: "keywords strategically",
  },
];

export const category = ["keywords strategically", "Seo", "uncategorized"];

interface Companies {
  icon: string;
}

export const Icons: Companies[] = [
  { icon: "topnation.png" },
  { icon: "saksham.jpeg" },
  { icon: "smsfactory.png" },
  { icon: "jobs4u.com.jpg" },
  { icon: "baba.png" },
  { icon: "allinone.png" },
  { icon: "ektek.png" },
  { icon: "empireroyale.jpg" },
  { icon: "event.jpg" },
  { icon: "gaba.jpeg" },
  { icon: "helping.png" },
  { icon: "lcet.png" },
  { icon: "yogasutra.jpg" },
  { icon: "grab.jpg" },
  { icon: "kamala.jpg" },
  { icon: "royal.jpg" },
  { icon: "printers.jpg" },
  { icon: "walaroo.png" },
  { icon: "punjab.jpg" },
  { icon: "pkbricks.jpg" },
  { icon: "boom.jpg" },
  { icon: "ansalestaz.jpg" },
  { icon: "indeedclothes.jpg" },
  { icon: "kamala.jpg" },
  { icon: "all4pets.png" },
  { icon: "jsbuilders.jpg" },
  { icon: "hrh.jpg" },
  { icon: "gunavat.jpg" },
  { icon: "puripuri.jpg" },
  { icon: "BOMBAY-PICNIC-SPOT.jpg" },
  { icon: "tinytown.jpg" },
  { icon: "rkm.jpg" },
  { icon: "auss.jpg" },
  { icon: "bobfab.jpg" },
  { icon: "cakenbake.jpeg" },
  { icon: "friendsports.jpg" },
  { icon: "hportho.jpg" },
  { icon: "hrm.jpg" },
  { icon: "online.jpg" },
  { icon: "sri.jpg" },
  { icon: "radha.jpg" },
  { icon: "placement.png" },
  { icon: "label.jpg" },
  { icon: "Nsquare.jpg" },
  { icon: "cn.jpg" },
  { icon: "coyote.jpg" },
  { icon: "dobuild.jpg" },
  { icon: "GNIEM.jpg" },
  { icon: "green.png" },
  { icon: "hp.png" },
  { icon: "hyrise.png" },
  { icon: "incomeguru.jpg" },
  { icon: "knitwear.jpg" },
  { icon: "label.jpg" },
  { icon: "laksya.jpg" },
  { icon: "malhotra.jpg" },
  { icon: "phoneix.jpg" },
  { icon: "polk.jpg" },
  { icon: "skm.jpg" },
  { icon: "skc.jpg" },
  
];
