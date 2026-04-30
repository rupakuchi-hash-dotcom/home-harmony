import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const MAX = 100000000;

const Listings = () => {
  const [params] = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [type, setType] = useState(params.get("type") ?? "all");
  const [beds, setBeds] = useState("any");
  const [status, setStatus] = useState("all");
  const [price, setPrice] = useState<number[]>([0, MAX]);
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      if (q && !`${p.location} ${p.city} ${p.title}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (type !== "all" && p.type !== type) return false;
      if (status !== "all" && p.status !== status) return false;
      if (beds !== "any" && p.beds < Number(beds)) return false;
      if (p.price < price[0] || p.price > price[1]) return false;
      return true;
    });
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [q, type, status, beds, price, sort]);

  const reset = () => {
    setQ(""); setType("all"); setBeds("any"); setStatus("all"); setPrice([0, MAX]);
  };

  return (
    <section className="container py-12 md:py-16">
      <header className="mb-8 animate-fade-in">
        <h1 className="font-display font-bold text-3xl md:text-5xl">Explore Properties</h1>
        <p className="text-muted-foreground mt-2">Browse {properties.length} verified homes across India.</p>
      </header>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="bg-card rounded-2xl shadow-card border border-border/60 p-6 h-fit lg:sticky lg:top-24">
          <div className="flex items-center gap-2 mb-5">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <h2 className="font-display font-semibold">Filters</h2>
          </div>

          <div className="space-y-5">
            <div>
              <Label className="text-xs text-muted-foreground">Location</Label>
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="City or area" className="mt-1.5" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Buy">Buy</SelectItem>
                  <SelectItem value="Rent">Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Penthouse">Penthouse</SelectItem>
                  <SelectItem value="Townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Bedrooms</Label>
              <Select value={beds} onValueChange={setBeds}>
                <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label className="text-xs text-muted-foreground">Price (₹)</Label>
                <span className="text-xs text-muted-foreground">
                  {(price[0] / 100000).toFixed(0)}L – {(price[1] / 10000000).toFixed(1)}Cr
                </span>
              </div>
              <Slider value={price} onValueChange={setPrice} max={MAX} step={500000} className="mt-3" />
            </div>
            <Button variant="outline" className="w-full" onClick={reset}>Reset</Button>
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <p className="text-sm text-muted-foreground">{filtered.length} properties found</p>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="low">Price: Low to High</SelectItem>
                <SelectItem value="high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filtered.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          ) : (
            <div className="text-center py-20 bg-card rounded-2xl border border-border/60">
              <p className="text-muted-foreground">No properties match your filters.</p>
              <Button onClick={reset} className="mt-4">Reset filters</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Listings;