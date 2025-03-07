import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} RandomGameGenerator.com
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Game data provided by the <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">RAWG API</a>
            </p>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm mr-2">Made with</span>
            <Heart size={16} className="text-red-500 mr-2" fill="currentColor" />
            <span className="text-sm">by a game enthusiast</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-500 text-center">
          <p>
            This website is for educational purposes. All game logos, images, and information are property of their respective owners.
          </p>
          <p className="mt-2">
            Not affiliated with any game developer or publisher.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;