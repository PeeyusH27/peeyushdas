"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

/**
 * Custom hook for scroll-based animations
 * Returns various transform values based on scroll progress
 */
export function useScrollTransform(
  ref: RefObject<HTMLElement>,
  outputRange: number[]
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return {
    scrollYProgress,
    scale: useTransform(scrollYProgress, [0, 1], outputRange),
    opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]),
    y: useTransform(scrollYProgress, [0, 1], [0, -100]),
  };
}

/**
 * Hook for hero text mask animation
 */
export function useHeroMaskAnimation(ref: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform for scaling down the background
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  // Transform for moving the image to profile position
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const x = useTransform(scrollYProgress, [0, 0.5], [0, -600]);
  
  // Transform for border radius (from 0 to full circle)
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  
  // Transform for text opacity (fade out the mask effect)
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);
  
  // Transform for normal heading opacity (fade in)
  const headingOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  
  // Transform for content opacity
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return {
    scrollYProgress,
    scale,
    y,
    x,
    borderRadius,
    textOpacity,
    headingOpacity,
    contentOpacity,
  };
}

/**
 * Hook for stagger animations
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Fade in animation variants
 */
export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Slide in animation variants
 */
export const slideIn = (direction: "left" | "right" | "up" | "down") => {
  const offset = 100;
  const x = direction === "left" ? -offset : direction === "right" ? offset : 0;
  const y = direction === "up" ? -offset : direction === "down" ? offset : 0;

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };
};

