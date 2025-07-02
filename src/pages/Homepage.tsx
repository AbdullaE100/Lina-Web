import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/lina-nizar-hero.jpg";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - World Class */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 scale-110">
          <img
            src={heroImage}
            alt="Lina Nizar - Real Estate Investment Advisor"
            className="w-full h-full object-cover object-center transition-transform duration-[10s] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <div className="animate-fade-in-up">
            {/* Subtitle */}
            <div className="text-caption text-white/80 mb-8 tracking-[0.3em] uppercase">
              Real Estate Investment Advisory
            </div>
            
            {/* Main Headline */}
            <h1 className="text-display font-serif font-normal text-white mb-12 leading-none">
              Smart Real Estate.
              <span className="block text-gradient-gold">Global Vision.</span>
            </h1>
            
            {/* Description */}
            <p className="text-body-lg text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed">
              Lina Nizar helps global investors navigate high-growth real estate opportunities 
              in Sri Lanka and Dubai with strategic insight, cultural intelligence, and proven expertise 
              spanning two decades.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-4 bg-white/60 rounded-full animate-glow" />
          </div>
        </div>
      </section>

      {/* Introduction Section - Ultra Refined */}
      <section className="py-32 bg-gradient-section">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24 animate-fade-in">
              <div className="text-caption text-muted-foreground mb-8 tracking-[0.2em] uppercase">
                Two Decades of Excellence
              </div>
              <h2 className="text-headline font-serif font-normal mb-12 text-primary leading-tight">
                Transforming Real Estate
                <span className="block text-gradient-gold">Investment Strategies</span>
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                As CEO of ExpatKey Properties, Lina has orchestrated sales and development across 
                prestigious projects including Altair, One Galle Face, and Crystal Sands. Her 
                extensive cross-border investor network and profound market intelligence deliver 
                unparalleled value through cultural fluency and discretionary excellence.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24">
              {[
                { number: "20+", label: "Years of Market Leadership", delay: "0" },
                { number: "$500M+", label: "Portfolio Value Managed", delay: "0.2" },
                { number: "2", label: "Strategic Markets", delay: "0.4" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${stat.delay}s` }}
                >
                  <div className="text-6xl font-serif font-normal text-gradient-gold mb-6 group-hover:scale-110 transition-luxury">
                    {stat.number}
                  </div>
                  <div className="text-body text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Layout */}
      <section className="py-32 bg-background">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <div className="text-caption text-muted-foreground mb-8 tracking-[0.2em] uppercase">
              Investment Solutions
            </div>
            <h2 className="text-headline font-serif font-normal mb-12 text-primary">
              Comprehensive Advisory
              <span className="block text-gradient-gold">Services</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Bespoke real estate investment solutions crafted for sophisticated global investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Investment Advisory",
                description: "Strategic guidance for high-yield opportunities with comprehensive market intelligence",
                icon: "📊",
                delay: "0"
              },
              {
                title: "Pre-Launch Access",
                description: "Exclusive entry into premium developments before public availability",
                icon: "🏗️", 
                delay: "0.1"
              },
              {
                title: "Portfolio Management",
                description: "Cross-border asset optimization with currency risk mitigation",
                icon: "🌐",
                delay: "0.2"
              },
              {
                title: "Market Entry",
                description: "Dubai market penetration strategy for international investors",
                icon: "🚀",
                delay: "0.3"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl shadow-md hover:shadow-luxury transition-luxury magnetic animate-fade-in"
                style={{ animationDelay: `${service.delay}s` }}
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-luxury">
                  {service.icon}
                </div>
                <h3 className="text-title font-serif font-normal mb-6 text-primary">
                  {service.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="primary" size="xl" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="py-32 bg-gradient-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="animate-fade-in">
            <h2 className="text-headline font-serif font-normal mb-12">
              Ready to Invest
              <span className="block text-gradient-gold">Strategically?</span>
            </h2>
            <p className="text-body-lg mb-16 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Schedule a confidential strategy session and discover your next 
              high-growth real estate investment opportunity with personalized market intelligence.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Book Your Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;