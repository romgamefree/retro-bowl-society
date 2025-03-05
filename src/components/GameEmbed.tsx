
import { useState, useEffect } from 'react';

interface GameEmbedProps {
  className?: string;
}

const GameEmbed: React.FC<GameEmbedProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate game loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${className} relative rounded-lg overflow-hidden border border-border`}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="animate-pulse h-3 w-3 rounded-full bg-primary"></div>
            <div className="animate-pulse h-3 w-3 rounded-full bg-primary" style={{ animationDelay: '0.2s' }}></div>
            <div className="animate-pulse h-3 w-3 rounded-full bg-primary" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="font-pixel text-xs text-foreground/70">Loading Game...</p>
        </div>
      )}
      
      {/* Game container - in a real implementation this would be an iframe with the actual game */}
      <div className={`w-full aspect-video bg-[#0f1016] field-pattern ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <p className="font-pixel text-lg mb-4">Retro Bowl</p>
          <div className="w-32 h-32 bg-primary rounded-lg flex items-center justify-center mb-6">
            <span className="font-pixel text-2xl text-white">RB</span>
          </div>
          <p className="text-sm text-white/70">Game would be embedded here in production</p>
          <button className="mt-6 retro-btn">Start Game</button>
        </div>
      </div>
    </div>
  );
};

export default GameEmbed;
