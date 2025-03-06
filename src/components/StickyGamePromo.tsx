
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Gamepad2 } from 'lucide-react';

const StickyGamePromo = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-3 px-4 md:px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary-foreground/20 rounded-full p-2">
            <Gamepad2 size={20} className="text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium">Try our new game: Retro Basketball</p>
            <p className="text-xs text-primary-foreground/80">Experience the same retro gameplay with basketball!</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/game#game-container" className="bg-white text-primary font-medium text-sm px-4 py-1.5 rounded hover:bg-white/90 transition-colors">
            Play Now
          </Link>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-primary-foreground/80 hover:text-primary-foreground"
            aria-label="Close promotion"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyGamePromo;
