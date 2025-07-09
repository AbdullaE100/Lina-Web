import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Calendar, Clock, User } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
}

interface ArticleDetailProps {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  stats: Stat[];
  onClose: () => void;
  thumbnail?: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  title,
  excerpt,
  content,
  date,
  readTime,
  category,
  image,
  author,
  stats,
  onClose,
  thumbnail
}) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 overflow-y-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2 font-ui"
              onClick={onClose}
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 font-ui"
            >
              <Share2 size={16} />
              Share
            </Button>
          </div>
          
          <div className="mb-8">
            <div className="text-[#C0A875] font-semibold mb-3 font-ui">{category}</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-primary leading-tight">{title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 font-serif">{excerpt}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 font-ui">
              <div className="flex items-center gap-2">
                <User size={16} />
                {author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {readTime}
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] mb-10 rounded-xl overflow-hidden">
            <img 
              src={image || "/placeholder.svg"} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#F8F7F5] p-4 rounded-lg">
                <div className="text-sm text-muted-foreground font-ui mb-1">{stat.label}</div>
                <div className="text-xl md:text-2xl text-primary">{stat.value}</div>
              </div>
            ))}
          </div>
          
          <div className="prose prose-lg max-w-none font-serif">
            {content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-muted-foreground leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl mb-6">Ready to Invest?</h3>
            <p className="text-muted-foreground mb-6 font-serif">
              Schedule a personalized consultation to discuss your investment goals
              and discover exceptional opportunities in Dubai and Sri Lanka.
            </p>
            <Button 
              className="bg-[#C0A875] hover:bg-[#D4BC8A] text-white font-ui" 
              asChild
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail; 