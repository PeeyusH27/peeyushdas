# Portfolio Setup Guide

Complete guide to customize and deploy your portfolio website.

## 📋 Quick Start Checklist

- [ ] Update personal information in `/constants/index.ts`
- [ ] Add your images to `/public/assets/`
- [ ] Update hero background image URLs
- [ ] Add your resume PDF
- [ ] Customize colors (optional)
- [ ] Test the website locally
- [ ] Deploy to production

## 🎯 Step-by-Step Customization

### 1. Personal Information

Open `/constants/index.ts` and update:

```typescript
export const SITE_CONFIG = {
  name: "Your Full Name",              // Your name
  role: "Your Job Title",               // e.g., "Senior Frontend Engineer"
  description: "Your tagline",          // Brief description
  email: "your.email@example.com",      // Your email
  github: "https://github.com/username", // Your GitHub
  linkedin: "https://linkedin.com/in/username", // Your LinkedIn
};
```

### 2. Work Experience

Update the `WORK_EXPERIENCE` array:

```typescript
export const WORK_EXPERIENCE = [
  {
    id: 1,
    company: "Company Name",
    role: "Your Role",
    period: "Start - End",
    description: "What you did there",
  },
  // Add more entries as needed
];
```

### 3. Education

Update the `EDUCATION` array:

```typescript
export const EDUCATION = [
  {
    id: 1,
    institution: "University Name",
    degree: "Your Degree",
    period: "Start - End",
  },
];
```

### 4. Skills

Update the `SKILLS` array with your skills and proficiency levels (0-100):

```typescript
export const SKILLS = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  // Add more skills
];
```

### 5. Projects

Update the `PROJECTS` array with your actual projects:

```typescript
export const PROJECTS = [
  {
    id: "1", // Unique ID for URL routing
    title: "Project Name",
    description: "Brief description",
    image: "/assets/project1.jpg", // Path to image
    techStack: ["Tech1", "Tech2", "Tech3"],
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
    ],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com",
  },
  // Add more projects
];
```

### 6. Images

#### Hero Background Image

1. Add your background image to `/public/assets/hero-background.jpg`
2. Open `/components/sections/Hero.tsx`
3. Replace the Unsplash URL (line ~28 and ~42) with:
   ```typescript
   backgroundImage: "url('/assets/hero-background.jpg')"
   ```

#### Profile Image

1. Add your profile photo to `/public/assets/profile.jpg`
2. Open `/components/sections/Hero.tsx`
3. Find the profile image div (around line 58)
4. Replace the gradient with:
   ```tsx
   <div className="w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('/assets/profile.jpg')" }} />
   ```

#### Project Images

1. Add project images to `/public/assets/`
2. Name them: `project1.jpg`, `project2.jpg`, etc.
3. Update the `image` field in the `PROJECTS` array

### 7. Resume

1. Add your resume PDF to `/public/resume.pdf`
2. Open `/app/contact/page.tsx`
3. Update the download button onClick handler:
   ```typescript
   onClick={() => {
     window.open('/resume.pdf', '_blank');
   }}
   ```

### 8. Customize Colors (Optional)

To change the color scheme:

1. Open `/app/globals.css`
2. Modify the CSS variables in the `:root` section
3. Change the gradient colors in components (search for `from-purple-600 to-blue-600`)

Example color changes:
```css
:root {
  --primary: oklch(0.5 0.2 250); /* Adjust for different primary color */
}
```

## 🚀 Running the Project

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to Other Platforms

The project is a standard Next.js app and can be deployed to:
- AWS Amplify
- Google Cloud Platform
- DigitalOcean App Platform
- Railway
- Render

## 🎨 Advanced Customization

### Add More Pages

1. Create a new folder in `/app/` (e.g., `/app/blog/`)
2. Add a `page.tsx` file
3. Add the route to `NAV_LINKS` in `/constants/index.ts`

### Modify Animations

Animation settings are in `/components/animations/ScrollProgress.tsx`

Adjust timing:
```typescript
transition: {
  duration: 0.6, // Change duration
  ease: [0.22, 1, 0.36, 1], // Custom easing curve
}
```

### Add Dark Mode Toggle

The project uses Tailwind's dark mode. To add a toggle:

1. Install next-themes: `npm install next-themes`
2. Create a theme provider
3. Add a toggle button to the navigation

### Change Fonts

1. Open `/app/layout.tsx`
2. Import different Google Fonts:
   ```typescript
   import { Inter, Roboto } from "next/font/google";
   ```
3. Update the font configuration

## 🐛 Troubleshooting

### Images Not Loading

- Check file paths are correct (case-sensitive)
- Ensure images are in `/public/assets/`
- Use relative paths starting with `/assets/`

### Build Errors

- Run `npm run lint` to check for errors
- Ensure all TypeScript types are correct
- Check that all imports are valid

### Animation Issues

- Clear browser cache
- Check browser console for errors
- Ensure Framer Motion is installed: `npm install framer-motion`

### Styling Issues

- Run `npm run dev` to rebuild Tailwind classes
- Check for conflicting CSS
- Verify Tailwind config is correct

## 📞 Need Help?

- Check the main [README.md](./README.md) for general information
- Review the [Next.js documentation](https://nextjs.org/docs)
- Check [Framer Motion docs](https://www.framer.com/motion/) for animation help
- Review [Tailwind CSS docs](https://tailwindcss.com/docs) for styling

## ✅ Pre-Deployment Checklist

Before deploying to production:

- [ ] All personal information updated
- [ ] All placeholder images replaced
- [ ] Resume PDF added and working
- [ ] All links tested (GitHub, LinkedIn, etc.)
- [ ] Contact form tested
- [ ] All pages load correctly
- [ ] Mobile responsive design verified
- [ ] No console errors
- [ ] Build succeeds (`npm run build`)
- [ ] SEO metadata updated in page files
- [ ] Analytics added (optional)

## 🎉 You're Ready!

Your portfolio is now customized and ready to deploy. Good luck! 🚀

