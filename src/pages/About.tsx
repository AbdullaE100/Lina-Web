import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/lina-about-portrait.jpg";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const aboutImageRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      year: "2020 - Present",
      company: "ExpatKey Properties",
      role: "CEO & Founder",
      description: "Leading luxury real estate investments across Sri Lanka and Dubai with focus on diaspora clients and cross-border portfolios."
    },
    {
      year: "2015 - 2020",
      company: "Grow Investment",
      role: "Senior Investment Advisor",
      description: "Specialized in high-net-worth client portfolio management and strategic market entry consulting."
    },
    {
      year: "2010 - 2015",
      company: "Ehsan Ventures",
      role: "Real Estate Consultant",
      description: "Built expertise in luxury residential and commercial property development across South Asian markets."
    }
  ];

  const achievements = [
    "Led sales for iconic projects: Altair, One Galle Face, Crystal Sands",
    "Managed $500M+ in real estate transactions",
    "Built extensive network of global investors and developers",
    "Pioneer in Sri Lanka-Dubai cross-border investment strategies"
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
    <div className="min-h-screen pt-24 bg-gradient-platinum">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(42_70%_70%/0.10),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] mix-blend-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.div variants={fadeInUpVariants} custom={0}>
                <h1 className="text-headline font-display font-light mb-8 text-primary">
                  Meet <span className="text-gradient-gold">Lina Nizar</span>
                </h1>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={1}>
                <div className="text-title text-gold font-semibold mb-6 tracking-wide">
                  CEO, ExpatKey Properties
                </div>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={2}>
                <p className="text-body-xl text-muted-foreground leading-relaxed mb-8">
                  As CEO of ExpatKey Properties, Lina has led sales and development across 
                  iconic projects like Altair, One Galle Face, and Crystal Sands. With a 
                  cross-border investor network and two decades of market insight, she brings 
                  deep experience, cultural intelligence, and discretion to every deal.
                </p>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={3}>
                <p className="text-body-xl text-muted-foreground leading-relaxed mb-12">
                  Born with an entrepreneurial spirit and raised with global perspective, 
                  Lina understands the unique needs of diaspora investors and international 
                  clients seeking high-growth opportunities in emerging markets.
                </p>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={4}>
                <Button variant="gold" size="xl" className="shadow-gold min-w-[240px] h-14 backdrop-blur-sm border border-gold/30" asChild>
                  <Link to="/contact">Connect with Lina</Link>
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
                <div className="absolute -inset-6 rounded-3xl bg-gradient-gold opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-xl" />
                <img
                  src={aboutImage}
                  alt="Lina Nizar"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-floating border-4 border-gold/20 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-gold rounded-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-2xl" />
                <div className="absolute -top-12 -left-8 w-32 h-32 bg-primary/10 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-32 bg-gradient-to-b from-background to-neutral/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,hsl(42_70%_70%/0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] mix-blend-overlay" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-headline font-display font-light mb-6 text-primary">
              Professional Journey
            </h2>
            <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto">
              Two decades of building excellence in real estate investment advisory
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-12 pb-16 last:pb-0"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.165, 0.84, 0.44, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-gold rounded-full" />
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 w-5 h-5 bg-gradient-gold rounded-full shadow-gold border-4 border-background" />
                <div className="bg-background p-10 rounded-2xl shadow-soft hover:shadow-floating transition-fluid border border-gold/10 group">
                  <div className="text-gold font-semibold mb-2 text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">{item.year}</div>
                  <h3 className="text-title font-display font-normal text-primary mb-2 group-hover:text-gradient-gold transition-all duration-500">
                    {item.role}
                  </h3>
                  <div className="text-body font-medium text-muted-foreground mb-4">
                    {item.company}
                  </div>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 opacity-20 rounded-b-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-32 bg-gradient-platinum relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,hsl(42_70%_70%/0.10),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] mix-blend-overlay" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-headline font-display font-light mb-6 text-primary">
              Key Achievements
            </h2>
            <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto">
              Track record of excellence in luxury real estate investments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 group"
                initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.165, 0.84, 0.44, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                <div className="w-4 h-4 bg-gradient-gold rounded-full mt-3 flex-shrink-0 shadow-gold group-hover:scale-125 transition-transform duration-500" />
                <p className="text-body-xl text-muted-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(42_70%_70%/0.10),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        
        <motion.div 
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-headline font-display font-light mb-10">
            Investment Philosophy
          </h2>
          <div className="relative">
            <div className="absolute -top-6 left-0 text-[120px] font-serif text-gold/20 leading-none">"</div>
            <blockquote className="text-title italic font-light leading-relaxed mb-10 text-gold relative z-10">
              "Real estate is not just about properties—it's about understanding people, 
              markets, and the future. Every investment decision should be backed by 
              deep market knowledge, cultural intelligence, and unwavering integrity."
            </blockquote>
            <div className="absolute -bottom-20 right-0 text-[120px] font-serif text-gold/20 leading-none">"</div>
          </div>
          <div className="text-body-xl text-primary-foreground/80 mb-12">
            — Lina Nizar
          </div>
          <Button 
            variant="gold" 
            size="xl" 
            className="min-w-[260px] shadow-gold h-14 backdrop-blur-sm border border-gold/30" 
            asChild
          >
            <Link to="/portfolio">See Portfolio</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;