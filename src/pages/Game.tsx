
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GameIframe from '../components/GameIframe';
import AdPlaceholder from '../components/AdPlaceholder';
import StickyGamePromo from '../components/StickyGamePromo';
import { Link } from 'react-router-dom';
import { Trophy, Share2 } from 'lucide-react';

const Game = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <StickyGamePromo />
      
      <main className="flex-1 pt-24 page-transition">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl mb-6">Play Retro Bowl Online</h1>
            
            {/* Ad banner */}
            <div className="mb-6 flex justify-center">
              <AdPlaceholder size="leaderboard" className="max-w-full" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Game area - 3/4 width on desktop */}
              <div className="lg:col-span-3">
                {/* Game iframe - now handles its own container */}
                <GameIframe className="mb-6" />
                
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <h2 className="font-pixel text-sm mb-2">Game Controls</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xs font-medium mb-1">Offense</h3>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>Drag back and release: Throw ball</li>
                        <li>Tap receiver: Pass to specific player</li>
                        <li>Swipe up: Kick/Punt</li>
                        <li>Tap + hold screen: Run with ball</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium mb-1">Defense</h3>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>Tap player: Switch control</li>
                        <li>Tap + hold screen: Move towards ball</li>
                        <li>Swipe: Attempt tackle</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-8">
                  <Link to="/how-to-play" className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary text-center py-3 rounded transition-colors">
                    View Full Instructions
                  </Link>
                  <Link to="/leaderboard" className="flex-1 bg-secondary/10 hover:bg-secondary/20 text-secondary text-center py-3 rounded transition-colors flex items-center justify-center gap-2">
                    <Trophy size={16} />
                    <span>Leaderboard</span>
                  </Link>
                </div>
                
                {/* In-content ad */}
                <div className="flex justify-center mb-8">
                  <AdPlaceholder size="large-rectangle" />
                </div>
                
                <div className="bg-background border border-border rounded-lg p-6">
                  <h2 className="font-pixel text-lg mb-4">About Retro Bowl</h2>
                  <p className="text-muted-foreground mb-4">
                    Retro Bowl is the perfect game for the armchair quarterback to finally prove a point. 
                    Presented in a glorious retro style, the game has simple roster management, including 
                    press duties and the handling of fragile egos, while on the field you get to call the shots.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Can you pass the grade and take your team all the way to the ultimate prize? 
                    Can you win the Retro Bowl?
                  </p>
                  <h3 className="font-pixel text-sm mb-2 mt-6">Game Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                    <li>Simple to play, tough to master gameplay</li>
                    <li>Full team management including drafting, trading, and free agency</li>
                    <li>Develop your players' abilities and manage their morale</li>
                    <li>Dynamic weather conditions affecting gameplay</li>
                    <li>Build your legacy over multiple seasons</li>
                    <li>Detailed statistics tracking your career</li>
                  </ul>
                </div>
              </div>
              
              {/* Sidebar - 1/4 width on desktop */}
              <div className="lg:col-span-1 space-y-6">
                {/* Sidebar ad */}
                <AdPlaceholder size="medium-rectangle" />
                
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-pixel text-sm mb-3">Share</h3>
                  <div className="flex gap-2">
                    <button className="bg-[#3b5998] text-white rounded p-2 flex items-center justify-center flex-1">
                      <Share2 size={16} />
                    </button>
                    <button className="bg-[#1da1f2] text-white rounded p-2 flex items-center justify-center flex-1">
                      <Share2 size={16} />
                    </button>
                    <button className="bg-[#25D366] text-white rounded p-2 flex items-center justify-center flex-1">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-pixel text-sm mb-3">Top Players</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-medium text-primary">
                          {i}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Player{i}</div>
                          <div className="text-xs text-muted-foreground">{140 - i * 5} pts</div>
                        </div>
                      </div>
                    ))}
                    <Link to="/leaderboard" className="text-xs text-primary hover:underline block text-center mt-4">
                      View Full Leaderboard
                    </Link>
                  </div>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-pixel text-sm mb-3">Related Games</h3>
                  <div className="space-y-3">
                    <div className="group cursor-pointer">
                      <div className="w-full aspect-video bg-muted rounded mb-2 overflow-hidden">
                        <div className="w-full h-full bg-[#1a1a2e] flex items-center justify-center group-hover:bg-[#1a1a2e]/80 transition-colors">
                          <span className="font-pixel text-xs text-white">Retro Game</span>
                        </div>
                      </div>
                      <div className="text-xs font-medium group-hover:text-primary transition-colors">Retro Basketball</div>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="w-full aspect-video bg-muted rounded mb-2 overflow-hidden">
                        <div className="w-full h-full bg-[#1a1a2e] flex items-center justify-center group-hover:bg-[#1a1a2e]/80 transition-colors">
                          <span className="font-pixel text-xs text-white">Retro Game</span>
                        </div>
                      </div>
                      <div className="text-xs font-medium group-hover:text-primary transition-colors">Retro Hockey</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Game;
