
import { useState, useEffect } from 'react';

interface GameEmbedProps {
  className?: string;
}

const GameEmbed: React.FC<GameEmbedProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const gameUrl = "https://retrobowl.click/game/retro-bowl/";
  
  useEffect(() => {
    // Simulate game loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleStartGame = () => {
    window.open(gameUrl, '_blank');
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
      
      <div className={`w-full aspect-video bg-[#0f1016] field-pattern ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <p className="font-pixel text-lg mb-4">Retro Bowl</p>
          <div className="w-32 h-32 bg-primary rounded-lg flex items-center justify-center mb-6">
            <span className="font-pixel text-2xl text-white">RB</span>
          </div>
          <p className="text-sm text-white/70 mb-6">Click to start playing Retro Bowl</p>
          <button 
            className="mt-6 retro-btn" 
            onClick={handleStartGame}
          >
            Play Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameEmbed;
