import React, { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  fallbackImage: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ fallbackImage }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    console.log("VideoBackground mounted");
    
    // Preload video and handle loading status
    const video = videoRef.current;
    if (video) {
      console.log("Video element exists, initial readyState:", video.readyState);
      
      // Add event listeners
      const handleCanPlayThrough = () => {
        console.log("Video can play through");
        setIsVideoLoaded(true);
      };

      const handleLoadedData = () => {
        console.log("Video data loaded");
        playVideo();
      };
      
      const handleError = (e: Event) => {
        const target = e.target as HTMLVideoElement;
        console.error("Video error:", target.error);
        setVideoError(target.error?.message || "Unknown error");
      };

      // Try to play the video
      const playVideo = () => {
        if (video) {
          console.log("Attempting to play video");
          video.play().catch(error => {
            console.error("Video playback error:", error);
            setVideoError(error.message);
          });
        }
      };

      // Set up event listeners
      video.addEventListener('canplaythrough', handleCanPlayThrough);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      // Set preload attribute to auto to encourage early loading
      video.preload = "auto";
      
      // Load the video
      if (video.readyState >= 3) {
        console.log("Video already has enough data");
        setIsVideoLoaded(true);
        playVideo();
      } else {
        // Force load
        console.log("Forcing video load");
        video.load();
        
        // Attempt to play if the video is interactable
        setTimeout(() => {
          playVideo();
        }, 500);
      }

      // Try again when document becomes visible (helps with some browser restrictions)
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          console.log("Document became visible, trying to play video");
          playVideo();
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        // Clean up event listeners
        console.log("Cleaning up video event listeners");
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    } else {
      console.error("Video element not found");
    }
  }, []);

  return (
    <>
      {/* Show fallback image until video is ready */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={fallbackImage}
          alt="Background"
          className={`w-full h-full object-cover ${isVideoLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        />
      </div>
      
      <video
        id="hero-video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        poster={fallbackImage}
        preload="auto"
      >
        <source src="/videos/Ultra-luxury penthouse apartment in Hillside.mp4" type="video/mp4" />
        <source src="/videos/luxury-video.webm" type="video/webm" />
        Your browser does not support HTML5 video.
      </video>
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Error indicator (only in development) */}
      {videoError && process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-4 right-4 text-xs text-white/50 bg-black/30 p-2 rounded">
          Error: {videoError}
        </div>
      )}
    </>
  );
};

export default VideoBackground; 