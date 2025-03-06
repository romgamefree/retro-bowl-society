
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdPlaceholder from '../components/AdPlaceholder';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import StickyGamePromo from '../components/StickyGamePromo';

const HowToPlay = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 page-transition">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl mb-2">How to Play Retro Bowl</h1>
            <p className="text-muted-foreground mb-6">Tips and strategies for beginners and advanced players</p>
            
            {/* Ad banner */}
            <div className="mb-8 flex justify-center">
              <AdPlaceholder size="leaderboard" className="max-w-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Main content */}
              <div className="md:col-span-3">
                <section className="mb-8">
                  <h2 className="font-pixel text-xl mb-4">Getting Started with Retro Bowl</h2>
                  <p className="mb-4">
                    Retro Bowl is an American football game with a delightful pixel art style that captures the 
                    essence of retro sports games while offering deep gameplay. Whether you're a football expert 
                    or new to the sport, this guide will help you master the basics and develop winning strategies.
                  </p>
                  
                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-secondary">
                        <Star size={18} fill="currentColor" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Quick Tip for Beginners</h3>
                        <p className="text-sm text-muted-foreground">
                          Focus on improving your quarterback first. A good QB makes passing much easier and 
                          will help you score points consistently, even with an otherwise average team.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h2 className="font-pixel text-xl mb-4">Basic Controls</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="bg-background border border-border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Offense Controls</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-medium shrink-0">1</div>
                          <div>
                            <p className="font-medium text-sm">Passing</p>
                            <p className="text-xs text-muted-foreground">Draw back and release to throw. The longer you pull back, the stronger the throw.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-medium shrink-0">2</div>
                          <div>
                            <p className="font-medium text-sm">Running</p>
                            <p className="text-xs text-muted-foreground">Tap and hold on the screen to move your player. Swipe to dodge tackles.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-medium shrink-0">3</div>
                          <div>
                            <p className="font-medium text-sm">Kicking</p>
                            <p className="text-xs text-muted-foreground">Swipe up to kick. The speed and angle of your swipe determine power and accuracy.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-background border border-border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Defense Controls</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded bg-secondary/10 text-secondary flex items-center justify-center text-xs font-medium shrink-0">1</div>
                          <div>
                            <p className="font-medium text-sm">Player Selection</p>
                            <p className="text-xs text-muted-foreground">Tap on a player to switch control. Always try to control the defender closest to the ball.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded bg-secondary/10 text-secondary flex items-center justify-center text-xs font-medium shrink-0">2</div>
                          <div>
                            <p className="font-medium text-sm">Tackling</p>
                            <p className="text-xs text-muted-foreground">Swipe in any direction to attempt a tackle when near an opponent.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded bg-secondary/10 text-secondary flex items-center justify-center text-xs font-medium shrink-0">3</div>
                          <div>
                            <p className="font-medium text-sm">Positioning</p>
                            <p className="text-xs text-muted-foreground">Tap and hold to run toward the ball carrier. Try to anticipate their movements.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                {/* In-content ad */}
                <div className="flex justify-center mb-8">
                  <AdPlaceholder size="large-rectangle" />
                </div>
                
                <section className="mb-8">
                  <h2 className="font-pixel text-xl mb-4">Team Management</h2>
                  <p className="mb-4">
                    Success in Retro Bowl isn't just about gameplay—it's about building and managing 
                    your team effectively. Here are key aspects of team management to focus on:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-background border border-border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Draft and Free Agency</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        The draft is your primary opportunity to acquire talented players. Focus on these positions first:
                      </p>
                      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 ml-2">
                        <li><span className="font-medium text-foreground">Quarterback:</span> The most important position. Look for high accuracy and arm strength.</li>
                        <li><span className="font-medium text-foreground">Wide Receivers:</span> Fast receivers with good catching ability create big play opportunities.</li>
                        <li><span className="font-medium text-foreground">Defensive Line:</span> A strong D-line will pressure opposing quarterbacks and create turnovers.</li>
                      </ol>
                    </div>
                    
                    <div className="bg-background border border-border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Player Development</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Coaching credits are valuable resources used to improve your players. When allocating coaching credits:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                        <li>Prioritize younger players with higher potential (4-5 stars)</li>
                        <li>Balance improvements across different positions rather than focusing on just one player</li>
                        <li>Don't waste credits on players near retirement</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background border border-border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Team Morale</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Managing morale is crucial for team performance. Low morale leads to poorer performance and can cause players to request trades.
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                        <li>Win games to boost overall team morale</li>
                        <li>Give star players the ball more often</li>
                        <li>When handling media questions, consider how your answers might affect morale</li>
                        <li>Upgrade your training facilities to improve baseline morale</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h2 className="font-pixel text-xl mb-4">Advanced Strategies</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Passing Tips</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                        <li>Lead your receivers by throwing slightly ahead of them</li>
                        <li>Short, quick passes are more reliable than deep throws</li>
                        <li>Use bullet passes (quick flicks) in tight coverage</li>
                        <li>Check for defensive coverage before committing to a throw</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Defensive Strategies</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                        <li>Control defenders in the middle of the field to cover the most ground</li>
                        <li>Focus on tackling the ball carrier rather than going for interceptions</li>
                        <li>Use defensive backs to contain outside runs</li>
                        <li>Invest in fast linebackers for better coverage across the field</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Salary Cap Management</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                        <li>Don't overpay for aging players</li>
                        <li>Keep a balanced roster rather than having a few stars and many weak positions</li>
                        <li>Trade players who demand high salaries if you have capable backups</li>
                        <li>Keep some cap space available for mid-season acquisitions</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <div className="mt-8 flex justify-center">
                  <Link to="/game#game-container" className="retro-btn">
                    Play Now <ChevronRight size={16} className="inline ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-1 space-y-6">
                {/* Sidebar ad */}
                <AdPlaceholder size="medium-rectangle" />
                
                <div className="bg-background border border-border rounded-lg p-4 sticky top-24">
                  <h3 className="font-pixel text-sm mb-3">Quick Navigation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#getting-started" className="text-muted-foreground hover:text-primary transition-colors block py-1">
                        Getting Started
                      </a>
                    </li>
                    <li>
                      <a href="#basic-controls" className="text-muted-foreground hover:text-primary transition-colors block py-1">
                        Basic Controls
                      </a>
                    </li>
                    <li>
                      <a href="#team-management" className="text-muted-foreground hover:text-primary transition-colors block py-1">
                        Team Management
                      </a>
                    </li>
                    <li>
                      <a href="#advanced-strategies" className="text-muted-foreground hover:text-primary transition-colors block py-1">
                        Advanced Strategies
                      </a>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <h3 className="font-pixel text-sm mb-3">Helpful Resources</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors block py-1">
                          Leaderboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors block py-1">
                          About Retro Bowl
                        </Link>
                      </li>
                    </ul>
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

export default HowToPlay;
