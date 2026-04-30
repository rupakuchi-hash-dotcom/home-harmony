import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Our team will reach out within 30 minutes." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="container py-16 md:py-24 animate-fade-in">
      <div className="max-w-2xl mb-14">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
        <h1 className="font-display font-bold text-4xl md:text-5xl mt-3 leading-tight">
          Let's find your next home, together.
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Have a question or ready to start your search? Our advisors respond within 30 minutes.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10">
        <form onSubmit={onSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border/60 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Anita Sharma" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" required placeholder="+91 98765 43210" className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" required rows={5} placeholder="I'm looking for a 3 BHK in Whitefield..." className="mt-1.5" />
          </div>
          <Button type="submit" size="lg" className="gradient-primary border-0 rounded-full">
            <Send className="mr-2 h-4 w-4" /> Send message
          </Button>
        </form>

        <aside className="space-y-4">
          {[
            { icon: Phone, label: "Phone", value: "+91 80 4000 1234" },
            { icon: Mail, label: "Email", value: "hello@estate.in" },
            { icon: MapPin, label: "Office", value: "MG Road, Bangalore 560001" },
          ].map((c, i) => (
            <div key={i} className="bg-card rounded-2xl p-5 border border-border/60 shadow-card flex items-start gap-4">
              <div className="grid place-items-center h-10 w-10 rounded-xl gradient-primary text-primary-foreground shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="font-medium">{c.value}</div>
              </div>
            </div>
          ))}

          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-card">
            <iframe
              title="Estate office location"
              src="https://www.google.com/maps?q=MG+Road+Bangalore&output=embed"
              loading="lazy"
              className="h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;