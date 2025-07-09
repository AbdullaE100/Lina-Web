import React from "react";

interface VideoHeroProps {
  fallbackImage: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({ fallbackImage }) => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImage}
        className="w-full h-full object-cover"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        <img 
          src={fallbackImage} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover object-center"
        />
      </video>
    </div>
  );
};

export default VideoHero; 