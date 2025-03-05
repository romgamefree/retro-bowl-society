
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdPlaceholder from '../components/AdPlaceholder';
import { Link } from 'react-router-dom';
import { Trophy, ChevronRight, ArrowUpDown, Medal } from 'lucide-react';
import { leaderboardData, LeaderboardEntry } from '../utils/leaderboardData';

const Leaderboard = () => {
  const [sortBy, setSortBy] = useState<'score' | 'level' | 'date'>('score');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  const handleSort = (column: 'score' | 'level' | 'date') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };
  
  const sortedData = [...leaderboardData].sort((a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc' 
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    
    return sortOrder === 'asc' 
      ? a[sortBy] - b[sortBy]
      : b[sortBy] - a[sortBy];
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 page-transition">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl">Retro Bowl Leaderboard</h1>
                <p className="text-muted-foreground">Top players worldwide</p>
              </div>
              <Trophy size={32} className="text-secondary" />
            </div>
            
            {/* Ad banner */}
            <div className="mb-8 flex justify-center">
              <AdPlaceholder size="leaderboard" className="max-w-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Main content */}
              <div className="md:col-span-3">
                <div className="bg-background border border-border rounded-lg overflow-hidden mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted">
                          <th className="py-3 px-4 text-left font-pixel text-xs">Rank</th>
                          <th className="py-3 px-4 text-left font-pixel text-xs">Player</th>
                          <th className="py-3 px-4 text-left font-pixel text-xs cursor-pointer" onClick={() => handleSort('score')}>
                            <div className="flex items-center gap-1">
                              Score
                              <ArrowUpDown size={12} className={sortBy === 'score' ? 'text-primary' : 'text-muted-foreground'} />
                            </div>
                          </th>
                          <th className="py-3 px-4 text-left font-pixel text-xs cursor-pointer" onClick={() => handleSort('level')}>
                            <div className="flex items-center gap-1">
                              Level
                              <ArrowUpDown size={12} className={sortBy === 'level' ? 'text-primary' : 'text-muted-foreground'} />
                            </div>
                          </th>
                          <th className="py-3 px-4 text-left font-pixel text-xs cursor-pointer" onClick={() => handleSort('date')}>
                            <div className="flex items-center gap-1">
                              Date
                              <ArrowUpDown size={12} className={sortBy === 'date' ? 'text-primary' : 'text-muted-foreground'} />
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedData.map((entry, index) => (
                          <TableRow key={entry.id} entry={entry} rank={index + 1} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-6 mb-8">
                  <h2 className="font-pixel text-lg mb-4">How Rankings Work</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our leaderboard rankings are determined by a combination of factors including total points scored,
                    win percentage, championship victories, and overall team skill ratings. Players are ranked
                    based on their all-time performance across multiple seasons.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    To improve your ranking, focus on winning games consistently, scoring high point totals,
                    and developing your team's skills through coaching and strategic player acquisitions.
                  </p>
                </div>
                
                {/* In-content ad */}
                <div className="flex justify-center mb-8">
                  <AdPlaceholder size="large-rectangle" />
                </div>
                
                <div className="text-center">
                  <Link to="/game" className="retro-btn">
                    Play Now & Climb the Ranks <ChevronRight size={16} className="inline ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-1 space-y-6">
                {/* Sidebar ad */}
                <AdPlaceholder size="medium-rectangle" />
                
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-pixel text-sm mb-3">Top 3 Champions</h3>
                  
                  <div className="space-y-4">
                    {sortedData.slice(0, 3).map((entry, index) => (
                      <div key={entry.id} className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-medium">
                            {entry.avatar}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white
                            ${index === 0 ? 'bg-[#FFD700]' : index === 1 ? 'bg-[#C0C0C0]' : 'bg-[#CD7F32]'}`}>
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{entry.username}</div>
                          <div className="text-xs text-muted-foreground">{entry.score} pts</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-pixel text-sm mb-3">Achievement Badges</h3>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2">
                      <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Trophy size={18} />
                      </div>
                      <div className="text-[10px] mt-1">Champion</div>
                    </div>
                    <div className="p-2">
                      <div className="w-10 h-10 mx-auto rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <Medal size={18} />
                      </div>
                      <div className="text-[10px] mt-1">MVP</div>
                    </div>
                    <div className="p-2">
                      <div className="w-10 h-10 mx-auto rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <Star size={18} />
                      </div>
                      <div className="text-[10px] mt-1">All-Star</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-pixel text-sm mb-3">Tips to Improve</h3>
                  <ul className="text-xs space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        1
                      </div>
                      <span className="text-muted-foreground">Focus on building a strong offensive line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        2
                      </div>
                      <span className="text-muted-foreground">Manage your salary cap efficiently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        3
                      </div>
                      <span className="text-muted-foreground">Practice passing accuracy on different routes</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-border">
                    <Link to="/how-to-play" className="text-xs text-primary hover:underline block text-center">
                      View Full Game Guide
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

interface TableRowProps {
  entry: LeaderboardEntry;
  rank: number;
}

const TableRow: React.FC<TableRowProps> = ({ entry, rank }) => {
  return (
    <tr className="border-t border-border hover:bg-muted/50 transition-colors">
      <td className="py-3 px-4">
        <div className="flex items-center">
          {rank <= 3 ? (
            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-medium
              ${rank === 1 ? 'bg-[#FFD700]' : rank === 2 ? 'bg-[#C0C0C0]' : 'bg-[#CD7F32]'}`}>
              {rank}
            </span>
          ) : (
            <span className="ml-2 text-muted-foreground">{rank}</span>
          )}
        </div>
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-medium">
            {entry.avatar}
          </div>
          <span className="font-medium">{entry.username}</span>
        </div>
      </td>
      <td className="py-3 px-4 font-medium">{entry.score}</td>
      <td className="py-3 px-4">
        <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
          Level {entry.level}
        </span>
      </td>
      <td className="py-3 px-4 text-muted-foreground text-sm">{entry.date}</td>
    </tr>
  );
};

export default Leaderboard;
