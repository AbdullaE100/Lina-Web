import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  mobileImage?: string;
  tabletImage?: string;
  desktopImage?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  blur?: boolean;
  blurDataURL?: string;
}

const ResponsiveImage = ({
  src,
  alt,
  sizes = '100vw',
  className,
  mobileImage,
  tabletImage,
  desktopImage,
  aspectRatio = 'aspect-auto',
  objectFit = 'cover',
  priority = false,
  blur = false,
  blurDataURL,
  ...props
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  // Helper function to get device pixel ratio
  const getDevicePixelRatio = (): number => {
    if (typeof window !== 'undefined') {
      return window.devicePixelRatio || 1;
    }
    return 1;
  };

  // Determine which image to load based on screen size
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 768 && mobileImage) {
          setCurrentSrc(mobileImage);
        } else if (width <= 1024 && tabletImage) {
          setCurrentSrc(tabletImage);
        } else if (desktopImage) {
          setCurrentSrc(desktopImage);
        } else {
          setCurrentSrc(src);
        }
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [src, mobileImage, tabletImage, desktopImage]);

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        aspectRatio,
        className
      )}
    >
      {blur && !isLoaded && (
        <div 
          className="absolute inset-0 blur-lg transform scale-110" 
          style={{ 
            backgroundImage: `url(${blurDataURL || currentSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      )}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse"
          aria-hidden="true"
        />
      )}
      <img
        src={currentSrc || src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleImageLoad}
        className={cn(
          'transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          `object-${objectFit}`,
          'w-full h-full'
        )}
        {...props}
      />
    </div>
  );
};

export { ResponsiveImage }; 