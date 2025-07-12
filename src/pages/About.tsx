import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "../assets/about-me.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Briefcase, Star, TrendingUp } from 'lucide-react';

const About = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

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
  ];

  const achievements = [
    "Spearheaded sales for iconic projects including Altair, One Galle Face, and Crystal Sands, setting new benchmarks in the luxury market.",
    "Managed a portfolio of over LKR 1 billion in real estate transactions, consistently delivering strong returns for clients.",
    "Pioneered diaspora-focused investment strategies, connecting international investors with premium opportunities in Sri Lanka.",
    "Provided comprehensive property management for high-net-worth clients, ensuring operational excellence and asset value appreciation."
  ];

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={scrollRef} className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={aboutImage}
            alt="Lina Nizar"
            className="w-full h-full object-cover object-center"
            style={{ y: heroImageY }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1 
              className="font-luxury text-4xl md:text-6xl lg:text-7xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Lina Nizar
            </motion.h1>
            <motion.div 
              className="text-lg md:text-xl font-semibold text-[#D4BC8A] mb-6 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Visionary Real Estate Leader & Investment Strategist
            </motion.div>
            <motion.p 
              className="text-base md:text-lg max-w-2xl font-serif leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With over two decades of trailblazing leadership in real estate, I specialize in transforming high-potential markets into thriving investment landscapes. My expertise lies in architecting success for iconic luxury developments and empowering investors with strategic, data-driven insights.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-luxury text-3xl md:text-4xl text-[#1A1A1A] mb-4">My Philosophy</h2>
              <div className="h-px w-20 bg-[#C0A875] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-[#666666] font-serif leading-relaxed italic">
                "I believe luxury real estate is more than transactions—it's about forging lasting value through strategic vision, data-driven intelligence, and an unwavering commitment to excellence. My approach combines deep market knowledge with personalized client relationships to turn ambitious goals into tangible assets."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F1]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl text-[#1A1A1A] mb-4">Professional Journey</h2>
            <p className="text-lg text-[#666666]">A career dedicated to excellence in real estate and entrepreneurship.</p>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-150px" }}
              >
                <div className="flex items-center">
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                    <p className="text-sm font-semibold text-[#C0A875]">{item.year}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-1">{item.role}</h3>
                    <p className="text-md text-gray-600">{item.company}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C0A875] border-4 border-white flex-shrink-0 z-10 flex items-center justify-center order-1">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right order-0'}`}>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl text-[#1A1A1A] mb-4">Key Achievements</h2>
            <p className="text-lg text-[#666666]">A proven track record of delivering exceptional results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C0A875] text-white flex items-center justify-center mr-4">
                  <Star className="w-5 h-5" />
                </div>
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-16 md:py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl mb-4">Core Competencies</h2>
            <p className="text-lg text-white/80">The strategic pillars that underpin my success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Luxury Real Estate", description: "Mastery of high-value property transactions, from sourcing to closing." },
              { title: "Investment Strategy", description: "Crafting data-driven strategies for optimal portfolio growth and risk management." },
              { title: "Property Development", description: "End-to-end management of luxury projects, ensuring quality and profitability." },
              { title: "Diaspora Investment", description: "Specialized expertise in facilitating seamless cross-border investments for the diaspora." },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/5 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-[#D4BC8A] mb-2">{skill.title}</h3>
                <p className="text-sm text-white/70">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-luxury text-3xl md:text-4xl text-[#1A1A1A] max-w-2xl mx-auto mb-6">
              Let's Build Your Real Estate Legacy
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
              Whether you're seeking to expand your portfolio or embark on a new development project, my expertise is at your service. Let's connect to explore the possibilities.
            </p>
            <Button asChild className="bg-[#C0A875] text-black font-semibold tracking-wider rounded-none px-10 py-7 text-sm hover:bg-[#D4BC8A] transition-colors duration-300">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;