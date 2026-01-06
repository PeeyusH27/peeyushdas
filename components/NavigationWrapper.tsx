"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

export default function NavigationWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // On home page, Navigation is rendered inside Hero component
  // So we don't render it here
  if (isHomePage) {
    return null;
  }

  // On other pages, render Navigation normally
  return <Navigation />;
}

