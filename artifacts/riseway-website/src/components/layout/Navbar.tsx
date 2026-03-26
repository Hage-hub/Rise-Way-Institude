import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md py-2" : "bg-white py-3 sm:py-4"
      }`}
      style={{ WebkitBackdropFilter: isScrolled ? "blur(12px)" : undefined, backdropFilter: isScrolled ? "blur(12px)" : undefined }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.jpg"
              alt="RISE-WAY Technical And Professional Institute"
              className="h-10 sm:h-11 md:h-12 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`text-sm font-semibold transition-colors duration-200 hover:text-accent relative py-2 ${
                      location === link.path ? "text-accent" : "text-primary/80"
                    }`}
                  >
                    {link.name}
                    {location === link.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/apply"
              className="px-5 py-2.5 rounded-full font-semibold bg-accent text-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm whitespace-nowrap"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="lg:hidden fixed top-[56px] sm:top-[64px] right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="px-6 py-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-3 px-4 rounded-xl transition-colors ${
                      location === link.path
                        ? "bg-primary/5 text-primary border-l-4 border-accent"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <Link
                    href="/apply"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-3.5 rounded-xl font-bold bg-accent text-white shadow-md hover:bg-orange-500 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
