import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { platformPages, genrePages } from '../types/seo';
import FilterForm from '../components/FilterForm';
import SEOContent from '../components/SEOContent';
import GameCard from '../components/GameCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getRandomGames } from '../services/api';
import { GameDetails } from '../types/api';

const SEOPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  const [games, setGames] = useState<(GameDetails | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);
  
  const pageData = type === 'platform' 
    ? platformPages[id as keyof typeof platformPages]
    : genrePages[id as keyof typeof genrePages];
    
  useEffect(() => {
    if (!pageData) {
      navigate('/');
      return;
    }
    
    // Update page title and meta description
    document.title = pageData?.title || 'Random Game Generator';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageData?.description || '');
    }
  }, [pageData, navigate]);
  
  if (!pageData) {
    return null;
  }
  
  const initialFilters = {
    [type === 'platform' ? 'platforms' : 'genres']: pageData.filterValue,
    platformLocked: type === 'platform'
  };

  const generateRandomGames = async (filters: any) => {
    setLoading(true);
    setError(null);
    setInitialLoad(false);
    
    try {
      const apiParams: Record<string, any> = {
        // Always include the page-specific filter
        [type === 'platform' ? 'parent_platforms' : 'genres']: pageData.filterValue,
      };
      
      // Add other filters except platform for platform pages
      if (type !== 'platform' && filters.platforms) {
        apiParams.parent_platforms = filters.platforms;
      }
      if (type !== 'genre' && filters.genres) {
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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        {pageData.heading}
      </h1>
      
      <FilterForm 
        onGenerateRandom={generateRandomGames}
        isLoading={loading}
        initialFilters={initialFilters}
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
                    onGenerateNew={() => generateRandomGames(initialFilters)} 
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
                onClick={() => generateRandomGames(initialFilters)}
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
      
      <SEOContent pageData={pageData} />
    </div>
  );
};

export default SEOPage;