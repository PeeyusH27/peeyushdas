# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ Immediate Steps

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎯 Essential Customizations

### Update Your Info (2 minutes)

Open `/constants/index.ts` and update:

```typescript
export const SITE_CONFIG = {
  name: "Your Name Here",                    // ← Change this
  role: "Your Job Title",                    // ← Change this
  description: "Your description",           // ← Change this
  email: "your.email@example.com",          // ← Change this
  github: "https://github.com/yourusername", // ← Change this
  linkedin: "https://linkedin.com/in/you",   // ← Change this
};
```

That's it! Your portfolio is now personalized with your information.

## 📸 Add Your Images (Optional but Recommended)

### Quick Image Setup

1. **Profile Photo**: Add to `/public/assets/profile.jpg`
2. **Background**: Add to `/public/assets/hero-background.jpg`
3. **Projects**: Add to `/public/assets/project1.jpg`, `project2.jpg`, etc.

### Update Image References

**For Hero Background:**
- Open `/components/sections/Hero.tsx`
- Find lines with `https://images.unsplash.com/...`
- Replace with `'/assets/hero-background.jpg'`

**For Profile:**
- In same file, find the profile image section
- Replace the gradient div with:
```tsx
<div 
  className="w-full h-full bg-cover bg-center" 
  style={{ backgroundImage: "url('/assets/profile.jpg')" }} 
/>
```

## 📝 Add Your Projects

In `/constants/index.ts`, update the `PROJECTS` array:

```typescript
export const PROJECTS = [
  {
    id: "1",
    title: "Your Project Name",
    description: "What it does",
    image: "/assets/project1.jpg",
    techStack: ["React", "Node.js", "etc"],
    features: ["Feature 1", "Feature 2"],
    github: "https://github.com/you/project",
    demo: "https://your-demo.com",
  },
  // Add more projects...
];
```

## ✅ You're Done!

Your portfolio is now ready. Here's what you have:

- ✨ Cinematic hero animation
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📄 About, Projects, and Contact pages
- 🚀 Production-ready code

## 🌐 Deploy to Vercel (1 minute)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your portfolio is live.

## 📚 Need More Help?

- **Detailed Setup**: See [SETUP.md](./SETUP.md)
- **General Info**: See [README.md](./README.md)
- **Image Guide**: See [/public/assets/README.md](./public/assets/README.md)

## 🎨 Current Features

### Home Page
- GTA 6-style text mask animation
- Scroll-based morphing effect
- Featured projects showcase

### About Page
- Work experience timeline
- Education and certifications
- Animated skill bars

### Projects Page
- Responsive grid layout
- Individual project detail pages
- Tech stack badges

### Contact Page
- Working contact form
- Social links
- Resume download button

## 🛠️ Available Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Check for code issues
npm run type-check # Check TypeScript types
```

## 💡 Pro Tips

1. **Test on Mobile**: Open on your phone to see responsive design
2. **Customize Colors**: Edit `/app/globals.css` for different color schemes
3. **Add More Pages**: Create new folders in `/app/` directory
4. **Update Resume**: Add PDF to `/public/resume.pdf`

## 🎉 Enjoy Your New Portfolio!

You now have a professional, modern portfolio website. Customize it further and make it your own!

---

**Questions?** Check the detailed guides or open an issue on GitHub.

