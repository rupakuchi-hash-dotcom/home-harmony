import { Award, Heart, Sparkles, Users } from "lucide-react";

const team = [
  { name: "Ananya Rao", role: "Founder & CEO", initials: "AR" },
  { name: "Vikram Joshi", role: "Head of Operations", initials: "VJ" },
  { name: "Meera Kapoor", role: "Lead Property Advisor", initials: "MK" },
  { name: "Karthik Nair", role: "Head of Technology", initials: "KN" },
];

const About = () => {
  return (
    <>
      <section className="container py-16 md:py-24 animate-fade-in">
        <div className="max-w-3xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Estate</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mt-3 leading-tight">
            Helping Indian families find homes since 2015.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Estate was born out of a simple frustration — buying a home in India shouldn't be confusing, opaque, or stressful. Today we're a team of 200+ professionals helping families find verified, fairly priced homes across the country.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container grid md:grid-cols-2 gap-10">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/60">
            <div className="grid place-items-center h-12 w-12 rounded-xl gradient-primary text-primary-foreground mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="font-display font-bold text-2xl mb-3">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To make home-buying transparent, accessible, and joyful for every middle-class Indian family — regardless of city or budget.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/60">
            <div className="grid place-items-center h-12 w-12 rounded-xl gradient-primary text-primary-foreground mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h2 className="font-display font-bold text-2xl mb-3">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A future where every Indian family can confidently call a place their own, with full clarity on price, paperwork, and possession.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Users, value: "10,000+", label: "Families helped" },
            { icon: Award, value: "12 Years", label: "In real estate" },
            { icon: Sparkles, value: "50+", label: "Indian cities" },
            { icon: Heart, value: "4.9 / 5", label: "Customer rating" },
          ].map((s, i) => (
            <div key={i} className="p-6">
              <s.icon className="h-7 w-7 text-primary mx-auto mb-3" />
              <div className="font-display font-bold text-3xl">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Team</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2">The people behind Estate</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div key={i} className="group bg-card rounded-2xl p-6 text-center shadow-card border border-border/60 hover:shadow-elevated hover:-translate-y-1 transition-smooth">
              <div className="h-24 w-24 mx-auto rounded-full gradient-primary grid place-items-center text-primary-foreground font-display font-bold text-2xl group-hover:scale-105 transition-smooth">
                {m.initials}
              </div>
              <h3 className="font-semibold mt-4">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;