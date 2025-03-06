
import { useState, useEffect, useRef } from 'react';

interface GameIframeProps {
  className?: string;
}

const GameIframe: React.FC<GameIframeProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gameUrl = "https://retrobowl.click/game/retro-bowl/";
  
  const handleIframeLoad = () => {
    setIsLoading(false);
    
    // Check if we're directed to this iframe via a hash fragment
    if (window.location.hash === '#game-container' && containerRef.current) {
      // Add a small delay to ensure everything is rendered
      setTimeout(() => {
        // Scroll the game container to the center of the viewport
        containerRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center' // This centers the element in the viewport
        });
        
        // Focus the iframe for immediate gameplay
        iframeRef.current?.focus();
      }, 100);
    }
  };

  useEffect(() => {
    // Check for hash on initial load and scroll to game if needed
    if (window.location.hash === '#game-container' && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center' // This centers the element in the viewport
        });
        iframeRef.current?.focus();
      }, 100);
    }
    
    // Also listen for hash changes (when navigating with history)
    const handleHashChange = () => {
      if (window.location.hash === '#game-container' && containerRef.current) {
        setTimeout(() => {
          containerRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
          iframeRef.current?.focus();
        }, 100);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div ref={containerRef} id="game-container" className={`${className} relative rounded-lg overflow-hidden border border-border`}>
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
        ref={iframeRef}
        src={gameUrl}
        className="w-full aspect-video border-0"
        onLoad={handleIframeLoad}
        title="Retro Bowl Game"
        allow="fullscreen"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default GameIframe;
