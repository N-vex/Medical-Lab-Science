import { useState, useEffect } from "react";
import { Button } from "@/components/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-light hover:text-primary"
        >
          Pm<span className="text-primary">.</span>
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-r-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t shadow-lgcursor-pointer animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsMenuOpen(false)}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
