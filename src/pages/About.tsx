import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/lina-about-portrait.jpg";

const About = () => {
  const timeline = [
    {
      year: "2020 - Present",
      company: "ExpatKey Properties",
      role: "CEO & Founder",
      description: "Leading luxury real estate investments across Sri Lanka and Dubai with focus on diaspora clients and cross-border portfolios."
    },
    {
      year: "2015 - 2020",
      company: "Grow Investment",
      role: "Senior Investment Advisor",
      description: "Specialized in high-net-worth client portfolio management and strategic market entry consulting."
    },
    {
      year: "2010 - 2015",
      company: "Ehsan Ventures",
      role: "Real Estate Consultant",
      description: "Built expertise in luxury residential and commercial property development across South Asian markets."
    }
  ];

  const achievements = [
    "Led sales for iconic projects: Altair, One Galle Face, Crystal Sands",
    "Managed $500M+ in real estate transactions",
    "Built extensive network of global investors and developers",
    "Pioneer in Sri Lanka-Dubai cross-border investment strategies"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary">
                Meet Lina Nizar
              </h1>
              <div className="text-xl text-gold font-semibold mb-6">
                CEO, ExpatKey Properties
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                As CEO of ExpatKey Properties, Lina has led sales and development across 
                iconic projects like Altair, One Galle Face, and Crystal Sands. With a 
                cross-border investor network and two decades of market insight, she brings 
                deep experience, cultural intelligence, and discretion to every deal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Born with an entrepreneurial spirit and raised with global perspective, 
                Lina understands the unique needs of diaspora investors and international 
                clients seeking high-growth opportunities in emerging markets.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <Link to="/contact">Connect with Lina</Link>
              </Button>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Lina Nizar"
                  className="w-full max-w-md mx-auto rounded-lg shadow-luxury"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-luxury rounded-lg opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
              Professional Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two decades of building excellence in real estate investment advisory
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 w-px h-full bg-border" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-3 h-3 bg-gold rounded-full transform -translate-x-1/2" />
                
                <div className="bg-background p-8 rounded-lg shadow-soft hover:shadow-luxury transition-elegant">
                  <div className="text-gold font-semibold mb-2">{item.year}</div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                    {item.role}
                  </h3>
                  <div className="text-lg font-medium text-muted-foreground mb-4">
                    {item.company}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
              Key Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track record of excellence in luxury real estate investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Investment Philosophy
            </h2>
            <blockquote className="text-2xl italic font-light leading-relaxed mb-8">
              "Real estate is not just about properties—it's about understanding people, 
              markets, and the future. Every investment decision should be backed by 
              deep market knowledge, cultural intelligence, and unwavering integrity."
            </blockquote>
            <div className="text-xl text-primary-foreground/80">
              — Lina Nizar
            </div>
            
            <div className="mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/portfolio">See Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;