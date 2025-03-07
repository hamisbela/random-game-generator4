import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import FilterForm, { FilterOptions } from './components/FilterForm';
import GameCard from './components/GameCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { getRandomGames } from './services/api';
import { GameDetails } from './types/api';

function App() {
  const [games, setGames] = useState<(GameDetails | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const generateRandomGames = async (filters: FilterOptions) => {
    setLoading(true);
    setError(null);
    setInitialLoad(false);
    
    try {
      // Transform filter options to match API parameters
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
      
      // Scroll to the games section
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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      <main className="flex-grow">
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
        </div>
        
        <About />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;