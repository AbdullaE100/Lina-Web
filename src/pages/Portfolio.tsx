import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search } from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Simplified categories
  const categories = [
    { id: "all", label: "All Properties", count: 16 },
    { id: "apartment", label: "Apartments", count: 10 },
    { id: "villa", label: "Villas", count: 3 },
    { id: "penthouse", label: "Penthouses", count: 2 },
    { id: "townhouse", label: "Townhouses", count: 1 }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Selvara at Grand Polo Club & Resort",
      location: "Dubai Hills Estate",
      image: "/images/properties-thumbnails/selvara-thumb.jpg",
      fullImage: "/images/properties/selvara.jpg",
      category: "villa",
      bedrooms: "4 BR",
      priceRange: "From AED 6.2M",
      completionDate: "Q4 2026",
      developer: "Emaar Properties",
      description: "Exclusive 4-bedroom luxury villas in Dubai's premier equestrian community, featuring contemporary architecture, private pools, and access to polo fields.",
      details: {
        pricePoint: "Starting from AED6,200,000.00",
        paymentPlan: "10% on booking, 70% during construction, 20% on completion",
        location: "Grand Polo Club & Resort, Dubai Hills Estate",
        developer: "Emaar Properties",
        completionDate: "Q4 2026",
        whyInvest: [
          "Equestrian Excellence: Located within Dubai's premier polo and equestrian resort, offering a unique lifestyle centered around horses and luxury.",
          "Emaar Quality: Developed by Emaar Properties, Dubai's most trusted developer with a track record of delivering world-class communities.",
          "Limited Collection: Exclusive villa collection ensuring privacy, exclusivity, and strong value appreciation potential.",
          "Dubai Hills Location: Situated in the green heart of Dubai with easy access to Downtown Dubai, Dubai Marina, and major business districts."
        ],
        details: "Selvara at Grand Polo Club & Resort represents a rare opportunity to own luxury villas within Dubai's premier equestrian community. This exclusive collection of 4-bedroom villas combines contemporary architecture with the timeless elegance of equestrian living.",
        propertyType: "4-Bedroom Luxury Villa",
        propertyView: "Polo Fields, Landscaped Gardens, Community Views",
        propertyAmenities: "Private Pool, Polo Fields Access, Stables, Clubhouse, State-of-the-Art Gymnasium, Yoga Pavilion, 24-Hour Security"
      }
    },
    {
      id: 2,
      title: "Montura at Grand Polo Club & Resort",
      location: "Grand Polo Club & Resort",
      image: "/images/properties-thumbnails/montura-thumb.jpg",
      fullImage: "/images/properties/montura.jpg",
      category: "villa",
      bedrooms: "4-5 BR",
      priceRange: "From AED 7.1M",
      completionDate: "Q1 2027",
      developer: "Emaar Properties",
      description: "Luxury 4 & 5 bedroom villas with polo field views, contemporary architecture, and equestrian lifestyle in Dubai's premier polo community.",
      details: {
        pricePoint: "Starting from AED7,060,000.00",
        paymentPlan: "10% on booking, 70% during construction, 20% on completion",
        location: "Grand Polo Club & Resort, Dubai",
        developer: "Emaar Properties",
        completionDate: "Q1 2027",
        whyInvest: [
          "Polo Field Views: Direct views of the elegantly designed polo fields where equestrian tradition meets contemporary luxury living.",
          "Emaar Excellence: Developed by Dubai's most trusted developer with proven expertise in creating world-class luxury communities.",
          "Unique Lifestyle: Exclusive access to equestrian facilities, polo fields, stables, and contemporary clubhouse with striking linear designs."
        ],
        details: "Montura at Grand Polo Club & Resort represents where equestrian tradition gallops into the art of luxurious living. This exclusive collection of 4 & 5 bedroom villas finds its expression through contemporary silhouettes set against rolling green pastures.",
        propertyType: "4 & 5 Bedroom Luxury Villas",
        propertyView: "Polo Field Views, Green Pastures, Forest Trails, Floral Gardens",
        propertyAmenities: "Polo Fields Access, Stables, Contemporary Clubhouse, Fitness Play Area, Soccer Pitch, Tennis Courts"
      }
    },
    {
      id: 3,
      title: "Al Waha Residences at Expo City Dubai",
      location: "Expo City Dubai",
      image: "/images/properties-thumbnails/al-waha-thumb.jpg",
      fullImage: "/images/properties/al-waha.jpg",
      category: "apartment",
      bedrooms: "1-5 BR",
      priceRange: "From AED 1.8M",
      completionDate: "Q2 2027",
      developer: "Expo City Dubai",
      description: "Signature residences in Dubai's future city, featuring smart sustainable living across five distinct districts with world-class amenities.",
      details: {
        pricePoint: "Starting from AED1,800,000.00",
        paymentPlan: "5% on booking, 65% during construction, 30% on completion",
        location: "Expo City Dubai, Dubai South",
        developer: "Expo City Dubai",
        completionDate: "Q2 2027",
        whyInvest: [
          "Future City Living: Located in Dubai's most innovative and sustainable city development, designed for the future of urban living.",
          "Expo Legacy: Built on the foundation of Expo 2020 Dubai, leveraging world-class infrastructure and global connectivity."
        ],
        details: "Al Waha Residences represents signature living in Expo City Dubai, the world's most sustainable and connected city.",
        propertyType: "1-5 Bedroom Apartments, Villas & Townhouses",
        propertyView: "City Views, Skyline Views, Garden Views, District Views",
        propertyAmenities: "Smart Home Technology, Sustainable Features, Parks & Wellness, Retail & Dining"
      }
    },
    {
      id: 4,
      title: "Sera 2 at Rashid Yachts & Marina",
      location: "Rashid Yachts & Marina",
      image: "/images/properties-thumbnails/sera-2-thumb.jpg",
      fullImage: "/images/properties/sera-2.jpg",
      category: "apartment",
      bedrooms: "1-3 BR",
      priceRange: "From AED 2.1M",
      completionDate: "Q2 2027",
      developer: "Emaar Properties",
      description: "Resort-style luxury apartments and townhouses with marina views, water gardens, and exclusive amenities in Dubai's premier yachting destination.",
      details: {
        pricePoint: "Starting from AED2,100,000.00",
        paymentPlan: "10% on booking, 60% during construction, 30% on completion",
        location: "Rashid Yachts & Marina, Dubai",
        developer: "Emaar Properties",
        completionDate: "Q2 2027",
        whyInvest: [
          "Marina Living Excellence: Located in Dubai's premier yachting destination with direct marina access and stunning waterfront views.",
          "Resort-Style Amenities: Comprehensive leisure facilities including water gardens, exclusive gym, paddle courts, and yoga platforms."
        ],
        details: "Sera 2 at Rashid Yachts & Marina offers an exclusive residential sanctuary designed for luxurious resort-style living.",
        propertyType: "1-3 Bedroom Apartments, 3 Bedroom Townhouses",
        propertyView: "Marina Views, Arabian Gulf, Burj Khalifa Views, Water Gardens",
        propertyAmenities: "Water Garden, Exclusive Gym Facilities, Kids' Play Areas, Paddle Courts, Marina Promenade"
      }
    },
    {
      id: 5,
      title: "Passo by Beyond - Ultra-Luxury Palm Jumeirah Living",
      location: "Palm Jumeirah",
      image: "/images/properties-thumbnails/passo-thumb.jpg",
      fullImage: "/images/properties/passo.jpg",
      category: "apartment",
      bedrooms: "1-6 BR",
      priceRange: "From AED 5.5M",
      completionDate: "Q3 2029",
      developer: "Beyond Developments",
      description: "Unparalleled ultra-luxury living experience on Dubai's iconic Palm Jumeirah, featuring twin-tower complex with 625 residences and direct beach access.",
      details: {
        pricePoint: "Starting from AED5,500,000.00",
        paymentPlan: "10% on booking, 50% during construction, 40% on completion Q3 2029",
        location: "East Crescent, Palm Jumeirah",
        developer: "Beyond Developments (Omniyat Group)",
        completionDate: "Q3 2029",
        whyInvest: [
          "Prime Location: Situated on the prestigious Palm Jumeirah, offering an exclusive beachfront address.",
          "High Returns: The limited supply of luxury residential-only properties on the Palm Jumeirah drives strong potential for both capital appreciation and high rental yields."
        ],
        details: "Passo by Beyond offers an unparalleled ultra-luxury living experience on Dubai's iconic Palm Jumeirah.",
        propertyType: "1-6 Bedroom Apartments & Penthouses",
        propertyView: "Arabian Gulf Views, Palm Jumeirah Views, Dubai Skyline",
        propertyAmenities: "Private Beach, Infinity Pool, Spa & Wellness, Concierge Services, Valet Parking"
      }
    },
    {
      id: 6,
      title: "One Za'abeel - The Link Penthouses",
      location: "Za'abeel",
      image: "/images/properties-thumbnails/one-zaabeel-thumb.jpg",
      fullImage: "/images/properties/one-zaabeel.jpg",
      category: "penthouse",
      bedrooms: "3-5 BR",
      priceRange: "From AED 35M",
      completionDate: "Ready to Move",
      developer: "Ithra Dubai",
      description: "Exclusive sky penthouses in The Link - the world's largest cantilever connecting two towers, offering unprecedented luxury and engineering marvel.",
      details: {
        pricePoint: "Available from AED35,000,000.00",
        paymentPlan: "Cash Purchase",
        location: "Za'abeel",
        developer: "Ithra Dubai",
        completionDate: "Ready to Move",
        whyInvest: [
          "Architectural Wonder: Living in The Link, the world's largest cantilever structure suspended 100 meters above ground between two towers.",
          "Ultra-Exclusive Inventory: Only 6 penthouses available in The Link, making this one of the world's most exclusive residential addresses."
        ],
        details: "One Za'abeel's The Link Penthouses represent one of the most extraordinary residential opportunities ever created.",
        propertyType: "Penthouse",
        propertyView: "360° Dubai Skyline, DIFC Views, Burj Khalifa, Arabian Gulf, City Panorama",
        propertyAmenities: "Infinity Pools with Glass Bottoms, Sky Lounges, Observation Decks, Private Elevators"
      }
    },
    {
      id: 7,
      title: "Bulgari Resort & Residences",
      location: "Jumeirah Bay Island",
      image: "/images/properties-thumbnails/bulgari-residences-thumb.jpg",
      fullImage: "/images/properties/bulgari-residences.jpg",
      category: "villa",
      bedrooms: "2-6 BR",
      priceRange: "From AED 18M",
      completionDate: "Ready to Move",
      developer: "Meraas",
      description: "Ultra-luxury branded residences by Bulgari on a private island, offering the ultimate in exclusivity with resort amenities and Italian design excellence.",
      details: {
        pricePoint: "Available from AED18,000,000.00",
        paymentPlan: "Cash Purchase / 80/20",
        location: "Jumeirah Bay Island",
        developer: "Meraas",
        completionDate: "Ready to Move",
        whyInvest: [
          "Private Island Exclusivity: Located on Jumeirah Bay Island, accessible only by a private bridge, ensuring ultimate privacy and exclusivity.",
          "Bulgari Brand Prestige: Partnership with the legendary Italian luxury house Bulgari, bringing unparalleled design and service standards."
        ],
        details: "Bulgari Resort & Residences Dubai represents the epitome of luxury living on a private island paradise.",
        propertyType: "Villa, Apartment",
        propertyView: "Private Beach, Arabian Gulf, Dubai Skyline, Marina Views, Coral Reef",
        propertyAmenities: "Private Beach, Bulgari Spa, Fine Dining Restaurants, Private Marina, Coral Reef"
      }
    },
    {
      id: 8,
      title: "Talea by Beyond at Maritime City",
      location: "Maritime City",
      image: "/images/properties-thumbnails/talea-thumb.jpg",
      fullImage: "/images/properties/talea.jpg",
      category: "apartment",
      bedrooms: "1-4 BR",
      priceRange: "From AED 2.2M",
      completionDate: "Q1 2029",
      developer: "Beyond",
      description: "Dubai's first forest-front tower, offering a unique blend of nature and luxury city living with panoramic views and Balinese-inspired design.",
      details: {
        pricePoint: "Available from AED2,200,000.00",
        paymentPlan: "50/50",
        location: "Maritime City",
        developer: "Beyond",
        completionDate: "28/03/2029",
        whyInvest: [
          "First forest-front residential tower in Dubai's Forest District, offering a rare fusion of nature and luxury city living.",
          "Set in Dubai Maritime City, it delivers uninterrupted sea, skyline, and forest views — just 10 minutes from Downtown and DIFC."
        ],
        details: "Talea is Dubai's first forest-front tower, offering a unique blend of nature and luxury city living.",
        propertyType: "1-4 Bedroom Apartments & Penthouses",
        propertyView: "Forest Views, Sea Views, Dubai Skyline",
        propertyAmenities: "Forest Lounge, Infinity Pool, Luxury Gym, BBQ Terraces, Treehouse Seating Decks"
      }
    }
  ];

  // Filter projects based on category and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeTab === "all" || project.category.includes(activeTab);
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.developer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Scroll to top when filter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-luxury text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wider text-white leading-tight">
              <span className="block">EXCLUSIVE</span>
              <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </h1>
            
            <div className="w-16 h-[1px] bg-amber-400 mx-auto mb-8"></div>
            
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-8">
              Discover Dubai's most prestigious properties, from luxury apartments to exclusive villas and penthouses.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center text-white/60">
              <div>
                <div className="text-2xl md:text-3xl font-light text-white mb-1">{projects.length}</div>
                <div className="text-xs tracking-widest uppercase">Exclusive Properties</div>
            </div>
              <div className="hidden sm:block w-[1px] h-12 bg-white/20"></div>
              <div>
                <div className="text-2xl md:text-3xl font-light text-white mb-1">AED 1.8M+</div>
                <div className="text-xs tracking-widest uppercase">Starting From</div>
            </div>
              <div className="hidden sm:block w-[1px] h-12 bg-white/20"></div>
              <div>
                <div className="text-2xl md:text-3xl font-light text-white mb-1">Premium</div>
                <div className="text-xs tracking-widest uppercase">Developers</div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                <button
                            key={category.id} 
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                activeTab === category.id 
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs">({category.count})</span>
                </button>
              ))}
                    </div>
                    
            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by project, location, or developer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
              />
                      </div>
                    </div>
                    
          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold">{filteredProjects.length}</span> of <span className="font-semibold">{projects.length}</span> properties
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
            </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder.svg";
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 font-medium">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </Badge>
                        </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-gray-800 font-medium border-white/20">
                        {project.bedrooms}
                      </Badge>
                </div>
              </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.location}</span>
                </div>
                  </div>
                
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Price Range</span>
                        <span className="font-semibold text-amber-600">{project.priceRange}</span>
                    </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Developer</span>
                        <span className="font-medium text-gray-900">{project.developer}</span>
                  </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Completion</span>
                        <span className="font-medium text-gray-900">{project.completionDate}</span>
                  </div>
                </div>
                
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                  <Button 
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                      onClick={() => window.open('https://wa.link/pjclie', '_blank')}
                    >
                      <span className="flex items-center justify-center gap-2">
                        CONTACT ON WHATSAPP
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.334"/>
                        </svg>
                    </span>
                  </Button>
                </div>
              </motion.div>
                    ))}
                </motion.div>
              )}
                  </div>
      </section>


      {/* Contact Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <h2 className="font-luxury text-3xl md:text-5xl mb-6 tracking-wider text-white leading-tight">
              <span className="block">READY TO</span>
                <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                INVEST?
                </span>
          </h2>
              
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Connect with our investment advisors for personalized guidance and exclusive off-market opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/20"
                onClick={() => window.open('https://wa.link/pjclie', '_blank')}
              >
                <span className="flex items-center gap-3">
                  <span>START YOUR INVESTMENT JOURNEY</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.334"/>
                  </svg>
                </span>
              </Button>
              
                <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg rounded-xl transition-all duration-300"
                onClick={() => window.open('https://wa.link/pjclie', '_blank')}
              >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.334"/>
                </svg>
                <span>CONTACT LINA ON WHATSAPP</span>
                </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
