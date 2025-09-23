import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { TouchButton } from "@/components/ui/touch-button";
import { ArrowRight, Award, Globe, Users, ChevronRight, Shield, BarChart3, Rocket, MessageCircle, Star, Quote } from 'lucide-react';

import VideoBackground from "@/components/Video-background";
import heroVideo from "../assets/luxury-video.mp4";
import insightPreLaunch from '../assets/insights/pre-launch-framework.jpg';
import insightDiaspora from '../assets/insights/diaspora-investment.jpg';
import insightCurrencyRisk from '../assets/insights/currency-risk.jpg';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile, useIsExtraSmall, useIsTablet } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [developersDialogOpen, setDevelopersDialogOpen] = useState(false);
  const [testimonialsApi, setTestimonialsApi] = useState<CarouselApi>();
  const [testimonialsIsHovered, setTestimonialsIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const isMobile = useIsMobile();

  // Use the high-quality portrait image as fallback
  const videoFallbackImage = "/photos/About Me.jpeg";

  // Auto-sliding effect for testimonials
  useEffect(() => {
    if (!testimonialsApi || testimonialsIsHovered) {
      return;
    }

    const intervalId = setInterval(() => {
      testimonialsApi.scrollNext();
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(intervalId);
  }, [testimonialsApi, testimonialsIsHovered]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[85vh] min-h-[550px] md:h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <VideoBackground src={heroVideo} fallbackImage={videoFallbackImage} quality="high" />
        
        <div 
          className="container px-4 sm:px-6 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto text-center"
            style={{ opacity: textOpacity, y: textY }}
          >
            <div className="inline-flex items-center gap-2 text-white mb-4 md:mb-8">
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D4BC8A] to-transparent"></div>
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D4BC8A] to-transparent"></div>
            </div>

            <h1 className="font-luxury text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-6 md:mb-10 drop-shadow-lg">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90"
              >
                LUXURY
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-[#D4BC8A] relative"
              >
                <div className="relative inline-block">
                  <span className="relative">REDEFINED</span>
                  <motion.div 
                    className="absolute bottom-2 md:bottom-4 h-[1.5px] w-[105%] left-[-2.5%] md:w-[110%] md:left-[-5%] bg-gradient-to-r from-[#D4BC8A]/30 via-[#D4BC8A] to-[#D4BC8A]/30"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </div>
              </motion.div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/90 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-14 font-serif font-light leading-relaxed tracking-wide px-4 sm:px-0"
            >
              Where visionary architecture meets extraordinary investment potential.
              Curating Dubai's most coveted addresses for discerning investors who demand nothing less than perfection.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <TouchButton 
                className="bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] text-black border-none rounded-none px-6 py-4 sm:px-10 sm:py-7 h-auto text-xs sm:text-sm tracking-widest font-ui shadow-xl hover:shadow-2xl transition-all duration-300 glow-gold pulse-animation-gold w-full sm:w-auto"
                ripple={true}
                scaleOnPress={true}
                onClick={() => window.open('https://wa.link/pjclie', '_blank')}
              >
                <span className="flex items-center justify-center">
                  <MessageCircle className="mr-2 w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
                  <span className="relative z-10">PRIVATE CONSULTATION</span>
                </span>
              </TouchButton>
              
              <TouchButton 
                variant="outline" 
                className="bg-transparent border-2 border-[#D4BC8A] text-[#D4BC8A] hover:bg-[#D4BC8A]/10 rounded-none px-6 py-4 sm:px-10 sm:py-7 h-auto text-xs sm:text-sm tracking-widest font-ui shadow-xl hover:shadow-2xl transition-all duration-300 glow-gold pulse-animation-gold w-full sm:w-auto"
                ripple={true}
                scaleOnPress={true}
              >
                <Link to="/portfolio" className="flex items-center justify-center">
                  <span>EXPLORE COLLECTION</span>
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </TouchButton>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Statistics Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-[#D4BC8A]/20">
          <div className="container px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-6 text-center"
            >
              <div className="text-white">
                <div className="text-[#D4BC8A] text-xs tracking-widest mb-1 font-medium">DISCOVER EXCELLENCE</div>
                <div className="text-white/60 text-xs">SCROLL</div>
              </div>
              
              <div className="hidden sm:block h-8 w-px bg-[#D4BC8A]/30"></div>
              
              <div className="text-white">
                <div className="text-2xl sm:text-3xl font-luxury text-[#D4BC8A] mb-1">20+</div>
                <div className="text-white/80 text-xs tracking-wider">Exclusive Addresses</div>
              </div>
              
              <div className="hidden sm:block h-8 w-px bg-[#D4BC8A]/30"></div>
              
              <div className="text-white">
                <div className="text-2xl sm:text-3xl font-luxury text-[#D4BC8A] mb-1">From AED 1.8M</div>
                <div className="text-white/80 text-xs tracking-wider">Investment Thresholds</div>
              </div>
              
              <div className="hidden sm:block h-8 w-px bg-[#D4BC8A]/30"></div>
              
              <div className="text-white">
                <div className="text-2xl sm:text-3xl font-luxury text-[#D4BC8A] mb-1">Live Intelligence</div>
                <div className="text-white/80 text-xs tracking-wider">Market Insights</div>
              </div>
            </motion.div>
          </div>
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
            <div className="inline-flex items-center gap-3 text-[#C0A875] mb-6 tracking-wider font-medium">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C0A875] to-transparent"></div>
              <span className="text-sm uppercase">MASTERFULLY CURATED</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C0A875] to-transparent"></div>
            </div>
            
            <h2 className="font-luxury text-4xl xs:text-5xl md:text-6xl mb-8 tracking-tight text-[#1A1A1A] leading-tight">
              Iconic Residences
            </h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
        
            <p className="text-[#666666] max-w-2xl mx-auto text-responsive-base px-4 xs:px-6 sm:px-0">
              Meticulously selected architectural masterpieces that define Dubai's luxury landscape and redefine sophisticated living.
            </p>
          </motion.div>
          
          {isMobile ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    title: "Selvara at Grand Polo Club & Resort",
                    location: "Dubai Hills Estate",
                    description: "An extraordinary collection of equestrian-inspired villas where aristocratic elegance meets contemporary sophistication, offering privileged access to Dubai's most prestigious polo grounds",
                    image: "/images/properties/selvara.jpg",
                    price: "From AED 6.2M"
                  },
                  {
                    title: "Al Waha Residences at Expo City Dubai",
                    location: "Expo City Dubai",
                    description: "Visionary residences within Dubai's pioneering smart city, where sustainable innovation harmonizes with luxurious living across five meticulously planned districts",
                    image: "/images/properties/al-waha.jpg",
                    price: "From AED 1.8M"
                  },
                  {
                    title: "Sera 2 at Rashid Yachts & Marina", 
                    location: "Rashid Yachts & Marina",
                    description: "Waterfront magnificence redefined through architectural poetry, where infinite azure horizons meet unparalleled luxury in Dubai's most coveted maritime sanctuary",
                    image: "/images/properties/sera-2.jpg",
                    price: "From AED 2.3M"
                  }
                ].map((property, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group cursor-pointer relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full"
                    >
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img 
                          src={property.image} 
                          alt={property.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-[#C0A875] font-semibold text-xs mb-1 uppercase tracking-wider">{property.location}</div>
                        <h3 className="font-luxury text-xl sm:text-2xl mb-2 leading-tight">{property.title}</h3>
                        <p className="text-white/90 text-sm mb-3 line-clamp-2 font-serif">{property.description}</p>
                        <div className="text-[#D4BC8A] font-semibold text-sm mb-4">{property.price}</div>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-white text-xs font-medium border-b border-[#D4BC8A] pb-1 hover:border-white transition-colors">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-8">
              {[
                {
                  title: "Selvara at Grand Polo Club & Resort",
                  location: "Dubai Hills Estate",
                  description: "An extraordinary collection of equestrian-inspired villas where aristocratic elegance meets contemporary sophistication, offering privileged access to Dubai's most prestigious polo grounds",
                  image: "/images/properties/selvara.jpg",
                  price: "From AED 6.2M"
                },
                {
                  title: "Al Waha Residences at Expo City Dubai",
                  location: "Expo City Dubai",
                  description: "Visionary residences within Dubai's pioneering smart city, where sustainable innovation harmonizes with luxurious living across five meticulously planned districts",
                  image: "/images/properties/al-waha.jpg",
                  price: "From AED 1.8M"
                },
                {
                  title: "Sera 2 at Rashid Yachts & Marina",
                  location: "Rashid Yachts & Marina", 
                  description: "Waterfront magnificence redefined through architectural poetry, where infinite azure horizons meet unparalleled luxury in Dubai's most coveted maritime sanctuary",
                  image: "/images/properties/sera-2.jpg",
                  price: "From AED 2.3M"
                }
              ].map((property, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg border border-gray-100 hover:border-[#C0A875]/20"
                >
                  <div className="relative overflow-hidden aspect-[4/3] rounded-t-lg">
                    <img 
                        src={property.image} 
                        alt={property.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500"></div>
                  </div>
                  <div className="p-5 xs:p-6">
                    <p className="text-[#C0A875] font-semibold text-xs sm:text-sm mb-1 uppercase tracking-wider">{property.location}</p>
                    <h3 className="font-luxury text-xl sm:text-2xl text-[#1A1A1A] mb-2 leading-tight">{property.title}</h3>
                    <p className="text-[#666666] text-sm sm:text-base mb-3 font-serif line-clamp-2">{property.description}</p>
                    <div className="text-[#C0A875] font-semibold text-sm sm:text-base mb-4">{property.price}</div>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#C0A875] text-sm font-medium border-b border-transparent hover:border-[#C0A875] transition-all">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center gap-3 text-[#C0A875] mb-6 tracking-wider font-medium">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C0A875] to-transparent"></div>
              <span className="text-sm uppercase">DISTINGUISHED ADVANTAGE</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C0A875] to-transparent"></div>
            </div>
            
            <h2 className="font-luxury text-4xl xs:text-5xl md:text-6xl mb-8 tracking-tight text-[#1A1A1A] leading-tight">
              Uncompromising Excellence
            </h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            <p className="text-[#666666] max-w-2xl mx-auto text-responsive-base">
              Privileged market intelligence and exclusive access converge to deliver investment opportunities reserved for the most discerning clientele.
            </p>
          </motion.div>

          {isMobile ? (
            <Carousel opts={{ align: "start", loop: true, }} className="w-full">
              <CarouselContent>
                {[
                  { icon: Award, title: 'Peerless Mastery', description: 'Decades of refined expertise navigating Dubai\'s most prestigious luxury developments and exclusive architectural marvels.' },
                  { icon: Globe, title: 'Privileged Access', description: 'Exclusive entree to off-market treasures and premier international investor circles unavailable to conventional channels.' },
                  { icon: Users, title: 'Bespoke Advisory', description: 'Meticulously tailored investment strategies crafted to your distinctive vision and sophisticated objectives.' },
                  { icon: Shield, title: 'Absolute Confidentiality', description: 'Unwavering discretion and privacy protection befitting the most distinguished clientele.' },
                  { icon: BarChart3, title: 'Intelligence Superiority', description: 'Proprietary market analytics and predictive insights that illuminate optimal investment timing.' },
                  { icon: Rocket, title: 'Visionary Solutions', description: 'Innovative approaches to complex transactions that transcend conventional real estate boundaries.' }
                ].map((feature, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <motion.div
                      className="text-center p-6 bg-transparent h-full"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="inline-block p-4 bg-gradient-to-br from-[#D4BC8A]/20 to-transparent rounded-full mb-4">
                        <feature.icon className="w-8 h-8 text-[#C0A875]" />
                      </div>
                      <h3 className="font-luxury text-xl text-[#1A1A1A] mb-2">{feature.title}</h3>
                      <p className="text-[#666666] text-sm">{feature.description}</p>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: 'Peerless Mastery', description: 'Decades of refined expertise navigating Dubai\'s most prestigious luxury developments and exclusive architectural marvels.' },
                { icon: Globe, title: 'Privileged Access', description: 'Exclusive entree to off-market treasures and premier international investor circles unavailable to conventional channels.' },
                { icon: Users, title: 'Bespoke Advisory', description: 'Meticulously tailored investment strategies crafted to your distinctive vision and sophisticated objectives.' },
                { icon: Shield, title: 'Absolute Confidentiality', description: 'Unwavering discretion and privacy protection befitting the most distinguished clientele.' },
                { icon: BarChart3, title: 'Intelligence Superiority', description: 'Proprietary market analytics and predictive insights that illuminate optimal investment timing.' },
                { icon: Rocket, title: 'Visionary Solutions', description: 'Innovative approaches to complex transactions that transcend conventional real estate boundaries.' }
              ].map((feature, index) => (
          <motion.div 
                  key={index} 
                  className="text-center p-6 bg-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-block p-4 bg-gradient-to-br from-[#D4BC8A]/20 to-transparent rounded-full mb-4">
                    <feature.icon className="w-8 h-8 text-[#C0A875]" />
              </div>
                  <h3 className="font-luxury text-xl text-[#1A1A1A] mb-2">{feature.title}</h3>
                  <p className="text-[#666666]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-[#F8F6F1] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center gap-3 text-[#C0A875] mb-6 tracking-wider font-medium">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C0A875] to-transparent"></div>
              <span className="text-sm uppercase">DISTINGUISHED TESTIMONIALS</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C0A875] to-transparent"></div>
            </div>
            <h2 className="font-luxury text-4xl xs:text-5xl md:text-6xl mb-8 tracking-tight text-[#1A1A1A] leading-tight">
              Voices of Excellence
            </h2>
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <p className="text-[#666666] max-w-2xl mx-auto text-responsive-base">
              Discover why the world's most sophisticated investors entrust their legacy to our unparalleled expertise.
            </p>
          </motion.div>
          
          <div 
            onMouseEnter={() => setTestimonialsIsHovered(true)}
            onMouseLeave={() => setTestimonialsIsHovered(false)}
          >
            <Carousel
              setApi={setTestimonialsApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
            <CarouselContent>
            {[
              {
                name: 'Alexander Petrov',
                title: 'Investment Director',
                location: 'London, UK',
                quote: 'Lina\'s market intelligence transformed our Dubai investment strategy. Her access to off-market opportunities and institutional-grade analysis delivered exceptional returns that exceeded our most optimistic projections.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                rating: 5,
                investment: 'AED 12M Portfolio'
              },
              {
                name: 'Priya Sharma',
                title: 'Family Office Principal',
                location: 'Mumbai, India',
                quote: 'Working with Lina redefined our understanding of luxury real estate investment. Her curated selection of ultra-premium properties and deep developer relationships provided access we simply couldn\'t find elsewhere.',
                image: 'https://images.unsplash.com/photo-1494790108755-2616c96efd44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                rating: 5,
                investment: 'AED 8.5M Investment'
              },
              {
                name: 'James Mitchell',
                title: 'Portfolio Manager',
                location: 'New York, USA',
                quote: 'Lina\'s sophisticated approach to real estate advisory is unmatched. Her strategic insights helped us navigate complex market conditions and secure trophy assets that have consistently outperformed expectations.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                rating: 5,
                investment: 'AED 15M Portfolio'
              },
              {
                name: 'Sarah Al-Mansouri',
                title: 'Private Investor',
                location: 'Abu Dhabi, UAE',
                quote: 'Lina\'s exclusive access to premier developments and her ability to structure complex transactions made what seemed impossible, achievable. Her professionalism and market expertise are truly world-class.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                rating: 5,
                investment: 'AED 6.8M Investment'
              },
              {
                name: 'Roberto Silva',
                title: 'CEO & Founder',
                location: 'São Paulo, Brazil',
                quote: 'Lina doesn\'t just sell properties; she architects investment strategies. Her deep understanding of Dubai\'s luxury market dynamics and impeccable client service have made her our exclusive partner for all UAE investments.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                rating: 5,
                investment: 'AED 10.2M Portfolio'
              },
              {
                name: 'Catherine Wong',
                title: 'Investment Advisor',
                location: 'Hong Kong',
                quote: 'The level of due diligence and market intelligence Lina provides is unprecedented. Her advisory transcends traditional real estate services, offering strategic insights that have consistently delivered alpha across our Dubai holdings.',
                image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                rating: 5,
                investment: 'AED 7.3M Investment'
              }
            ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <motion.div
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Rating Stars */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-[#C0A875] mb-4 opacity-60" />
                      
                      {/* Testimonial Text */}
                      <p className="text-gray-700 italic font-serif flex-grow leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Client Info */}
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 mr-4">
                            <img 
                              className="w-14 h-14 rounded-full object-cover border-2 border-[#C0A875]/20" 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-lg font-bold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm font-medium text-[#C0A875]">{testimonial.title}</div>
                            <div className="text-sm text-gray-500">{testimonial.location}</div>
                          </div>
                        </div>
                        <div className="text-xs font-semibold text-gray-600 bg-gray-50 px-3 py-1 rounded-full inline-block">
                          {testimonial.investment}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
                  ))}
            </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          </div>
          
          {/* Auto-play indicator */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">
              <div className={`w-2 h-2 rounded-full ${testimonialsIsHovered ? 'bg-gray-400' : 'bg-green-500 animate-pulse'}`}></div>
              <span>{testimonialsIsHovered ? 'Paused' : 'Auto-playing'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center gap-3 text-[#C0A875] mb-6 tracking-wider font-medium">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C0A875] to-transparent"></div>
              <span className="text-sm uppercase">MARKET INSIGHTS</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C0A875] to-transparent"></div>
            </div>
            <h2 className="font-luxury text-4xl xs:text-5xl md:text-6xl mb-8 tracking-tight text-[#1A1A1A] leading-tight">
              Expert Intelligence
          </h2>
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <p className="text-[#666666] max-w-2xl mx-auto text-responsive-base">
              Explore our latest articles and analyses on the evolving real estate landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'The Pre-Launch Advantage', description: 'A framework for identifying and capitalizing on pre-launch and off-market properties.', image: insightPreLaunch, link: '/insights/pre-launch-advantage' },
              { title: 'Dubai Investment Guide', description: 'Comprehensive guide to maximizing returns in Dubai\'s luxury property market.', image: insightDiaspora, link: '/insights/dubai-investment-guide' },
              { title: 'Currency Risk in Real Estate', description: 'Strategies to mitigate the impact of currency fluctuations on your property investments.', image: insightCurrencyRisk, link: '/insights/currency-risk-strategies' },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden group"
              >
                <Link to={article.link} className="block">
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-luxury text-xl text-[#1A1A1A] mb-2">{article.title}</h3>
                    <p className="text-[#666666] font-serif mb-4">{article.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#C0A875] text-sm font-medium">
                      Read More <ArrowRight className="w-4 h-4" />
              </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;