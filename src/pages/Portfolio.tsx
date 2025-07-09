import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import altairImage from "@/assets/altair-project.jpg";
import crystalSandsImage from "@/assets/crystal-sands-project.jpg";
import oneGalleFaceImage from "@/assets/one-galle-face-project.jpg";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "One Galle Face",
      location: "Colombo, Sri Lanka",
      image: oneGalleFaceImage,
      role: "Investment Strategist",
      description: "Shangri-La's flagship integrated development combines 390 premium residences, Grade-A offices, a 5-star hotel, and Sri Lanka's most prestigious retail destination.",
      highlights: [
        "Largest integrated resort development in Sri Lanka ($700M+)",
        "Exclusive 'East-meets-West' architectural concept",
        "Residents-only 50,000 sq ft amenity podium",
        "Direct connection to Shangri-La Hotel Colombo"
      ],
      category: "colombo",
      details: {
        developer: "Shangri-La Group",
        totalValue: "$700+ million",
        completionDate: "2019",
        totalUnits: "390 luxury residences",
        priceRange: "$500,000 - $3.5 million",
        amenities: "Private pool, fitness center, residents' lounge, children's play area, 24/7 concierge",
        returnOnInvestment: "8-10% annual rental yield",
        website: "www.onegallefaceresidences.com"
      }
    },
    {
      title: "Expo City Dubai",
      location: "Dubai, UAE",
      image: crystalSandsImage,
      role: "Strategic Investment Advisor",
      description: "A visionary 15-minute city evolving from Expo 2020's legacy, offering premium residential, commercial, and educational spaces centered around the iconic Al Wasl Plaza.",
      highlights: [
        "First 15-minute city concept in Dubai",
        "Net-zero carbon emissions target by 2050",
        "85% of Expo 2020 infrastructure repurposed",
        "Integrated with Dubai 2040 Urban Master Plan"
      ],
      category: "dubai",
      details: {
        developer: "Dubai Holding",
        totalValue: "$8+ billion",
        completionDate: "Phase 1: 2023, Full completion: 2040",
        totalUnits: "10,000+ residential units planned",
        priceRange: "$400,000 - $5 million",
        amenities: "Al Wasl Plaza, Mobility Pavilion, Terra Sustainability Pavilion, Conference & Exhibition Centre",
        returnOnInvestment: "7-9% projected annual appreciation",
        website: "www.expocitydubai.ae"
      }
    },
    {
      title: "Altair",
      location: "Colombo, Sri Lanka",
      image: altairImage,
      role: "Lead Sales Director",
      description: "Designed by Moshe Safdie, this 68-story twin-tower masterpiece features a revolutionary leaning design with 400+ ultra-luxury residences and panoramic Indian Ocean views.",
      highlights: [
        "Iconic 240m twisted twin-tower design",
        "4,000+ sq ft Sky Mansions with private pools",
        "First development with helicopter landing pad",
        "Award-winning structural engineering"
      ],
      category: "colombo",
      details: {
        developer: "Indocean Developers",
        totalValue: "$300+ million",
        completionDate: "2021",
        totalUnits: "404 luxury apartments",
        priceRange: "$400,000 - $2.8 million",
        amenities: "Infinity pool, sky garden, fitness center, private cinema, business center",
        returnOnInvestment: "6-8% annual rental yield",
        website: "www.altair.lk"
      }
    },
    {
      title: "Cinnamon Life",
      location: "Colombo, Sri Lanka",
      image: crystalSandsImage,
      role: "Investment Strategy Consultant",
      description: "Designed by Cecil Balmond, this $1B+ waterfront destination spans 4.5M sq ft, featuring premium residences, offices, retail, entertainment, and the flagship Cinnamon hotel.",
      highlights: [
        "$1B+ investment by John Keells Holdings",
        "800+ luxury residential apartments",
        "30-story office tower with smart building technology",
        "Largest elevated retail and lifestyle complex in Sri Lanka"
      ],
      category: "colombo",
      details: {
        developer: "John Keells Holdings",
        totalValue: "$1+ billion",
        completionDate: "2023",
        totalUnits: "800+ residential apartments",
        priceRange: "$350,000 - $1.8 million",
        amenities: "Rooftop infinity pool, fitness center, multipurpose hall, landscaped gardens",
        returnOnInvestment: "7-9% annual rental yield",
        website: "www.cinnamonlife.com"
      }
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen pt-24 bg-gradient-platinum">
      {/* Page Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-headline font-luxury text-center text-primary mb-4">
          Signature <span className="text-gradient-gold">Projects</span>
        </h1>
        <p className="text-body-xl text-center text-muted-foreground max-w-3xl mx-auto font-serif">
          Premium real estate opportunities in the most sought-after locations across Dubai and Sri Lanka.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-6 mb-10">
        <div className="flex justify-center space-x-2 md:space-x-6 overflow-x-auto pb-2">
          <Button 
            variant={activeTab === "all" ? "gold" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("all")}
            className="min-w-[100px]"
          >
            All Projects
          </Button>
          <Button 
            variant={activeTab === "dubai" ? "gold" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("dubai")}
            className="min-w-[100px]"
          >
            Dubai
          </Button>
          <Button 
            variant={activeTab === "colombo" ? "gold" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("colombo")}
            className="min-w-[100px]"
          >
            Colombo
          </Button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl shadow-soft overflow-hidden border border-gold/10 hover:shadow-floating transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-gold font-semibold text-sm mb-1 font-ui">{project.location}</div>
                  <h3 className="text-subtitle font-luxury text-white mb-1">{project.title}</h3>
                  <div className="text-sm text-white/80 font-ui">{project.role}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 font-serif line-clamp-3">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <h4 className="text-primary font-medium mb-3 font-ui">Key Highlights:</h4>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <span className="text-sm text-muted-foreground font-serif">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <Button 
                    variant="gold" 
                    size="sm"
                    onClick={() => setSelectedProject(index)}
                  >
                    View Details
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <Link to="/contact">Inquire</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Stats */}
      <div className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-title font-display text-center mb-12">Portfolio Highlights</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "$10B+", label: "Total Portfolio Value" },
              { metric: "4", label: "Landmark Projects" },
              { metric: "82%", label: "International Investors" },
              { metric: "97%", label: "Client Satisfaction" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-light text-gradient-gold mb-2">
                  {item.metric}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-title font-display mb-4">Ready to Explore Investment Opportunities?</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover exclusive opportunities in luxury real estate across Dubai and Sri Lanka's most prestigious developments.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            variant="gold" 
            size="lg" 
            className="min-w-[200px]" 
            asChild
          >
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[200px]" 
            asChild
          >
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-background rounded-xl shadow-floating max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 md:h-80">
              <img 
                src={projects[selectedProject].image} 
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <Button 
                variant="outline" 
                size="sm" 
                className="absolute top-4 right-4 h-10 w-10 rounded-full p-0 bg-black/30 border-white/20 text-white"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </Button>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-gold font-semibold text-sm mb-1 font-ui">{projects[selectedProject].location}</div>
                <h3 className="text-title font-luxury text-white mb-1">{projects[selectedProject].title}</h3>
                <div className="text-sm text-white/80 font-ui">{projects[selectedProject].role}</div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-body-xl text-muted-foreground leading-relaxed mb-8 font-serif">
                {projects[selectedProject].description}
              </p>
              
              <h4 className="text-primary font-medium mb-4 font-ui text-lg">Key Highlights</h4>
              <div className="space-y-4 mb-8">
                {projects[selectedProject].highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-gold flex-shrink-0 mt-1.5" />
                    <span className="text-muted-foreground font-serif">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
              
              <h4 className="text-primary font-medium mb-4 font-ui text-lg">Project Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground font-ui">Developer</div>
                  <div className="font-medium">{projects[selectedProject].details.developer}</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground font-ui">Total Value</div>
                  <div className="font-medium">{projects[selectedProject].details.totalValue}</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground font-ui">Completion Date</div>
                  <div className="font-medium">{projects[selectedProject].details.completionDate}</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground font-ui">Total Units</div>
                  <div className="font-medium">{projects[selectedProject].details.totalUnits}</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground font-ui">Price Range</div>
                  <div className="font-medium">{projects[selectedProject].details.priceRange}</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground font-ui">ROI</div>
                  <div className="font-medium">{projects[selectedProject].details.returnOnInvestment}</div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg mb-8">
                <div className="text-sm text-muted-foreground font-ui mb-1">Key Amenities</div>
                <div className="font-medium">{projects[selectedProject].details.amenities}</div>
              </div>
              
              <div className="flex justify-between items-center">
                <Button 
                  variant="gold" 
                  size="lg" 
                  asChild
                >
                  <Link to="/contact">Contact About This Project</Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild 
                >
                  <a href={`https://${projects[selectedProject].details.website}`} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;