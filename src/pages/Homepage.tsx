import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Building, Globe, Users } from 'lucide-react';
import heroImage from "../assets/lina-nizar-hero.jpg";
import altairProject from '../assets/altair-project.jpg';
import crystalSandsProject from '../assets/crystal-sands-project.jpg';
import oneGalleFaceProject from '../assets/one-galle-face-project.jpg';

const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
      >
        {/* Background image with parallax effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale, opacity }}
        >
          <img 
            src={heroImage} 
            alt="Lina Nizar" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Improved overlay with gradient */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)',
            mixBlendMode: 'multiply',
          }}
        ></div>

        <div className="container relative z-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="font-display font-light text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] leading-[1.2] mb-8 uppercase">
              <span className="block">Smart Real</span>
              <span className="block text-gold">Estate.</span>
              <span className="block">Global Vision.</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide"
            >
              Lina Nizar guides discerning investors through exceptional real 
              estate opportunities across Sri Lanka and Dubai.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                className="bg-[#C0A875] hover:bg-[#D4BC8A] text-black border-none rounded-none px-8 py-6 text-sm tracking-widest"
              >
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-sm tracking-widest"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Explore indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xs tracking-[0.3em] flex flex-col items-center z-20"
        >
          <span className="mb-2">EXPLORE</span>
          <div className="h-12 w-[1px] bg-white/50"></div>
        </motion.div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-4 font-light tracking-tight">
              Exceptional Properties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated selection of premium real estate opportunities in the most sought-after locations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "One Galle Face",
                location: "Colombo, Sri Lanka",
                image: "/src/assets/one-galle-face-project.jpg"
              },
              {
                title: "Crystal Sands",
                location: "Dubai Marina, UAE",
                image: "/src/assets/crystal-sands-project.jpg"
              },
              {
                title: "Altair Residences",
                location: "Colombo, Sri Lanka",
                image: "/src/assets/altair-project.jpg"
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-2xl mb-1">{property.title}</h3>
                    <p className="text-white/80 text-sm">{property.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-[#C0A875] text-[#C0A875] hover:bg-[#C0A875]/5 rounded-none px-8 py-6"
            >
              <Link to="/portfolio" className="hover-underline">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-4 font-light tracking-tight">
              Premium Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bespoke investment solutions crafted for discerning global investors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Investment Advisory", 
                description: "Strategic guidance for exceptional opportunities with comprehensive market intelligence." 
              },
              { 
                title: "Pre-Launch Access", 
                description: "Exclusive access to premium developments before public availability." 
              },
              { 
                title: "Portfolio Management", 
                description: "Cross-border asset optimization with sophisticated risk management." 
              },
              { 
                title: "Market Entry Strategy", 
                description: "Dubai market penetration with regulatory navigation and strategic partnerships." 
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 border border-[#E5E0D5] bg-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-display text-2xl mb-3 font-light">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="bg-[#F8F6F2] p-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6 font-light tracking-tight">
              Ready to Invest Strategically?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              Schedule a confidential strategy session and discover exceptional 
              real estate opportunities with personalized market intelligence.
            </p>
            <Button 
              className="bg-[#C0A875] hover:bg-[#B09865] text-white border-none rounded-none px-10 py-6 text-base btn-hover-effect"
            >
              <Link to="/contact">Book Your Strategy Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#C0A875] tracking-[0.3em] uppercase font-light text-sm">Developers We Work With</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                logo: "DUBAI PROPERTIES",
                description: "Dubai Properties is a UAE-based developer with over sixteen years of experience in commercial and residential property in Dubai. The most significant projects by Dubai Properties are Madinat Jumeirah Living, 1/JBR, La Vie, Serena, La Rosa"
              },
              {
                logo: "MERAAS",
                description: "Being one of the leading developing company in Dubai, Meraas has built many iconic and high demanding projects including Bluewaters Residences, BVLGARI Resort & Residences Dubai, Port De La Mer, Sur La Mer and City Walk"
              },
              {
                logo: "NAKHEEL",
                description: "Nakheel is a real estate developer specializing in residential, retail and hospitality. Nakheel has successfully delivered an award-winning Palm Jumeirah which is very popular area among buyers and investors"
              },
              {
                logo: "EMAAR",
                description: "One of the best Dubai's real estate developer with an expertise in retail, hospitality and leisure. Emaar developed most of the popular projects in Dubai such as Burj Khalifa, Downtown Dubai, Emaar Beachfront, Dubai Hills Estate, Dubai Creek"
              },
            ].map((developer, index) => (
              <motion.div
                key={index}
                className="p-8 border border-[#E5E0D5] bg-white h-full flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`h-16 mb-6 font-display text-xl flex items-center ${developer.logo === 'NAKHEEL' ? 'text-[#0066A1]' : 'text-gray-800'}`}>
                  {developer.logo}
                </div>
                <p className="text-gray-600 text-sm flex-grow">
                  {developer.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-gray-800"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <Button 
              variant="outline" 
              className="border-[#C0A875] text-[#C0A875] hover:bg-[#C0A875]/5 rounded-none tracking-widest px-8 uppercase"
            >
              View More
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#C0A875] tracking-[0.3em] uppercase font-light text-sm mb-2">My Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A Dedicated Team Delivering Exceptional Service for Every Property Need
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Hiba Issaoui",
                title: "Real estate specialist",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Corinne Hamdan",
                title: "Real estate specialist",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Nada Demnati",
                title: "Real estate specialist",
                image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Salman Heidar",
                title: "Real estate specialist",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end p-8 text-center">
                    <h3 className="text-white text-xl font-medium">{member.name}</h3>
                    <p className="text-white/90 text-sm mt-1">{member.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-800"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-4">Testimonials</h3>
          </motion.div>
          
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-[#C0A875] text-4xl font-display font-light">They Trusted Us</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Hamza Alaoui",
                testimonial: "As a long-term investor in Dubai, I have faced many challenges, and Dalila has been extremely helpful and supportive. I highly recommend her because I trust her blindly."
              },
              {
                name: "John Sannan",
                testimonial: "Dalila made buying property in Dubai seamless and stress-free. Her market knowledge and dedication are exceptional. I highly recommend her for any real estate needs."
              },
              {
                name: "Kalye Moore",
                testimonial: "Working with Dalila was a fantastic experience. She is trustworthy, professional, and always puts her clients first. I couldn't have asked for a better guide in the Dubai market."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="border border-[#E5E0D5] p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="mb-6 text-[#C0A875]">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 15C35.5228 15 40 19.4772 40 25C40 30.5228 35.5228 35 30 35C24.4772 35 20 30.5228 20 25C20 19.4772 24.4772 15 30 15Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M42 20L45 23M18 20L15 23" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M30 35V40M25 45H35" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-gray-800 font-medium text-lg mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.testimonial}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;