import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/About-Me.jpeg";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const aboutImageRef = useRef<HTMLDivElement>(null);

  const experience = [
    {
      year: "2002 - Present",
      company: "ExpatKey Properties",
      role: "Chief Executive Officer",
      description: "Founded and led a leading real estate firm specializing in luxury condominiums, diaspora investment, and global property sales. Led over LKR 1 billion in revenue through data-driven campaigns, off-plan sales, and bespoke client advisory."
    },
    {
      year: "2023 - Present",
      company: "Grow Investment",
      role: "Executive Director",
      description: "Led strategic real estate investment initiatives focused on market development and international partnerships. Spearheaded partnerships with international real estate companies."
    },
    {
      year: "2023 - Present",
      company: "Entrepreneurs' Organization",
      role: "Member",
      description: "Active member of the global EO network, with a focus on leadership development, strategic investment, and entrepreneurial growth."
    },
    {
      year: "2002 - 2023",
      company: "Ehsan Ventures (EV)",
      role: "Director",
      description: "Founded and led an investment banking startup with a strategic focus on energy infrastructure and sustainable development."
    },
    {
      year: "2002 - 2020",
      company: "Puttalam Farms",
      role: "Director",
      description: "Founded and scaled an agro-social enterprise focused on sustainable farming, women's empowerment, and inclusive economic growth."
    }
  ];

  const achievements = [
    "Led sales for iconic projects: Altair, One Galle Face, Crystal Sands",
    "Managed over LKR 1 billion in real estate transactions",
    "Property management for high-net-worth clients ensuring operational excellence",
    "Specialized in diaspora-focused investment and cross-border solutions"
  ];
  
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#F8F5EF] to-[#F5F5F5]">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(38,40%,58%/0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-[0.05] mix-blend-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.div variants={fadeInUpVariants} custom={0}>
              <h1 className="font-luxury text-5xl md:text-6xl lg:text-7xl mb-8 text-[#1A1A1A]">
                Meet <span className="text-[#C0A875]">Lina Nizar</span>
              </h1>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={1}>
              <div className="text-xl font-ui font-medium mb-6 tracking-wide text-[#C0A875]">
                CEO, ExpatKey Properties
              </div>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={2}>
              <p className="text-lg md:text-xl text-[#444444] leading-relaxed mb-8 font-serif">
                  With over 20 years of experience in the real estate industry across Sri Lanka and international markets, 
                  Lina brings deep expertise in sales, marketing, and real estate development. As the founder of ExpatKey Properties, 
                  she's led the end-to-end development of luxury condominium projects — from land acquisition and legal structuring 
                  to branding, launch, and off-plan sales.
                </p>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={3}>
              <p className="text-lg md:text-xl text-[#444444] leading-relaxed mb-12 font-serif">
                  Having sold some of the most prestigious high-end residences in Sri Lanka, Lina has played a hands-on role in 
                  driving sales performance, building investor confidence, and delivering strong returns across multiple market cycles. 
                  Now based between Sri Lanka and Dubai, she's focused on bringing her expertise to the UAE market.
              </p>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={4}>
                <Button className="bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] text-black border-none rounded-none px-10 py-7 h-auto text-sm tracking-[0.15em] font-ui shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 glow-gold pulse-animation-gold" asChild>
                <Link to="/contact">CONNECT WITH LINA</Link>
              </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              ref={aboutImageRef}
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.165, 0.84, 0.44, 1],
                delay: 0.3
              }}
            >
              <div className="relative group">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#D4BC8A]/30 to-[#C0A875]/30 opacity-30 group-hover:opacity-50 transition-opacity duration-700 blur-xl" />
                <img
                  src={aboutImage}
                  alt="Lina Nizar"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-2 border-[#C0A875]/20 group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-2xl" />
                <div className="absolute -top-12 -left-8 w-32 h-32 bg-[#1A1A1A]/10 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Experience - Compact Layout */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-luxury text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              Professional Experience
            </h2>
            <div className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"></div>
            <p className="text-[#666666] max-w-2xl mx-auto text-lg font-serif">
              Two decades of excellence in real estate and entrepreneurial ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-[#C0A875]/10 hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col"
              >
                <div className="text-[#C0A875] font-semibold text-sm mb-1 font-ui">{item.year}</div>
                <h3 className="text-lg font-luxury text-[#1A1A1A] mb-1">
                  {item.role}
                </h3>
                <div className="text-sm font-medium text-[#666666] mb-3 font-ui">
                  {item.company}
                </div>
                <p className="text-sm text-[#666666] leading-relaxed font-serif mt-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Key Skills */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-[#C0A875]/10">
            <div className="flex flex-wrap gap-3">
              {[
                "Luxury Real Estate", 
                "Investment Strategy", 
                "Property Development", 
                "Diaspora Investment", 
                "Global Property Sales",
                "Executive Leadership",
                "Market Analysis",
                "Client Advisory"
              ].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-[#F8F5EF] rounded-full text-sm text-[#666666] border border-[#C0A875]/10 hover:bg-[#C0A875]/10 hover:text-[#1A1A1A] transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements - Streamlined */}
      <section className="py-16 bg-[#F8F5EF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-luxury text-4xl md:text-5xl mb-6 tracking-tight text-[#1A1A1A]">
              Key Achievements
            </h2>
            <div className="h-[1px] w-16 bg-[#C0A875] mx-auto mb-8"></div>
            <p className="text-[#666666] max-w-2xl mx-auto text-lg font-serif">
              Track record of excellence in luxury real estate investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white backdrop-blur-sm rounded-xl shadow-md border border-[#C0A875]/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-4 h-4 bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-[#444444] font-serif text-lg">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(38,40%,58%/0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-luxury text-4xl md:text-5xl mb-6 tracking-tight text-white">
            Philosophy & Approach
          </h2>
          <div className="inline-block mb-10">
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] mx-auto opacity-70" />
          </div>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed font-serif text-white/90">
            "I believe that luxury real estate is more than just transactions—it's about creating lasting value through strategic vision and exceptional execution. My approach combines deep market knowledge, personalized client relationships, and a commitment to excellence in every detail."
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <Button 
              className="bg-transparent border-2 border-[#C0A875] text-[#C0A875] hover:bg-[#C0A875]/10 rounded-none px-8 py-6 h-auto text-sm tracking-[0.15em] font-ui shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-gold"
              asChild
            >
              <Link to="/services">
                <span className="flex items-center">
                  VIEW SERVICES
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] text-black border-none rounded-none px-8 py-6 h-auto text-sm tracking-[0.15em] font-ui shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 glow-gold"
              asChild
            >
              <Link to="/contact">
                <span className="flex items-center">
                  SCHEDULE CONSULTATION
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;