# Assets Folder

Place your project images and other assets here.

## Required Images

### Hero Background
- **Filename**: `hero-background.jpg` or `hero-background.png`
- **Recommended Size**: 1920x1080px or larger
- **Description**: The background image used in the hero section that will be visible through the text mask

### Profile Image
- **Filename**: `profile.jpg` or `profile.png`
- **Recommended Size**: 500x500px (square)
- **Description**: Your profile photo that appears after the hero animation

### Project Images
For each project, add images with the following naming convention:
- `project1.jpg` - E-Commerce Platform
- `project2.jpg` - AI Chat Application
- `project3.jpg` - Portfolio Dashboard
- Add more as needed for additional projects

**Recommended Size**: 1200x675px (16:9 aspect ratio)

## How to Update Images

### Update Hero Background
1. Add your image to this folder
2. Open `/components/sections/Hero.tsx`
3. Replace the background image URL in two places:
   - Line ~28: Background div
   - Line ~42: Text mask background

### Update Profile Image
1. Add your profile image to this folder
2. Open `/components/sections/Hero.tsx`
3. Update the profile image section (around line 58)

### Update Project Images
1. Add project images to this folder
2. Open `/constants/index.ts`
3. Update the `image` property for each project in the `PROJECTS` array

## Example

```typescript
// In /constants/index.ts
export const PROJECTS = [
  {
    id: "1",
    title: "E-Commerce Platform",
    image: "/assets/project1.jpg", // Update this path
    // ... rest of the project data
  },
];
```

## Image Optimization Tips

- Use WebP format for better compression
- Optimize images before uploading (use tools like TinyPNG, Squoosh, etc.)
- Keep file sizes under 500KB when possible
- Use appropriate dimensions to avoid unnecessary scaling

## Placeholder Images

If you don't have images yet, you can use placeholder services:
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Lorem Picsum](https://picsum.photos/) - Placeholder image service

