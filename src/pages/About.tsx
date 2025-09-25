import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Play, ChevronRight, TrendingUp, Globe, Shield, Target, Award, Users, Building, MessageCircle, ArrowRight } from 'lucide-react';

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

      {/* World-Class Professional Portrait Section */}
      <section className="relative py-24 md:py-40 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Portrait Container - World Class Design */}
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Premium photo container with Apple-style design */}
                <div className="relative">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-gradient-to-br from-amber-50/50 to-amber-100/50 border border-white/60 backdrop-blur-sm">
                    <img
                      src="/photos/Linaphoto3.jpeg"
                      alt="Lina Nizar - CEO and Visionary Leader"
                      className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10"></div>
                  </div>
                  
                  {/* Apple-style floating elements with physics */}
                  <motion.div 
                    className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-[1.25rem] shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)]"
                    animate={{ 
                      y: [0, -12, 0],
                      rotate: [0, 3, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute -bottom-12 -left-12 w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-400 rounded-[1.5rem] shadow-[0_15px_35px_-10px_rgba(245,158,11,0.3)] opacity-80"
                    animate={{ 
                      y: [0, 15, 0],
                      rotate: [0, -3, 0],
                      scale: [1, 0.95, 1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  
                  {/* Subtle accent dots */}
                  <div className="absolute top-12 left-6 w-3 h-3 bg-amber-400/60 rounded-full shadow-lg"></div>
                  <div className="absolute bottom-24 right-12 w-2 h-2 bg-amber-300/40 rounded-full shadow-md"></div>
                  <div className="absolute top-32 right-4 w-1.5 h-1.5 bg-amber-500/30 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Premium Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              {/* Apple-style badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 rounded-full mb-8 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-amber-700 text-sm font-medium tracking-wide">VISIONARY LEADERSHIP</span>
              </motion.div>

              {/* Premium typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[0.9] mb-4">
                  <span className="block text-gray-900">Meet</span>
                  <span className="block bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                    Lina Nizar
                  </span>
                </h1>
              </motion.div>
              
              {/* Premium description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl font-light"
              >
                A visionary leader who brings together global perspective, 
                local expertise, and unwavering commitment to excellence through 
                strategic alliance with{' '}
                <span className="font-medium bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  Xperience Realty
                </span>.
              </motion.p>

              {/* Premium feature cards */}
              <div className="grid grid-cols-1 gap-6 mb-12">
                {[
                  {
                    icon: TrendingUp,
                    title: "Data-Driven Excellence",
                    description: "Advanced analytics and market intelligence drive every investment decision",
                    gradient: "from-blue-50 to-blue-100/50",
                    iconColor: "text-blue-600",
                    borderColor: "border-blue-200/50"
                  },
                  {
                    icon: Shield,
                    title: "Independent Consultation",
                    description: "Unbiased advice with transparent methodology and verified outcomes",
                    gradient: "from-emerald-50 to-emerald-100/50",
                    iconColor: "text-emerald-600",
                    borderColor: "border-emerald-200/50"
                  },
                  {
                    icon: Globe,
                    title: "Global Perspective",
                    description: "Two decades of cross-border expertise in Dubai's luxury real estate market",
                    gradient: "from-amber-50 to-amber-100/50",
                    iconColor: "text-amber-600",
                    borderColor: "border-amber-200/50"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 1.1 + (index * 0.1) }}
                    className={`flex items-start gap-5 p-6 bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} rounded-2xl backdrop-blur-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-500 group`}
                  >
                    <div className={`w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center ${feature.iconColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Premium CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  asChild
                  className="bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black rounded-2xl px-10 py-6 text-lg font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                >
                  <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Start Conversation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                
                <Button 
                  variant="ghost" 
                  asChild
                  className="text-gray-700 hover:bg-white/80 rounded-2xl px-10 py-6 text-lg font-medium transition-all duration-500 border-2 border-gray-200/60 hover:border-gray-300/80 backdrop-blur-sm hover:scale-105"
                >
                  <Link to="/services" className="flex items-center justify-center gap-3 group">
                    <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
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