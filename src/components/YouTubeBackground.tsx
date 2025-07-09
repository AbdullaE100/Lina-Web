import React, { useState, useEffect, useRef } from 'react';
import { useDeviceSize } from '@/hooks/use-mobile';

interface YouTubeBackgroundProps {
  videoId: string;
  fallbackImage: string;
}

// Define YouTube Player API types
interface YouTubeEvent {
  target: YouTubePlayer;
  data?: number;
}

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
  setPlaybackQuality: (quality: string) => void;
  getAvailableQualityLevels: () => string[];
  getCurrentTime: () => number;
  seekTo: (seconds: number) => void;
  getIframe: () => HTMLIFrameElement;
}

interface YouTubePlayerOptions {
  videoId: string;
  playerVars: {
    autoplay: number;
    controls: number;
    disablekb: number;
    enablejsapi: number;
    fs: number;
    iv_load_policy: number;
    loop: number;
    modestbranding: number;
    mute: number;
    playsinline: number;
    rel: number;
    showinfo: number;
    vq: string;
    start: number;
    end: number;
    playlist: string;
    hd?: number;
    suggestedQuality?: string;
    origin?: string;
    widget_referrer?: string;
  };
  events: {
    onReady: (event: YouTubeEvent) => void;
    onStateChange: (event: YouTubeEvent) => void;
    onError: (event: YouTubeEvent) => void;
    onPlaybackQualityChange?: (event: YouTubeEvent) => void;
  };
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (elementId: string, options: YouTubePlayerOptions) => YouTubePlayer;
      PlayerState: {
        PLAYING: number;
        ENDED: number;
        PAUSED: number;
        BUFFERING: number;
        UNSTARTED: number;
        CUED: number;
      };
    };
  }
}

// Quality levels from highest to lowest
const QUALITY_LEVELS = ['hd2160', 'hd1440', 'hd1080', 'hd720', 'large', 'medium', 'small', 'tiny', 'default'];

// Force isDev to false to ensure no debug elements appear in production
const isDev = false;

