import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Insights = () => {
  const blogPosts = [
    {
      title: "Dubai vs Colombo: Where Should You Invest in 2025?",
      excerpt: "Comprehensive market analysis comparing investment opportunities, regulatory environment, and growth potential in both key markets.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Market Analysis",
      image: "/api/placeholder/600/400"
    },
    {
      title: "How to Spot Off-Market Gems",
      excerpt: "Insider strategies for identifying exclusive real estate opportunities before they hit the public market, maximizing investment potential.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Investment Strategy",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Lina's Real Estate Playbook",
      excerpt: "Essential guidelines and proven methodologies for successful real estate investments in emerging markets with practical case studies.",
      date: "January 5, 2025",
      readTime: "12 min read",
      category: "Investment Guide",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Cross-Border Investment: Managing Currency Risk",
      excerpt: "Strategic approaches to minimize currency exposure while maximizing returns in international real estate portfolios.",
      date: "December 28, 2024",
      readTime: "7 min read",
      category: "Risk Management",
      image: "/api/placeholder/600/400"
    },
    {
      title: "The Diaspora Advantage in Real Estate",
      excerpt: "How diaspora connections and cultural intelligence create unique opportunities in emerging market real estate investments.",
      date: "December 20, 2024",
      readTime: "9 min read",
      category: "Market Insights",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Pre-Launch Investment Strategies",
      excerpt: "Maximizing returns through early-stage property investments with proven strategies for evaluating pre-launch opportunities.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Investment Strategy",
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = ["All", "Market Analysis", "Investment Strategy", "Investment Guide", "Risk Management", "Market Insights"];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary animate-fade-in">
            Market Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Strategic intelligence, market analysis, and investment wisdom from two decades 
            of real estate expertise across Sri Lanka and Dubai markets.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-sand">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "luxury" : "elegant"}
                size="lg"
                className="transition-elegant"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-sand rounded-lg overflow-hidden shadow-luxury hover:shadow-gold transition-elegant group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-luxury h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-6xl opacity-50">📊</div>
                </div>
                <div className="p-12">
                  <div className="text-gold font-semibold mb-2">Featured Insight</div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4 group-hover:text-gold transition-elegant">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <span>{blogPosts[0].date}</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button variant="executive" size="lg">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-background rounded-lg overflow-hidden shadow-soft hover:shadow-luxury transition-elegant group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-luxury h-48 flex items-center justify-center">
                  <div className="text-4xl opacity-50">
                    {post.category === "Market Analysis" ? "📈" :
                     post.category === "Investment Strategy" ? "🎯" :
                     post.category === "Investment Guide" ? "📚" :
                     post.category === "Risk Management" ? "🛡️" : "🌍"}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-gold font-semibold text-sm mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-gold transition-elegant line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Subscribe to receive exclusive market insights, investment opportunities, 
            and strategic analysis directly from Lina Nizar.
          </p>
          
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button variant="gold" size="lg">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            Ready to Invest?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform insights into action with personalized real estate investment guidance.
          </p>
          <Button variant="executive" size="xl" asChild>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Insights;