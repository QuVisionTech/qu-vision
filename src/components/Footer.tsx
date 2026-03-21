import { Link, useNavigate, useLocation } from "react-router-dom";
import { MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const locations = [
  { city: "Atlanta, GA", country: "USA" },
  { city: "Bangalore", country: "India" },
  { city: "Kuala Lumpur", country: "Malaysia" },
];

const legalLinks = [
  { label: "Privacy Statement", href: "/privacy" },
  { label: "Cookie Notice", href: "/cookie-notice" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Trademark Usage", href: "/trademark" },
  { label: "License Agreements", href: "/license" },
  { label: "Integrity & Compliance", href: "/integrity" },
  { label: "Cookie Preferences", href: "#", onClick: true },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("open-cookie-preferences"));
  };

  const handleHashClick = (href: string) => {
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
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="QuVision logo" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-lg">
                QuVision<span className="text-secondary">.tech</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Technology Solutions for Quantum Computing. Engineering the quantum future for enterprises worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><button onClick={() => handleHashClick("/#solutions")} className="hover:text-secondary transition-colors">Quantum Cryptography</button></li>
              <li><button onClick={() => handleHashClick("/#solutions")} className="hover:text-secondary transition-colors">Error Correction</button></li>
              <li><button onClick={() => handleHashClick("/#solutions")} className="hover:text-secondary transition-colors">Quantum ML</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/knowledge" className="hover:text-secondary transition-colors">Whitepapers</Link></li>
              <li><Link to="/knowledge" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link to="/team" className="hover:text-secondary transition-colors">Team</Link></li>
              <li><button onClick={() => handleHashClick("/#contact")} className="hover:text-secondary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.onClick ? (
                    <button onClick={openCookiePreferences} className="hover:text-secondary transition-colors text-left">
                      {link.label}
                    </button>
                  ) : (
                    <Link to={link.href} className="hover:text-secondary transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Global Presence</h4>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc.city} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                  <span>{loc.city}, {loc.country}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex items-center justify-between text-sm text-primary-foreground/40">
          <span>© {new Date().getFullYear()} QuVision.tech — All rights reserved.</span>
          <a
            href="https://www.linkedin.com/company/quvision"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/40 hover:text-secondary transition-colors"
            aria-label="QuVision on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
