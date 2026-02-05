<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# Modern Animated Portfolio Website

A stunning, cinematic portfolio website built with Next.js, TypeScript, Framer Motion, and shadcn/ui. Inspired by high-end game websites like GTA 6, featuring smooth scroll-based animations and immersive transitions.

## 🚀 Features

- **GTA 6-Style Hero Animation**: Text mask effect that morphs into a profile section on scroll
- **Smooth Page Transitions**: Seamless navigation between pages with Framer Motion
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with the latest web technologies
- **Type-Safe**: Full TypeScript support throughout
- **Accessible**: Built with accessibility best practices
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
Portfolio/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── projects/            # Projects listing and detail pages
│   │   └── [id]/           # Dynamic project detail page
│   ├── contact/            # Contact page with form
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Custom 404 page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── animations/         # Animation utilities and components
│   │   ├── PageTransition.tsx
│   │   └── ScrollProgress.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx       # Hero section with scroll animation
│   │   └── HomeContent.tsx
│   └── Navigation.tsx      # Main navigation component
├── constants/
│   └── index.ts           # Site configuration and data
├── lib/
│   └── utils.ts           # Utility functions
└── public/
    └── assets/            # Images and static assets (add your files here)
```

## 🎨 Pages

### Home
- Cinematic hero section with text mask animation
- Background image morphs into profile picture on scroll
- Featured projects showcase
- Call-to-action section

### About
- Professional summary
- Work experience timeline
- Education and certifications
- Skills with animated progress bars

### Projects
- Grid view of all projects
- Individual project detail pages with:
  - Large project images
  - Detailed descriptions
  - Tech stack tags
  - Links to GitHub and live demos

### Contact
- Contact form
- Social links
- Resume download
- Availability status

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## ⚙️ Configuration

### Customize Your Content

Edit `/constants/index.ts` to update:
- Personal information (name, role, email, social links)
- Work experience
- Education
- Skills
- Projects data

### Add Your Images

1. Add your images to `/public/assets/`
2. Update image paths in the constants file
3. Replace the background image URL in `/components/sections/Hero.tsx`

### Add Your Resume

1. Add your resume PDF to `/public/`
2. Update the download link in `/app/contact/page.tsx`

## 🎭 Animation Features

### Hero Animation
The hero section features a sophisticated scroll-based animation:
- Text initially acts as a mask revealing the background
- On scroll, the background shrinks and morphs into a circular profile image
- Text transitions from masked to normal heading
- Content fades in smoothly

### Page Transitions
All page navigations include smooth fade and slide transitions using Framer Motion.

### Scroll Animations
- Stagger animations for lists and grids
- Fade-in effects for sections
- Smooth scroll progress indicators

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Modify the color scheme in `/app/globals.css` by adjusting the CSS variables.

### Fonts
Update fonts in `/app/layout.tsx` by importing different Google Fonts.

### Animations
Customize animation timings and easing in `/components/animations/ScrollProgress.tsx`.

## 📝 Adding New Projects

1. Add project data to the `PROJECTS` array in `/constants/index.ts`
2. Add project images to `/public/assets/`
3. The project will automatically appear in the grid and have a detail page

## 🔧 Technologies Used

- **Next.js**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Framer Motion**: Production-ready animation library
- **Lucide Icons**: Beautiful icon set

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**
- Website: [your-website.com](https://your-website.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and Framer Motion
>>>>>>> main
