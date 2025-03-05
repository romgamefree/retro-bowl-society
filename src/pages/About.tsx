
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdPlaceholder from '../components/AdPlaceholder';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight, Info, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 page-transition">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl mb-2">About Retro Bowl Online</h1>
            <p className="text-muted-foreground mb-6">Your destination for retro football gaming</p>
            
            {/* Ad banner */}
            <div className="mb-8 flex justify-center">
              <AdPlaceholder size="leaderboard" className="max-w-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Main content */}
              <div className="md:col-span-3">
                <section className="mb-8">
                  <h2 className="font-pixel text-xl mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-4">
                    Retro Bowl Online was created to provide free, accessible gameplay for fans of retro-styled 
                    American football. Our platform aims to deliver a nostalgic gaming experience with the 
                    convenience of modern web technology—no downloads required, just instant play from any device.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We believe in preserving the spirit of classic sports games while making them accessible to 
                    a new generation of players. Our goal is to create a friendly community where football 
                    enthusiasts and retro gaming fans can enjoy a high-quality game experience without barriers.
                  </p>
                  
                  <div className="bg-muted rounded-lg p-6 mt-6 flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <Info size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Important Disclaimer</h3>
                      <p className="text-sm text-muted-foreground">
                        Retro Bowl Online is not affiliated with the official Retro Bowl developers. We are 
                        enthusiasts and fans who provide access to this game for educational and entertainment 
                        purposes. All trademarks, registered trademarks, product names and company names or logos 
                        mentioned herein are the property of their respective owners.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h2 className="font-pixel text-xl mb-4">Community Values</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-background border border-border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Our Commitment</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                          <span>Provide a free, high-quality gaming experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                          <span>Maintain a family-friendly environment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                          <span>Regularly update content and features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                          <span>Listen to community feedback</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-background border border-border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Community Guidelines</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-secondary/10 text-secondary flex items-center justify-center text-xs shrink-0 mt-0.5">•</div>
                          <span>Be respectful to fellow players</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-secondary/10 text-secondary flex items-center justify-center text-xs shrink-0 mt-0.5">•</div>
                          <span>No inappropriate language or content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-secondary/10 text-secondary flex items-center justify-center text-xs shrink-0 mt-0.5">•</div>
                          <span>Fair play—no cheating or exploits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-secondary/10 text-secondary flex items-center justify-center text-xs shrink-0 mt-0.5">•</div>
                          <span>Report issues or inappropriate behavior</span>
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
                  <h2 className="font-pixel text-xl mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-6">
                    Have questions, feedback, or need assistance? We're here to help! Feel free to reach out
                    using any of the methods below, and our team will get back to you as soon as possible.
                  </p>
                  
                  <div className="bg-background border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Mail size={20} className="text-primary" />
                      <span className="font-medium">Email Us</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      For general inquiries, support, or feedback:
                      <a href="mailto:support@retrobowlonline.com" className="text-primary hover:underline ml-1">
                        support@retrobowlonline.com
                      </a>
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <h3 className="font-medium mb-4">Contact Form</h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                            <input
                              type="text"
                              id="name"
                              className="w-full px-3 py-2 border border-border rounded-md bg-background"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-3 py-2 border border-border rounded-md bg-background"
                              placeholder="Your email address"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            className="w-full px-3 py-2 border border-border rounded-md bg-background"
                            placeholder="Subject of your message"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full px-3 py-2 border border-border rounded-md bg-background resize-none"
                            placeholder="Your message"
                          ></textarea>
                        </div>
                        <div>
                          <button type="submit" className="retro-btn">
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-1 space-y-6">
                {/* Sidebar ad */}
                <AdPlaceholder size="medium-rectangle" />
                
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-pixel text-sm mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <Shield size={14} />
                        <span>Privacy Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <Info size={14} />
                        <span>Terms of Use</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/how-to-play" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <Info size={14} />
                        <span>How to Play</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/leaderboard" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <Trophy size={14} />
                        <span>Leaderboard</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-pixel text-sm mb-3">Why We Love Retro Games</h3>
                  <p className="text-xs text-muted-foreground">
                    There's something special about retro games that modern titles often miss—the perfect 
                    balance of simplicity and challenge, the charming pixel art, and the focus on pure gameplay
                    rather than flashy graphics. Retro Bowl captures this perfectly, delivering an experience
                    that's both nostalgic and refreshingly fun.
                  </p>
                  <div className="mt-4 text-center">
                    <Link to="/game" className="text-xs text-primary hover:underline inline-flex items-center">
                      Experience it yourself
                      <ChevronRight size={12} className="ml-1" />
                    </Link>
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

export default About;
