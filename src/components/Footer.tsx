import { MapPin } from "lucide-react";

const locations = [
  { city: "Washington D.C.", country: "USA" },
  { city: "Bangalore", country: "India" },
  { city: "Kuala Lumpur", country: "Malaysia" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-sm">Q</span>
              </div>
              <span className="font-display font-bold text-lg">
                QuVision<span className="text-secondary">.tech</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Technology Solutions for Quantum Computing. Engineering the quantum future for enterprises worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><a href="#solutions" className="hover:text-secondary transition-colors">Quantum Cryptography</a></li>
              <li><a href="#solutions" className="hover:text-secondary transition-colors">Error Correction</a></li>
              <li><a href="#solutions" className="hover:text-secondary transition-colors">Quantum ML</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><a href="#knowledge" className="hover:text-secondary transition-colors">Whitepapers</a></li>
              <li><a href="#knowledge" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
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

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} QuVision.tech — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
