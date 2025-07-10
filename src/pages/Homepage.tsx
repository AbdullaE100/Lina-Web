import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TouchButton } from "@/components/ui/touch-button";
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Building, Globe, Users, ChevronRight, Star, Shield, Clock, BarChart3, Rocket, Mail, Linkedin, X } from 'lucide-react';
import heroImage from "../assets/lina-nizar-hero.jpg";
import altairProject from '../assets/altair-project.jpg';
import crystalSandsProject from '../assets/crystal-sands-project.jpg';
import oneGalleFaceProject from '../assets/one-galle-face-project.jpg';
import YouTubeBackground from "@/components/YouTubeBackground";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [developersDialogOpen, setDevelopersDialogOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  // Use the high-quality portrait image as fallback
  const videoFallbackImage = "/photos/About Me.jpeg";

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
      >
        {/* YouTube Video Background */}
        <YouTubeBackground videoId="JnHTFL4-ktw" fallbackImage={videoFallbackImage} />
        
        <div 
          className="container relative px-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto text-center"
            style={{ opacity: textOpacity, y: textY }}
          >
                          <div className="inline-flex items-center gap-3 text-white mb-8 tracking-[0.25em] font-medium">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D4BC8A] to-transparent"></div>
                <span className="font-ui text-sm font-medium tracking-[0.25em] drop-shadow-md">LUXURY REAL ESTATE ADVISORY</span>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D4BC8A] to-transparent"></div>
              </div>

            <h1 className="font-luxury text-white text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-10 drop-shadow-lg">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80"
              >
                Smart Real
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-[#D4BC8A] relative"
              >
                <div className="relative inline-block">
                  <span className="relative">Estate</span>
                  <motion.div 
                    className="absolute bottom-4 left-0 right-0 h-[1.5px] w-[110%] mx-auto bg-gradient-to-r from-[#D4BC8A]/30 via-[#D4BC8A] to-[#D4BC8A]/30"
                    style={{ left: "-5%" }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </div>
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white/80 via-white to-white/80"
              >
                Global Vision
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-14 font-serif font-light leading-relaxed tracking-wide"
            >
              Guiding discerning investors through exceptional real estate opportunities 
              with strategic market intelligence and cultural expertise.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-8 justify-center"
            >
              <TouchButton 
                className="bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] text-black border-none rounded-none px-10 py-7 h-auto text-sm tracking-[0.15em] font-ui shadow-xl hover:shadow-2xl transition-all duration-300 glow-gold pulse-animation-gold"
                ripple={true}
                scaleOnPress={true}
              >
                <Link to="/contact" className="flex items-center">
                  <span className="relative z-10">SCHEDULE CONSULTATION</span>
                  <ChevronRight className="ml-3 w-4 h-4 relative z-10" />
                </Link>
              </TouchButton>
              
              <TouchButton 
                variant="outline" 
                className="bg-transparent border-[2px] border-[#D4BC8A] text-[#D4BC8A] hover:bg-[#D4BC8A]/10 rounded-none px-10 py-7 h-auto text-sm tracking-[0.15em] font-ui shadow-xl hover:shadow-2xl transition-all duration-300 glow-gold pulse-animation-gold"
                ripple={true}
                scaleOnPress={true}
              >
                <Link to="/portfolio" className="flex items-center">
                  <span>VIEW PORTFOLIO</span>
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </TouchButton>
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* Featured Properties Section */}
      <section className="py-16 xs:py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span className="text-responsive-sm">CURATED SELECTION</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            
            <h2 className="font-luxury text-3xl xs:text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              Exceptional Properties
            </h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
        
            <p className="text-[#666666] max-w-2xl mx-auto text-responsive-base px-4 xs:px-6 sm:px-0">
              Premium real estate opportunities in the most sought-after locations across Dubai and Sri Lanka.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-8">
            {[
              {
                title: "One Galle Face",
                location: "Colombo, Sri Lanka",
                description: "Luxury waterfront residences with panoramic ocean views and world-class amenities",
                image: oneGalleFaceProject,
                details: {
                  developer: "Shangri-La Group",
                  totalValue: "$700+ million",
                  completionDate: "2019",
                  totalUnits: "390 luxury residences",
                  priceRange: "$500,000 - $3.5 million",
                  returnOnInvestment: "8-10% annual rental yield"
                }
              },
              {
                title: "Expo City Dubai",
                location: "Dubai, UAE",
                description: "A visionary 15-minute city evolving from Expo 2020's legacy with premium residential spaces",
                image: crystalSandsProject,
                details: {
                  developer: "Dubai Holding",
                  totalValue: "$8+ billion",
                  completionDate: "Phase 1: 2023, Full completion: 2040",
                  totalUnits: "10,000+ residential units planned",
                  priceRange: "$400,000 - $5 million",
                  returnOnInvestment: "7-9% projected annual appreciation"
                }
              },
              {
                title: "Altair Residences",
                location: "Colombo, Sri Lanka",
                description: "Iconic twin-tower development with innovative design and unparalleled city views",
                image: altairProject,
                details: {
                  developer: "Indocean Developers",
                  totalValue: "$300+ million",
                  completionDate: "2021",
                  totalUnits: "404 luxury apartments",
                  priceRange: "$400,000 - $2.8 million",
                  returnOnInvestment: "6-8% annual rental yield"
                }
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden">
                    <ResponsiveImage 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full"
                      aspectRatio="aspect-[3/4]"
                      objectFit="cover"
                      blur={true}
                      priority={index === 0}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-[#C0A875] font-semibold text-sm mb-2">{property.location}</div>
                  <h3 className="font-luxury text-3xl mb-3">{property.title}</h3>
                  <p className="text-white/90 mb-6 line-clamp-2 font-serif">{property.description}</p>
                  
                  <Link to="/portfolio" className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 border-b border-[#D4BC8A] pb-1 hover:border-white">
                    <span>View Details</span>
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z" fill="#D4BC8A"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              className="border-[#C0A875] text-[#C0A875] hover:bg-[#C0A875]/5 rounded-none px-8 py-6 h-auto text-sm tracking-wide font-ui group relative overflow-hidden"
            >
              <Link to="/portfolio" className="flex items-center">
                <span className="relative z-10">View All Properties</span>
                <ArrowRight className="ml-2 w-4 h-4 relative z-10" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 xs:py-20 sm:py-24 bg-gradient-to-b from-[#F8F5EF] to-[#F5F5F5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span className="text-responsive-sm">COMPREHENSIVE SOLUTIONS</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            
            <h2 className="font-luxury text-3xl xs:text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              Tailored Services
            </h2>
            
            <div className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-[#666666] max-w-2xl mx-auto text-responsive-base px-4 xs:px-6 sm:px-0">
              Expert guidance throughout every stage of your luxury real estate journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-8">
            {[
              {
                title: "Investment Advisory",
                description: "Strategic guidance for exceptional opportunities with comprehensive market intelligence.",
                icon: <BarChart3 className="w-6 h-6" />,
                benefits: ["Market intelligence", "Risk assessment", "Portfolio optimization"]
              },
              {
                title: "Pre-Launch Access",
                description: "Exclusive access to premium developments before public availability.",
                icon: <Building className="w-6 h-6" />,
                benefits: ["Early pricing", "Unit selection", "Payment plans"]
              },
              {
                title: "Portfolio Management",
                description: "Cross-border asset optimization with sophisticated risk management.",
                icon: <Globe className="w-6 h-6" />,
                benefits: ["Asset monitoring", "Yield optimization", "Exit strategy"]
              },
              {
                title: "Market Entry Strategy",
                description: "Dubai market penetration with regulatory navigation and strategic partnerships.",
                icon: <Rocket className="w-6 h-6" />,
                benefits: ["Regulatory guidance", "Network access", "Cultural intelligence"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer transition-all duration-500 group overflow-hidden bg-white border border-[#EEEEEE] hover:border-[#C0A875]/50 hover:shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0A875]/30 via-[#C0A875] to-[#C0A875]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="p-10 h-full">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F8F5EF] text-[#C0A875] group-hover:bg-[#C0A875] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                    <h3 className="font-luxury text-2xl ml-5 text-[#1A1A1A] group-hover:text-[#C0A875] transition-all duration-500">
                  {service.title}
                </h3>
                  </div>
                  
                  <p className="text-[#666666] mb-8 leading-relaxed font-serif">
                  {service.description}
                </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {service.benefits.map((benefit, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-[#F5F5F5] text-[#666666] group-hover:bg-[#C0A875]/10 group-hover:text-[#C0A875] transition-all duration-300"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-10 right-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#F5F5F5] text-[#C0A875] group-hover:bg-[#C0A875] group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-[#C0A875]"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              className="border-[#C0A875] text-[#C0A875] hover:bg-[#C0A875]/5 rounded-none px-8 py-6 h-auto text-sm tracking-wide font-ui group relative overflow-hidden"
            >
              <Link to="/services" className="flex items-center">
                <span className="relative z-10">Explore All Services</span>
                <ChevronRight className="ml-2 w-4 h-4 relative z-10" />
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="bg-gradient-to-b from-[#F8F5EF] to-[#F5F5F5] p-16 md:p-24 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C0A875]"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-[#C0A875]"></div>
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-[#C0A875] mb-6 tracking-wider font-medium">
                <div className="h-px w-8 bg-[#C0A875]"></div>
                <span>STRATEGIC INVESTMENT</span>
                <div className="h-px w-8 bg-[#C0A875]"></div>
              </div>
              
              <h2 className="font-luxury text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-[#1A1A1A]">
                Ready to Invest Strategically?
              </h2>
              
              <motion.div 
                className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              />
              
              <p className="text-[#666666] max-w-3xl mx-auto mb-12 text-lg leading-relaxed font-serif">
                Schedule a confidential strategy session and discover exceptional 
                real estate opportunities with personalized market intelligence tailored to your investment goals.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  className="bg-[#C0A875] hover:bg-[#D4BC8A] text-black border-none rounded-none px-10 py-7 h-auto text-sm tracking-wide font-ui group relative overflow-hidden"
                >
                  <Link to="/contact" className="flex items-center">
                    <span className="relative z-10">Book Strategy Call</span>
                    <ChevronRight className="ml-2 w-4 h-4 relative z-10" />
                    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-none px-10 py-7 h-auto text-sm tracking-wide font-ui"
                >
                  <Link to="/services" className="flex items-center">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0A875]/30 via-[#C0A875] to-[#C0A875]/30"></div>
          </motion.div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F5EF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span>TRUSTED PARTNERSHIPS</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            
            <h2 className="font-luxury text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              Developers We Work With
            </h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            <p className="text-[#666666] max-w-2xl mx-auto text-lg font-serif">
              Exclusive relationships with premier developers ensuring privileged access to exceptional properties.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                logo: "DUBAI PROPERTIES",
                description: "Dubai Properties is a UAE-based developer with over sixteen years of experience in commercial and residential property in Dubai. The most significant projects by Dubai Properties are Madinat Jumeirah Living, 1/JBR, La Vie, Serena, La Rosa",
                color: "#1A1A1A"
              },
              {
                logo: "MERAAS",
                description: "Being one of the leading developing company in Dubai, Meraas has built many iconic and high demanding projects including Bluewaters Residences, BVLGARI Resort & Residences Dubai, Port De La Mer, Sur La Mer and City Walk",
                color: "#1A1A1A"
              },
              {
                logo: "NAKHEEL",
                description: "Nakheel is a real estate developer specializing in residential, retail and hospitality. Nakheel has successfully delivered an award-winning Palm Jumeirah which is very popular area among buyers and investors",
                color: "#0066A1"
              },
              {
                logo: "EMAAR",
                description: "One of the best Dubai's real estate developer with an expertise in retail, hospitality and leisure. Emaar developed most of the popular projects in Dubai such as Burj Khalifa, Downtown Dubai, Emaar Beachfront, Dubai Hills Estate, Dubai Creek",
                color: "#1A1A1A"
              },
            ].map((developer, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#EEEEEE] shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0A875]/30 via-[#C0A875] to-[#C0A875]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="p-8 h-full flex flex-col">
                  <div className="h-16 mb-6 font-luxury text-2xl flex items-center" style={{ color: developer.color }}>
                    {developer.logo}
                  </div>
                  
                  <div className="w-12 h-[1px] bg-[#C0A875] mb-6 group-hover:w-20 transition-all duration-500" />
                  
                  <p className="text-[#666666] text-sm flex-grow leading-relaxed font-serif">
                    {developer.description}
                  </p>
                  
                  <div className="mt-8 flex items-center text-[#C0A875] text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#C0A875]"></div>
              <div className="w-2 h-2 rounded-full bg-[#DDDDDD]"></div>
              <div className="w-2 h-2 rounded-full bg-[#DDDDDD]"></div>
              <div className="w-2 h-2 rounded-full bg-[#C0A875]"></div>
              <div className="w-8 h-[2px] bg-[#C0A875]"></div>
            </div>
            
            <Dialog open={developersDialogOpen} onOpenChange={setDevelopersDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-[#C0A875] text-[#C0A875] hover:bg-[#C0A875]/5 rounded-none px-8 py-6 h-auto text-sm tracking-wide font-ui"
                >
                  <span className="flex items-center">
                    View More Partnerships
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
                <DialogHeader>
                  <div className="flex justify-between items-center">
                    <DialogTitle className="font-luxury text-3xl text-[#1A1A1A]">Our Developer Partnerships</DialogTitle>
                    <Button variant="ghost" size="icon" onClick={() => setDevelopersDialogOpen(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <DialogDescription className="text-[#666666]">
                    Exclusive relationships with premier developers ensuring privileged access to exceptional properties.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
                  {[
                    {
                      logo: "EMAAR",
                      description: "One of the best Dubai's real estate developer with an expertise in retail, hospitality and leisure. Emaar developed most of the popular projects in Dubai such as Burj Khalifa, Downtown Dubai, Emaar Beachfront, Dubai Hills Estate, Dubai Creek",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "MERAAS",
                      description: "Being one of the leading developing company in Dubai, Meraas has built many iconic and high demanding projects including Bluewaters Residences, BVLGARI Resort & Residences Dubai, Port De La Mer, Sur La Mer and City Walk",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "NAKHEEL",
                      description: "Nakheel is a real estate developer specializing in residential, retail and hospitality. Nakheel has successfully delivered an award-winning Palm Jumeirah which is very popular area among buyers and investors",
                      color: "#0066A1"
                    },
                    {
                      logo: "DUBAI PROPERTIES",
                      description: "Dubai Properties is a UAE-based developer with over sixteen years of experience in commercial and residential property in Dubai. The most significant projects by Dubai Properties are Madinat Jumeirah Living, 1/JBR, La Vie, Serena, La Rosa",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "DAMAC",
                      description: "Established in 2002, DAMAC Properties has delivered numerous commercial, leisure and residential projects across Dubai including popular DAMAC Hills, AKOYA Oxygen and many towers in Business Bay",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "SOBHA",
                      description: "Sobha Realty is a real estate developer located in Dubai. Sobha has successfully delivered highly popular District One Residences and is currently working on their new project in Al Maktoum City, MBR",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "SELECT GROUP",
                      description: "Select Group is considered to be the best real estate developer in Dubai. Company designed and developed the famous Marina Gate while working together with the most prestige brands like Jumeirah Group",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "PALMA HOLDING",
                      description: "Palma Holding Properties is a development company in Dubai that has been working on unique residential projects such as Serenia Residences on Palm Jumeirah",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "OMNIYAT",
                      description: "Omniyat has been crafting the most innovative property in Dubai since its inception in 2005. Their One Palm located on Palm Jumeirah is considered to be truly unique and highly demanding property",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "NSHAMA",
                      description: "NSHAMA is a Dubai-based real estate developing company established in 2014. Their most significant residential community Town Square offers large selection of apartments and townhouses in Dubai",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "ALDAR",
                      description: "Aldar Properties is the leading real estate development, management and investment private company headquartered in the capital of United Arab Emirates",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "AL BARARI",
                      description: "Al Barari is a developer founded in 2005 and specializes in developing ecological residentials projects with unique botanical structures",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "ALEF",
                      description: "Founded back in 2013 by the late Sheikh Khalid Bin Sultan Al Qasimi, Alef Group is one of the leading developers in Emirate of Sharjah",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "ARADA",
                      description: "Arada Properties is one of the prospective newcomers among the Middle Eastern developers of the real estate, founded in December 2016",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "AL HAMRA",
                      description: "The company is responsible for the development of landmark projects in Ras Al Khaimah such as the coastal community of Al Hamra Village",
                      color: "#C31924"
                    },
                    {
                      logo: "RAK PROPERTIES",
                      description: "Residential projects by RAK Properties, as well as malls and hotels are known for their sustainability & design, and show the rapid development of Ras Al Khaimah",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "AZIZI",
                      description: "Azizi is real estate development company with a great experience in delivering modern communities and luxury homes in Dubai",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "BINGHATTI",
                      description: "Binghatti Developers is the real estate development arm of Binghatti Holding, which is one of the largest holding companies in the Emirates",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "SHANGRI-LA",
                      description: "Shangri-La is a global hospitality company that develops, owns, and operates hotels and mixed-use properties, including residential complexes. In Colombo, Sri Lanka, Shangri-La is the developer behind the One Galle Face development, which includes a hotel, residential towers, a shopping mall, and office spaces.",
                      color: "#1A1A1A"
                    },
                    {
                      logo: "INDOOCEAN ALTAIR",
                      description: "Indocean Developers (Pvt) Ltd a company promoted by South City Projects (Kolkata) Ltd. (SCPKL), is a prominent and successful Indian property development group. The South City Group is spearheaded by six respected real estate experts of India who have transformed the Kolkata skyline. They bring over 200 person-years in realty creation, with over 100 projects across India including townships, residential towers, malls, and commercial developments.",
                      color: "#1A1A1A"
                    }
                  ].map((developer, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#EEEEEE] shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0A875]/30 via-[#C0A875] to-[#C0A875]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      
                      <div className="p-8 h-full flex flex-col">
                        <div className="h-16 mb-6 font-luxury text-2xl flex items-center" style={{ color: developer.color }}>
                          {developer.logo}
                        </div>
                        
                        <div className="w-12 h-[1px] bg-[#C0A875] mb-6 group-hover:w-20 transition-all duration-500" />
                        
                        <p className="text-[#666666] text-sm flex-grow leading-relaxed font-serif">
                          {developer.description}
                        </p>
                        
                        <div className="mt-8 flex items-center text-[#C0A875] text-sm group-hover:translate-x-2 transition-transform duration-300">
                          <span className="mr-2">View Projects</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-[#F8F5EF] to-[#F5F5F5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span>DEDICATED EXPERTS</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            
            <h2 className="font-luxury text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              Meet Our Team
          </h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            <p className="text-[#666666] max-w-2xl mx-auto text-lg font-serif">
              A dedicated team of professionals delivering exceptional service for every property need.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sophia Chen",
                title: "Senior Property Advisor",
                expertise: "Ultra-Luxury Residences",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Natalia Karim",
                title: "Investment Director",
                expertise: "Global Portfolio Strategy",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Victoria Mei",
                title: "Market Research Analyst",
                expertise: "Emerging Markets",
                image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Alexander Rahman",
                title: "Client Relations Director",
                expertise: "Private Client Services",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-1 opacity-80 text-sm">{member.title}</div>
                  <h3 className="font-luxury text-2xl mb-2">{member.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px w-8 bg-[#C0A875]"></div>
                    <span className="text-xs text-[#C0A875]">{member.expertise}</span>
                  </div>
                  
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C0A875]/50 transition-colors cursor-pointer">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C0A875]/50 transition-colors cursor-pointer">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0A875]/30 via-[#C0A875] to-[#C0A875]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#C0A875]"></div>
              <div className="w-2 h-2 rounded-full bg-[#DDDDDD]"></div>
              <div className="w-2 h-2 rounded-full bg-[#DDDDDD]"></div>
              <div className="w-2 h-2 rounded-full bg-[#C0A875]"></div>
              <div className="w-8 h-[2px] bg-[#C0A875]"></div>
            </div>
            
          <Button 
              variant="outline" 
              className="border-[2px] border-[#C0A875] text-[#C0A875] hover:bg-[#C0A875]/10 rounded-none px-8 py-6 h-auto text-sm tracking-wide font-ui shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-gold"
            >
              <span className="flex items-center">
                View Full Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span>CLIENT EXPERIENCES</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            
            <h2 className="font-luxury text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              They Trusted Us
            </h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            <p className="text-[#666666] max-w-2xl mx-auto text-lg font-serif">
              Hear what our clients have to say about their experience working with our team.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jonathan Whitaker",
                position: "Property Portfolio Manager",
                testimonial: "Lina's expertise in the Sri Lankan luxury market was instrumental in our portfolio expansion. Her strategic approach and attention to detail ensured we acquired properties with exceptional investment potential.",
                rating: 5
              },
              {
                name: "Elena Kapoor",
                position: "International Investor",
                testimonial: "Working with Lina's team transformed our Dubai investment strategy. Their market intelligence and exclusive access to off-market properties gave us a significant competitive advantage.",
                rating: 5
              },
              {
                name: "Michael Zhang",
                position: "Family Office Director",
                testimonial: "The level of personalized service and discretion provided by Lina's advisory team is unmatched in the industry. They've consistently identified premium opportunities aligned with our long-term wealth preservation goals.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#EEEEEE] shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden min-h-[420px] flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C0A875]"></div>
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="text-5xl text-[#C0A875] mb-6 group-hover:scale-110 transition-transform duration-300 origin-left opacity-80">"</div>
                  
                  <p className="text-[#666666] mb-8 leading-relaxed italic flex-grow font-serif">
                    {testimonial.testimonial}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#EEEEEE]">
                    <div>
                      <h3 className="text-[#1A1A1A] font-medium text-lg mb-1 group-hover:text-[#C0A875] transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#666666] text-sm">{testimonial.position}</p>
                    </div>
                    
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#C0A875] fill-[#C0A875]" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C0A875] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              className="border-[2px] border-[#C0A875] text-[#C0A875] hover:bg-[#C0A875]/10 rounded-none px-8 py-6 h-auto text-sm tracking-wide font-ui shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-gold"
            >
              <span className="flex items-center">
                Read More Testimonials
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
          </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;