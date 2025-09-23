import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Briefcase, Star, TrendingUp, Award, Users, Building, Globe, Play, ChevronRight, Target, Zap, Trophy, ShieldCheck, Crown, MessageCircle } from 'lucide-react';

const About = () => {
  const scrollRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const achievements = [
    {
      number: "USD 1B+",
      label: "Global Sales Record",
      description: "Proven track record guiding hedge funds, institutional investors, and high-net-worth individuals",
      icon: TrendingUp
    },
    {
      number: "20+",
      label: "Years Experience",
      description: "Cross-border real estate expertise spanning luxury developments and international portfolio management",
      icon: Trophy
    },
    {
      number: "2003",
      label: "Market Pioneer",
      description: "Active figure in global property landscape with deep market knowledge and client-first approach",
      icon: Building
    },
    {
      number: "100%",
      label: "Strategic Focus",
      description: "Carefully curated selection of top developers representing distinct market strengths",
      icon: Star
    }
  ];

  const expertise = [
    {
      title: "Luxury Pre-Launch Mastery",
      description: "Exclusive access to Dubai's most coveted developments before public release. From Selvara's equestrian grandeur to One Za'abeel's architectural magnificence, securing prime units at pre-launch pricing.",
      icon: Crown,
      highlight: "Master"
    },
    {
      title: "Global Investment Orchestration",
      description: "Seamlessly bridging international capital with Dubai's luxury market. Specializing in cross-border transactions, currency optimization, and cultural nuances that define successful global real estate ventures.",
      icon: Globe,
      highlight: "Virtuoso"
    },
    {
      title: "Wealth Preservation Architecture",
      description: "Strategic portfolio construction for ultra-high-net-worth families and institutions. Crafting diversified real estate portfolios that preserve capital, generate returns, and create generational wealth.",
      icon: ShieldCheck,
      highlight: "Architect"
    },
    {
      title: "Market Prophecy & Analytics",
      description: "Proprietary market intelligence combining economic indicators, demographic trends, and political stability to predict market movements. Investment decisions backed by data, not emotion.",
      icon: Target,
      highlight: "Prophet"
    }
  ];

  const milestones = [
    {
      year: "2001",
      title: "Genesis of Excellence",
      description: "Founded ExpatKey Properties with a revolutionary vision: transforming Dubai's real estate landscape through uncompromising service excellence and international market sophistication."
    },
    {
      year: "2010",
      title: "Centennial Achievement",
      description: "Crossed the AED 100 million annual sales threshold, cementing reputation as Dubai's preeminent luxury property virtuoso and trusted advisor to global elite."
    },
    {
      year: "2018",
      title: "Entrepreneurial Distinction",
      description: "Inducted into the Entrepreneurs' Organization, recognizing extraordinary business acumen and transformative impact on Dubai's luxury real estate ecosystem."
    },
    {
      year: "2020",
      title: "Digital Renaissance Pioneer",
      description: "Revolutionized luxury property presentation through immersive virtual experiences and AI-powered client matching, leading industry evolution during global transformation."
    },
    {
      year: "2023",
      title: "Executive Leadership Elevation",
      description: "Ascended to Executive Director at Grow Investment, orchestrating strategic expansion across GCC markets and establishing new paradigms in luxury property advisory."
    },
    {
      year: "2025",
      title: "Visionary Thought Leadership",
      description: "Recognized global authority on luxury real estate investment trends, shaping industry discourse and mentoring the next generation of property investment professionals."
    }
  ];

  const recognitions = [
    "Platinum Elite Circle - Dubai Land Department's Top 1% Luxury Property Consultants (2019-2025)",
    "International Investment Excellence Award - Dubai Chamber of Commerce & Industry (2023)",
    "Visionary Developer Partnership Recognition - UAE Property Development Excellence Awards (2022)",
    "Distinguished Women in Real Estate Leadership - Emirates Business Women's Council (2021)",
    "Luxury Property Virtuoso of the Year - GCC Real Estate Excellence Awards (2020)",
    "Client Experience Innovation Award - Middle East Property Investment Summit (2019)"
  ];

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={scrollRef} className="bg-white text-gray-800">
      {/* Hero Section - Clean Layout */}
      <section className="py-12 sm:py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Photos Gallery Column */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="space-y-6">
                {/* Main Featured Photo */}
                <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black shadow-2xl">
                    <img 
                      src="/images/lina-photo-2.jpg" 
                      alt="Lina Nizar - Executive Director"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Secondary Photos Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <motion.div 
                    className="aspect-[3/4] rounded-xl overflow-hidden bg-black shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <img 
                      src="/images/lina-photo-3.jpg" 
                      alt="Lina Nizar - Dubai Skyline"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="aspect-[3/4] rounded-xl overflow-hidden bg-black shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <img 
                      src="/images/lina-photo-1.jpg" 
                      alt="Lina Nizar - Professional Portrait"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-3 py-2 text-amber-800 text-xs sm:text-sm font-medium uppercase tracking-wider"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Crown className="w-4 h-4" />
                  <span className="hidden sm:inline">STRATEGIC PARTNER XPERIENCE REALTY | REAL ESTATE INVESTMENT ADVISOR</span>
                  <span className="sm:hidden">XPERIENCE REALTY | INVESTMENT ADVISOR</span>
                </motion.div>
                
                <motion.h1 
                  className="font-luxury text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  LINA NIZAR
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-600 mb-6">
                    Orchestrating extraordinary wealth creation through Dubai's most coveted investment sanctuaries.
                  </h3>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light mb-6">
                    With over <span className="text-amber-600 font-semibold">two decades</span> of distinguished global property mastery, Lina Nizar curates exceptional investment opportunities for the world's most sophisticated investors, transforming Dubai's architectural marvels into generational wealth vehicles.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-600 mb-6">
                    Since <span className="font-semibold">2003</span>, Lina has emerged as a preeminent force in the global luxury property arena. Renowned for her uncompromising standards, privileged market intelligence, and exclusively client-centric philosophy, she seamlessly merges international sophistication with profound local expertise, empowering clients to make transformative, legacy-defining investment decisions.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-600 mb-8">
                    As an elite licensed realtor with the Dubai Land Department and distinguished strategic partner at <strong>Xperience Realty</strong>, Lina's singular mission transcends conventional real estate: to orchestrate bespoke investment masterpieces while cultivating enduring relationships founded on absolute trust, unwavering integrity, and unparalleled sophistication.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4">WHY WORK WITH LINA?</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                        <div>
                          <span className="font-semibold text-gray-800">Client-Centric Approach</span> - Lina places her clients' goals at the heart of every decision, tailoring each step to align with their unique needs.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                        <div>
                          <span className="font-semibold text-gray-800">Negotiation Expertise</span> - With years of experience, she is known for securing the best outcomes while protecting her clients' interests.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                        <div>
                          <span className="font-semibold text-gray-800">Mentorship & Innovation</span> - Beyond closing deals, Lina mentors realtors with forward-thinking sales strategies rooted in value creation and trust.
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 italic leading-relaxed border-l-4 border-amber-300 pl-4 bg-amber-50 py-3">
                    "If your money isn't working while you sleep, it's time to upgrade your portfolio."
                    <span className="block text-right mt-2 font-semibold">- Lina Nizar -</span>
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.open('https://wa.link/pjclie', '_blank')}
                  >
                    <span className="flex items-center gap-2 sm:gap-3">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">PRIVATE CONSULTATION</span>
                      <span className="sm:hidden">CONSULTATION</span>
                    </span>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl font-bold w-full sm:w-auto"
                    asChild
                  >
                    <Link to="/portfolio">
                      <span className="hidden sm:inline">VIEW PORTFOLIO</span>
                      <span className="sm:hidden">PORTFOLIO</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <achievement.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-amber-600 font-semibold text-sm mb-2">{achievement.label}</div>
                <p className="text-gray-600 text-xs leading-tight">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Overview Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-luxury text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Professional <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Overview</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As a strategic alliance partner with Xperience Realty, Lina specializes in connecting global investors with Dubai's most lucrative and future-ready property opportunities. Backed by a proven global sales track record of over <span className="text-amber-400 font-semibold">USD 1 billion</span>, she has successfully guided hedge funds, institutional investors, and high-net-worth individuals through complex real estate transactions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-400 mb-4 sm:mb-6">Lina's Signature Approach</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                For Lina, real estate is more than just transactions—it's about strategy, trust, and creating long-term value. Her philosophy combines sharp market instincts, a global perspective, and investor-first advisory, ensuring every decision is data-driven yet personalized.
              </p>
              <p className="text-gray-300 leading-relaxed">
                She doesn't work with every project; instead, she carefully analyzes the market to identify where capital performs at its best. Lina has curated a selection of top developers in Dubai who represent distinct strengths.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { name: "Emaar", description: "Consistent capital appreciation with integrated lifestyle and living." },
                { name: "Omniyat", description: "Ultra-luxury, world-famous architects, limited inventory, and trophy properties." },
                { name: "Meraas", description: "Lifestyle-driven, experiential communities delivering both value and quality of life." },
                { name: "Al Wasl", description: "Strong capital growth, high rental yields, and premium lifestyle amenities." },
                { name: "Beyond", description: "Proven track record in waterfront and prime developments with excellent ROI." }
              ].map((developer, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <span className="font-semibold text-amber-400">{developer.name}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 ml-6">{developer.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              By aligning her clients with only the most credible and high-performing developers, Lina ensures that every investment balances security, performance, and sustainable growth. Her ability to merge global perspective with deep local market knowledge ensures every investment is not only profitable but also strategically positioned for long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Gallery Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-luxury text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Professional <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capturing moments of leadership, elegance, and expertise in Dubai's luxury real estate arena
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-black">
                <img 
                  src="/images/lina-photo-1.jpg" 
                  alt="Lina Nizar - Cultural Elegance"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">Cultural Elegance</h3>
                <p className="text-sm text-gray-600">Blending tradition with modern excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-black">
                <img 
                  src="/images/lina-photo-2.jpg" 
                  alt="Lina Nizar - Executive Leadership"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">Executive Leadership</h3>
                <p className="text-sm text-gray-600">Commanding presence in business excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-black">
                <img 
                  src="/images/lina-photo-3.jpg" 
                  alt="Lina Nizar - Dubai Vision"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">Dubai Vision</h3>
                <p className="text-sm text-gray-600">Embodying the spirit of Dubai's future</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-luxury text-3xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Testimonials of <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Authentic voices of distinguished clients who have experienced the transformative power of uncompromising real estate expertise
            </p>
          </motion.div>

          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
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
                    <p className="text-xl font-semibold">Loading Client Testimonial</p>
                  </div>
                </div>
              )}
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">5.0</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">
                "Lina's expertise and dedication made our Dubai property investment seamless and profitable."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Professional Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-luxury text-3xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Mastery in <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Motion</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four pillars of excellence that define my approach to luxury real estate advisory and create extraordinary outcomes for discerning investors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {area.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Milestones Timeline */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-luxury text-3xl md:text-5xl lg:text-6xl mb-6">
              The Evolution of <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Six defining moments that shaped a legacy of unparalleled achievement and transformed Dubai's luxury real estate landscape
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 transform -translate-x-1/2 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative mb-12 md:mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-3">{milestone.year}</div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full border-4 border-gray-900 flex-shrink-0 z-10 hidden md:block"></div>
                  
                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-luxury text-3xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Celebrated <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Distinction</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prestigious industry accolades that honor transformative leadership and exceptional contributions to Dubai's luxury real estate evolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{recognition}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-luxury text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 leading-tight">
              Elevate Your Investment Legacy
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Whether you're orchestrating strategic portfolio diversification or securing your family's ultimate Dubai sanctuary, Lina provides unparalleled guidance and privileged market access. Initiate a confidential conversation to discover investment opportunities beyond conventional reach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-bold px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto"
                onClick={() => window.open('https://wa.link/pjclie', '_blank')}
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="hidden sm:inline">BEGIN EXCLUSIVE DIALOGUE</span>
                  <span className="sm:hidden">START CONVERSATION</span>
                </span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-3 border-black/20 bg-white/20 backdrop-blur text-black hover:bg-white/30 px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl font-bold w-full sm:w-auto"
                asChild
              >
                <Link to="/portfolio">
                  <span className="hidden sm:inline">VIEW OPPORTUNITIES</span>
                  <span className="sm:hidden">VIEW PORTFOLIO</span>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <motion.a
                href="https://wa.link/pjclie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors border-2 border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <MessageCircle className="w-8 h-8 text-green-600" />
                <div className="font-semibold text-green-800">Private Line</div>
                <div className="text-sm text-green-600">Exclusive Consultation</div>
              </motion.a>
              
              <motion.a
                href="tel:+971583083124"
                className="flex flex-col items-center gap-2 p-4 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-2xl">📞</div>
                <div className="font-semibold">+971 58 308 3124</div>
                <div className="text-sm text-gray-600">Direct Call</div>
              </motion.a>
              
              <motion.a
                href="mailto:lina.nizar@xrealty.ae"
                className="flex flex-col items-center gap-2 p-4 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-2xl">✉️</div>
                <div className="font-semibold">lina.nizar@xrealty.ae</div>
                <div className="text-sm text-gray-600">Email</div>
              </motion.a>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Client-First Approach", desc: "Personalized solutions tailored to your unique investment goals" },
                { icon: Zap, title: "Proven Track Record", desc: "USD 1B+ in successful global property transactions" },
                { icon: ShieldCheck, title: "Strategic Partnership", desc: "Xperience Realty alliance with top-tier developer relationships" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-black/80" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-black/70">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;