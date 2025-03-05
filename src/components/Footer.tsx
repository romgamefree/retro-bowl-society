
import { Link } from 'react-router-dom';
import AdPlaceholder from './AdPlaceholder';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border mt-12">
      <div className="container mx-auto px-4 py-6">
        {/* Footer Ad */}
        <div className="flex justify-center mb-8">
          <AdPlaceholder size="leaderboard" className="max-w-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-pixel text-sm mb-4">Retro Bowl Online</h3>
            <p className="text-sm text-muted-foreground">
              Play the classic retro football game online for free! No downloads required.
              Manage your team and lead them to victory in this retro-styled American football simulation.
            </p>
          </div>
          
          <div>
            <h3 className="font-pixel text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/game" className="text-muted-foreground hover:text-primary transition-colors">Play Game</Link></li>
              <li><Link to="/how-to-play" className="text-muted-foreground hover:text-primary transition-colors">How to Play</Link></li>
              <li><Link to="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">Leaderboard</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-pixel text-sm mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><span className="text-muted-foreground">Email: support@retrobowlonline.com</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <p>© {currentYear} Retro Bowl Online. All rights reserved.</p>
          <p className="mt-1">This site is not affiliated with the official Retro Bowl developers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
