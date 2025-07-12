import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackImage: string;
  quality?: 'auto' | 'low' | 'medium' | 'high';
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  fallbackImage,
  quality = 'high'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [playAttempted, setPlayAttempted] = useState(false);

  // Set quality based on prop
  const getQualitySettings = () => {
    switch(quality) {
      case 'low':
        return { playbackRate: 1.0 };
      case 'medium':
        return { playbackRate: 1.0 };
      case 'high':
        return { playbackRate: 1.0 };
      case 'auto':
      default:
        return { playbackRate: 1.0 };
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      
      // Apply quality settings
      const settings = getQualitySettings();
      if (video.playbackRate !== settings.playbackRate) {
        video.playbackRate = settings.playbackRate;
      }

      // Only attempt to play if we haven't already
      if (!playAttempted) {
        setPlayAttempted(true);
        
        // Play with a slight delay to ensure browser is ready
        setTimeout(() => {
          video.play().catch(error => {
        console.error("Video autoplay was prevented:", error);
      });
        }, 100);
      }
    };

    // Force play on user interaction for mobile
    const handleUserInteraction = () => {
      if (video && video.paused) {
        video.play().catch(error => {
          console.error("Video play failed after interaction:", error);
        });
      }
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });

    // Initial play attempt
    if (video.readyState >= 3) {  // HAVE_FUTURE_DATA or better
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [quality]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        src={src}
        poster={fallbackImage}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[2]"></div>
    </div>
  );
};

export default VideoBackground; 