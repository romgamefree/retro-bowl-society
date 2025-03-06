
import { useState, useEffect } from 'react';

interface GameIframeProps {
  className?: string;
}

const GameIframe: React.FC<GameIframeProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const gameUrl = "https://retrobowl.click/game/retro-bowl/";
  
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`${className} relative rounded-lg overflow-hidden border border-border`}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="animate-pulse h-3 w-3 rounded-full bg-primary"></div>
            <div className="animate-pulse h-3 w-3 rounded-full bg-primary" style={{ animationDelay: '0.2s' }}></div>
            <div className="animate-pulse h-3 w-3 rounded-full bg-primary" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="font-pixel text-xs text-foreground/70">Loading Game...</p>
        </div>
      )}
      
      <iframe 
        src={gameUrl}
        className="w-full aspect-video border-0"
        onLoad={handleIframeLoad}
        title="Retro Bowl Game"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default GameIframe;
