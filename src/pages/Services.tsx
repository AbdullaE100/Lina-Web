import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Building, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Star,
  Database,
  Target,
  Award
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: "data-driven-advisory",
      title: "Data-Driven Investment Advisory",
      description: "Independent analysis powered by sophisticated market intelligence and predictive analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      keyFeature: "Data Analytics",
      benefits: [
        "Proprietary market intelligence dashboard",
        "Predictive trend analysis & forecasting",
        "Risk assessment using big data",
        "Independent third-party valuations",
        "Real-time portfolio performance tracking"
      ]
    },
    {
      id: "exclusive-access",
      title: "Exclusive Pre-Launch Access",
      description: "Trusted relationships with premier developers ensuring first access to luxury developments.",
      icon: <Building className="w-8 h-8" />,
      keyFeature: "Trust & Access",
      benefits: [
        "Exclusive developer partnerships",
        "Pre-launch pricing advantages",
        "Independent due diligence reports",
        "Construction milestone verification",
        "Payment protection strategies"
      ]
    },
    {
      id: "global-portfolio",
      title: "Global Portfolio Management",
      description: "Independent asset optimization with transparent reporting and data-backed decisions.",
      icon: <Globe className="w-8 h-8" />,
      keyFeature: "Independent Analysis",
      benefits: [
        "Independent asset performance analysis",
        "Transparent fee structure",
        "Data-driven exit strategies",
        "Currency optimization models",
        "Tax efficiency through analytics"
      ]
    },
    {
      id: "trust-advisory",
      title: "Trusted Market Intelligence",
      description: "Unbiased market insights through independent research and verified data sources.",
      icon: <Shield className="w-8 h-8" />,
      keyFeature: "Trustworthy Insights",
      benefits: [
        "Independent market research",
        "Verified data sources only",
        "Conflict-free recommendations",
        "Transparent reporting standards",
        "Third-party validation protocols"
      ]
    }
  ];

  const trustPillars = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data-Driven Decisions",
      description: "Every recommendation backed by comprehensive analytics and market intelligence."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Independent Consultation", 
      description: "Unbiased advice with no hidden agendas or conflicted interests."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Two decades of successful outcomes and verified client results."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision & Accuracy",
      description: "Meticulous attention to detail ensuring optimal investment outcomes."
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">
              Services Excellence
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none mb-6">
              Data
              <br />
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Driven
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-8">
              Independent Advisory
            </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-12"
              >
            Sophisticated market intelligence meets independent consultation.
            <br />
            Where data analytics drives investment excellence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  asChild
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 group"
            >
              <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Start Data Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
                </Button>
              </motion.div>
            </div>
      </section>
            
      {/* Trust Pillars Section */}
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
              Why
              <br />
              <span className="text-gray-400">Trust Lina</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the foundation of data integrity, independent analysis, 
              and unwavering commitment to client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <Button 
              asChild
              className="bg-amber-400 text-black hover:bg-amber-300 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer">
                Schedule Trust Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-32 bg-white text-black" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4">
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Service
              <br />
              <span className="text-gray-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive advisory services powered by advanced analytics 
              and independent market intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-amber-600 mb-1">
                          {service.keyFeature}
                        </div>
                        <h3 className="text-2xl font-light text-black">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-4 text-lg font-medium transition-all duration-300 group/btn"
                  >
                    <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Consult on {service.keyFeature}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                      </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Data Analytics Showcase */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-amber-400 mb-4 text-sm tracking-wider font-medium">
                  <Database className="w-4 h-4" />
                  <span>ADVANCED INTELLIGENCE</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-white">
                  Analytics
                  <br />
                  <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                    Advantage
                  </span>
                </h2>
          </div>
          
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Advanced market intelligence and predictive analytics provide the 
                competitive edge needed for exceptional investment outcomes. 
                <span className="block mt-2 text-amber-200 font-medium">
                  Every decision backed by data, every recommendation independently verified.
                </span>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { 
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Real-time Analysis",
                    description: "Live market data processing"
                  },
                  { 
                    icon: <Target className="w-5 h-5" />,
                    title: "Predictive Modeling",
                    description: "AI-powered trend forecasting"
                  },
                  { 
                    icon: <Shield className="w-5 h-5" />,
                    title: "Independent Validation",
                    description: "Third-party verification protocols"
                  },
                  { 
                    icon: <BarChart3 className="w-5 h-5" />,
                    title: "Risk Assessment",
                    description: "Advanced algorithmic analysis"
                  }
                ].map((feature, index) => (
              <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-4 border border-gray-700/50 hover:border-amber-400/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-lg flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                    </div>
                      <span className="text-white font-medium text-sm">{feature.title}</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
                  </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Explore Analytics Solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button 
                  variant="ghost"
                  asChild
                  className="text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Request Demo
                  </a>
                </Button>
                </div>
              </motion.div>
              
              <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main stats card */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-white text-xl font-light mb-2">Performance Metrics</h3>
                  <div className="w-12 h-0.5 bg-amber-400"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { 
                      value: "98%", 
                      label: "Accuracy Rate",
                      description: "Market prediction precision",
                      color: "from-green-400 to-emerald-500"
                    },
                    { 
                      value: "2.3x", 
                      label: "ROI Improvement",
                      description: "Average client returns",
                      color: "from-amber-400 to-orange-500"
                    },
                    { 
                      value: "45+", 
                      label: "Data Sources",
                      description: "Real-time integrations",
                      color: "from-blue-400 to-cyan-500"
                    },
                    { 
                      value: "24/7", 
                      label: "Market Monitoring",
                      description: "Continuous analysis",
                      color: "from-purple-400 to-pink-500"
                    }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`text-4xl md:text-5xl font-light bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                    </div>
                      <div className="text-white font-medium text-sm mb-1">
                        {stat.label}
                    </div>
                      <div className="text-gray-400 text-xs">
                        {stat.description}
                  </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl opacity-80 shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-400 rounded-3xl opacity-60 shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Small accent dots */}
              <div className="absolute top-10 left-4 w-3 h-3 bg-amber-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-20 right-8 w-2 h-2 bg-amber-300 rounded-full opacity-40"></div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* 5-Step Methodology Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4 text-sm tracking-wider font-medium">
              <Shield className="w-4 h-4" />
              <span>VERIFIED METHODOLOGY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              5-Step
              <br />
              <span className="text-gray-500">Accuracy Guarantee</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every market analysis and transaction 
              report meets the highest standards of accuracy and reliability in Dubai's dynamic real estate market.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Multi-Source Data Collection",
                  description: "Aggregate real-time data from Dubai Land Department, RERA, major developers, and 45+ verified market sources to create comprehensive baseline intelligence.",
                  details: [
                    "Dubai Land Department transaction records",
                    "RERA verified property listings",
                    "Developer direct pricing feeds",
                    "International property platforms",
                    "Market sentiment indicators"
                  ],
                  icon: <Database className="w-8 h-8" />,
                  side: "left"
                },
                {
                  step: "02", 
                  title: "AI-Powered Cross-Validation",
                  description: "Deploy advanced algorithms to cross-reference and validate data points, identifying anomalies and ensuring consistency across all sources.",
                  details: [
                    "Automated anomaly detection",
                    "Price variance analysis",
                    "Historical trend correlation",
                    "Comparable property matching",
                    "Market timing validation"
                  ],
                  icon: <Target className="w-8 h-8" />,
                  side: "right"
                },
                {
                  step: "03",
                  title: "Independent Third-Party Verification",
                  description: "Engage certified valuers and independent market analysts to verify our findings and provide unbiased validation of all market assessments.",
                  details: [
                    "RICS certified property valuations",
                    "Independent market analyst reviews",
                    "Legal documentation verification",
                    "Regulatory compliance checks",
                    "Third-party price confirmations"
                  ],
                  icon: <Shield className="w-8 h-8" />,
                  side: "left"
                },
                {
                  step: "04",
                  title: "Real-Time Accuracy Monitoring",
                  description: "Continuous monitoring system tracks prediction accuracy, market changes, and validates our analysis against actual transaction outcomes.",
                  details: [
                    "Live market pulse monitoring",
                    "Prediction vs. outcome tracking",
                    "Weekly accuracy calibration",
                    "Market shift early warning system",
                    "Client outcome verification"
                  ],
                  icon: <Clock className="w-8 h-8" />,
                  side: "right"
                },
                {
                  step: "05",
                  title: "Transparent Reporting & Documentation",
                  description: "Deliver comprehensive reports with full methodology disclosure, confidence intervals, and risk assessments for complete transparency.",
                  details: [
                    "Detailed methodology documentation",
                    "Data source attribution",
                    "Confidence level indicators",
                    "Risk factor analysis",
                    "Performance tracking reports"
                  ],
                  icon: <CheckCircle className="w-8 h-8" />,
                  side: "left"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    step.side === 'right' ? 'lg:grid-flow-col-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${step.side === 'right' ? 'lg:text-right' : ''} relative`}>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-4 mb-4 ${
                        step.side === 'right' ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center text-amber-700 shadow-lg">
                          {step.icon}
                        </div>
                        <div className="text-6xl font-light text-gray-200">
                          {step.step}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-light text-black mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                          className={`flex items-center gap-3 ${
                            step.side === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''
                          }`}
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg border border-gray-200 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-4 right-4 w-20 h-20 bg-amber-400 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-amber-600 rounded-full blur-xl"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="text-center mb-6">
                          <div className="text-4xl font-light text-amber-600 mb-2">
                            Step {step.step}
                          </div>
                          <div className="w-12 h-0.5 bg-amber-400 mx-auto"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="h-3 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full opacity-60"></div>
                          ))}
                        </div>
                        
                        <div className="mt-6 text-center">
                          <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <span>Verified Process</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Connection dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow-lg hidden lg:block z-20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 border border-amber-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-black mb-4">
                Experience Our Methodology
              </h3>
              <p className="text-gray-600 mb-6">
                Get a detailed market analysis report using our 5-step verification process 
                for your specific Dubai real estate investment needs.
              </p>
              <Button 
                asChild
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Request Verified Analysis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
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
            <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight text-white">
              Ready for
              <br />
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Independent Excellence?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the difference that data-driven, independent consultation 
              makes in your real estate investment journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    asChild
                className="bg-white text-black hover:bg-gray-100 rounded-full px-12 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Start Your Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                  </Button>
                  
                  <Button 
                variant="ghost" 
                    asChild
                className="text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                <a href="https://wa.link/c1bn7x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Request Analytics Demo
                </a>
            </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;