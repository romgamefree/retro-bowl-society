import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Trophy, Users, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdPlaceholder from '../components/AdPlaceholder';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 page-transition">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 field-pattern -z-10"></div>
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium mb-4">
                Free Online Game
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 leading-tight">
                Play Retro Bowl Online - Free Retro Football Game
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the classic 8-bit football sensation right in your browser.
                No downloads required - just click and play!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/game#game-container" className="retro-btn animate-pixel-bounce">
                  Play Now <ChevronRight size={16} className="inline ml-1" />
                </Link>
                <Link to="/how-to-play" className="retro-btn retro-btn-secondary">
                  How to Play
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ad Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <AdPlaceholder size="leaderboard" className="max-w-full" />
          </div>
        </section>
        
        {/* Game Info */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl mb-6 text-center">About Retro Bowl</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
                <div className="bg-muted rounded-lg aspect-video overflow-hidden">
                  <div className="w-full h-full bg-[#0f1016] field-pattern flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-primary rounded-lg flex items-center justify-center mb-4">
                        <span className="font-pixel text-xl text-white">RB</span>
                      </div>
                      <p className="font-pixel text-white text-sm">Game Preview</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`flex flex-col gap-4 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                <p className="text-foreground">
                  Retro Bowl is an American football game with a delightful retro aesthetic. Taking inspiration from 
                  classic sports titles of the 8-bit and 16-bit eras, it offers a nostalgic yet deeply engaging 
                  football management experience.
                </p>
                
                <p className="text-foreground">
                  As both a coach and manager, you'll draft players, manage team morale, and make critical 
                  play decisions on the field. The game's pixel art style and intuitive controls make it accessible 
                  to casual gamers while offering enough depth for sports gaming enthusiasts.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <Trophy size={14} />
                    <span className="text-xs font-medium">Win Championships</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                    <Users size={14} />
                    <span className="text-xs font-medium">Build Your Team</span>
                  </div>
                  <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full">
                    <Star size={14} />
                    <span className="text-xs font-medium">Improve Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl mb-10 text-center">Why Play Retro Bowl Online?</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                title="Free To Play" 
                description="Enjoy the full Retro Bowl experience completely free, right in your browser. No downloads required."
                icon="🏈"
                delay={0.1}
                isLoaded={isLoaded}
              />
              
              <FeatureCard 
                title="Retro Graphics" 
                description="Experience the charm of pixel art graphics and 8-bit sound effects that capture the spirit of classic sports games."
                icon="🎮"
                delay={0.2}
                isLoaded={isLoaded}
              />
              
              <FeatureCard 
                title="Team Management" 
                description="Draft players, manage your roster, and make strategic decisions to build your championship team."
                icon="📋"
                delay={0.3}
                isLoaded={isLoaded}
              />
              
              <FeatureCard 
                title="Gameplay Depth" 
                description="Simple controls with surprising depth. Master passing, running, and defense to dominate the league."
                icon="🔍"
                delay={0.4}
                isLoaded={isLoaded}
              />
              
              <FeatureCard 
                title="Career Mode" 
                description="Build your legacy over multiple seasons, moving between teams and chasing championship glory."
                icon="🏆"
                delay={0.5}
                isLoaded={isLoaded}
              />
              
              <FeatureCard 
                title="Regular Updates" 
                description="Enjoy new features and improvements as the game continuously evolves with player feedback."
                icon="🆕"
                delay={0.6}
                isLoaded={isLoaded}
              />
            </div>
          </div>
        </section>
        
        {/* Ad Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <AdPlaceholder size="large-rectangle" className="max-w-full" />
          </div>
        </section>
        
        {/* Community Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl mb-6 text-center">Retro Bowl Community</h2>
            
            <p className="text-center text-muted-foreground mb-8">
              Join thousands of players around the world enjoying this retro-styled football sensation.
              Share strategies, compare scores, and discuss your favorite players!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-4 text-center">
                <div className="font-pixel text-3xl text-primary mb-2">10M+</div>
                <p className="text-sm text-muted-foreground">Players Worldwide</p>
              </div>
              
              <div className="bg-background border border-border rounded-lg p-4 text-center">
                <div className="font-pixel text-3xl text-secondary mb-2">4.8/5</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              
              <div className="bg-background border border-border rounded-lg p-4 text-center">
                <div className="font-pixel text-3xl text-accent mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Always Available</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/game#game-container" className="retro-btn">
                Start Playing Now <ChevronRight size={16} className="inline ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
  isLoaded: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay, isLoaded }) => {
  return (
    <div 
      className={`bg-background border border-border rounded-lg p-6 transition-all hover:shadow-md hover:border-primary/50 
      ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-xl">
        {icon}
      </div>
      <h3 className="font-pixel text-sm mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
