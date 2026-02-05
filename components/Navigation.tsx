"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl"
    >
      <div className="relative">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl shadow-black/20" />
        
        {/* Content */}
        <div className="relative px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tight relative z-10">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"
              >
                Portfolio
              </motion.span>
            </Link>

            {/* Navigation Links + Theme Toggle */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link key={link.href} href={link.href}>
                      <motion.div
                        className={cn(
                          "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                        )}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* Theme Switcher */}
              {mounted && (
                <motion.button
                  type="button"
                  aria-label="Toggle theme"
                  className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/80 shadow-md shadow-black/20 hover:bg-background transition-colors"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95, rotate: -2 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <span className="text-xs font-semibold">
                    {theme === "dark" ? "☀︎" : "☾"}
                  </span>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

