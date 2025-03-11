import React from 'react';
import Hero from '../components/Hero';
import FilterForm from '../components/FilterForm';
import GameCard from '../components/GameCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getRandomGames } from '../services/api';
import { GameDetails } from '../types/api';
import { useState } from 'react';

function HomePage() {
  const [games, setGames] = useState<(GameDetails | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const generateRandomGames = async (filters: any) => {
    setLoading(true);
    setError(null);
    setInitialLoad(false);
    
    try {
      const apiParams: Record<string, any> = {};
      
      if (filters.platforms) {
        apiParams.parent_platforms = filters.platforms;
      }
      
      if (filters.genres) {
        apiParams.genres = filters.genres;
      }
      
      if (filters.minRating && Number(filters.minRating) > 0) {
        apiParams.metacritic = `${filters.minRating},100`;
      }
      
      if (filters.excludeAdditions) {
        apiParams.exclude_additions = true;
      }
      
      const randomGames = await getRandomGames(3, apiParams);
      setGames(randomGames);
      
      const gamesElement = document.getElementById('game-result');
      if (gamesElement) {
        gamesElement.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.error('Error generating random games:', err);
      setError('Failed to get random games. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero />
      
      <div className="container mx-auto px-4 py-12" id="generator">
        <FilterForm 
          onGenerateRandom={generateRandomGames} 
          isLoading={loading}
        />
        
        <div id="game-result" className="mt-8">
          {loading ? (
            <div className="text-center py-12">
              <LoadingSpinner />
              <p className="mt-4 text-gray-600">Discovering amazing games for you...</p>
            </div>
          ) : error ? (
            <ErrorMessage 
              message={error} 
              onRetry={() => setError(null)} 
            />
          ) : games.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Game Discoveries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game, index) => 
                  game ? (
                    <GameCard 
                      key={game.id} 
                      game={game} 
                      onGenerateNew={() => generateRandomGames({})} 
                    />
                  ) : (
                    <div key={index} className="bg-white rounded-lg shadow p-4 flex items-center justify-center">
                      <p className="text-gray-500">No game data available</p>
                    </div>
                  )
                )}
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={() => generateRandomGames({})}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Discover More Games
                </button>
              </div>
            </>
          ) : !initialLoad ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-600">
                No games found with those filters. Try adjusting your criteria.
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Random Game Generator - Find Your Next Gaming Adventure
            </h2>
            
            <p className="text-gray-700 mb-6">
              Welcome to the ultimate Random Game Generator! Our powerful tool helps you discover amazing games across all platforms, genres, and styles. Whether you're looking for your next gaming obsession or just want to explore something new, our generator makes finding great games easier than ever.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">
                  Why Use Our Random Game Generator?
                </h3>
                <ul className="list-disc list-inside text-purple-800 space-y-2">
                  <li>Discover hidden gaming gems instantly</li>
                  <li>Filter by platform, genre, and rating</li>
                  <li>Find games across multiple stores</li>
                  <li>Get detailed game information and reviews</li>
                  <li>Save time browsing through endless catalogs</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Features & Benefits
                </h3>
                <ul className="list-disc list-inside text-green-800 space-y-2">
                  <li>Access to 350,000+ games database</li>
                  <li>Real-time ratings and reviews</li>
                  <li>Mobile-friendly interface</li>
                  <li>Regular updates with new releases</li>
                  <li>Completely free to use</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How Our Random Game Generator Works
            </h3>
            
            <p className="text-gray-700 mb-4">
              Simply select your preferred platform, genre, and minimum rating, then let our generator do the work. We'll instantly suggest high-quality games that match your criteria, complete with descriptions, ratings, and where to get them. It's the fastest way to find your next favorite game!
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Popular Categories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/platform/pc" className="text-blue-700 hover:text-blue-900">PC Games</a>
                <a href="/platform/playstation" className="text-blue-700 hover:text-blue-900">PlayStation Games</a>
                <a href="/platform/xbox" className="text-blue-700 hover:text-blue-900">Xbox Games</a>
                <a href="/genre/action" className="text-blue-700 hover:text-blue-900">Action Games</a>
                <a href="/genre/rpg" className="text-blue-700 hover:text-blue-900">RPG Games</a>
                <a href="/genre/strategy" className="text-blue-700 hover:text-blue-900">Strategy Games</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;