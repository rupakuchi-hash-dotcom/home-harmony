import { Link } from "react-router-dom";
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import { formatINR, type Property } from "@/data/properties";
import { Badge } from "@/components/ui/badge";

export const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Link
      to={`/property/${property.id}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth border border-border/60 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 rounded-full bg-background/90 text-foreground hover:bg-background">
          For {property.status}
        </Badge>
        <Badge className="absolute top-3 right-3 rounded-full gradient-primary text-primary-foreground border-0">
          {property.type}
        </Badge>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-lg leading-tight group-hover:text-primary transition-smooth">
            {property.title}
          </h3>
          <span className="font-display font-bold text-primary whitespace-nowrap">
            {formatINR(property.price)}
            {property.status === "Rent" && <span className="text-xs text-muted-foreground font-medium">/mo</span>}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>{property.location}, {property.city}</span>
        </div>
        <div className="flex items-center gap-4 pt-3 border-t border-border text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4" /> {property.beds} Beds</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> {property.baths} Baths</span>
          <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4" /> {property.area} ft²</span>
        </div>
      </div>
    </Link>
  );
};