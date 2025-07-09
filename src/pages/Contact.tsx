import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Send, Calendar, MapPin, Phone, Mail, Instagram, Linkedin, ArrowRight, CheckCircle2, Clock, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentType: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert the form data into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            investment_type: formData.investmentType || null,
            message: formData.message,
            submitted_at: new Date().toISOString()
          }
        ]);
        
      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly via email.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Lina will get back to you within 24 hours.",
      });
      
      setFormSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          investmentType: "",
          message: ""
        });
        setFormSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "lina@expatkey.com",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:lina@expatkey.com"
    },
    {
      title: "Phone",
      value: "+94 77 772 5485",
      icon: <Phone className="w-5 h-5" />,
      link: "tel:+94777725485"
    },
    {
      title: "Instagram",
      value: "@lina_in_realestate",
      icon: <Instagram className="w-5 h-5" />,
      link: "https://instagram.com/lina_in_realestate"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/lina-nizar",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://linkedin.com/in/lina-nizar"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  // Form section updated to show loading state
  const renderForm = () => {
    if (formSubmitted) {
      return (
        <motion.div 
          className="flex flex-col items-center justify-center py-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle2 className="w-16 h-16 text-gold mb-6" />
          <h3 className="text-2xl font-luxury text-primary mb-3">Message Sent!</h3>
          <p className="text-muted-foreground max-w-md">Thank you for reaching out. I'll personally respond to your inquiry within 24 hours.</p>
        </motion.div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-primary font-medium block font-ui text-sm">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              disabled={isSubmitting}
              className="transition-elegant border-border/50 focus:border-gold"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-primary font-medium block font-ui text-sm">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
              className="transition-elegant border-border/50 focus:border-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-primary font-medium block font-ui text-sm">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+94 xx xxx xxxx"
              disabled={isSubmitting}
              className="transition-elegant border-border/50 focus:border-gold"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="investmentType" className="text-primary font-medium block font-ui text-sm">
              Investment Interest
            </Label>
            <select
              id="investmentType"
              name="investmentType"
              value={formData.investmentType}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-xl border border-border/50 bg-background text-foreground transition-elegant focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold font-ui h-11"
            >
              <option value="">Select type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="luxury">Luxury Development</option>
              <option value="pre-launch">Pre-Launch</option>
              <option value="portfolio">Portfolio Management</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-primary font-medium block font-ui text-sm">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your investment goals and how we can help..."
            rows={5}
            required
            disabled={isSubmitting}
            className="transition-elegant resize-none border-border/50 focus:border-gold"
          />
        </div>

        <Button 
          type="submit" 
          variant="gold" 
          size="lg" 
          className="w-full font-ui group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Subtle Gradient Background */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-sand/30 z-0"></div>
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5 z-0"></div>
        
        <motion.div 
          className="container mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-luxury mb-6 text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Let's Connect
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
                Ready to explore premier real estate opportunities? Schedule a personalized 
                strategy session with Lina Nizar to discuss your investment goals.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-sand/30 relative">
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 max-w-7xl mx-auto">
            {/* Form Section - 3 columns wide */}
            <motion.div 
              className="lg:col-span-3 order-2 lg:order-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-background rounded-2xl shadow-elevated p-8 md:p-12 backdrop-blur-sm border border-border/10">
                <h2 className="text-3xl font-luxury text-primary mb-2">
                  Send a Message
                </h2>
                <p className="text-muted-foreground mb-8 font-serif">Complete the form below and I'll respond within 24 hours.</p>
                
                {renderForm()}
              </div>
            </motion.div>

            {/* Contact Information - 2 columns wide */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
              <motion.div 
                className="bg-background p-8 rounded-2xl shadow-soft border border-border/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-2xl font-luxury text-primary mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 font-serif">
                  Whether you're exploring your first property investment or expanding 
                  your portfolio, I provide personalized guidance tailored to your goals.
                </p>

                <motion.div 
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-4 group"
                      variants={fadeInUp}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 text-gold group-hover:bg-gold/10 transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1 font-ui">
                          {item.title}
                        </div>
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary hover:text-gold transition-elegant font-medium text-sm"
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Schedule Card */}
              <motion.div 
                className="bg-gradient-luxury p-8 rounded-2xl text-primary shadow-elevated relative overflow-hidden border border-gold/10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 mr-2 text-gold" />
                    <h3 className="text-2xl font-luxury">
                      Strategy Call
                    </h3>
                  </div>
                  <p className="mb-6 leading-relaxed font-serif">
                    Schedule a personalized 30-minute consultation to discuss your investment 
                    objectives in Sri Lanka and Dubai markets.
                  </p>
                  <Button 
                    variant="gold" 
                    size="lg" 
                    className="w-full group shadow-gold hover:shadow-floating"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div 
                className="bg-background p-6 rounded-2xl shadow-soft text-center border border-border/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-gold animate-pulse" />
                </div>
                <div className="text-lg font-semibold text-primary mb-1 font-luxury">
                  Quick Response
                </div>
                <p className="text-muted-foreground text-sm font-serif">
                  I typically respond within 24 hours
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-luxury mb-6 text-primary">
                  Office Locations
                </h2>
                <p className="text-muted-foreground max-w-xl leading-relaxed mb-8 font-serif">
                  With strategic offices in Sri Lanka and Dubai, I serve clients across both markets with personalized attention and local expertise.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    className="p-6 rounded-xl bg-primary/5 border border-border/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-gold mr-2" />
                      <h3 className="text-lg font-luxury text-primary">Colombo</h3>
                    </div>
                    <address className="text-muted-foreground not-italic text-sm font-serif leading-relaxed">
                      Dharmapala Mawatha,<br />
                      Colombo 7,<br />
                      Sri Lanka
                    </address>
                  </motion.div>
                  
                  <motion.div 
                    className="p-6 rounded-xl bg-primary/5 border border-border/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-gold mr-2" />
                      <h3 className="text-lg font-luxury text-primary">Dubai</h3>
                    </div>
                    <address className="text-muted-foreground not-italic text-sm font-serif leading-relaxed">
                      Xperience Realty Real Estate,<br />
                      Office 301 & 302 Park Heights Square Building 1,<br />
                      Dubai Hills, Dubai, UAE
                    </address>
                  </motion.div>
                </div>
              </div>
              
              <div className="flex flex-col md:gap-4 space-y-4 md:space-y-0">
                <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-elevated">
                  <div className="absolute top-2 left-2 z-10 bg-background/90 px-3 py-1 rounded-lg text-xs font-medium border border-border/20 backdrop-blur-sm">
                    Dubai Office
                  </div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.710958817564!2d55.2275803!3d25.0657837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7d6c3a4af3bd%3A0xc6ad8ed65d49f237!2sXperience%20Realty%20Real%20Estate!5e0!3m2!1sen!2sus!4v1691246807371!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Dubai Office Location Map"
                  ></iframe>
                </div>
                <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-elevated">
                  <div className="absolute top-2 left-2 z-10 bg-background/90 px-3 py-1 rounded-lg text-xs font-medium border border-border/20 backdrop-blur-sm">
                    Colombo Office
                  </div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9616905099234!2d79.85757777518853!3d6.904815993085547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sDharmapala%20Mawatha%2C%20Colombo%2000700!5e0!3m2!1sen!2slk!4v1689039856998!5m2!1sen!2slk" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Colombo Office Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-sand/30 relative">
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-luxury mb-6 text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              Common questions about working with Lina and real estate investments
            </p>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                question: "What is the minimum investment amount?",
                answer: "Investment thresholds vary by market and project type. We work with clients across all investment levels, from first-time buyers to institutional investors."
              },
              {
                question: "Do you charge consultation fees?",
                answer: "Initial strategy sessions are complimentary. Ongoing advisory services are structured based on the scope and complexity of your investment needs."
              },
              {
                question: "What markets do you cover?",
                answer: "We specialize in Sri Lanka and Dubai real estate markets, with extensive networks and deep local knowledge in both regions."
              },
              {
                question: "How long does the investment process take?",
                answer: "Timeline varies by project type. Pre-launch opportunities can close quickly, while traditional purchases typically take 4-8 weeks from offer to completion."
              },
              {
                question: "Can you help with property management?",
                answer: "Yes, I offer comprehensive property management solutions for international investors, ensuring hassle-free ownership and maximized returns."
              },
              {
                question: "What makes your service different?",
                answer: "My dual-market expertise, exclusive access to pre-launch opportunities, and personalized investment strategies tailored to individual client goals set my services apart."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-background p-8 rounded-xl shadow-soft border border-border/10 backdrop-blur-sm"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-primary mb-3 font-luxury">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-serif">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;