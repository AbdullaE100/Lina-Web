import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './badge';
import { Button } from './button';
import { ResponsiveImage } from './responsive-image';
import { MapPin, Home, Tag, Calendar, Banknote, ChevronRight, X, ChevronLeft, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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

interface PropertyDetailProps {
  title: string;
  location: string;
  image: string;
  fullImage: string;
  category: string;
  bedrooms: string;
  pricesStartingFrom: string;
  description: string;
  details: PropertyDetails;
  onClose: () => void;
}

export const PropertyDetail = ({
  title,
  location,
  fullImage,
  category,
  bedrooms,
  pricesStartingFrom,
  description,
  details,
  onClose
}: PropertyDetailProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // For demo purposes, generate multiple images based on the single image we have
  const images = [
    fullImage,
    '/images/properties/six-senses.jpg', // Default fallback images
    '/images/properties/flora-isle.jpg',
    '/images/properties/jumeirah-residences.jpg'
  ];
  
  // Parse amenities string to array
  const amenities = details.propertyAmenities.split(', ');
  
  // Parse views
  const views = details.propertyView.split(', ');

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="absolute top-4 right-4 z-50 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left column - Image Gallery */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[40vh] lg:h-[80vh] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <ResponsiveImage 
                      src={images[activeImageIndex]}
                      alt={title}
                      className="w-full h-full object-cover"
                      blur={true}
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation arrows */}
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
                  }}
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 text-xs rounded-full">
                  {activeImageIndex + 1} / {images.length}
                </div>
                
                {/* Caption on mobile */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 lg:hidden">
                  <h2 className="text-white text-2xl font-medium mb-1">
                    {title}
                  </h2>
                  <p className="text-white/90 flex items-center gap-1 text-sm">
                    <MapPin size={14} /> {location}
                  </p>
                </div>
              </div>
              
              {/* Thumbnail strip */}
              <div className="hidden lg:flex gap-2 p-2 bg-gray-100 overflow-x-auto">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "relative h-16 w-24 cursor-pointer overflow-hidden",
                      activeImageIndex === idx && "ring-2 ring-[#C0A875]"
                    )}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <ResponsiveImage 
                      src={img}
                      alt={`${title} - image ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right column - Details */}
            <div className="p-6 lg:p-8 overflow-y-auto max-h-[60vh] lg:max-h-[90vh]">
              <div className="hidden lg:block mb-6">
                <h2 className="text-2xl lg:text-3xl font-medium mb-1">
                  {title}
                </h2>
                <p className="text-gray-600 flex items-center gap-1">
                  <MapPin size={14} className="text-gray-400" /> {location}
                </p>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex overflow-x-auto space-x-6 -mb-px">
                  <button
                    className={cn(
                      "py-2 px-1 text-sm whitespace-nowrap border-b-2 font-medium",
                      activeTab === 'overview'
                        ? "border-[#C0A875] text-[#C0A875]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    )}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button
                    className={cn(
                      "py-2 px-1 text-sm whitespace-nowrap border-b-2 font-medium",
                      activeTab === 'why-invest'
                        ? "border-[#C0A875] text-[#C0A875]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    )}
                    onClick={() => setActiveTab('why-invest')}
                  >
                    Why Invest
                  </button>
                  <button
                    className={cn(
                      "py-2 px-1 text-sm whitespace-nowrap border-b-2 font-medium",
                      activeTab === 'features'
                        ? "border-[#C0A875] text-[#C0A875]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    )}
                    onClick={() => setActiveTab('features')}
                  >
                    Features & Amenities
                  </button>
                  <button
                    className={cn(
                      "py-2 px-1 text-sm whitespace-nowrap border-b-2 font-medium",
                      activeTab === 'payment-plan'
                        ? "border-[#C0A875] text-[#C0A875]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    )}
                    onClick={() => setActiveTab('payment-plan')}
                  >
                    Payment Plan
                  </button>
                </div>
              </div>
              
              {/* Key details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-3">
                  <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
                    <Home size={12} /> Type
                  </p>
                  <p className="font-medium">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </div>
                <div className="bg-gray-50 p-3">
                  <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
                    <Tag size={12} /> Bedrooms
                  </p>
                  <p className="font-medium">{bedrooms}</p>
                </div>
                <div className="bg-gray-50 p-3">
                  <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
                    <Calendar size={12} /> Completion
                  </p>
                  <p className="font-medium">{details.completionDate}</p>
                </div>
                <div className="bg-gray-50 p-3">
                  <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
                    <Banknote size={12} /> Payment Plan
                  </p>
                  <p className="font-medium">{details.paymentPlan}</p>
                </div>
              </div>
              
              {/* Tab content */}
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="bg-[#f8f5ec] text-[#C0A875] border-[#e9dfbc]">
                          {details.developer}
                        </Badge>
                        <p className="font-medium text-lg">
                          From {formatPrice(pricesStartingFrom)}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-6">
                        {details.details}
                      </p>
                      
                      <div className="bg-gray-50 p-4 border-l-2 border-[#C0A875]">
                        <h4 className="font-medium mb-2">Views</h4>
                        <div className="flex flex-wrap gap-2">
                          {views.map((view, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-white">
                              {view}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'why-invest' && (
                  <motion.div
                    key="why-invest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ul className="space-y-4">
                      {details.whyInvest.map((reason, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-[#f8f5ec] text-[#C0A875] rounded-full flex items-center justify-center mt-0.5">
                            <Check size={12} />
                          </div>
                          <span className="text-gray-600">{reason}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === 'features' && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-lg">Property Amenities</h4>
                        <ul className="space-y-2">
                          {amenities.slice(0, Math.ceil(amenities.length / 2)).map((amenity, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check size={16} className="text-[#C0A875] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-lg md:opacity-0">.</h4>
                        <ul className="space-y-2">
                          {amenities.slice(Math.ceil(amenities.length / 2)).map((amenity, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check size={16} className="text-[#C0A875] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'payment-plan' && (
                  <motion.div
                    key="payment-plan"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="bg-gray-50 p-6 mb-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="font-medium text-lg mb-1">Payment Plan</h4>
                          <p className="text-gray-500 text-sm">{details.paymentPlan}</p>
                        </div>
                        <Badge variant="outline" className="bg-[#f8f5ec] text-[#C0A875] border-[#e9dfbc] px-3 py-1">
                          {details.completionDate}
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        {details.paymentPlan.includes('/') && (
                          <>
                            {details.paymentPlan.split(',').map((plan, idx) => {
                              const parts = plan.trim().split('/');
                              return (
                                <div key={idx} className="space-y-2">
                                  <div className="flex justify-between items-center">
                                    <span className="font-medium">{parts[0].trim()}%</span>
                                    <span>During Construction</span>
                                  </div>
                                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div 
                                      className="bg-[#C0A875] h-full rounded-full" 
                                      style={{ width: `${parts[0].trim()}%` }}
                                    ></div>
                                  </div>
                                  
                                  <div className="flex justify-between items-center mt-4">
                                    <span className="font-medium">{parts[1].trim()}%</span>
                                    <span>On Completion</span>
                                  </div>
                                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div 
                                      className="bg-[#C0A875] h-full rounded-full" 
                                      style={{ width: `${parts[1].trim()}%` }}
                                    ></div>
                                  </div>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-4">
                      Contact our team for detailed information about payment plans and financing options.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* CTA */}
              <div className="mt-8 pt-4 border-t border-gray-100">
                <Button 
                  className="bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] 
                  text-black rounded-none px-6 py-6 h-auto text-sm tracking-wide w-full"
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2 w-full">
                    <span>INQUIRE ABOUT THIS PROPERTY</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 