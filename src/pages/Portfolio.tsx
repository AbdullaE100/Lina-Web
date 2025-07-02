import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import altairImage from "@/assets/altair-project.jpg";
import crystalSandsImage from "@/assets/crystal-sands-project.jpg";
import oneGalleFaceImage from "@/assets/one-galle-face-project.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Altair",
      location: "Dubai, UAE",
      image: altairImage,
      role: "Lead Sales Advisor",
      description: "Ultra-luxury residential tower in Business Bay with panoramic city and canal views. Led pre-launch sales strategy resulting in 85% sold within 6 months.",
      highlights: [
        "85% sold in pre-launch phase",
        "$150M+ in sales volume",
        "Premium waterfront location",
        "Iconic architectural design"
      ]
    },
    {
      title: "Crystal Sands",
      location: "Colombo, Sri Lanka",
      image: crystalSandsImage,
      role: "Investment Strategy Consultant",
      description: "Exclusive beachfront residential development featuring luxury apartments with direct ocean access. Pioneered international investor acquisition program.",
      highlights: [
        "Beachfront premium positioning",
        "60% international buyers",
        "Record price per sq ft",
        "Sustainable design certification"
      ]
    },
    {
      title: "One Galle Face",
      location: "Colombo, Sri Lanka",
      image: oneGalleFaceImage,
      role: "Senior Sales Director",
      description: "Iconic mixed-use development combining luxury residences, premium retail, and world-class hospitality. Managed diaspora investor relations.",
      highlights: [
        "Most prestigious address in Colombo",
        "Mixed-use luxury development",
        "International hotel partnership",
        "Strong diaspora investor base"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary animate-fade-in">
            Portfolio of Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Showcasing marquee projects that define luxury real estate in Sri Lanka and Dubai. 
            Each development represents strategic vision, market expertise, and exceptional execution.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover rounded-lg shadow-luxury group-hover:scale-105 transition-elegant"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-30 transition-elegant rounded-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="bg-background p-8 rounded-lg shadow-soft">
                    <div className="text-gold font-semibold mb-2">{project.location}</div>
                    <h3 className="text-4xl font-serif font-bold text-primary mb-4">
                      {project.title}
                    </h3>
                    <div className="text-lg font-medium text-muted-foreground mb-6">
                      {project.role}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mb-8">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="elegant" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Metrics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
              Portfolio Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable results across luxury real estate developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "$500M+", label: "Total Portfolio Value" },
              { metric: "3", label: "Marquee Projects" },
              { metric: "75%", label: "International Buyers" },
              { metric: "95%", label: "Client Satisfaction" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2 group-hover:scale-110 transition-elegant">
                  {item.metric}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready for Your Next Investment?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Discover exclusive opportunities in luxury real estate across 
            Sri Lanka and Dubai markets.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;