export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: any;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  } | null;
  platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
    released_at?: string;
    requirements?: {
      minimum?: string;
      recommended?: string;
    };
  }[];
}

export interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}

export interface ParentPlatformsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ParentPlatform[];
}

export interface GenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

export interface GameDetails extends Game {
  description: string;
  description_raw: string;
  website: string;
  metacritic_url: string;
  alternative_names: string[];
  screenshots_count: number;
  background_image_additional: string;
}