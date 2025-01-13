import foreverThumb from "../assets/peeyush_projects/foreverclothing.png"
import chat from "../assets/peeyush_projects/foreverclothing2.png";
import crypto from "../assets/peeyush_projects/cryptrack.png";
import dealership from "../assets/peeyush_projects/dealership.png"
import planets from "../assets/peeyush_projects/planets.png"
import imagegallery from "../assets/peeyush_projects/imageGallery.png"
// import futurefashion from "../assets/peeyush_projects/futurefashion.png"
const projects = [
    {
      "id": 1,
      "title": "Forever Clothing",
      "thumbnail": foreverThumb, 
      "description": "Clothing web application implementing features like Authentication, Search, Add to Cart, and checkout feature for seamless e-shopping.",
      "technologies": ["React", "JavaScript", "TailwindCSS", "ContextApi", "Clerk", "Vercel"],
      "links": {
        "web": "https://forever-e-clothing.vercel.app/",
        "github": "https://github.com/PeeyusH27/EClothing"
      }
    },
    {
      "id": 2,
      "title": "Chat Application",
      "thumbnail": chat,
      "description": "A real-time chat application for seamless messaging, built with React, Express, Node, Mongo, and Tailwind.",
      "technologies": ["React", "Express", "Node", "MongoDB", "Auth", "TailwindCSS"],
      "links": {
        "web": "https://your-web-link.com",
        "github": "https://github.com/your-github-repo"
      }
    },
    {
      "id": 3,
      "title": "CryptoTrack",
      "thumbnail": crypto,
      "description": "Track cryptocurrency in real-time with support for INR and Euro using CoinGecko API.",
      "technologies": ["CoinGecko API", "ReactJS", "TailwindCSS", "ChartJS"],
      "links": {
        "web": "https://cryp-track-app.vercel.app/",
        "github": "https://github.com/PeeyusH27/CrypTrack"
      }
    },
    {
      "id": 4,
      "title": "Dealership Car Selling/Buying Platform UI",
      "thumbnail": dealership,
      "description": "A user-friendly UI design for a car selling and buying platform, showcasing vehicle details and buyer/seller interaction.",
      "technologies": ["UI/UX Design", "Figma", "Adobe XD"],
      "links": {
        "web": "https://dealer-ship.vercel.app/",
        "github": "https://github.com/PeeyusH27/DealerShip"
      }
    },
    {
      "id": 5,
      "title": "Planets in Motion",
      "thumbnail": planets,
      "description": "An interactive 3D visualization of planets in motion, built to demonstrate basic physics and orbital mechanics.",
      "technologies": ["Three.js", "JavaScript", "CSS"],
      "links": {
        "web": "https://planets-in-motion.vercel.app/",
        "github": "https://github.com/PeeyusH27/PlanetsMotion"
      }
    },
    // {
    //   "id": 6,
    //   "title": "Future Fashion",
    //   "thumbnail": futurefashion,
    //   "description": "An animated fashion landing page.",
    //   "technologies": ["React", "TailwindCSS", "SwiperJs"],
    //   "links": {
    //     "web": "https://nike-gsap.vercel.app/",
    //     "github": "https://github.com/PeeyusH27/NikeGsap"
    //   }
    // },
    {
      "id": 7,
      "title": "Image Gallery",
      "thumbnail": imagegallery,
      "description": "A responsive and interactive image gallery that supports searching, filtering, and viewing images in full-screen mode.",
      "technologies": ["React", "TailwindCSS", "JavaScript", "Image API"],
      "links": {
        "web": "https://image-gallery-lyart-phi.vercel.app/",
        "github": "https://github.com/PeeyusH27/ImageGallery"
      }
    }
  ]

  export default projects