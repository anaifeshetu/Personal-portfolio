import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#approach", label: "Approach" },
];

export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-light hover:text-primary"
        >
          AE
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-3 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  px-4
                  py-2
                  text-sm
                  text-muted-foreground
                  hover:text-foreground
                  rounded-full
                  hover:bg-surface
                  transition-colors
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDarkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              isDarkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="
              w-11
              h-11
              rounded-full
              glass
              flex
              items-center
              justify-center
              text-foreground
              hover:text-primary
              hover:bg-surface
              transition-all
              duration-300
              hover:scale-105
            "
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="
              relative
              overflow-hidden
              rounded-full
              flex
              items-center
              justify-center
              gap-5
              font-medium
              focus:outline-none
              focus-visible:ring-primary
              bg-primary
              text-primary-foreground
              hover:bg-primary/90
              shadow-lg
              shadow-primary/25
              p-3
            "
          >
            <div className="relative flex items-center justify-center gap-5">
              Contact Me
            </div>
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDarkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              isDarkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="
              p-2
              rounded-full
              glass
              text-foreground
              hover:text-primary
              transition-all
              duration-300
            "
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-foreground cursor-pointer"
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  text-lg
                  text-muted-foreground
                  hover:text-foreground
                  py-2
                  transition-colors
                "
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Contact Button */}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                mt-2
                flex
                items-center
                justify-center
                rounded-full
                bg-primary
                px-6
                py-3
                font-medium
                text-primary-foreground
                shadow-lg
                shadow-primary/25
                transition-all
                duration-300
                hover:bg-primary/90
              "
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;