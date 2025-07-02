import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Real Estate Investment Advisory",
      description: "Strategic guidance for high-growth real estate opportunities with comprehensive market analysis and risk assessment.",
      features: [
        "Market intelligence and trend analysis",
        "Investment strategy development",
        "Risk assessment and mitigation",
        "Portfolio optimization consultation",
        "Cross-border investment planning"
      ],
      icon: "📊"
    },
    {
      title: "Pre-Launch & Off-Plan Opportunities",
      description: "Exclusive access to premium developments before public launch, maximizing investment potential and early-bird advantages.",
      features: [
        "Exclusive pre-launch access",
        "Developer relationship leverage",
        "Early-bird pricing advantages",
        "Payment plan optimization",
        "Construction milestone monitoring"
      ],
      icon: "🏗️"
    },
    {
      title: "Portfolio Management",
      description: "Comprehensive management of real estate assets across Sri Lanka and Dubai markets with focus on maximizing returns.",
      features: [
        "Asset performance monitoring",
        "Rental yield optimization",
        "Market timing for exits",
        "Currency risk management",
        "Tax efficiency strategies"
      ],
      icon: "🌐"
    },
    {
      title: "Dubai Market Entry Strategy",
      description: "Specialized guidance for investors entering the Dubai real estate market, including regulatory compliance and opportunity identification.",
      features: [
        "Market entry strategy development",
        "Regulatory compliance guidance",
        "Local partner network access",
        "Due diligence support",
        "Cultural intelligence consulting"
      ],
      icon: "🚀"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive discussion of your investment goals, risk tolerance, and market preferences."
    },
    {
      step: "02",
      title: "Market Analysis",
      description: "Deep-dive into relevant markets with customized opportunity assessment and recommendations."
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Tailored investment strategy aligned with your objectives and market conditions."
    },
    {
      step: "04",
      title: "Execution & Support",
      description: "Full support through transaction process with ongoing portfolio management."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary animate-fade-in">
            Investment Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Comprehensive real estate advisory services designed for global investors 
            seeking high-growth opportunities in Sri Lanka and Dubai markets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg shadow-soft hover:shadow-luxury transition-elegant group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-elegant">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="elegant" size="lg" className="w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures strategic, efficient, and successful real estate investments
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-8 pb-12 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center text-primary font-bold text-lg shadow-gold">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-px h-16 bg-border mx-auto mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-background p-12 rounded-lg shadow-luxury">
              <blockquote className="text-2xl italic font-light text-muted-foreground leading-relaxed mb-8">
                "Lina's expertise in the Sri Lankan and Dubai markets is unparalleled. 
                Her strategic insights and network have been instrumental in our successful 
                real estate investments. She combines deep market knowledge with exceptional 
                client service."
              </blockquote>
              <div className="text-lg font-semibold text-primary mb-2">
                Sid Hidramani
              </div>
              <div className="text-muted-foreground">
                Investment Partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Start Your Investment Journey
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Schedule a personalized consultation to explore how our services 
            can accelerate your real estate investment success.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Book Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;