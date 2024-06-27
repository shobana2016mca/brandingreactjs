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
    title : string,
    image : string,
    description : string,

  }

  export const BreadCrumbsList : BreadCrumbs[]=[
    {
      title :"About Us",
      image : "About-bg-img.png.png",
      description : "Ensuring the best return on investment for your bespoke SEO campaign requirement."
    }
  ]
  
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
  