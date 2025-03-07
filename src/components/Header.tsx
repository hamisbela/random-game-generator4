import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white shadow-lg">
      <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Gamepad2 size={36} className="text-purple-300" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">RandomGameGenerator</h1>
            <p className="text-sm text-purple-200">Discover your next gaming adventure</p>
          </div>
        </div>
        
        <div className="flex space-x-2 text-sm md:text-base">
          <a 
            href="#" 
            className="px-4 py-2 rounded-md bg-purple-700 hover:bg-purple-600 transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="px-4 py-2 rounded-md hover:bg-purple-700/50 transition-colors"
          >
            About
          </a>
          <a 
            href="https://rawg.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md hover:bg-purple-700/50 transition-colors"
          >
            Powered by RAWG
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;