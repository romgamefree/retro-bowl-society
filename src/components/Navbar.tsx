
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy, Controller, Info, Home } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 
      ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
            <span className="font-pixel text-xs text-primary-foreground">RB</span>
          </div>
          <h1 className="font-pixel text-sm sm:text-base hidden sm:block">Retro Bowl</h1>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center">
            <li>
              <NavLink to="/" icon={<Home size={16} />}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/game" icon={<Controller size={16} />}>Play Now</NavLink>
            </li>
            <li>
              <NavLink to="/how-to-play" icon={<Info size={16} />}>How to Play</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" icon={<Trophy size={16} />}>Leaderboard</NavLink>
            </li>
            <li>
              <NavLink to="/about" icon={<Info size={16} />}>About</NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-muted p-2 rounded"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg animate-fade-in">
          <nav className="p-4">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink to="/" icon={<Home size={16} />}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/game" icon={<Controller size={16} />}>Play Now</NavLink>
              </li>
              <li>
                <NavLink to="/how-to-play" icon={<Info size={16} />}>How to Play</NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard" icon={<Trophy size={16} />}>Leaderboard</NavLink>
              </li>
              <li>
                <NavLink to="/about" icon={<Info size={16} />}>About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 text-sm px-3 py-2 rounded transition-colors
      ${isActive 
        ? 'bg-primary/10 text-primary font-medium' 
        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};

export default Navbar;
