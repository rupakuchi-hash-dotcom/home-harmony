import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Bath, BedDouble, Car, Dumbbell, Heart, MapPin, Maximize, Phone, ShieldCheck, Sparkles, Wifi, Waves } from "lucide-react";
import { useState } from "react";
import { formatINR, properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NotFound from "./NotFound";

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Parking: Car, WiFi: Wifi, Gym: Dumbbell, Pool: Waves, Security: ShieldCheck,
  "Power Backup": Sparkles, Garden: Sparkles, Furnished: Sparkles, Concierge: Sparkles,
  "Sea View": Waves, "Beach Access": Waves,
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [active, setActive] = useState(0);

  if (!property) return <NotFound />;

  return (
    <article className="container py-10 md:py-14 animate-fade-in">
      <Link to="/listings" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to listings
      </Link>

      <header className="flex items-start justify-between gap-6 flex-wrap mb-6">
        <div>
          <div className="flex gap-2 mb-3">
            <Badge className="rounded-full" variant="secondary">For {property.status}</Badge>
            <Badge className="rounded-full gradient-primary text-primary-foreground border-0">{property.type}</Badge>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-5xl">{property.title}</h1>
          <div className="flex items-center gap-1.5 text-muted-foreground mt-3">
            <MapPin className="h-4 w-4" />
            <span>{property.location}, {property.city}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-display font-bold text-3xl md:text-4xl text-primary">
            {formatINR(property.price)}
            {property.status === "Rent" && <span className="text-base text-muted-foreground font-medium">/month</span>}
          </div>
          <p className="text-sm text-muted-foreground">≈ {formatINR(Math.round(property.price / property.area))}/ft²</p>
        </div>
      </header>

      {/* Gallery */}
      <div className="grid gap-3 md:grid-cols-[1fr_240px] mb-10">
        <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-muted shadow-card">
          <img src={property.gallery[active]} alt={property.title} className="h-full w-full object-cover transition-smooth" />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
          {property.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-smooth ${active === i ? "border-primary" : "border-transparent hover:border-border"}`}
            >
              <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        <div className="space-y-10">
          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: BedDouble, label: "Bedrooms", value: property.beds },
              { icon: Bath, label: "Bathrooms", value: property.baths },
              { icon: Maximize, label: "Area", value: `${property.area} ft²` },
              { icon: MapPin, label: "City", value: property.city },
            ].map((s, i) => (
              <div key={i} className="bg-card rounded-2xl p-5 border border-border/60 shadow-card">
                <s.icon className="h-5 w-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="font-semibold">{s.value}</div>
              </div>
            ))}
          </div>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">About this property</h2>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-4">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.amenities.map((a) => {
                const Icon = amenityIcons[a] ?? Sparkles;
                return (
                  <div key={a} className="flex items-center gap-3 bg-card rounded-xl border border-border/60 px-4 py-3">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{a}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-4">Location</h2>
            <div className="aspect-[16/8] rounded-2xl overflow-hidden border border-border bg-secondary/40 grid place-items-center relative">
              <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(hsl(var(--primary)/0.15)_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative text-center">
                <div className="grid place-items-center h-14 w-14 rounded-full gradient-primary text-primary-foreground mx-auto shadow-elevated mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="font-semibold">{property.location}, {property.city}</p>
                <p className="text-sm text-muted-foreground">Map integration placeholder</p>
              </div>
            </div>
          </section>
        </div>

        {/* Agent card */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/60 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full gradient-primary grid place-items-center text-primary-foreground font-bold">RS</div>
              <div>
                <div className="font-semibold">Ravi Subramanian</div>
                <div className="text-xs text-muted-foreground">Senior Property Advisor</div>
              </div>
            </div>
            <div className="space-y-2">
              <Button className="w-full gradient-primary border-0">
                <Phone className="mr-2 h-4 w-4" /> Contact Agent
              </Button>
              <Button variant="outline" className="w-full">
                <Heart className="mr-2 h-4 w-4" /> Save Property
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Response time: under 30 minutes
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default PropertyDetails;