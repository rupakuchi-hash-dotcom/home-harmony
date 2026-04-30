import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home as HomeIcon, KeyRound, Quote, Search, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 6);
  const navigate = useNavigate();
  const [loc, setLoc] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (loc) params.set("q", loc);
    if (type) params.set("type", type);
    if (budget) params.set("budget", budget);
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Luxury home at golden hour"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container py-24 md:py-32 text-primary-foreground">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-4 py-1.5 text-sm border border-white/20">
              <Sparkles className="h-3.5 w-3.5" /> India's most loved home-finding platform
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Find a place your family
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[hsl(var(--primary-glow))]">
                will call home.
              </span>
            </h1>
            <p className="text-lg text-white/85 max-w-xl">
              Curated apartments, villas and townhouses across Bangalore, Mumbai, Pune & Goa — handpicked for middle-class Indian families.
            </p>
          </div>

          {/* Search */}
          <form
            onSubmit={onSearch}
            className="mt-10 max-w-4xl bg-card/95 backdrop-blur rounded-2xl shadow-elevated p-3 grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto] animate-scale-in"
          >
            <div className="relative">
              <MapPinSimple />
              <Input
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                placeholder="Location, e.g. Whitefield"
                className="h-12 pl-10 border-0 bg-transparent focus-visible:ring-0 text-foreground"
              />
            </div>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="h-12 border-0 bg-secondary/50 text-foreground">
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
                <SelectItem value="Penthouse">Penthouse</SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger className="h-12 border-0 bg-secondary/50 text-foreground">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50">Under ₹50 L</SelectItem>
                <SelectItem value="100">₹50 L – ₹1 Cr</SelectItem>
                <SelectItem value="300">₹1 – 3 Cr</SelectItem>
                <SelectItem value="1000">₹3 Cr +</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" size="lg" className="h-12 rounded-xl gradient-primary border-0 hover:opacity-90">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </form>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/85">
            <Stat value="12,000+" label="Verified Listings" />
            <Stat value="50+" label="Indian Cities" />
            <Stat value="98%" label="Happy Families" />
          </div>
        </div>
      </section>

      {/* CTA tiles */}
      <section className="container -mt-8 relative z-10 grid gap-4 md:grid-cols-3">
        {[
          { icon: HomeIcon, title: "Buy a Home", desc: "Find your forever home from 8,000+ verified properties.", to: "/listings" },
          { icon: Building2, title: "Rent a Place", desc: "Discover comfortable rentals across major Indian cities.", to: "/listings" },
          { icon: KeyRound, title: "Sell Property", desc: "Reach thousands of serious buyers in just one click.", to: "/contact" },
        ].map((c, i) => (
          <Link
            key={i}
            to={c.to}
            className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated border border-border/60 transition-smooth hover:-translate-y-1"
          >
            <div className="grid place-items-center h-12 w-12 rounded-xl gradient-primary text-primary-foreground mb-4 group-hover:scale-110 transition-smooth">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-1">{c.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{c.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Get started <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-smooth" />
            </span>
          </Link>
        ))}
      </section>

      {/* Featured */}
      <section className="container py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Featured</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-2">Hand-picked homes</h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/listings">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PropertyCard key={p.id} property={p} />)}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Estate</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-2">Built for Indian families</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "100% Verified", desc: "Every property is physically verified before listing." },
              { icon: Sparkles, title: "Zero Brokerage", desc: "Direct deals with owners — no hidden fees, ever." },
              { icon: Star, title: "Family First", desc: "Filters for schools, safety, and community living." },
            ].map((f, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 shadow-card border border-border/60">
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-xl mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2">Loved by 10,000+ families</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Priya & Arjun Sharma", city: "Bangalore", quote: "We found our dream 3 BHK in just two weeks. The team made the entire process feel effortless." },
            { name: "Rohan Mehta", city: "Mumbai", quote: "Honest pricing, verified listings, and zero pressure. Best real-estate experience I've ever had." },
            { name: "The Iyer Family", city: "Pune", quote: "From schooling to safety, every detail was thought of. Estate truly puts families first." },
          ].map((t, i) => (
            <figure key={i} className="bg-card rounded-2xl p-7 shadow-card border border-border/60 hover:shadow-elevated transition-smooth">
              <Quote className="h-6 w-6 text-primary mb-3" />
              <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 md:p-16 text-primary-foreground">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
              Ready to find your next home?
            </h2>
            <p className="mt-4 text-primary-foreground/85 text-lg">
              Join thousands of families who found their perfect place through Estate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/listings">Browse Listings</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <Link to="/contact">Talk to an Agent</Link>
              </Button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        </div>
      </section>
    </>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display font-bold text-2xl text-white">{value}</div>
    <div className="text-white/70 text-xs">{label}</div>
  </div>
);

const MapPinSimple = () => (
  <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default Home;