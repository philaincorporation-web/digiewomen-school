"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/parcours", label: "Notre parcours" },
  { href: "/formations", label: "Formations" },
  { href: "/specialisations", label: "Spécialisations" },
  { href: "/formateurs", label: "Formateurs" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-digie-dark/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
         <Link href="/" className="flex items-center gap-2 group">
  <div className="w-10 h-10 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-110">
    <Image
      src="/logoremovebg.png"
      alt="DigieWomen School"
      width={100}
      height={100}
      className="w-full h-full object-contain"
    />
  </div>

  
</Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "bg-digie-green/10 text-digie-green"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-digie-green"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
              )}
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-digie-green text-white text-sm font-semibold hover:bg-digie-green-dark transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Nous contacter
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white dark:bg-digie-dark border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="container mx-auto px-4 py-4 flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={staggerItem}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 block",
                      pathname === link.href
                        ? "bg-digie-green/10 text-digie-green"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={staggerItem}>
                <Link
                  href="/contact"
                  className="mt-2 px-4 py-3 rounded-lg bg-digie-green text-white text-center font-semibold block"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
