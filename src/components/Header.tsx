import React from 'react';
import { Gamepad2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white shadow-lg">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <Gamepad2 size={36} className="text-purple-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">RandomGameGenerator</h1>
              <p className="text-sm text-purple-200">Discover your next gaming adventure</p>
            </div>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md bg-purple-700 hover:bg-purple-600 transition-colors"
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="px-4 py-2 rounded-md hover:bg-purple-700/50 transition-colors flex items-center">
                Platforms <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute z-50 hidden group-hover:block w-48 mt-2 bg-white rounded-md shadow-lg">
                <Link to="/platform/pc" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">PC Games</Link>
                <Link to="/platform/playstation" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">PlayStation Games</Link>
                <Link to="/platform/xbox" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Xbox Games</Link>
                <Link to="/platform/nintendo" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Nintendo Games</Link>
                <Link to="/platform/ios" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">iOS Games</Link>
                <Link to="/platform/android" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Android Games</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="px-4 py-2 rounded-md hover:bg-purple-700/50 transition-colors flex items-center">
                Genres <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute z-50 hidden group-hover:block w-48 mt-2 bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
                <Link to="/genre/action" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Action Games</Link>
                <Link to="/genre/adventure" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Adventure Games</Link>
                <Link to="/genre/rpg" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">RPG Games</Link>
                <Link to="/genre/strategy" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Strategy Games</Link>
                <Link to="/genre/shooter" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">FPS Games</Link>
                <Link to="/genre/casual" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Casual Games</Link>
                <Link to="/genre/simulation" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Simulation Games</Link>
                <Link to="/genre/puzzle" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Puzzle Games</Link>
                <Link to="/genre/arcade" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Arcade Games</Link>
                <Link to="/genre/platformer" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Platformer Games</Link>
                <Link to="/genre/racing" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Racing Games</Link>
                <Link to="/genre/sports" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Sports Games</Link>
                <Link to="/genre/fighting" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Fighting Games</Link>
                <Link to="/genre/family" className="block px-4 py-2 text-gray-800 hover:bg-purple-50">Family Games</Link>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-md hover:bg-purple-700/50 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;