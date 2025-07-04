import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart3, Building, Globe, Rocket, Check } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" });
  
  const services = [
    {
      id: "investment-advisory",
      title: "Real Estate Investment Advisory",
      description: "Strategic guidance for high-growth real estate opportunities with comprehensive market analysis and risk assessment.",
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
      title: "Pre-Launch & Off-Plan Opportunities",
      description: "Exclusive access to premium developments before public launch, maximizing investment potential and early-bird advantages.",
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
      description: "Comprehensive management of real estate assets across Sri Lanka and Dubai markets with focus on maximizing returns.",
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
      title: "Dubai Market Entry Strategy",
      description: "Specialized guidance for investors entering the Dubai real estate market, including regulatory compliance and opportunity identification.",
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
      <section className="pt-40 pb-24 relative">
        <div className="absolute inset-0 bg-[#F5F5F5]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide font-light mb-8 text-[#1A1A1A]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.div 
              className="h-[1px] w-20 bg-[#C0A875] mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-[#666666] text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Comprehensive real estate advisory services designed for discerning global investors 
              seeking exceptional opportunities in Sri Lanka and Dubai markets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Service Cards */}
      <section className="py-16 bg-white relative" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative cursor-pointer transition-all duration-300 border overflow-hidden ${
                  activeService === index 
                    ? 'border-[#C0A875]' 
                    : 'border-[#EEEEEE] hover:border-[#C0A875]/50'
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
                <div className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                      activeService === index || hoveredCard === index 
                        ? 'bg-[#C0A875] text-white' 
                        : 'bg-[#F5F5F5] text-[#C0A875]'
                    } transition-colors duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className={`font-display text-xl ml-4 ${
                      activeService === index 
                        ? 'text-[#C0A875]' 
                        : 'text-[#1A1A1A]'
                    } transition-colors duration-300`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-1 bg-[#C0A875] transition-all duration-500`}
                    initial={{ width: activeService === index ? '100%' : '0%' }}
                    animate={{ width: activeService === index ? '100%' : hoveredCard === index ? '50%' : '0%' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-16 bg-white">
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
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C0A875] text-white mb-8"
                  >
                    {services[activeService].icon}
                  </div>
                  
                  <h2 className="font-display text-3xl font-light mb-6 text-[#1A1A1A]">
                    {services[activeService].title}
                  </h2>
                  
                  <p className="text-[#666666] mb-10 leading-relaxed">
                    {services[activeService].description}
                  </p>
                  
                  <Button 
                    className="bg-transparent text-[#C0A875] border border-[#C0A875] hover:bg-[#C0A875]/5 rounded-none px-8 py-6 h-auto text-sm tracking-wide group relative overflow-hidden"
                    asChild
                  >
                    <Link to="/contact">
                      <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-300">
                        Inquire About This Service
                      </span>
                      <ChevronRight className="ml-2 w-4 h-4 relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-300" />
                      <span className="absolute inset-0 bg-[#C0A875] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
                
                {/* Right Column - Benefits */}
                <div>
                  <div className="bg-[#F8F5EF] p-10 border border-[#EEEEEE]">
                    <h3 className="font-display text-xl font-light mb-8 text-[#1A1A1A]">
                      Key Benefits
                    </h3>
                    
                    <div className="space-y-6">
                      {services[activeService].benefits.map((benefit, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-start gap-4 group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="mt-1 text-[#C0A875] group-hover:scale-125 transition-transform duration-300">
                            <Check className="w-4 h-4" />
                          </div>
                          <p className="text-[#666666] group-hover:text-[#1A1A1A] transition-colors duration-300">
                            {benefit}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-light mb-6 text-[#1A1A1A]"
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
              className="text-[#666666] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Our proven methodology ensures strategic, efficient, and successful real estate investments
            </motion.p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Comprehensive discussion of your investment goals, risk tolerance, and market preferences."
                },
                {
                  step: "02",
                  title: "Market Analysis",
                  description: "Deep-dive into relevant markets with customized opportunity assessment and recommendations."
                },
                {
                  step: "03",
                  title: "Strategy Development",
                  description: "Tailored investment strategy aligned with your objectives and market conditions."
                },
                {
                  step: "04",
                  title: "Execution & Support",
                  description: "Full support through transaction process with ongoing portfolio management."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 border border-transparent group-hover:border-[#C0A875]/30 transition-colors duration-300 bg-white">
                    <div className="text-[#C0A875] font-display text-4xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300 origin-left">
                      {item.step}
                    </div>
                    <h3 className="font-display text-xl font-light mb-3 text-[#1A1A1A] group-hover:text-[#C0A875] transition-colors duration-300">
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
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-[#FAFAFA] p-12 border border-[#EEEEEE] relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl text-[#C0A875] mb-8 group-hover:scale-110 transition-transform duration-300 origin-left">"</div>
              <blockquote className="text-xl font-display font-light italic text-[#1A1A1A] leading-relaxed mb-10">
                Lina's expertise in the Sri Lankan and Dubai markets is unparalleled. 
                Her strategic insights and network have been instrumental in our successful 
                real estate investments. She combines deep market knowledge with exceptional 
                client service.
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#EEEEEE] flex-shrink-0 mr-4 group-hover:bg-[#C0A875]/20 transition-colors duration-300" />
                <div>
                  <div className="font-medium text-[#1A1A1A] mb-1 group-hover:text-[#C0A875] transition-colors duration-300">
                    Sid Hidramani
                  </div>
                  <div className="text-[#666666] text-sm">
                    Investment Partner
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C0A875] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Start Your Investment Journey
            </motion.h2>
            <motion.div 
              className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <motion.p 
              className="text-[#CCCCCC] mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Schedule a personalized consultation to explore how our premium services 
              can accelerate your real estate investment success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Button 
                className="bg-[#C0A875] hover:bg-[#D4BC8A] text-black border-none rounded-none px-8 py-6 h-auto text-sm tracking-wide group relative overflow-hidden"
                asChild
              >
                <Link to="/contact">
                  <span className="relative z-10">Book Strategy Call</span>
                  <ChevronRight className="ml-2 w-4 h-4 relative z-10" />
                  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;