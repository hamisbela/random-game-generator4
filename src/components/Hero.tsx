import React from 'react';
import { Gamepad2, Zap, LayoutGrid, ThumbsUp, Sparkles, Gift } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Sparkles className="text-yellow-300 animate-pulse w-8 h-8" />
            </div>
            <Gamepad2 size={80} className="mx-auto mb-4 text-purple-300 animate-float" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-300 to-purple-200">
            Discover Your Next
            <br />
            Gaming Adventure
          </h1>

          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Find random games tailored to your preferences from our database of thousands of titles across all platforms.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#generator" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <Gift className="mr-2" />
              Generate Random Games
            </a>
            
            <a 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-purple-700 hover:bg-purple-600 text-white shadow-lg transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Zap size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Instant Discovery</h3>
            <p className="text-purple-200">Find your next favorite games with just one click - no more endless browsing.</p>
          </div>
          
          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <LayoutGrid size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Advanced Filters</h3>
            <p className="text-purple-200">Narrow down by platform, genre, rating and more to find games that match your taste.</p>
          </div>
          
          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <ThumbsUp size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Quality Selections</h3>
            <p className="text-purple-200">Powered by RAWG, the largest video game database with over 350,000 games.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;