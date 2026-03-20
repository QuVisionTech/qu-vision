import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Knowledge Hub", href: "/knowledge" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + hash);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container max-w-6xl flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
            <span className="text-secondary-foreground font-display font-bold text-sm">Q</span>
          </div>
          <span className="font-display font-bold text-lg text-primary">
            QuVision<span className="text-secondary">.tech</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Button variant="hero" size="sm" onClick={() => handleNavClick("/#contact")}>
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Button variant="hero" size="sm" onClick={() => handleNavClick("/#contact")}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
