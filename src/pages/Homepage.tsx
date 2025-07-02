import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/lina-nizar-hero.jpg";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Lina Nizar"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Smart Real Estate.
              <span className="block text-gold">Global Vision.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Lina Nizar helps investors navigate high-growth real estate opportunities 
              in Sri Lanka and Dubai with strategy, speed, and confidence.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-luxury-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">
                Two Decades of Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                As CEO of ExpatKey Properties, Lina has led sales and development across 
                iconic projects like Altair, One Galle Face, and Crystal Sands. With a 
                cross-border investor network and deep market insight, she brings experience, 
                cultural intelligence, and discretion to every deal.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center group">
                  <div className="text-4xl font-serif font-bold text-gold mb-2 group-hover:scale-110 transition-elegant">
                    20+
                  </div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-serif font-bold text-gold mb-2 group-hover:scale-110 transition-elegant">
                    500M+
                  </div>
                  <div className="text-muted-foreground">Portfolio Value</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-serif font-bold text-gold mb-2 group-hover:scale-110 transition-elegant">
                    2
                  </div>
                  <div className="text-muted-foreground">Key Markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
              Investment Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate advisory services tailored for global investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Investment Advisory",
                description: "Strategic guidance for high-growth opportunities",
                icon: "📊"
              },
              {
                title: "Pre-Launch Access",
                description: "Exclusive off-plan investment opportunities",
                icon: "🏗️"
              },
              {
                title: "Portfolio Management",
                description: "Cross-border asset optimization",
                icon: "🌐"
              },
              {
                title: "Market Entry",
                description: "Dubai market strategy for newcomers",
                icon: "🚀"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg shadow-soft hover:shadow-luxury transition-elegant group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-elegant">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Invest Smartly?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Schedule a personalized strategy session and discover your next 
            high-growth real estate opportunity.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Book Your Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;