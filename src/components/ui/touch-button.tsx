import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { useDeviceSize } from '@/hooks/use-mobile';

interface TouchButtonProps extends ButtonProps {
  touchFeedback?: boolean;
  scaleOnPress?: boolean;
  ripple?: boolean;
  highlightOnHover?: boolean;
  children: React.ReactNode;
}

const TouchButton = React.forwardRef<HTMLButtonElement, TouchButtonProps>(
  ({ 
    className, 
    variant = 'default',
    size = 'default',
    touchFeedback = true,
    scaleOnPress = true,
    ripple = true,
    highlightOnHover = true,
    children,
    ...props 
  }, ref) => {
    const [rippleStyle, setRippleStyle] = useState<React.CSSProperties>({});
    const [showRipple, setShowRipple] = useState(false);
    const { isMobile } = useDeviceSize();

    const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
      if (!ripple) return;
      
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const touch = e.touches[0];
      
      const diameter = Math.max(rect.width, rect.height) * 2;
      const radius = diameter / 2;
      
      setRippleStyle({
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${touch.clientX - rect.left - radius}px`,
        top: `${touch.clientY - rect.top - radius}px`,
      });
      
      setShowRipple(true);
      
      setTimeout(() => {
        setShowRipple(false);
      }, 600);
    };

    return (
      <motion.div
        whileTap={touchFeedback && scaleOnPress ? { scale: 0.97 } : {}}
        whileHover={highlightOnHover && !isMobile ? { scale: 1.03 } : {}}
        className="relative inline-block touch-callout-none"
      >
        <Button
          className={cn(
            'relative overflow-hidden tap-highlight-transparent touch-callout-none',
            touchFeedback && 'active:opacity-80',
            className
          )}
          variant={variant}
          size={size}
          ref={ref}
          onTouchStart={handleTouchStart}
          {...props}
        >
          {children}
          {ripple && showRipple && (
            <span
              className="absolute bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ripple pointer-events-none"
              style={rippleStyle}
            />
          )}
        </Button>
      </motion.div>
    );
  }
);

TouchButton.displayName = 'TouchButton';

export { TouchButton }; 