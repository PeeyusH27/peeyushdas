// Site Configuration
export const SITE_CONFIG = {
  name: "Peeyush Chandra Das",
  role: "Full Stack Developer",
  description: "Building exceptional digital experiences with modern web technologies",
  email: "peeyush@example.com",
  github: "https://github.com/PeeyusH27",
  linkedin: "https://linkedin.com/in/peeyush27",
};

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// About Page Data
export const WORK_EXPERIENCE = [
  {
    id: 1,
    company: "1ClickTech",
    role: "SDE",
    period: "07/2025 - Present · Gurugram",
    bullets: [
      "Led frontend development of 3 enterprise products, building custom components and layouts from scratch using Next.js, TypeScript, and React, resulting in a 20% faster development cycle and higher code reusability.",
      "Optimized performance by migrating data fetching from Axios to RTK Query, reducing API load times by 30% and cutting down unnecessary network calls.",
      "Built scalable and performant frontends for platforms such as LMS, HRMS, and Ticket Management Systems, serving 2000+ active users.",
      "Structured and managed a monorepo for all products, centralizing shared code and UI components, which reduced code duplication by 40% and enabled seamless product switching with a unified layout.",
    ],
  },
  {
    id: 2,
    company: "Cognizant Technology Solutions",
    role: "Jr. Software Engineer",
    period: "12/2021 - 04/2024",
    bullets: [
      "Developed an insurance application using React, enabling customers to generate quotes, calculate premiums, and purchase vehicle insurance.",
      "Redesigned and contributed to a Talent Marketplace Portal, including dashboards that allowed employees to discover, apply for, and track internal project opportunities.",
      "Migrated a legacy project from vanilla JavaScript to Next.js, reducing code size by 60% through the creation of reusable custom components.",
      "Optimized web applications, achieving a 70% reduction in load times by implementing debouncing, lazy loading, and code splitting.",
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    institution: "University Name",
    degree: "Bachelor of Computer Science",
    period: "2016 - 2020",
  },
];

export const CERTIFICATIONS = [
  "Namaste React - Advanced frontend bootcamp (~3 months, project-based)",
  "Responsive Web Design - FreeCodeCamp (300+ hours of coursework)",
  "AWS Cloud Support Associate - A Cloud Guru (hands-on AWS cloud services)",
];

export const SKILLS = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Cloud Services", level: 75 },
];

// Projects Data
export const PROJECTS = [
  {
    id: "1",
    title: "KonWriter GenAI App",
    description: "GenAI content generation application that helps you write blogs, titles, descriptions, code and many more.",
    image: "/assets/konwriter.png",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS", "Clerk", "Drizzle"],
    features: [
      "AI-powered content generation",
      "Blog and article writing assistance",
      "Code generation and suggestions",
      "Title and description generation",
      "User authentication with Clerk",
      "Database management with Drizzle",
    ],
    github: "https://github.com/PeeyusH27/KonWriter",
    demo: "https://kon-writer.vercel.app",
  },
  {
    id: "2",
    title: "Forever Clothing",
    description: "Clothing web application implementing features like Authentication, Search, Add to Cart, and checkout feature for seamless e-shopping.",
    image: "/assets/foreverclothing.png",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Context API", "Clerk", "Vercel"],
    features: [
      "User authentication system",
      "Advanced search functionality",
      "Shopping cart management",
      "Secure checkout process",
      "Responsive design",
      "State management with Context API",
    ],
    github: "https://github.com/PeeyusH27/EClothing",
    demo: "https://forever-e-clothing.vercel.app/",
  },
  {
    id: "3",
    title: "CryptoTrack",
    description: "Track cryptocurrency in real-time with support for INR and Euro using CoinGecko API.",
    image: "/assets/cryptrack.png",
    techStack: ["React.js", "CoinGecko API", "Tailwind CSS", "Chart.js"],
    features: [
      "Real-time cryptocurrency tracking",
      "Multi-currency support (INR, Euro)",
      "Interactive price charts",
      "Market data visualization",
      "Responsive design",
      "Live API integration",
    ],
    github: "https://github.com/PeeyusH27/CrypTrack",
    demo: "https://cryp-track-app.vercel.app/",
  },
  {
    id: "4",
    title: "Dealership Car Platform UI",
    description: "A user-friendly UI design for a car selling and buying platform, showcasing vehicle details and buyer/seller interaction.",
    image: "/assets/dealership.png",
    techStack: ["React", "JavaScript", "Tailwind CSS", "UI/UX Design"],
    features: [
      "Modern car listing interface",
      "Vehicle detail showcase",
      "Buyer-seller interaction design",
      "Responsive layout",
      "Clean and intuitive UI",
      "Professional design system",
    ],
    github: "https://github.com/PeeyusH27/DealerShip",
    demo: "https://dealer-ship.vercel.app/",
  },
  {
    id: "5",
    title: "Planets in Motion",
    description: "An interactive 3D visualization of planets in motion, built to demonstrate basic physics and orbital mechanics.",
    image: "/assets/planets.png",
    techStack: ["Three.js", "JavaScript", "CSS", "WebGL"],
    features: [
      "3D planetary visualization",
      "Interactive orbital mechanics",
      "Physics simulation",
      "Real-time animation",
      "Educational experience",
      "Smooth 3D rendering",
    ],
    github: "https://github.com/PeeyusH27/PlanetsMotion",
    demo: "https://planets-in-motion.vercel.app/",
  },
  {
    id: "6",
    title: "Future Fashion",
    description: "An animated fashion landing page with modern design and smooth interactions.",
    image: "/assets/futurefashion.png",
    techStack: ["React", "Tailwind CSS", "Swiper.js", "JavaScript"],
    features: [
      "Animated landing page",
      "Smooth carousel transitions",
      "Modern fashion showcase",
      "Responsive design",
      "Interactive elements",
      "Professional animations",
    ],
    github: "https://github.com/PeeyusH27/NikeGsap",
    demo: "https://nike-gsap.vercel.app/",
  },
  {
    id: "7",
    title: "Image Gallery",
    description: "A responsive and interactive image gallery that supports searching, filtering, and viewing images in full-screen mode.",
    image: "/assets/imageGallery.png",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Image API"],
    features: [
      "Responsive gallery layout",
      "Image search functionality",
      "Advanced filtering options",
      "Full-screen lightbox view",
      "API integration",
      "Modern UI design",
    ],
    github: "https://github.com/PeeyusH27/ImageGallery",
    demo: "https://image-gallery-lyart-phi.vercel.app/",
  },
];

