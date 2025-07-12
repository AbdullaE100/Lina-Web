import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Six Senses Residences Dubai Marina by Select",
      location: "Dubai Marina",
      image: "/images/properties/six-senses.jpg",
      category: "apartment",
      bedrooms: "2, 3, 4",
      pricesStartingFrom: "AED10,351,000.00",
      description: "Six Senses Residences Dubai Marina offers a unique investment opportunity with its strategic pricing, significantly lower than other branded residences in the area.",
      details: {
        pricePoint: "Available from AED10,351,000.00",
        paymentPlan: "40/60, 30/70",
        location: "Dubai Marina",
        developer: "Select",
        completionDate: "31/10/2028",
        whyInvest: [
          "Iconic Landmark Status: Set to be the world's tallest residential tower, ensuring global recognition and premium value.",
          "Unmatched Wellness Focus: Over 61,000 sq. ft. of amenities are dedicated to wellness, including a longevity clinic and hydrotherapy spa.",
          "Exclusive Residences-Only Concept: With no hotel component, it guarantees privacy and exclusivity for residents.",
          "Prime Dubai Marina Location: Situated in a prime, evolving part of Dubai Marina with excellent connectivity and views.",
          "Attractive Value Proposition: Priced competitively compared to other branded residences in prime Dubai locations.",
          "Favourable 40/60 Payment Plan: Requires only 40% during construction, offering significant leverage and potential ROI upon completion in 2028.",
          "Strong Potential for Capital Appreciation: Projections suggest returns could exceed 300% on the initial investment.",
          "Ultra-Luxury Branding: The Six Senses brand is synonymous with world-class luxury, wellness, and service.",
          "Limited and Exclusive Inventory: With only 251 residences, the project's scarcity will drive long-term value.",
          "Biophilic and Sustainable Design: The focus on wellness-centric and sustainable architecture appeals to the modern luxury buyer."
        ],
        details: "Six Senses Residences Dubai Marina is a landmark ultra-luxury development by Select Group in partnership with Six Senses, set to become the world's tallest residential tower at 517 metres across 122 floors. Located in Dubai Marina, this exclusive project offers just 251 residences – including two- to four-bedroom apartments, duplexes, and triplex sky mansions – all designed with wellness, sustainability, and biophilic design principles.\n\nResidents will enjoy over 61,000 sq. ft. of dedicated amenities, including a sky deck infinity pool on the 109th floor, private longevity clinic, cryotherapy rooms, hydrotherapy spa, wellness centre, fitness studios, indoor/outdoor cinemas, and more. With a unique residences-only concept and no hotel component, it promises unmatched privacy and exclusivity.\n\nPriced from AED 3,000-4,000 per sq. ft. with a 40/60 payment plan and handover in 2028, this project presents one of the strongest investment opportunities in Dubai's branded residential market.",
        propertyType: "Apartment",
        propertyView: "City View, Sea View, Marina View, Golf Course View, Skyline View",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security, Spa, Sauna, Steam Room, Pet-Friendly Areas, Balcony, High-Speed Elevators, Smart Home Systems, Concierge Services, Rooftop Terrace, Shared Workspace, Restaurants and Cafes, Supermarkets Nearby"
      }
    },
    {
      title: "Flora Isle in Dubai Islands",
      location: "Dubai Islands",
      image: "/images/properties/flora-isle.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3",
      pricesStartingFrom: "AED3,222,000.00",
      description: "Flora Isle offers a unique investment opportunity with its prime beachfront location on Dubai Islands, providing exceptional views and resort-style living.",
      details: {
        pricePoint: "Available from AED3,222,000.00",
        paymentPlan: "50/50",
        location: "Dubai Islands",
        developer: "Flora Isle Real Estate Development",
        completionDate: "31/03/2028",
        whyInvest: [
          "Prime Beachfront Location: Offers direct beach access on the developing Dubai Islands, a powerful draw for luxury rentals and sales.",
          "Strategic Airport Proximity: Located just 18 minutes from Dubai International Airport, ideal for international investors and frequent travelers.",
          "Flexible Financial Structure: An initial 20% payment followed by construction-linked installments eases the investment burden.",
          "Aligned with Dubai's Vision: Its location and concept are in line with the Dubai 2040 Urban Master Plan, signaling strong long-term growth.",
          "Attractive Investor Discounts: Offers up to 5% discounts for full-floor acquisitions and up to 6% for accelerated payments.",
          "High-Specification Residences: A choice of premium ocean or garden view apartments equipped with high-end appliances.",
          "Reputable Operator Association: Supported by Flora Hospitality's established track record, adding a layer of quality assurance.",
          "Resort-Style Amenities: Features swimming pools, wellness facilities, and recreational areas for an exclusive lifestyle.",
          "Defined Investment Timeline: A clear completion date of Q1 2028 allows for precise financial planning.",
          "Competitive Service Fees: Projected service charges of AED 18 per sq. ft. are competitive for a prime waterfront development."
        ],
        details: "Flora Isle presents a compelling investment opportunity in Dubai's premium real estate market. This beachfront development, situated on Dubai Islands, comprises 251 residential units across three seven-story buildings, with direct beach access.\n\nThe project offers one to three-bedroom apartments ranging from 800 to 2,100 square feet, with prices starting from AED 2,088,888. The development features both ocean-facing and garden-view residences, complete with high-end appliances and contemporary interiors.\n\nKey advantages include:\n• Strategic location: 18 minutes from Dubai International Airport\n• Premium amenities: Swimming pools, wellness facilities, and recreational areas\n• Flexible payment structure: 20% initial payment with construction-linked instalments\n• Completion scheduled for Q1 2028\n\nAdditional investor benefits include bulk purchase discounts of up to 5% for full-floor acquisitions and accelerated payment discounts of up to 6%. The projected service fees are set at 18 AED per square foot.\n\nThe development aligns with Dubai's 2040 Urban Master Plan, positioning it favorably for long-term value appreciation. Construction is managed by Flora Isle Real Estate Development LLC, supported by Flora Hospitality's established track record.",
        propertyType: "Apartment",
        propertyView: "City View, Sea View, Pool View, Beach, Waterfront, Water",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security, Children's Play Area, Barbecue Area, Balcony"
      }
    },
    {
      title: "Jumeirah Residences Emirates Towers",
      location: "Zabeel",
      image: "/images/properties/jumeirah-residences.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3, 4",
      pricesStartingFrom: "AED3,510,000.00",
      description: "Jumeirah Residences Emirates Towers offers a unique investment opportunity with its prime location near Sheikh Zayed Road, providing exceptional city views and luxury amenities.",
      details: {
        pricePoint: "Available from AED3,510,000.00",
        paymentPlan: "60/40",
        location: "Zabeel",
        developer: "Meraas",
        completionDate: "01/08/2030",
        whyInvest: [
          "Iconic Landmark Location: Situated next to the Museum of the Future and Emirates Towers on Sheikh Zayed Road.",
          "Operated by Jumeirah Group: Offers residents world-class signature hospitality services and management.",
          "Award-Winning Architectural Design: A unique cantilevered design by SCDA Architects with column-free interiors.",
          "Prime Financial District Proximity: Adjacent to Dubai International Financial Centre (DIFC), ensuring strong rental demand from finance professionals.",
          "Flexible 60/40 Payment Plan: A manageable payment structure for a luxury asset, with handover in August 2030.",
          "Elite Sky-Level Amenities: Includes sky infinity pools, wellness centers, and private cinemas with panoramic city views.",
          "Pathway to UAE Residency: Investment provides eligibility for the UAE Golden Visa program.",
          "Unobstructed Panoramic Views: Thoughtfully designed to offer stunning, unobstructed views of the city skyline.",
          "Strong Capital Appreciation Potential: A landmark branded residence in a prime CBD location is poised for significant long-term growth.",
          "Seamless Connectivity: Direct access to Sheikh Zayed Road and key destinations like The Dubai Mall and City Walk."
        ],
        details: "Jumeirah Residences Emirates Towers by Meraas is a landmark residential development redefining luxury living beside Dubai's financial district. Designed by the acclaimed SCDA Architects, the twin towers feature cantilevered structures with column-free interiors, offering unobstructed layouts and panoramic views of the city skyline.\n\nComprising 754 meticulously crafted units ranging from one to four bedrooms, each residence boasts floor-to-ceiling windows, private terraces, and premium finishes. Residents enjoy an array of world-class amenities, including sky-level infinity pools, exclusive wellness centres, private cinemas, and co-working lounges.\n\nOperated by the renowned Jumeirah Group, the development provides signature hospitality services such as 24/7 concierge, housekeeping, and personalised event planning. Strategically located adjacent to Sheikh Zayed Road and the Museum of the Future, the residences offer seamless access to key destinations like DIFC, The Dubai Mall, and City Walk.\n\nWith a flexible 60/40 payment plan and handover expected in August 2030, Jumeirah Residences Emirates Towers presents a compelling investment opportunity for discerning buyers seeking unparalleled luxury and convenience in the heart of Dubai.",
        propertyType: "Apartment",
        propertyView: "Museum of the Future, Emirates Towers, City View, Skyline View, Pool View, Community View",
        propertyAmenities: "Cinema, Sky Pool, Wellness Centre, Paddle Court, Co-Working space"
      }
    },
    {
      title: "SOL Levante",
      location: "Jumeirah Village Triangle",
      image: "/images/properties/sol-levante.jpg",
      category: "apartment",
      bedrooms: "Studio, 1, 2, 3",
      pricesStartingFrom: "AED1,200,000.00",
      description: "SOL Levante stands out due to its strategic location in Jumeirah Village Triangle, a rapidly appreciating area, offering excellent investment potential and modern living spaces.",
      details: {
        developer: "SOL Properties",
        propertyType: "Apartment, Studio",
        bedrooms: "Studio, 1, 2, 3",
        pricePoint: "Available from AED1,200,000.00"
      }
    },
    {
      title: "KORO One by ALTA",
      location: "Jumeirah Garden City",
      image: "/images/properties/koro-one.jpg",
      category: "apartment",
      bedrooms: "Studio, 1, 2",
      pricesStartingFrom: "AED950,000.00",
      description: "KORO One offers a prime investment opportunity with its strategic location in Jumeirah Garden City, benefiting from excellent connectivity and modern design.",
      details: {
        developer: "ALTA",
        propertyType: "Apartment, Studio",
        bedrooms: "Studio, 1, 2",
        pricePoint: "Available from AED950,000.00"
      }
    },
    {
      title: "Silva by Emaar in Dubai Creek Harbour",
      location: "Dubai Creek Harbour",
      image: "/images/properties/silva-emaar.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3",
      pricesStartingFrom: "AED1,800,000.00",
      description: "Altan by Emaar presents a compelling investment opportunity in one of Dubai's most ambitious master-planned communities, offering waterfront living and premium amenities.",
      details: {
        developer: "Emaar",
        propertyType: "Apartment",
        bedrooms: "1, 2, 3",
        pricePoint: "Available from AED1,800,000.00"
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
          Premium <span className="text-gradient-gold">Properties</span>
        </h1>
        <p className="text-body-xl text-center text-muted-foreground max-w-3xl mx-auto font-serif">
          Exclusive luxury real estate opportunities in Dubai's most prestigious locations.
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
            All Properties
          </Button>
          <Button 
            variant={activeTab === "apartment" ? "gold" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("apartment")}
            className="min-w-[100px]"
          >
            Apartment
          </Button>
          <Button 
            variant={activeTab === "studio" ? "gold" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("studio")}
            className="min-w-[100px]"
          >
            Studio
          </Button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl shadow-soft overflow-hidden border border-gold/10 hover:shadow-floating transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-primary font-medium text-sm py-1 px-3 rounded-md">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Property Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm text-muted-foreground">Bedrooms</h4>
                    <p>{project.bedrooms}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground">Prices Starting From</h4>
                    <p>{project.pricesStartingFrom}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => setSelectedProject(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                    Details
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Watchlist
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
              { metric: "25+", label: "Premium Properties" },
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
          Discover exclusive opportunities in luxury real estate across Dubai's most prestigious developments.
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
                src={projects[selectedProject].image || "/placeholder.svg"} 
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
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-2">{projects[selectedProject].title}</h2>
              <p className="text-muted-foreground mb-6">{projects[selectedProject].category.charAt(0).toUpperCase() + projects[selectedProject].category.slice(1)} | {projects[selectedProject].bedrooms} Bedroom(s)</p>
              
              <div className="border-t border-b py-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Price Point</h3>
                <p>Available from {projects[selectedProject].pricesStartingFrom}</p>
                
                {projects[selectedProject].details.paymentPlan && (
                  <>
                    <h3 className="text-lg font-semibold mt-6 mb-4">Payment Plan</h3>
                    <div className="flex gap-2">
                      {projects[selectedProject].details.paymentPlan.split(', ').map((plan, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 py-1 px-3 rounded-full text-sm">{plan}</span>
                      ))}
                    </div>
                  </>
                )}
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Location</h3>
                <p>{projects[selectedProject].location}</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Developer</h3>
                <p>{projects[selectedProject].details.developer}</p>
                
                {projects[selectedProject].details.completionDate && (
                  <>
                    <h3 className="text-lg font-semibold mt-6 mb-4">Completion Date</h3>
                    <p>{projects[selectedProject].details.completionDate}</p>
                  </>
                )}
              </div>
              
              {projects[selectedProject].details.whyInvest && (
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    <h3 className="text-xl font-bold">Why Invest</h3>
                  </div>
                  <div className="space-y-4">
                    {projects[selectedProject].details.whyInvest.map((reason, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                        <p className="flex-1">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {projects[selectedProject].details.details && (
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                    <h3 className="text-xl font-bold">Details</h3>
                  </div>
                  <p className="whitespace-pre-line">{projects[selectedProject].details.details}</p>
                </div>
              )}
              
              {projects[selectedProject].details.propertyType && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Number Of Bedrooms</h3>
                    <p>{projects[selectedProject].bedrooms}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Property Type</h3>
                    <p>{projects[selectedProject].details.propertyType}</p>
                  </div>
                  
                  {projects[selectedProject].details.propertyView && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Property View</h3>
                      <p>{projects[selectedProject].details.propertyView}</p>
                    </div>
                  )}
                  
                  {projects[selectedProject].details.propertyAmenities && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Property Amenities</h3>
                      <p>{projects[selectedProject].details.propertyAmenities}</p>
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  variant="default"
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  asChild
                >
                  <Link to="/contact">Contact Lina</Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Watchlist
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