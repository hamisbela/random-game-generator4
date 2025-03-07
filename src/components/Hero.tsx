import React from 'react';
import { Gamepad2, Zap, LayoutGrid, ThumbsUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Gamepad2 size={60} className="mx-auto mb-4 text-purple-300" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover Your Next Gaming Adventure
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Find random games tailored to your preferences from a database of thousands of titles.
          </p>
          <a 
            href="#generator" 
            className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all transform hover:scale-105"
          >
            Generate Random Games
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="bg-purple-800/50 p-6 rounded-lg">
            <div className="bg-purple-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap size={24} className="text-yellow-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Discovery</h3>
            <p className="text-purple-200">Find your next favorite games with just one click - no more endless browsing.</p>
          </div>
          
          <div className="bg-purple-800/50 p-6 rounded-lg">
            <div className="bg-purple-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <LayoutGrid size={24} className="text-green-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Advanced Filters</h3>
            <p className="text-purple-200">Narrow down by platform, genre, rating and more to find games that match your taste.</p>
          </div>
          
          <div className="bg-purple-800/50 p-6 rounded-lg">
            <div className="bg-purple-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <ThumbsUp size={24} className="text-blue-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Selections</h3>
            <p className="text-purple-200">Powered by RAWG, the largest video game database with over 350,000 games.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;