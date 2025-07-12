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
import VideoBackground from "@/components/Video-background";
import heroVideo from "../assets/videos/luxury-video.mp4";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile, useIsExtraSmall, useIsTablet } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  const isMobile = useIsMobile();

  // Use the high-quality portrait image as fallback
  const videoFallbackImage = "/photos/About Me.jpeg";

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[85vh] min-h-[550px] md:h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <VideoBackground src={heroVideo} fallbackImage={videoFallbackImage} />
        
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
            <div className="inline-flex items-center gap-2 text-white mb-4 md:mb-8 tracking-widest font-medium">
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D4BC8A] to-transparent"></div>
                <span className="font-ui text-[10px] sm:text-sm tracking-widest drop-shadow-md">LUXURY REAL ESTATE</span>
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D4BC8A] to-transparent"></div>
            </div>

            <h1 className="font-luxury text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-6 md:mb-10 drop-shadow-lg">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80"
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
                    className="absolute bottom-2 md:bottom-4 h-[1.5px] w-[105%] left-[-2.5%] md:w-[110%] md:left-[-5%] bg-gradient-to-r from-[#D4BC8A]/30 via-[#D4BC8A] to-[#D4BC8A]/30"
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
                className="block mt-1 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white/80 via-white to-white/80"
              >
                Global Vision
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-white/90 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-14 font-serif font-light leading-relaxed tracking-wide px-4 sm:px-0"
            >
              Guiding discerning investors through exceptional real estate opportunities 
              with strategic market intelligence and cultural expertise.
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
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <span className="relative z-10">SCHEDULE CONSULTATION</span>
                  <ChevronRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
                </Link>
              </TouchButton>
              
              <TouchButton 
                variant="outline" 
                className="bg-transparent border-2 border-[#D4BC8A] text-[#D4BC8A] hover:bg-[#D4BC8A]/10 rounded-none px-6 py-4 sm:px-10 sm:py-7 h-auto text-xs sm:text-sm tracking-widest font-ui shadow-xl hover:shadow-2xl transition-all duration-300 glow-gold pulse-animation-gold w-full sm:w-auto"
                ripple={true}
                scaleOnPress={true}
              >
                <Link to="/portfolio" className="flex items-center justify-center">
                  <span>VIEW PORTFOLIO</span>
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
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
                    title: "One Galle Face",
                    location: "Colombo, Sri Lanka",
                    description: "Luxury waterfront residences with panoramic ocean views and world-class amenities",
                    image: oneGalleFaceProject,
                  },
                  {
                    title: "Expo City Dubai",
                    location: "Dubai, UAE",
                    description: "A visionary 15-minute city evolving from Expo 2020's legacy with premium residential spaces",
                    image: crystalSandsProject,
                  },
                  {
                    title: "Altair Residences",
                    location: "Colombo, Sri Lanka",
                    description: "Iconic twin-tower development with innovative design and unparalleled city views",
                    image: altairProject,
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
                        <ResponsiveImage 
                          src={property.image} 
                          alt={property.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-[#C0A875] font-semibold text-xs mb-1">{property.location}</div>
                        <h3 className="font-luxury text-2xl mb-2">{property.title}</h3>
                        <p className="text-white/90 text-sm mb-4 line-clamp-2 font-serif">{property.description}</p>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-white text-xs font-medium border-b border-[#D4BC8A] pb-1 hover:border-white">
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
                  title: "One Galle Face",
                  location: "Colombo, Sri Lanka",
                  description: "Luxury waterfront residences with panoramic ocean views and world-class amenities",
                  image: oneGalleFaceProject,
                },
                {
                  title: "Expo City Dubai",
                  location: "Dubai, UAE",
                  description: "A visionary 15-minute city evolving from Expo 2020's legacy with premium residential spaces",
                  image: crystalSandsProject,
                },
                {
                  title: "Altair Residences",
                  location: "Colombo, Sri Lanka",
                  description: "Iconic twin-tower development with innovative design and unparalleled city views",
                  image: altairProject,
                }
              ].map((property, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg"
                >
                  <div className="relative overflow-hidden aspect-[4/3] rounded-t-lg">
                    <ResponsiveImage 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  <div className="p-5 xs:p-6">
                    <p className="text-[#C0A875] font-semibold text-xs sm:text-sm mb-1 uppercase tracking-wider">{property.location}</p>
                    <h3 className="font-luxury text-xl sm:text-2xl text-[#1A1A1A] mb-2">{property.title}</h3>
                    <p className="text-[#666666] text-sm sm:text-base mb-4 font-serif line-clamp-2">{property.description}</p>
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
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span className="text-responsive-sm">WHY CHOOSE US</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            
            <h2 className="font-luxury text-3xl xs:text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              Why Choose Us
            </h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            <p className="text-[#666666] max-w-2xl mx-auto text-responsive-base">
              Leveraging deep market knowledge and a vast network to deliver unparalleled real estate advisory.
            </p>
          </motion.div>
          
          {isMobile ? (
            <Carousel opts={{ align: "start", loop: true, }} className="w-full">
              <CarouselContent>
                {[
                  { icon: Award, title: 'Unmatched Expertise', description: 'Decades of experience in luxury markets of Dubai and Sri Lanka.' },
                  { icon: Globe, title: 'Global Network', description: 'Access to exclusive off-market properties and international investors.' },
                  { icon: Users, title: 'Client-Centric Approach', description: 'Bespoke services tailored to your unique investment goals.' },
                  { icon: Shield, title: 'Utmost Discretion', description: 'Your privacy is paramount in all our transactions.' },
                  { icon: BarChart3, title: 'Data-Driven Insights', description: 'In-depth market analysis for informed decision-making.' },
                  { icon: Rocket, title: 'Innovative Solutions', description: 'Creative strategies for complex real estate challenges.' }
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
                { icon: Award, title: 'Unmatched Expertise', description: 'Decades of experience in luxury markets of Dubai and Sri Lanka.' },
                { icon: Globe, title: 'Global Network', description: 'Access to exclusive off-market properties and international investors.' },
                { icon: Users, title: 'Client-Centric Approach', description: 'Bespoke services tailored to your unique investment goals.' },
                { icon: Shield, title: 'Utmost Discretion', description: 'Your privacy is paramount in all our transactions.' },
                { icon: BarChart3, title: 'Data-Driven Insights', description: 'In-depth market analysis for informed decision-making.' },
                { icon: Rocket, title: 'Innovative Solutions', description: 'Creative strategies for complex real estate challenges.' }
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
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span className="text-responsive-sm">CLIENT TESTIMONIALS</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            <h2 className="font-luxury text-3xl xs:text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              What Our Clients Say
            </h2>
            <motion.div
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <p className="text-[#666666] max-w-2xl mx-auto text-responsive-base">
              Discover why discerning investors trust our expertise and guidance.
            </p>
          </motion.div>

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
                  name: 'Jonathan L.',
                  location: 'Dubai, UAE',
                  quote: 'Lina’s insights into the Dubai market are unparalleled. Her team guided us to a lucrative off-market opportunity we would have otherwise missed. A truly bespoke and professional service.',
                  image: 'https://randomuser.me/api/portraits/men/75.jpg'
                },
                {
                  name: 'Aanya S.',
                  location: 'Colombo, Sri Lanka',
                  quote: 'As a first-time investor in Sri Lanka, I was nervous. Lina’s expertise and patient guidance made the entire process seamless and successful. Her cultural understanding is a huge asset.',
                  image: 'https://randomuser.me/api/portraits/women/68.jpg'
                },
                {
                  name: 'David Chen',
                  location: 'Singapore',
                  quote: 'The level of due diligence and market analysis provided is exceptional. We felt confident in every decision, knowing it was backed by solid data and years of experience. Highly recommended.',
                  image: 'https://randomuser.me/api/portraits/men/32.jpg'
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <motion.div
                      className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                          <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-lg font-semibold text-[#1A1A1A]">{testimonial.name}</div>
                          <div className="text-sm text-[#666666]">{testimonial.location}</div>
                        </div>
                      </div>
                      <p className="text-[#666666] italic font-serif flex-grow">"{testimonial.quote}"</p>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
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
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span className="text-responsive-sm">MARKET INSIGHTS</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            <h2 className="font-luxury text-3xl xs:text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              Stay Informed
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
              { title: 'The Pre-Launch Advantage', description: 'A framework for identifying and capitalizing on pre-launch and off-market properties.', image: '/src/assets/insights/pre-launch-framework.jpg', link: '/insights/pre-launch-advantage' },
              { title: 'Diaspora Investment Guide', description: 'Navigating the opportunities and challenges of investing in Sri Lanka from abroad.', image: '/src/assets/insights/diaspora-investment.jpg', link: '/insights/diaspora-investment-guide' },
              { title: 'Currency Risk in Real Estate', description: 'Strategies to mitigate the impact of currency fluctuations on your property investments.', image: '/src/assets/insights/currency-risk.jpg', link: '/insights/currency-risk-strategies' },
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
                    <ResponsiveImage src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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