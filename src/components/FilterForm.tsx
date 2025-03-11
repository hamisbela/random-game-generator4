import React, { useState, useEffect } from 'react';
import { getParentPlatforms, getGenres } from '../services/api';
import { ParentPlatform, Genre } from '../types/api';
import LoadingSpinner from './LoadingSpinner';
import { Dice5, Filter, Gamepad } from 'lucide-react';

interface FilterFormProps {
  onGenerateRandom: (filters: FilterOptions) => void;
  isLoading: boolean;
  initialFilters?: FilterOptions;
}

export interface FilterOptions {
  platforms?: string;
  genres?: string;
  minRating?: number;
  releasedAfter?: string;
  releasedBefore?: string;
  excludeAdditions?: boolean;
  platformLocked?: boolean;
}

const FilterForm: React.FC<FilterFormProps> = ({ onGenerateRandom, isLoading, initialFilters }) => {
  const [platforms, setPlatforms] = useState<ParentPlatform[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loadingFilters, setLoadingFilters] = useState(true);
  const [filters, setFilters] = useState<FilterOptions>(initialFilters || {
    platforms: '',
    genres: '',
    minRating: 0,
    excludeAdditions: false,
    platformLocked: false
  });
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const [platformsData, genresData] = await Promise.all([
          getParentPlatforms(),
          getGenres()
        ]);
        
        setPlatforms(platformsData.results);
        setGenres(genresData.results);
      } catch (error) {
        console.error('Error loading filters:', error);
      } finally {
        setLoadingFilters(false);
      }
    };
    
    loadFilters();
  }, []);

  useEffect(() => {
    if (initialFilters) {
      setFilters(prev => ({ ...prev, ...initialFilters }));
    }
  }, [initialFilters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerateRandom(filters);
  };

  const handleRandomize = () => {
    // Clear filters except for locked platform on platform pages
    const newFilters = filters.platformLocked ? {
      platforms: filters.platforms,
      platformLocked: true
    } : {};
    setFilters(newFilters);
    onGenerateRandom(newFilters);
  };

  if (loadingFilters) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <Gamepad className="mr-2 text-purple-600" size={20} />
          Find Your Next Games
        </h2>
        <button
          onClick={() => setFiltersVisible(!filtersVisible)}
          className="flex items-center text-sm px-3 py-1.5 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Filter size={16} className="mr-1" />
          {filtersVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      <form onSubmit={handleFormSubmit}>
        {filtersVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {!filters.platformLocked && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Platform
                </label>
                <select
                  name="platforms"
                  value={filters.platforms}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={filters.platformLocked}
                >
                  <option value="">Any Platform</option>
                  {platforms.map(platform => (
                    <option key={platform.id} value={platform.id}>
                      {platform.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Genre
              </label>
              <select
                name="genres"
                value={filters.genres}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Any Genre</option>
                {genres.map(genre => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Rating
              </label>
              <select
                name="minRating"
                value={filters.minRating}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="0">Any Rating</option>
                <option value="70">70+</option>
                <option value="80">80+</option>
                <option value="90">90+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Exclude DLCs/Editions
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="excludeAdditions"
                  checked={filters.excludeAdditions}
                  onChange={handleFilterChange}
                  className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-600">Hide DLCs and special editions</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md font-medium flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                Finding...
              </span>
            ) : (
              <span className="flex items-center">
                Find Games with Filters
              </span>
            )}
          </button>
          
          <button
            type="button"
            onClick={handleRandomize}
            disabled={isLoading}
            className="flex-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white py-3 px-6 rounded-md font-medium flex justify-center items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50"
          >
            <Dice5 size={20} />
            <span>Completely Random</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;