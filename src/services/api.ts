import { GamesResponse, ParentPlatformsResponse, GenresResponse, GameDetails } from '../types/api';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

// Helper to build URLs with API key
const buildUrl = (endpoint: string, params: Record<string, string | number | boolean> = {}) => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append('key', API_KEY);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, String(value));
    }
  });
  
  return url.toString();
};

// Get a list of games with optional filters
export const getGames = async (params: Record<string, any> = {}): Promise<GamesResponse> => {
  const url = buildUrl('/games', params);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
};

// Get multiple random games with optional filters
export const getRandomGames = async (count: number = 3, params: Record<string, any> = {}): Promise<(GameDetails | null)[]> => {
  // Get total count first
  const countUrl = buildUrl('/games', { ...params, page_size: 1 });
  const countResponse = await fetch(countUrl);
  if (!countResponse.ok) {
    throw new Error(`API error: ${countResponse.status}`);
  }
  
  const countData = await countResponse.json();
  const totalCount = countData.count;
  
  if (totalCount === 0) {
    return Array(count).fill(null);
  }
  
  // Generate random pages and indexes for each game
  const pageSize = 20;
  const maxPage = Math.min(500, Math.ceil(totalCount / pageSize)); // RAWG API limits to 500 pages
  
  const gamePromises = [];
  const usedIndexes = new Set(); // To avoid duplicate games
  
  for (let i = 0; i < count; i++) {
    const randomPage = Math.floor(Math.random() * maxPage) + 1;
    
    // Get a page with random games
    const gamesUrl = buildUrl('/games', { ...params, page: randomPage, page_size: pageSize });
    const gamePromise = fetch(gamesUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.results.length === 0) {
          return null;
        }
        
        // Find an unused random index
        let attempts = 0;
        let randomIndex;
        
        do {
          randomIndex = Math.floor(Math.random() * data.results.length);
          attempts++;
          // Break after some attempts to avoid infinite loop
          if (attempts > 20) break;
        } while (usedIndexes.has(`${randomPage}-${randomIndex}`) && attempts < data.results.length);
        
        usedIndexes.add(`${randomPage}-${randomIndex}`);
        const randomGame = data.results[randomIndex];
        
        // Get detailed info for the selected game
        return getGameDetails(randomGame.id);
      })
      .catch(err => {
        console.error('Error fetching random game:', err);
        return null;
      });
    
    gamePromises.push(gamePromise);
  }
  
  return Promise.all(gamePromises);
};

// Get a single random game (kept for backward compatibility)
export const getRandomGame = async (params: Record<string, any> = {}): Promise<GameDetails | null> => {
  const games = await getRandomGames(1, params);
  return games[0];
};

// Get details of a specific game
export const getGameDetails = async (id: number): Promise<GameDetails> => {
  const url = buildUrl(`/games/${id}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
};

// Get game store links
export const getGameStores = async (gameId: number): Promise<any> => {
  const url = buildUrl(`/games/${gameId}/stores`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
};

// Get parent platforms (PC, PlayStation, Xbox, etc.)
export const getParentPlatforms = async (): Promise<ParentPlatformsResponse> => {
  const url = buildUrl('/platforms/lists/parents');
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
};

// Get genres
export const getGenres = async (): Promise<GenresResponse> => {
  const url = buildUrl('/genres');
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
};