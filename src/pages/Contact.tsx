import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Lina will get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentType: "",
      message: ""
    });
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
      icon: "📧",
      link: "mailto:lina@expatkey.com"
    },
    {
      title: "Phone",
      value: "+94 77 772 5485",
      icon: "📱",
      link: "tel:+94777725485"
    },
    {
      title: "Instagram",
      value: "@lina_in_realestate",
      icon: "📸",
      link: "https://instagram.com/lina_in_realestate"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/lina-nizar",
      icon: "🔗",
      link: "https://linkedin.com/in/lina-nizar"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Ready to explore your next real estate investment opportunity? 
            Schedule a personalized strategy session with Lina Nizar.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-background p-8 rounded-lg shadow-luxury">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-primary font-medium mb-2 block">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="transition-elegant"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-primary font-medium mb-2 block">
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
                        className="transition-elegant"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-primary font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+94 xx xxx xxxx"
                        className="transition-elegant"
                      />
                    </div>
                    <div>
                      <Label htmlFor="investmentType" className="text-primary font-medium mb-2 block">
                        Investment Interest
                      </Label>
                      <select
                        id="investmentType"
                        name="investmentType"
                        value={formData.investmentType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground transition-elegant focus:outline-none focus:ring-2 focus:ring-gold"
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

                  <div>
                    <Label htmlFor="message" className="text-primary font-medium mb-2 block">
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
                      className="transition-elegant"
                    />
                  </div>

                  <Button type="submit" variant="executive" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right space-y-8">
              <div className="bg-background p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking to invest in your first property or expand 
                  your existing portfolio, Lina is ready to provide personalized guidance 
                  tailored to your goals.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="text-2xl group-hover:scale-110 transition-elegant">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {item.title}
                        </div>
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary hover:text-gold transition-elegant font-medium"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Schedule */}
              <div className="bg-gradient-luxury p-8 rounded-lg text-primary">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Schedule a Strategy Call
                </h3>
                <p className="mb-6 leading-relaxed">
                  Book a 30-minute consultation to discuss your investment objectives 
                  and explore opportunities in Sri Lanka and Dubai markets.
                </p>
                <Button variant="gold" size="lg" className="w-full">
                  Book Calendar Appointment
                </Button>
              </div>

              {/* Response Time */}
              <div className="bg-background p-6 rounded-lg shadow-soft text-center">
                <div className="text-4xl mb-3">⚡</div>
                <div className="text-lg font-semibold text-primary mb-2">
                  Quick Response
                </div>
                <p className="text-muted-foreground text-sm">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about working with Lina and real estate investments
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-sand p-6 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;