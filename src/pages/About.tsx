import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Play, ChevronRight, TrendingUp, Globe, Shield, Target, Award, Users, Building } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const achievements = [
    { number: "$1B+", label: "In Global Sales", icon: TrendingUp },
    { number: "20+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Luxury Properties", icon: Building },
    { number: "50+", label: "Countries Served", icon: Globe },
  ];

  const principles = [
    {
      title: "Visionary Leadership",
      description: "Pioneering the future of luxury real estate through innovative strategies and unparalleled market insight.",
      icon: Target,
    },
    {
      title: "Global Perspective",
      description: "Connecting international investors with Dubai's most exclusive opportunities through deep cultural intelligence.",
      icon: Globe,
    },
    {
      title: "Uncompromising Excellence",
      description: "Every interaction, every transaction, every relationship built on the foundation of absolute excellence.",
      icon: Shield,
    },
  ];

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Hero Section - Apple-style */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative">
            <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center px-4 max-w-6xl mx-auto"
        >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">
              Real Estate Visionary
          </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none mb-6">
              Lina
              <br />
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Nizar
              </span>
            </h1>
                  </motion.div>
                  
          <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-12"
          >
            Architecting the future of luxury real estate.
            <br />
            Where vision meets precision.
          </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button 
              asChild
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer">
                Start Your Journey
              </a>
                  </Button>
                  <Button 
              variant="ghost" 
                    asChild
              className="text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
                  >
                    <Link to="/portfolio">
                View Portfolio <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
            </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Excellence
              <br />
              <span className="text-gray-400">Delivered</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6">
                  <achievement.icon className="w-12 h-12 mx-auto text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl md:text-5xl font-light mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-lg">
                    {achievement.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait Gallery Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Meet
              <br />
              <span className="text-gray-500">Lina</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A visionary leader who brings together global perspective, 
              local expertise, and unwavering commitment to excellence through 
              strategic alliance with Xperience Realty.
            </p>
          </motion.div>

          {/* Main Portrait */}
            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-50 to-amber-100">
                <img
                  src="/photos/Lina photo 2.jpeg"
                  alt="Lina Nizar - Professional Portrait"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl opacity-60"></div>
            </div>
            </motion.div>
            
          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                src: "/photos/Linaphoto1.jpeg",
                title: "Leadership",
                subtitle: "Guiding Vision"
              },
              {
                src: "/photos/Linaphoto3.jpeg",
                title: "Excellence",
                subtitle: "Professional Distinction"
              }
            ].map((photo, index) => (
                <motion.div
                  key={index}
                initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay with text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-xl font-medium mb-1">{photo.title}</h3>
                        <p className="text-gray-200 text-sm">{photo.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
              ))}
          </div>

          {/* Professional Excellence Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Excellence in
              <br />
              <span className="text-gray-500">Every Detail</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every consultation, every property viewing, every client interaction 
              is approached with the same meticulous attention to detail that has 
              defined two decades of success in luxury real estate through our 
              strategic alliance with Xperience Realty.
            </p>
            
            {/* Key attributes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                "Strategic Market Analysis",
                "Cultural Intelligence",
                "Client-Centric Approach",
                "Innovation Leadership"
              ].map((attribute, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="w-3 h-3 bg-amber-400 rounded-full mx-auto mb-3"></div>
                  <span className="text-gray-700 font-medium text-sm">{attribute}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
                Philosophy
                <br />
                <span className="text-gray-500">of Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Every great achievement begins with a clear vision. 
                In luxury real estate, that vision becomes reality through 
                meticulous attention to detail, unwavering commitment to 
                excellence, and an understanding that each client's dreams 
                deserve nothing less than perfection.
              </p>
              <div className="w-16 h-0.5 bg-black"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {principles.map((principle, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <principle.icon className="w-8 h-8 text-black group-hover:text-amber-600 transition-colors duration-300" />
              </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-amber-600 transition-colors duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
              </div>
              </div>
              </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-32 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Latest
              <br />
              <span className="text-gray-500">Video</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the future of luxury living in Dubai through 
              exclusive insights and premier property showcases.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/Cd4YDFwR6FI?si=npTCOTo-aBRJA9YU"
                title="Client Testimonial - Lina Nizar"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)}
              />
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-xl font-medium">Loading Testimonial</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Desktop testimonial card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-8 shadow-xl max-w-sm hidden md:block"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-black ml-2">5.0</span>
              </div>
              <p className="text-gray-700 font-medium">
                "Lina's expertise and dedication made our Dubai property 
                investment seamless and profitable."
              </p>
            </motion.div>
          </motion.div>

          {/* Mobile testimonial card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-md mx-auto md:hidden bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
              <span className="font-medium text-black ml-2">5.0</span>
        </div>
            <p className="text-gray-700 font-medium">
              "Lina's expertise and dedication made our Dubai property 
              investment seamless and profitable."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
              Ready to Begin
              <br />
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Your Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the difference that true expertise makes. 
              Let's create something extraordinary together.
            </p>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 rounded-full px-12 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer">
                Start Conversation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;