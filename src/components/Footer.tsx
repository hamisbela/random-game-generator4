import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
              <li><Link to="/platform/pc" className="hover:text-purple-400">PC Games</Link></li>
              <li><Link to="/platform/playstation" className="hover:text-purple-400">PlayStation Games</Link></li>
              <li><Link to="/platform/xbox" className="hover:text-purple-400">Xbox Games</Link></li>
              <li><Link to="/platform/nintendo" className="hover:text-purple-400">Nintendo Games</Link></li>
              <li><Link to="/platform/ios" className="hover:text-purple-400">iOS Games</Link></li>
              <li><Link to="/platform/android" className="hover:text-purple-400">Android Games</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Genres</h3>
            <ul className="space-y-2">
              <li><Link to="/genre/action" className="hover:text-purple-400">Action Games</Link></li>
              <li><Link to="/genre/rpg" className="hover:text-purple-400">RPG Games</Link></li>
              <li><Link to="/genre/strategy" className="hover:text-purple-400">Strategy Games</Link></li>
              <li><Link to="/genre/shooter" className="hover:text-purple-400">FPS Games</Link></li>
              <li><Link to="/genre/sports" className="hover:text-purple-400">Sports Games</Link></li>
              <li><Link to="/genre/racing" className="hover:text-purple-400">Racing Games</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">More Genres</h3>
            <ul className="space-y-2">
              <li><Link to="/genre/adventure" className="hover:text-purple-400">Adventure Games</Link></li>
              <li><Link to="/genre/puzzle" className="hover:text-purple-400">Puzzle Games</Link></li>
              <li><Link to="/genre/simulation" className="hover:text-purple-400">Simulation Games</Link></li>
              <li><Link to="/genre/casual" className="hover:text-purple-400">Casual Games</Link></li>
              <li><Link to="/genre/family" className="hover:text-purple-400">Family Games</Link></li>
              <li><Link to="/genre/fighting" className="hover:text-purple-400">Fighting Games</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-purple-400">About Us</Link></li>
              <li>
                <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 flex items-center">
                  RAWG API <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} RandomGameGenerator.com
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Game data provided by the <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">RAWG API</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm mr-2">Made with</span>
            <Heart size={16} className="text-red-500 mr-2" fill="currentColor" />
            <span className="text-sm">by a game enthusiast</span>
          </div>
          
          <div className="text-xs text-gray-500">
            <p>
              This website is for educational purposes. All game logos, images, and information are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;