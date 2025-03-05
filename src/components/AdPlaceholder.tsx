
import { useEffect, useState } from 'react';

type AdSize = 'leaderboard' | 'medium-rectangle' | 'large-rectangle' | 'mobile-banner';

interface AdPlaceholderProps {
  size: AdSize;
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ size, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate ad load time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Set dimensions based on ad size
  const getDimensions = () => {
    switch(size) {
      case 'leaderboard':
        return { width: 728, height: 90, label: 'Leaderboard Ad (728×90)' };
      case 'medium-rectangle':
        return { width: 300, height: 250, label: 'Medium Rectangle Ad (300×250)' };
      case 'large-rectangle':
        return { width: 336, height: 280, label: 'Large Rectangle Ad (336×280)' };
      case 'mobile-banner':
        return { width: 320, height: 50, label: 'Mobile Banner Ad (320×50)' };
      default:
        return { width: 300, height: 250, label: 'Ad Space' };
    }
  };
  
  const { width, height, label } = getDimensions();
  
  return (
    <div 
      className={`ad-container ${className} ${isLoaded ? 'animate-fade-in' : 'opacity-50'}`}
      style={{ width: '100%', maxWidth: `${width}px`, height: `${height}px` }}
    >
      {/* This would be replaced with actual AdSense code */}
      <div className="text-xs opacity-70">
        {label}
        {/* 
          <!-- Actual AdSense code would go here -->
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-xxx"
               data-ad-slot="xxx"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        */}
      </div>
    </div>
  );
};

export default AdPlaceholder;
