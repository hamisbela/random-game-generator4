import React, { useState, useEffect } from 'react';
import { GameDetails } from '../types/api';
import { Calendar, Star, Clock, Award, Tag, Monitor, ExternalLink, ShoppingCart } from 'lucide-react';
import { getGameStores } from '../services/api';

interface GameCardProps {
  game: GameDetails;
  onGenerateNew: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onGenerateNew }) => {
  const [storeUrl, setStoreUrl] = useState<string | null>(null);
  const [loadingStores, setLoadingStores] = useState(false);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoadingStores(true);
        const storesData = await getGameStores(game.id);
        if (storesData.results && storesData.results.length > 0) {
          setStoreUrl(storesData.results[0].url);
        }
      } catch (error) {
        console.error('Error fetching game stores:', error);
      } finally {
        setLoadingStores(false);
      }
    };

    fetchStores();
  }, [game.id]);
  
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  };
  
  const getPlatformIcons = () => {
    return game.platforms.map(p => p.platform.name).join(', ');
  };
  
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="text-yellow-400 fill-current" size={16} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="text-yellow-400" size={16} />);
      } else {
        stars.push(<Star key={i} className="text-gray-300" size={16} />);
      }
    }
    
    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-sm font-medium text-gray-700">({rating.toFixed(1)})</span>
      </div>
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full flex flex-col">
      <div className="relative">
        {game.background_image ? (
          <img 
            src={game.background_image} 
            alt={game.name} 
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        
        {game.metacritic && (
          <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded-md flex items-center">
            <Award className="mr-1" size={16} />
            <span className="font-bold">{game.metacritic}</span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{game.name}</h2>
        
        <div className="flex flex-wrap gap-y-2 mb-3">
          <div className="flex items-center text-sm text-gray-600 mr-4">
            <Calendar size={16} className="mr-1 text-purple-600" />
            <span>{formatDate(game.released)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Monitor size={16} className="mr-1 text-purple-600" />
            <span className="truncate max-w-[200px]">{getPlatformIcons()}</span>
          </div>
        </div>
        
        <div className="mb-3">
          {renderRating(game.rating)}
        </div>
        
        {game.description_raw && (
          <div className="mb-4">
            <p className="text-gray-600 leading-relaxed line-clamp-3 text-sm">
              {game.description_raw}
            </p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {game.genres?.slice(0, 3).map(genre => (
            <span key={genre.id} className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full flex items-center">
              <Tag size={12} className="mr-1" />
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-4 pt-0 border-t border-gray-100 bg-gray-50">
        <div className="flex flex-col gap-2">
          {storeUrl ? (
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <ShoppingCart size={16} className="mr-2" />
              Get This Game
            </a>
          ) : game.website ? (
            <a
              href={game.website}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <ExternalLink size={16} className="mr-2" />
              Visit Website
            </a>
          ) : (
            <button
              disabled
              className="py-2 px-4 bg-gray-400 text-white rounded-md font-medium flex items-center justify-center opacity-70 cursor-not-allowed"
            >
              <ShoppingCart size={16} className="mr-2" />
              No Store Links
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;