import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TouchButton } from "@/components/ui/touch-button";
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

        <div className="mt-8">
          <TouchButton 
            type="submit"
            className="bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] text-black border-none rounded-none px-6 py-5 text-sm tracking-wide font-ui shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            disabled={isSubmitting}
            ripple={true}
            scaleOnPress={true}
          >
            <span className="flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </span>
          </TouchButton>
        </div>
      </form>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero section with adjusted padding for mobile */}
      <section className="relative pt-24 pb-16 xs:pt-28 xs:pb-20 sm:pt-32 sm:pb-24 bg-gradient-to-br from-[#F8F7F4] to-[#F2F0ED] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/patterns/subtle-dots.svg")' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-luxury tracking-tight text-[#1A1A1A] mb-6">
              Connect with Lina
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] mb-6"></div>
            
            <p className="text-lg xs:text-xl text-[#666666] max-w-xl mb-0 font-serif">
              Whether you're looking to invest in luxury real estate or need expert market insights, I'm here to assist you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main contact section */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Contact form */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="bg-white border border-gray-100 shadow-sm p-6 xs:p-8 sm:p-10">
                <h2 className="text-2xl xs:text-3xl font-luxury text-[#1A1A1A] mb-6">Send a Message</h2>
                
                {renderForm()}
              </div>
            </div>
            
            {/* Contact info sidebar */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-[#F8F7F4] p-6 xs:p-8 sm:p-10 h-full">
                <h2 className="text-2xl xs:text-3xl font-luxury text-[#1A1A1A] mb-6">Contact Details</h2>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-ui uppercase text-xs tracking-wider text-[#666666] mb-1">{item.title}</h3>
                        <a
                          href={item.link}
                          className="text-lg font-medium text-[#1A1A1A] hover:text-[#C0A875] transition-colors"
                          target={item.title === "Instagram" || item.title === "LinkedIn" ? "_blank" : undefined}
                          rel={item.title === "Instagram" || item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Schedule meeting call to action */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-luxury text-[#1A1A1A] mb-3">Prefer a Meeting?</h3>
                  <p className="text-[#666666] mb-6 text-sm">
                    Schedule a personal consultation at a time that's convenient for you.
                  </p>
                  <TouchButton 
                    className="w-full bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] text-black border-none rounded-none px-4 py-3 text-sm tracking-wide font-ui shadow-md hover:shadow-lg"
                    ripple={true}
                    scaleOnPress={true}
                  >
                    <span className="flex items-center justify-center">
                      <Calendar className="mr-2 w-4 h-4" />
                      <span>SCHEDULE A CONSULTATION</span>
                    </span>
                  </TouchButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional sections like location, FAQ, etc. */}
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