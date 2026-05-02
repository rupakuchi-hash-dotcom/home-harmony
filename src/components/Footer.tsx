import { Link } from "react-router-dom";
import { Facebook, Home, Instagram, Linkedin, Twitter } from "lucide-react";
import staffarcLogo from "@/assets/staffarc-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-xl gradient-primary text-primary-foreground">
              <Home className="h-5 w-5" />
            </span>
            <span className="font-display font-bold text-xl">Estate</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Helping middle-class Indian families find homes they love — across Bangalore, Mumbai, Pune, Goa and beyond.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid place-items-center h-9 w-9 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/listings" className="hover:text-primary transition-smooth">Buy</Link></li>
            <li><Link to="/listings" className="hover:text-primary transition-smooth">Rent</Link></li>
            <li><Link to="/listings" className="hover:text-primary transition-smooth">Sell</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-smooth">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Cities</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Bangalore</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Goa</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@estate.in</li>
            <li>+91 80 4000 1234</li>
            <li>MG Road, Bangalore 560001</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Estate. All rights reserved.</span>
          <a
            href="https://staffarc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-smooth group"
            aria-label="Developed by Staffarc"
          >
            <span>Developed by</span>
            <img
              src={staffarcLogo}
              alt="Staffarc"
              width={96}
              height={24}
              loading="lazy"
              className="h-6 w-auto object-contain group-hover:scale-105 transition-smooth"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};