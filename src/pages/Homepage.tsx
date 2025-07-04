import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/lina-nizar-hero.jpg";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Executive Level */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Sophisticated Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Lina Nizar - Real Estate Investment Advisor"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[12s] ease-out hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 text-center">
          <div className="animate-fade-up">
            {/* Luxury Subtitle */}
            <div className="text-caption text-white/70 mb-12 tracking-[0.4em] font-medium">
              Real Estate Investment Advisory
            </div>
            
            {/* Powerful Headline */}
            <h1 className="text-display font-display font-light text-white mb-16 leading-[0.85]">
              Smart Real Estate.
              <span className="block text-gradient-gold mt-4">Global Vision.</span>
            </h1>
            
            {/* Sophisticated Description */}
            <p className="text-body-xl text-white/85 max-w-4xl mx-auto mb-20 leading-relaxed font-light">
              Lina Nizar guides discerning investors through exceptional real estate opportunities 
              across Sri Lanka and Dubai. Two decades of market mastery, cultural intelligence, 
              and strategic foresight in every transaction.
            </p>

            {/* Premium CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="gold" size="xl" className="min-w-[240px]" asChild>
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
              <Button variant="glass" size="xl" className="min-w-[240px]" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Refined Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 floating">
          <div className="w-1 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
        </div>
      </section>

      {/* Excellence Section - World-Class Design */}
      <section className="py-40 bg-gradient-platinum">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-32 animate-fade-up">
              <div className="text-caption text-muted-foreground mb-12 tracking-[0.3em]">
                Two Decades of Excellence
              </div>
              <h2 className="text-headline font-display font-light mb-16 text-primary leading-[1.1]">
                Transforming Real Estate
                <span className="block text-gradient-gold mt-2">Investment Strategies</span>
              </h2>
              <p className="text-body-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
                As CEO of ExpatKey Properties, Lina orchestrates prestigious developments across 
                iconic projects including Altair, One Galle Face, and Crystal Sands. Her global 
                investor network and market mastery deliver exceptional value through cultural 
                intelligence and discretionary excellence.
              </p>
            </div>
            
            {/* Premium Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-32">
              {[
                { number: "20+", label: "Years of Market Leadership", delay: "delay-100" },
                { number: "$500M+", label: "Portfolio Value Managed", delay: "delay-200" },
                { number: "2", label: "Strategic Markets", delay: "delay-300" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center group animate-scale-in ${stat.delay}`}
                >
                  <div className="text-7xl font-display font-light text-gradient-gold mb-8 group-hover:scale-105 transition-fluid">
                    {stat.number}
                  </div>
                  <div className="text-body text-muted-foreground font-medium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Executive Excellence */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-32">
            <div className="text-caption text-muted-foreground mb-12 tracking-[0.3em]">
              Investment Solutions
            </div>
            <h2 className="text-headline font-display font-light mb-16 text-primary">
              Comprehensive Advisory
              <span className="block text-gradient-gold mt-2">Services</span>
            </h2>
            <p className="text-body-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Bespoke investment solutions crafted for discerning global investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Investment Advisory",
                description: "Strategic guidance for exceptional opportunities with comprehensive market intelligence and cultural expertise",
                icon: "📊",
                delay: "delay-100"
              },
              {
                title: "Pre-Launch Access",
                description: "Exclusive access to premium developments before public availability with insider market positioning",
                icon: "🏗️", 
                delay: "delay-200"
              },
              {
                title: "Portfolio Management",
                description: "Cross-border asset optimization with sophisticated risk management and currency hedging strategies",
                icon: "🌐",
                delay: "delay-300"
              },
              {
                title: "Market Entry Strategy",
                description: "Dubai market penetration with regulatory navigation and strategic partnership development",
                icon: "🚀",
                delay: "delay-400"
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`group p-10 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-fluid magnetic animate-scale-in ${service.delay} border border-border/30 hover:border-border/50`}
              >
                <div className="text-6xl mb-8 group-hover:scale-110 transition-fluid opacity-80">
                  {service.icon}
                </div>
                <h3 className="text-title font-display font-normal mb-6 text-primary">
                  {service.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button variant="executive" size="xl" className="min-w-[280px]" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Executive Persuasion */}
      <section className="py-40 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(42_70%_70%/0.1),transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center relative">
          <div className="animate-fade-up">
            <h2 className="text-headline font-display font-light mb-16 leading-[1.1]">
              Ready to Invest
              <span className="block text-gradient-gold mt-2">Strategically?</span>
            </h2>
            <p className="text-body-xl mb-20 text-primary-foreground/85 max-w-4xl mx-auto leading-relaxed font-light">
              Schedule a confidential strategy session and discover exceptional 
              real estate opportunities with personalized market intelligence 
              and decades of proven expertise.
            </p>
            <Button variant="gold" size="xl" className="min-w-[300px] shadow-floating" asChild>
              <Link to="/contact">Book Your Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;