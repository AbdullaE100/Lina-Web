import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart3, Building, Globe, Rocket, Check, ArrowRight, Star, Shield, Clock } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: "investment-advisory",
      title: "Investment Advisory",
      description: "Strategic guidance for exceptional opportunities with comprehensive market intelligence.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: [
        "Market intelligence and trend analysis",
        "Investment strategy development",
        "Risk assessment and mitigation",
        "Portfolio optimization consultation",
        "Cross-border investment planning"
      ],
      color: "from-[#C0A875]/20 to-[#C0A875]/5",
      bgColor: "#F8F5EF"
    },
    {
      id: "pre-launch",
      title: "Pre-Launch Access",
      description: "Exclusive access to premium developments before public availability.",
      icon: <Building className="w-6 h-6" />,
      benefits: [
        "Exclusive pre-launch access",
        "Developer relationship leverage",
        "Early-bird pricing advantages",
        "Payment plan optimization",
        "Construction milestone monitoring"
      ],
      color: "from-[#C0A875]/20 to-[#C0A875]/5",
      bgColor: "#F8F5EF"
    },
    {
      id: "portfolio",
      title: "Portfolio Management",
      description: "Cross-border asset optimization with sophisticated risk management.",
      icon: <Globe className="w-6 h-6" />,
      benefits: [
        "Asset performance monitoring",
        "Rental yield optimization",
        "Market timing for exits",
        "Currency risk management",
        "Tax efficiency strategies"
      ],
      color: "from-[#C0A875]/20 to-[#C0A875]/5",
      bgColor: "#F8F5EF"
    },
    {
      id: "dubai",
      title: "Market Entry Strategy",
      description: "Dubai market penetration with regulatory navigation and strategic partnerships.",
      icon: <Rocket className="w-6 h-6" />,
      benefits: [
        "Market entry strategy development",
        "Regulatory compliance guidance",
        "Local partner network access",
        "Due diligence support",
        "Cultural intelligence consulting"
      ],
      color: "from-[#C0A875]/20 to-[#C0A875]/5",
      bgColor: "#F8F5EF"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5EF] to-[#F5F5F5]" />
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-px w-8 bg-[#C0A875]"></div>
                <span>EXCEPTIONAL EXPERTISE</span>
                <div className="h-px w-8 bg-[#C0A875]"></div>
              </motion.div>
              
              <motion.h1 
                className="font-luxury text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 text-[#1A1A1A] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="relative inline-block">
                  Premium
                  <motion.div 
                    className="absolute -bottom-3 left-0 h-px w-full bg-[#C0A875]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
                {" "}
                <span className="text-[#C0A875]">Services</span>
              </motion.h1>
              
              <motion.p 
                className="text-[#666666] text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Bespoke investment solutions meticulously crafted for discerning global investors seeking exceptional returns in premium real estate markets.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  className="bg-[#C0A875] hover:bg-[#D4BC8A] text-black border-none rounded-none px-8 py-7 h-auto text-sm tracking-wide group relative overflow-hidden font-ui"
                  asChild
                >
                  <Link to="/contact">
                    <span className="relative z-10">Schedule Consultation</span>
                    <ChevronRight className="ml-2 w-4 h-4 relative z-10" />
                    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button 
                  className="bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-none px-8 py-7 h-auto text-sm tracking-wide group relative overflow-hidden font-ui"
                  asChild
                >
                  <Link to="/portfolio">
                    <span className="relative z-10">View Portfolio</span>
                    <ArrowRight className="ml-2 w-4 h-4 relative z-10" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                {
                  icon: <Star className="w-5 h-5" />,
                  title: "Exclusive Access",
                  description: "Privileged entry to off-market properties and pre-launch developments"
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Trusted Expertise",
                  description: "15+ years of market insight and strategic investment guidance"
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "Personalized Approach",
                  description: "Tailored solutions aligned with your unique investment objectives"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white border border-[#EEEEEE] shadow-sm group hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#F8F5EF] flex items-center justify-center mb-4 text-[#C0A875] group-hover:bg-[#C0A875] group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-luxury text-lg mb-2 text-[#1A1A1A]">
                    {feature.title}
                  </h3>
                  <p className="text-[#666666] text-sm font-serif">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="font-luxury text-3xl md:text-4xl font-light mb-6 text-[#1A1A1A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Tailored Investment Solutions
            </motion.h2>
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <motion.p 
              className="text-[#666666] leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Discover our comprehensive suite of premium services designed to maximize your real estate investment potential
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative cursor-pointer transition-all duration-500 group overflow-hidden bg-white ${
                  activeService === index 
                    ? 'border-2 border-[#C0A875] shadow-lg' 
                    : 'border border-[#EEEEEE] hover:border-[#C0A875]/50 hover:shadow-md'
                }`}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 20 
                }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0A875]/30 via-[#C0A875] to-[#C0A875]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="p-10 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 ${
                      activeService === index || hoveredCard === index 
                        ? 'bg-[#C0A875] text-white scale-110' 
                        : 'bg-[#F8F5EF] text-[#C0A875]'
                    }`}>
                      {service.icon}
                    </div>
                    <h3 className={`font-luxury text-2xl ml-5 transition-all duration-500 ${
                      activeService === index 
                        ? 'text-[#C0A875]' 
                        : 'text-[#1A1A1A] group-hover:text-[#C0A875]'
                    }`}>
                {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#666666] mb-10 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <span 
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                          activeService === index
                            ? 'bg-[#C0A875]/20 text-[#C0A875]'
                            : 'bg-[#F5F5F5] text-[#666666] group-hover:bg-[#C0A875]/10 group-hover:text-[#C0A875]'
                        }`}
                      >
                        {benefit.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-10 right-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeService === index || hoveredCard === index 
                        ? 'bg-[#C0A875] text-white' 
                        : 'bg-[#F5F5F5] text-[#C0A875]'
                    }`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-[#C0A875]"
                    initial={{ width: activeService === index ? '100%' : '0%' }}
                    animate={{ 
                      width: activeService === index ? '100%' : hoveredCard === index ? '50%' : '0%' 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Active Service Details */}
      <section className="py-24 bg-gradient-to-b from-[#F5F5F5] to-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Service Details */}
                <div>
                  <div className="inline-flex items-center gap-2 text-[#C0A875] mb-6 tracking-wider font-medium">
                    <div className="h-px w-8 bg-[#C0A875]"></div>
                    <span>SERVICE SPOTLIGHT</span>
                  </div>
                  
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#C0A875] to-[#D4BC8A] text-white mb-8 shadow-lg">
                      {services[activeService].icon}
                  </div>
                  
                  <h2 className="font-luxury text-4xl md:text-5xl font-light mb-6 text-[#1A1A1A] leading-tight">
                    {services[activeService].title}
                  </h2>
                  
                  <div className="h-[1px] w-16 bg-[#C0A875] mb-8" />
                  
                  <p className="text-[#666666] mb-10 leading-relaxed text-lg md:text-xl font-light">
                    {services[activeService].description}
                  </p>
                  
                  <div className="mb-10 space-y-3">
                    <div className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium">
                      <span>Why choose this service</span>
                      <div className="h-px w-12 bg-[#C0A875]"></div>
                      </div>
                    <p className="text-[#666666] leading-relaxed">
                      {activeService === 0 && "Our Investment Advisory service provides you with expert guidance to navigate complex global real estate markets, identifying opportunities aligned with your financial goals."}
                      {activeService === 1 && "Our Pre-Launch Access service gives you first-mover advantage on premium developments, securing optimal units and pricing before public release."}
                      {activeService === 2 && "Our Portfolio Management service ensures your real estate assets are optimized for performance, balancing growth, income, and risk across diverse markets."}
                      {activeService === 3 && "Our Market Entry Strategy service provides a seamless pathway into the Dubai real estate market, navigating regulations and cultural nuances for successful investment."}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-12">
                    <Button 
                      className="bg-[#C0A875] hover:bg-[#D4BC8A] text-black border-none rounded-none px-8 py-6 h-auto text-sm tracking-wide group relative overflow-hidden font-ui"
                      asChild
                    >
                      <Link to="/contact">
                        <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-300">
                          Inquire About This Service
                        </span>
                        <ChevronRight className="ml-2 w-4 h-4 relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-300" />
                        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      </Link>
                    </Button>
                    
                    <Button 
                      className="bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-none px-8 py-6 h-auto text-sm tracking-wide"
                      asChild
                    >
                      <Link to="/portfolio">
                        <span>View Related Projects</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Right Column - Benefits */}
                <div>
                  <div className="bg-white p-12 border border-[#EEEEEE] shadow-md relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#C0A875]"></div>
                    <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-[#C0A875]/0 via-[#C0A875]/30 to-[#C0A875]/0"></div>
                    
                    <h3 className="font-luxury text-2xl font-light mb-10 text-[#1A1A1A] flex items-center">
                      <span className="text-[#C0A875] mr-3">
                        <Star className="w-5 h-5" />
                      </span>
                      Key Benefits
                    </h3>
                    
                    <div className="space-y-8">
                      {services[activeService].benefits.map((benefit, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-start gap-5 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F8F5EF] flex items-center justify-center mt-1 text-[#C0A875] group-hover/item:bg-[#C0A875] group-hover/item:text-white transition-all duration-300">
                            <Check className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[#1A1A1A] font-medium mb-1 group-hover/item:text-[#C0A875] transition-colors duration-300">
                              {benefit.split(' ').slice(0, 2).join(' ')}
                            </p>
                            <p className="text-[#666666] leading-relaxed text-sm">
                              {benefit}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-[#EEEEEE]">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-[#666666]">
                          <span className="text-[#C0A875] font-medium">Ideal for:</span> {activeService === 0 ? "Global investors" : activeService === 1 ? "Premium buyers" : activeService === 2 ? "Portfolio holders" : "Market entrants"}
                        </div>
                        <div className="text-sm text-[#666666]">
                          <span className="text-[#C0A875] font-medium">Timeline:</span> {activeService === 0 ? "2-4 weeks" : activeService === 1 ? "Immediate" : activeService === 2 ? "Ongoing" : "4-8 weeks"}
                  </div>
                </div>
              </div>
            </div>
          </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span>OUR METHODOLOGY</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            
            <motion.h2 
              className="font-luxury text-4xl md:text-5xl font-light mb-6 text-[#1A1A1A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Our Process
            </motion.h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            <motion.p 
              className="text-[#666666] leading-relaxed text-lg md:text-xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Our proven methodology ensures strategic, efficient, and successful real estate investments tailored to your unique objectives
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-12 bottom-12 w-px bg-[#EEEEEE] hidden md:block"></div>
            <div className="absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-[#C0A875]/0 via-[#C0A875]/30 to-[#C0A875]/0 scale-y-0 hidden md:block process-line"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Comprehensive discussion of your investment goals, risk tolerance, and market preferences to establish a personalized foundation.",
                  icon: <div className="w-10 h-10 rounded-full border-2 border-[#C0A875] flex items-center justify-center">1</div>
                },
                {
                  step: "02",
                  title: "Market Analysis",
                  description: "Deep-dive into relevant markets with customized opportunity assessment and data-driven recommendations tailored to your objectives.",
                  icon: <div className="w-10 h-10 rounded-full border-2 border-[#C0A875] flex items-center justify-center">2</div>
                },
                {
                  step: "03",
                  title: "Strategy Development",
                  description: "Tailored investment strategy aligned with your objectives and market conditions, incorporating risk management and timeline planning.",
                  icon: <div className="w-10 h-10 rounded-full border-2 border-[#C0A875] flex items-center justify-center">3</div>
                },
                {
                  step: "04",
                  title: "Execution & Support",
                  description: "Full support through transaction process with ongoing portfolio management, performance tracking, and strategic adjustments.",
                  icon: <div className="w-10 h-10 rounded-full border-2 border-[#C0A875] flex items-center justify-center">4</div>
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative group process-item ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5 }}
                >
                  {/* Connection dot */}
                  <div className={`absolute top-12 w-4 h-4 rounded-full bg-white border-2 border-[#C0A875] hidden md:block ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}></div>
                  
                  <div className="p-10 border border-transparent group-hover:border-[#C0A875]/30 transition-all duration-300 bg-[#F8F5EF] group-hover:bg-white shadow-sm group-hover:shadow-md">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-[#C0A875] font-luxury text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300 origin-left">
                      {item.step}
                      </div>
                      <div className="text-[#C0A875] group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-luxury text-2xl font-light mb-4 text-[#1A1A1A] group-hover:text-[#C0A875] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">
                      {item.description}
                    </p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C0A875] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Button 
              className="bg-transparent text-[#C0A875] border border-[#C0A875] hover:bg-[#C0A875]/5 rounded-none px-8 py-6 h-auto text-sm tracking-wide group relative overflow-hidden font-ui"
              asChild
            >
              <Link to="/contact">
                <span className="relative z-10">Start Your Investment Journey</span>
                <ArrowRight className="ml-2 w-4 h-4 relative z-10" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span>CLIENT EXPERIENCES</span>
              <div className="h-px w-8 bg-[#C0A875]"></div>
            </div>
            
            <motion.h2 
              className="font-luxury text-4xl md:text-5xl font-light mb-6 text-[#1A1A1A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              What Our Clients Say
            </motion.h2>
            
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-10 md:p-12 border border-[#EEEEEE] relative group shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C0A875]"></div>
                <div className="text-5xl text-[#C0A875] mb-8 group-hover:scale-110 transition-transform duration-300 origin-left">"</div>
                <blockquote className="text-xl md:text-2xl font-luxury font-light italic text-[#1A1A1A] leading-relaxed mb-12">
                  Lina's expertise in the Dubai market is unparalleled. 
                Her strategic insights and network have been instrumental in our successful 
                  real estate investments.
              </blockquote>
                
              <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-[#F8F5EF] flex-shrink-0 mr-6 group-hover:bg-[#C0A875]/20 transition-colors duration-300" />
                <div>
                    <div className="font-medium text-[#1A1A1A] mb-1 text-lg group-hover:text-[#C0A875] transition-colors duration-300">
                    Sid Hidramani
                    </div>
                    <div className="text-[#666666]">
                      Investment Partner
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C0A875] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-10 md:p-12 border border-[#EEEEEE] relative group shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C0A875]"></div>
                <div className="text-5xl text-[#C0A875] mb-8 group-hover:scale-110 transition-transform duration-300 origin-left">"</div>
                <blockquote className="text-xl md:text-2xl font-luxury font-light italic text-[#1A1A1A] leading-relaxed mb-12">
                  Working with Lina's team gave us access to exclusive pre-launch opportunities
                  that would have been impossible to secure otherwise. Exceptional service.
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-[#F8F5EF] flex-shrink-0 mr-6 group-hover:bg-[#C0A875]/20 transition-colors duration-300" />
                  <div>
                    <div className="font-medium text-[#1A1A1A] mb-1 text-lg group-hover:text-[#C0A875] transition-colors duration-300">
                      Sarah Al-Mahmoud
                    </div>
                    <div className="text-[#666666]">
                      Family Office Director
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C0A875] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[#C0A875] mb-4 tracking-wider font-medium">
                  <div className="h-px w-8 bg-[#C0A875]"></div>
                  <span>BEGIN YOUR JOURNEY</span>
            </div>
                
                <motion.h2 
                  className="font-luxury text-4xl md:text-5xl font-light mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
              Start Your Investment Journey
                </motion.h2>
                
                <motion.div 
                  className="h-[1px] w-16 bg-[#C0A875] mb-8"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                />
                
                <motion.p 
                  className="text-[#CCCCCC] mb-12 leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
              Schedule a personalized consultation to explore how our premium services 
                  can accelerate your real estate investment success in today's competitive market.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-wrap gap-4"
                >
                  <Button 
                    className="bg-[#C0A875] hover:bg-[#D4BC8A] text-black border-none rounded-none px-10 py-7 h-auto text-sm tracking-wide group relative overflow-hidden font-ui"
                    asChild
                  >
              <Link to="/contact">
                <span className="relative z-10">Book Strategy Call</span>
                      <ChevronRight className="ml-2 w-4 h-4 relative z-10" />
                      <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </Link>
                  </Button>
                  
                  <Button 
                    className="bg-transparent text-white border border-white hover:bg-white/10 rounded-none px-10 py-7 h-auto text-sm tracking-wide"
                    asChild
                  >
                    <Link to="/portfolio">
                      <span>View Portfolio</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
                </motion.div>
              </div>
              
              <div className="hidden md:block">
                <div className="bg-[#111111] border border-[#333333] p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C0A875]"></div>
                  
                  <h3 className="font-luxury text-2xl font-light mb-8 flex items-center">
                    <span className="text-[#C0A875] mr-3">
                      <Check className="w-5 h-5" />
                    </span>
                    Why Choose Us
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      "Exclusive access to premium developments",
                      "15+ years of market expertise",
                      "Personalized investment strategies",
                      "Global network of partners",
                      "End-to-end transaction support"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#C0A875]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#C0A875]" />
                        </div>
                        <p className="text-[#CCCCCC]">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-[#333333] text-center">
                    <p className="text-[#C0A875] font-medium mb-2">Ready to elevate your investment portfolio?</p>
                    <p className="text-[#CCCCCC] text-sm">Our team is ready to assist you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;