const YouTubeBackground: React.FC<YouTubeBackgroundProps> = ({ videoId, fallbackImage }) => {
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlayerPlaying, setIsPlayerPlaying] = useState(false);
  const [isPlayerFullyLoaded, setIsPlayerFullyLoaded] = useState(false);
  const [currentQuality, setCurrentQuality] = useState<string>('');
  const [playerError, setPlayerError] = useState<string | null>(null);
  const { isMobile, isTablet, width } = useDeviceSize();
  const playerRef = useRef<YouTubePlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerCreatedRef = useRef<boolean>(false);
  
  // Track available quality levels
  const availableQualitiesRef = useRef<string[]>([]);

  // Determine if video should be played or fallback image should be used
  const shouldUseFallbackOnly = isMobile && width < 640;

  // Add CSS to hide YouTube thumbnails
  useEffect(() => {
    // Create a style element to inject custom CSS
    const style = document.createElement('style');
    style.textContent = `
      #youtube-player {
        visibility: hidden !important;
        opacity: 0 !important;
        background: transparent !important;
      }
      #youtube-player.playing {
        visibility: visible !important;
        opacity: 1 !important;
        transition: opacity 1.5s ease-in-out;
      }
      #youtube-player-container {
        background-color: transparent !important;
      }
      .ytp-cued-thumbnail-overlay {
        display: none !important;
      }
      .fallback-image {
        transition: opacity 1.5s ease-in-out;
        object-position: center 20%;
        transform: scale(1.02);
        filter: brightness(0.9);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Load YouTube API script
  useEffect(() => {
    // Skip loading if on mobile with fallback only
    if (shouldUseFallbackOnly) {
      return;
    }
    
    // Only load the API once
    if (document.getElementById('youtube-api-script')) {
      setIsApiLoaded(true);
      return;
    }
    
    // Create YouTube API script element
    const tag = document.createElement('script');
    tag.id = 'youtube-api-script';
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;

    // Insert the script into the document
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // When YouTube API is ready, it will call this global function
    window.onYouTubeIframeAPIReady = () => {
      setIsApiLoaded(true);
    };

    return () => {
      // Cleanup function
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [shouldUseFallbackOnly]);

  // Function to set the highest available quality
  const setHighestQuality = () => {
    if (!playerRef.current) return;
    
    try {
      // Get available qualities
      const qualities = playerRef.current.getAvailableQualityLevels();
      availableQualitiesRef.current = qualities;
      
      // For mobile and tablet, limit quality to save bandwidth
      if (isMobile || isTablet) {
        const targetQuality = isMobile ? 'medium' : 'large';
        playerRef.current.setPlaybackQuality(targetQuality);
        setCurrentQuality(targetQuality);
        return;
      }
      
      // Find the highest quality available by comparing with our ordered list
      let highestQuality = 'default';
      for (const quality of QUALITY_LEVELS) {
        if (qualities.includes(quality)) {
          highestQuality = quality;
          break;
        }
      }
      
      // Force the highest quality possible
      playerRef.current.setPlaybackQuality(highestQuality);
      setCurrentQuality(highestQuality);
      
      // Double-check quality after a short delay
      setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.setPlaybackQuality(highestQuality);
          
          // Try again with the first available quality if our setting didn't stick
          const currentQuality = playerRef.current.getAvailableQualityLevels()[0];
          if (currentQuality && currentQuality !== highestQuality) {
            playerRef.current.setPlaybackQuality(currentQuality);
            setCurrentQuality(currentQuality);
          }
        }
      }, 1500);
      
      // One final quality check
      setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.setPlaybackQuality(highestQuality);
        }
      }, 5000);
    } catch (error) {
      // Ignore errors in production
    }
  };

  // Create the YouTube player container but delay loading the actual player
  useEffect(() => {
    if (!isApiLoaded || !containerRef.current || playerCreatedRef.current || shouldUseFallbackOnly) return;
    
    // Create container for the player
    const playerContainer = document.createElement('div');
    playerContainer.id = 'youtube-player-container';
    playerContainer.style.position = 'absolute';
    playerContainer.style.top = '0';
    playerContainer.style.left = '0';
    playerContainer.style.width = '100%';
    playerContainer.style.height = '100%';
    playerContainer.style.overflow = 'hidden';
    playerContainer.style.backgroundColor = 'transparent';
    playerContainer.style.pointerEvents = 'none';
    
    // Create player div
    const playerDiv = document.createElement('div');
    playerDiv.id = 'youtube-player';
    playerDiv.style.position = 'absolute';
    playerDiv.style.top = '50%';
    playerDiv.style.left = '50%';
    playerDiv.style.transform = 'translate(-50%, -50%)';
    
    // For mobile/tablet, make the YouTube player slightly bigger to cover the screen better
    if (isMobile || isTablet) {
      playerDiv.style.width = '200%';  // Extra wide for mobile
      playerDiv.style.height = '200%';
    } else {
      playerDiv.style.width = '150%';
      playerDiv.style.height = '150%';
    }
    
    playerDiv.style.pointerEvents = 'none';
    playerDiv.style.opacity = '0';
    playerDiv.style.visibility = 'hidden';
    playerDiv.style.backgroundColor = 'transparent';
    
    playerContainer.appendChild(playerDiv);
    containerRef.current.appendChild(playerContainer);
    
    // Mark player container as created
    playerCreatedRef.current = true;
    
    // Wait for a moment before initializing the player
    // This ensures the fallback image is fully loaded and visible
    setTimeout(() => {
      initPlayer();
    }, 1000);
    
    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore errors in production
        }
      }
    };
  }, [isApiLoaded, isMobile, isTablet, shouldUseFallbackOnly]);
  
  // Initialize the player
  const initPlayer = () => {
    if (!window.YT || !window.YT.Player) {
      // If YT API isn't ready yet, try again after a delay
      setTimeout(initPlayer, 200);
      return;
    }
    
    try {
      // Origin for security
      const origin = window.location.origin;
      
      // Adjust player settings based on device
      const suggestedQuality = isMobile ? 'medium' : isTablet ? 'large' : 'hd1080';
      
      // Initialize the player with highest quality options
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3, // Hide video annotations
          loop: 1,
          modestbranding: 1,
          mute: 1, // Muted for autoplay
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          vq: suggestedQuality,
          start: 0,
          end: 0, // Zero means play to end
          playlist: videoId, // Required for looping
          hd: isMobile ? 0 : 1, // Request HD quality except on mobile
          suggestedQuality: suggestedQuality,
          origin: origin,
          widget_referrer: origin
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
          'onError': onPlayerError,
          'onPlaybackQualityChange': onQualityChange
        }
      });
    } catch (error) {
      // Ignore errors in production
      setPlayerError('Failed to initialize player');
    }
  };

  const onQualityChange = (event: YouTubeEvent) => {
    try {
      const quality = event.target.getAvailableQualityLevels()[0];
      if (quality) {
    setCurrentQuality(quality);
      }
    } catch (error) {
      // Ignore errors in production
    }
  };

  const onPlayerReady = (event: YouTubeEvent) => {
    try {
      // Set player ready state
      setIsPlayerReady(true);
      
      // Start playback
      event.target.playVideo();
      
      // Set appropriate quality based on device
      if (isMobile || isTablet) {
        const targetQuality = isMobile ? 'medium' : 'large';
        event.target.setPlaybackQuality(targetQuality);
      } else {
        // For desktop, use highest quality
        setHighestQuality();
      }
      
      // Try to set quality again after a short delay
      setTimeout(() => {
        if (playerRef.current) {
          if (isMobile || isTablet) {
            const targetQuality = isMobile ? 'medium' : 'large';
            playerRef.current.setPlaybackQuality(targetQuality);
          } else {
            setHighestQuality();
          }
        }
      }, 1000);
      
    } catch (error) {
      // Ignore errors in production
      setPlayerError('Player error on ready');
    }
  };
  
  // Verify that playback has actually started
  const verifyPlayback = (event: YouTubeEvent) => {
    try {
      if (event.target.getCurrentTime() > 0) {
        // Video is playing, show it
        showPlayer(event);
      } else {
        // Try again
        event.target.playVideo();
        setTimeout(() => {
          verifyPlayback(event);
        }, 500);
      }
    } catch (e) {
      // If we can't verify, don't show the player
    }
  };
  
  // Show the player once video is playing
  const showPlayer = (event: YouTubeEvent) => {
    try {
      const iframe = event.target.getIframe();
      if (iframe) {
        // Get parent element (player container)
        const playerElement = document.getElementById('youtube-player');
        if (playerElement) {
          // On mobile/tablet, don't wait for quality
          if (isMobile || isTablet) {
            playerElement.classList.add('playing');
            setIsPlayerFullyLoaded(true);
            setIsPlayerPlaying(true);
            return;
          }
          
          // For desktop, ensure video quality before showing
          setHighestQuality();
          
          // Slight delay before showing the player to ensure it's fully loaded
          setTimeout(() => {
            playerElement.classList.add('playing');
          
            // Set flag to show player
            setIsPlayerFullyLoaded(true);
            setIsPlayerPlaying(true);
          }, 500);
        }
      }
    } catch (e) {
      // Ignore errors in production
    }
  };

  const onPlayerStateChange = (event: YouTubeEvent) => {
    // 1 = playing
    if (event.data === window.YT.PlayerState.PLAYING) {
      // Show player only when it's actually playing
      showPlayer(event);
      
      // Set quality again to ensure highest quality during playback
      if (!isMobile && !isTablet) {
        setHighestQuality();
      }
    }
    // 0 = ended
    else if (event.data === window.YT.PlayerState.ENDED) {
      // Auto-replay
      event.target.playVideo();
    }
    // -1 = unstarted - make sure we're showing the fallback
    else if (event.data === window.YT.PlayerState.UNSTARTED || 
             event.data === window.YT.PlayerState.CUED) {
      // Keep fallback visible
      setIsPlayerPlaying(false);
      setIsPlayerFullyLoaded(false);
      
      // Try playing again
      setTimeout(() => {
        event.target.playVideo();
      }, 200);
    }
  };

  const onPlayerError = (event: YouTubeEvent) => {
    setPlayerError(`Player error: ${event.data}`);
    setIsPlayerPlaying(false);
    setIsPlayerFullyLoaded(false);
  };

  // Check and update quality periodically
  useEffect(() => {
    if (!isPlayerReady || isMobile || isTablet || shouldUseFallbackOnly) return;
    
    const qualityCheckInterval = setInterval(() => {
      setHighestQuality();
    }, 5000); // Check every 5 seconds
    
    return () => {
      clearInterval(qualityCheckInterval);
    };
  }, [isPlayerReady, isMobile, isTablet, shouldUseFallbackOnly]);

  // Handle visibility change to pause/play video for better performance
  useEffect(() => {
    if (shouldUseFallbackOnly) return;
    
    const handleVisibilityChange = () => {
      if (!playerRef.current) return;
      
      if (document.hidden) {
        try {
          playerRef.current.pauseVideo();
        } catch (e) {
          // Ignore errors in production
        }
      } else {
        try {
          playerRef.current.playVideo();
          // When coming back to visible, ensure high quality
          if (!isMobile && !isTablet) {
            setTimeout(setHighestQuality, 500);
          }
        } catch (e) {
          // Ignore errors in production
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [shouldUseFallbackOnly, isMobile, isTablet]);

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden bg-black"
    >
      {/* Fallback image always visible until video is fully ready */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ${
          isPlayerFullyLoaded && !shouldUseFallbackOnly ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img
          src={fallbackImage}
          alt="Background"
          className="fallback-image w-full h-full object-cover"
        />
      </div>
      
      {/* YouTube player container */}
      <div 
        ref={containerRef}
        className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-1500 ${
          shouldUseFallbackOnly ? 'hidden' : ''
        }`}
      />

      {/* Enhanced video overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-40 z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[2]"></div>

      {/* Preconnect to YouTube to speed up loading */}
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      <link rel="preconnect" href="https://i.ytimg.com" />
    </div>
  );
};

export default YouTubeBackground; 