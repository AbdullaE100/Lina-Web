import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackImage: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, fallbackImage }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.error("Video autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        src={src}
        poster={fallbackImage}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black opacity-40 z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[2]"></div>
    </div>
  );
};

export default VideoBackground; 