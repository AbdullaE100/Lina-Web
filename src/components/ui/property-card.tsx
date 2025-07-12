import React, { useState } from 'react';
import { Badge } from './badge';
import { cn } from '@/lib/utils';
import { MapPin, Bed, Home, ArrowRight } from 'lucide-react';
import { ResponsiveImage } from './responsive-image';
import { motion } from 'framer-motion';

interface PropertyDetails {
  pricePoint: string;
  paymentPlan: string;
  location: string;
  developer: string;
  completionDate: string;
  whyInvest: string[];
  details: string;
  propertyType: string;
  propertyView: string;
  propertyAmenities: string;
}

interface PropertyCardProps {
  image: string;
  fullImage: string;
  title: string;
  location: string;
  description: string;
  category: string;
  bedrooms: string;
  pricesStartingFrom: string;
  details: PropertyDetails;
  onSelect: () => void;
  className?: string;
  featured?: boolean;
  index?: number;
}

export const PropertyCard = ({
  image,
  title,
  location,
  description,
  category,
  bedrooms,
  pricesStartingFrom,
  onSelect,
  className,
  featured = false,
  index = 0
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price: string) => {
    // Extract the number part
    const numericPart = price.replace(/[^\d.]/g, '');
    const formattedNumber = parseFloat(numericPart).toLocaleString('en-AE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    
    // Get the currency part
    const currencyPart = price.replace(/[\d,.]/g, '');
    
    return `${currencyPart}${formattedNumber}`;
  };

  return (
    <motion.div 
      className={cn(
        "group cursor-pointer overflow-hidden bg-white h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-500",
        featured ? "col-span-2 row-span-2" : "",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <div className={cn(
        "relative overflow-hidden",
        featured ? "aspect-[16/9]" : "aspect-[4/3]"
      )}>
        <ResponsiveImage 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          blur={true}
          blurDataURL={image}
        />
        
        <motion.div 
          className="absolute inset-0 bg-black/0 transition-colors duration-500"
          animate={{ 
            backgroundColor: isHovered ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)'
          }}
        />
        
        <div className="absolute bottom-0 left-0 p-4 w-full z-10">
          <div className="flex gap-2 mb-2 flex-wrap">
            <Badge variant="secondary" className="bg-white/90 text-black text-xs font-normal capitalize">
              {category}
            </Badge>
            <Badge variant="secondary" className="bg-white/90 text-black text-xs font-normal">
              {bedrooms} Bed
            </Badge>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-2">
          <p className="text-xs flex items-center gap-1 text-gray-500 mb-1">
            <MapPin size={12} /> {location}
          </p>
          <h3 className={cn(
            "font-medium line-clamp-2 transition-all duration-300 group-hover:text-[#C0A875]",
            featured ? "text-xl" : "text-lg"
          )}>{title}</h3>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <p className="font-medium text-sm">
            From {formatPrice(pricesStartingFrom)}
          </p>
          <div className="text-black hover:text-[#C0A875] flex items-center gap-1 group transition-all duration-300">
            <span className="text-sm">Details</span>
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={14} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const PropertyListItem = ({
  image,
  title,
  location,
  description,
  category,
  bedrooms,
  pricesStartingFrom,
  onSelect,
  className,
  index = 0
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price: string) => {
    // Extract the number part
    const numericPart = price.replace(/[^\d.]/g, '');
    const formattedNumber = parseFloat(numericPart).toLocaleString('en-AE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    
    // Get the currency part
    const currencyPart = price.replace(/[\d,.]/g, '');
    
    return `${currencyPart}${formattedNumber}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group border-b border-gray-100 pb-6", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 relative overflow-hidden aspect-[4/3] md:aspect-[16/10]">
          <ResponsiveImage 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            blur={true}
            blurDataURL={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
        </div>
        
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex gap-2 mb-2">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs font-normal capitalize">
                {category}
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs font-normal">
                {bedrooms} Bed
              </Badge>
            </div>
            <p className="text-xs flex items-center gap-1 text-gray-500 mb-1">
              <MapPin size={12} /> {location}
            </p>
            <h3 className="text-xl font-medium mb-2 group-hover:text-[#C0A875] transition-colors duration-300">{title}</h3>
            <p className="text-gray-600 line-clamp-2">{description}</p>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">
              From {formatPrice(pricesStartingFrom)}
            </p>
            <div className="flex items-center gap-2 text-black hover:text-[#C0A875] transition-colors duration-300">
              <span>View Details</span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={14} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 