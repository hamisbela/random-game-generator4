export interface SEOPageData {
  title: string;
  heading: string;
  description: string;
  keywords: string[];
  type: 'platform' | 'genre';
  filterValue: string;
  relatedPages: Array<{
    title: string;
    path: string;
  }>;
  popularGames: Array<{
    name: string;
    description: string;
  }>;
}

export const platformPages: Record<string, SEOPageData> = {
  'pc': {
    title: 'Random PC Game Generator - Find Your Next PC Game',
    heading: 'Random PC Game Generator',
    description: 'Discover new PC games with our random game generator. Find hidden gems and popular titles across Steam, Epic, and more.',
    keywords: ['PC games', 'Steam games', 'random PC game', 'PC gaming', 'computer games'],
    type: 'platform',
    filterValue: '1', // PC platform ID
    relatedPages: [
      { title: 'Random RPG Games', path: '/genre/rpg' },
      { title: 'Random Action Games', path: '/genre/action' },
      { title: 'Random Strategy Games', path: '/genre/strategy' }
    ],
    popularGames: [
      { name: 'The Witcher 3', description: 'Epic open-world RPG with stunning graphics and deep storytelling' },
      { name: 'Counter-Strike 2', description: 'Legendary competitive FPS with a massive player base' }
    ]
  },
  'playstation': {
    title: 'Random PlayStation Game Generator - PS4 & PS5 Game Finder',
    heading: 'Random PlayStation Game Generator',
    description: 'Find your next PlayStation adventure. Discover random PS4 and PS5 games with our generator.',
    keywords: ['PlayStation games', 'PS5 games', 'PS4 games', 'random PlayStation game', 'console gaming'],
    type: 'platform',
    filterValue: '2',
    relatedPages: [
      { title: 'Random Action Games', path: '/genre/action' },
      { title: 'Random Sports Games', path: '/genre/sports' },
      { title: 'Random Fighting Games', path: '/genre/fighting' }
    ],
    popularGames: [
      { name: 'God of War Ragnarök', description: 'Epic action-adventure in Norse mythology' },
      { name: 'Horizon Forbidden West', description: 'Stunning open-world adventure with robotic creatures' }
    ]
  },
  'xbox': {
    title: 'Random Xbox Game Generator - Find Xbox Series X|S & Xbox One Games',
    heading: 'Random Xbox Game Generator',
    description: 'Discover random Xbox games for Series X|S and Xbox One. Find your next favorite game with our generator.',
    keywords: ['Xbox games', 'Xbox Series X games', 'Xbox One games', 'random Xbox game', 'console gaming'],
    type: 'platform',
    filterValue: '3',
    relatedPages: [
      { title: 'Random FPS Games', path: '/genre/shooter' },
      { title: 'Random Racing Games', path: '/genre/racing' },
      { title: 'Random Sports Games', path: '/genre/sports' }
    ],
    popularGames: [
      { name: 'Halo Infinite', description: 'Latest entry in the iconic Xbox FPS series' },
      { name: 'Forza Horizon 5', description: 'Beautiful open-world racing game set in Mexico' }
    ]
  },
  'ios': {
    title: 'Random iOS Game Generator - Find iPhone & iPad Games',
    heading: 'Random iOS Game Generator',
    description: 'Discover amazing mobile games for your iPhone and iPad. Find casual, action, and puzzle games perfect for on-the-go gaming.',
    keywords: ['iOS games', 'iPhone games', 'iPad games', 'mobile games', 'App Store games'],
    type: 'platform',
    filterValue: '4',
    relatedPages: [
      { title: 'Random Casual Games', path: '/genre/casual' },
      { title: 'Random Puzzle Games', path: '/genre/puzzle' },
      { title: 'Random Arcade Games', path: '/genre/arcade' }
    ],
    popularGames: [
      { name: 'Genshin Impact', description: 'Stunning open-world action RPG with gacha elements' },
      { name: 'Monument Valley', description: 'Beautiful puzzle game with impossible architecture' }
    ]
  },
  'android': {
    title: 'Random Android Game Generator - Find Mobile Games',
    heading: 'Random Android Game Generator',
    description: 'Find the best Android mobile games. Discover casual, action, and strategy games perfect for your smartphone or tablet.',
    keywords: ['Android games', 'mobile games', 'Google Play games', 'smartphone games'],
    type: 'platform',
    filterValue: '8',
    relatedPages: [
      { title: 'Random Casual Games', path: '/genre/casual' },
      { title: 'Random Strategy Games', path: '/genre/strategy' },
      { title: 'Random Puzzle Games', path: '/genre/puzzle' }
    ],
    popularGames: [
      { name: 'PUBG Mobile', description: 'Battle royale phenomenon optimized for mobile' },
      { name: 'Among Us', description: 'Popular social deduction game' }
    ]
  },
  'nintendo': {
    title: 'Random Nintendo Game Generator - Find Switch & Nintendo Games',
    heading: 'Random Nintendo Game Generator',
    description: 'Discover Nintendo Switch games and classic Nintendo titles. Find family-friendly adventures and multiplayer fun.',
    keywords: ['Nintendo games', 'Switch games', 'Nintendo Switch', 'family games'],
    type: 'platform',
    filterValue: '7',
    relatedPages: [
      { title: 'Random Family Games', path: '/genre/family' },
      { title: 'Random Platformer Games', path: '/genre/platformer' },
      { title: 'Random Adventure Games', path: '/genre/adventure' }
    ],
    popularGames: [
      { name: 'The Legend of Zelda: Tears of the Kingdom', description: 'Epic adventure in the kingdom of Hyrule' },
      { name: 'Super Mario Odyssey', description: 'Charming 3D platformer with creative gameplay' }
    ]
  }
};

export const genrePages: Record<string, SEOPageData> = {
  'action': {
    title: 'Random Action Game Generator - Find Exciting Action Games',
    heading: 'Random Action Game Generator',
    description: 'Find thrilling action games with our random generator. Discover action-packed adventures across all gaming platforms.',
    keywords: ['action games', 'adventure games', 'random action game', 'action gaming'],
    type: 'genre',
    filterValue: '4',
    relatedPages: [
      { title: 'Random Adventure Games', path: '/genre/adventure' },
      { title: 'Random RPG Games', path: '/genre/rpg' },
      { title: 'Random FPS Games', path: '/genre/shooter' }
    ],
    popularGames: [
      { name: 'Devil May Cry 5', description: 'Stylish action combat with incredible depth' },
      { name: 'Spider-Man 2', description: 'Web-slinging action in an open-world New York' }
    ]
  },
  'indie': {
    title: 'Random Indie Game Generator - Discover Independent Games',
    heading: 'Random Indie Game Generator',
    description: 'Find unique and creative indie games. Discover hidden gems from independent developers across all platforms.',
    keywords: ['indie games', 'independent games', 'random indie game'],
    type: 'genre',
    filterValue: '51',
    relatedPages: [
      { title: 'Random Puzzle Games', path: '/genre/puzzle' },
      { title: 'Random Adventure Games', path: '/genre/adventure' },
      { title: 'Random Platformer Games', path: '/genre/platformer' }
    ],
    popularGames: [
      { name: 'Hades', description: 'Award-winning roguelike with Greek mythology' },
      { name: 'Hollow Knight', description: 'Beautiful metroidvania with challenging gameplay' }
    ]
  },
  'adventure': {
    title: 'Random Adventure Game Generator - Find Adventure Games',
    heading: 'Random Adventure Game Generator',
    description: 'Discover story-rich adventure games. Find your next journey with our random adventure game generator.',
    keywords: ['adventure games', 'story games', 'narrative games'],
    type: 'genre',
    filterValue: '3',
    relatedPages: [
      { title: 'Random Action Games', path: '/genre/action' },
      { title: 'Random RPG Games', path: '/genre/rpg' },
      { title: 'Random Indie Games', path: '/genre/indie' }
    ],
    popularGames: [
      { name: 'Red Dead Redemption 2', description: 'Epic Western adventure with stunning detail' },
      { name: 'Uncharted 4', description: 'Action-packed adventure with cinematic storytelling' }
    ]
  },
  'rpg': {
    title: 'Random RPG Generator - Find Your Next Role-Playing Adventure',
    heading: 'Random RPG Generator',
    description: 'Discover new RPG games across all platforms. Find your next epic adventure with our random RPG generator.',
    keywords: ['RPG games', 'role-playing games', 'random RPG', 'RPG finder'],
    type: 'genre',
    filterValue: '5',
    relatedPages: [
      { title: 'Random Action Games', path: '/genre/action' },
      { title: 'Random Strategy Games', path: '/genre/strategy' },
      { title: 'Random Adventure Games', path: '/genre/adventure' }
    ],
    popularGames: [
      { name: 'Baldur\'s Gate 3', description: 'Award-winning RPG with deep character customization' },
      { name: 'Elden Ring', description: 'Challenging open-world action RPG' }
    ]
  },
  'strategy': {
    title: 'Random Strategy Game Generator - Find Strategy Games',
    heading: 'Random Strategy Game Generator',
    description: 'Find engaging strategy games. Test your tactical skills with our random strategy game generator.',
    keywords: ['strategy games', 'tactical games', 'random strategy game'],
    type: 'genre',
    filterValue: '10',
    relatedPages: [
      { title: 'Random RPG Games', path: '/genre/rpg' },
      { title: 'Random Simulation Games', path: '/genre/simulation' },
      { title: 'Random PC Games', path: '/platform/pc' }
    ],
    popularGames: [
      { name: 'Civilization VI', description: 'Epic 4X strategy game spanning human history' },
      { name: 'XCOM 2', description: 'Tactical combat against alien invasion' }
    ]
  },
  'shooter': {
    title: 'Random FPS Game Generator - Find First-Person Shooter Games',
    heading: 'Random FPS Generator',
    description: 'Discover new FPS and shooter games. Find your next competitive or story-driven shooting game.',
    keywords: ['FPS games', 'shooter games', 'random FPS'],
    type: 'genre',
    filterValue: '2',
    relatedPages: [
      { title: 'Random Action Games', path: '/genre/action' },
      { title: 'Random PC Games', path: '/platform/pc' },
      { title: 'Random Xbox Games', path: '/platform/xbox' }
    ],
    popularGames: [
      { name: 'Call of Duty: Modern Warfare III', description: 'Latest entry in the popular FPS franchise' },
      { name: 'Doom Eternal', description: 'Fast-paced demon-slaying action' }
    ]
  },
  'casual': {
    title: 'Random Casual Game Generator - Find Relaxing Games',
    heading: 'Random Casual Game Generator',
    description: 'Find relaxing and fun casual games. Perfect for quick gaming sessions and unwinding.',
    keywords: ['casual games', 'relaxing games', 'easy games'],
    type: 'genre',
    filterValue: '40',
    relatedPages: [
      { title: 'Random Puzzle Games', path: '/genre/puzzle' },
      { title: 'Random Family Games', path: '/genre/family' },
      { title: 'Random Mobile Games', path: '/platform/ios' }
    ],
    popularGames: [
      { name: 'Stardew Valley', description: 'Charming farming simulation with RPG elements' },
      { name: 'Fall Guys', description: 'Colorful battle royale party game' }
    ]
  },
  'simulation': {
    title: 'Random Simulation Game Generator - Find Simulation Games',
    heading: 'Random Simulation Game Generator',
    description: 'Discover detailed simulation games. From life sims to management games, find your next simulation.',
    keywords: ['simulation games', 'management games', 'sim games'],
    type: 'genre',
    filterValue: '14',
    relatedPages: [
      { title: 'Random Strategy Games', path: '/genre/strategy' },
      { title: 'Random Sports Games', path: '/genre/sports' },
      { title: 'Random PC Games', path: '/platform/pc' }
    ],
    popularGames: [
      { name: 'Microsoft Flight Simulator', description: 'Ultra-realistic flight simulation' },
      { name: 'The Sims 4', description: 'Popular life simulation game' }
    ]
  },
  'puzzle': {
    title: 'Random Puzzle Game Generator - Find Brain-Teasing Games',
    heading: 'Random Puzzle Game Generator',
    description: 'Find challenging puzzle games. Exercise your mind with our random puzzle game generator.',
    keywords: ['puzzle games', 'brain games', 'logic games'],
    type: 'genre',
    filterValue: '7',
    relatedPages: [
      { title: 'Random Casual Games', path: '/genre/casual' },
      { title: 'Random Indie Games', path: '/genre/indie' },
      { title: 'Random Mobile Games', path: '/platform/ios' }
    ],
    popularGames: [
      { name: 'Portal 2', description: 'Mind-bending first-person puzzle game' },
      { name: 'Baba Is You', description: 'Innovative puzzle game about changing rules' }
    ]
  },
  'arcade': {
    title: 'Random Arcade Game Generator - Find Classic-Style Games',
    heading: 'Random Arcade Game Generator',
    description: 'Discover arcade-style games. Find fast-paced action and classic gaming experiences.',
    keywords: ['arcade games', 'retro games', 'classic games'],
    type: 'genre',
    filterValue: '11',
    relatedPages: [
      { title: 'Random Action Games', path: '/genre/action' },
      { title: 'Random Casual Games', path: '/genre/casual' },
      { title: 'Random Mobile Games', path: '/platform/ios' }
    ],
    popularGames: [
      { name: 'Pac-Man 99', description: 'Battle royale take on the arcade classic' },
      { name: 'Cuphead', description: 'Run-and-gun game with classic cartoon style' }
    ]
  },
  'platformer': {
    title: 'Random Platformer Game Generator - Find Platform Games',
    heading: 'Random Platformer Game Generator',
    description: 'Find exciting platformer games. From 2D classics to 3D adventures, discover your next platforming challenge.',
    keywords: ['platform games', 'platformer games', 'jumping games'],
    type: 'genre',
    filterValue: '83',
    relatedPages: [
      { title: 'Random Indie Games', path: '/genre/indie' },
      { title: 'Random Action Games', path: '/genre/action' },
      { title: 'Random Nintendo Games', path: '/platform/nintendo' }
    ],
    popularGames: [
      { name: 'Super Mario Odyssey', description: 'Innovative 3D platformer with capture mechanics' },
      { name: 'Celeste', description: 'Challenging precision platformer with great story' }
    ]
  },
  'racing': {
    title: 'Random Racing Game Generator - Find Racing Games',
    heading: 'Random Racing Game Generator',
    description: 'Find thrilling racing games. From arcade racers to serious simulations, discover your next racing game.',
    keywords: ['racing games', 'car games', 'driving games'],
    type: 'genre',
    filterValue: '1',
    relatedPages: [
      { title: 'Random Sports Games', path: '/genre/sports' },
      { title: 'Random Simulation Games', path: '/genre/simulation' },
      { title: 'Random Arcade Games', path: '/genre/arcade' }
    ],
    popularGames: [
      { name: 'Forza Horizon 5', description: 'Open-world racing with stunning graphics' },
      { name: 'Gran Turismo 7', description: 'Realistic racing simulation' }
    ]
  },
  'sports': {
    title: 'Random Sports Game Generator - Find Sports Games',
    heading: 'Random Sports Game Generator',
    description: 'Discover sports games across all platforms. From football to basketball, find your next sports game.',
    keywords: ['sports games', 'athletic games', 'team sports games'],
    type: 'genre',
    filterValue: '15',
    relatedPages: [
      { title: 'Random Racing Games', path: '/genre/racing' },
      { title: 'Random Simulation Games', path: '/genre/simulation' },
      { title: 'Random Family Games', path: '/genre/family' }
    ],
    popularGames: [
      { name: 'EA Sports FC 24', description: 'Premier football/soccer simulation' },
      { name: 'NBA 2K24', description: 'Comprehensive basketball experience' }
    ]
  },
  'fighting': {
    title: 'Random Fighting Game Generator - Find Fighting Games',
    heading: 'Random Fighting Game Generator',
    description: 'Find exciting fighting games. From arcade classics to modern fighters, discover your next battle.',
    keywords: ['fighting games', 'combat games', 'martial arts games'],
    type: 'genre',
    filterValue: '6',
    relatedPages: [
      { title: 'Random Action Games', path: '/genre/action' },
      { title: 'Random Arcade Games', path: '/genre/arcade' },
      { title: 'Random Sports Games', path: '/genre/sports' }
    ],
    popularGames: [
      { name: 'Street Fighter 6', description: 'Latest entry in the iconic fighting series' },
      { name: 'Mortal Kombat 1', description: 'Popular fighting game with brutal combat' }
    ]
  },
  'family': {
    title: 'Random Family Game Generator - Find Family-Friendly Games',
    heading: 'Random Family Game Generator',
    description: 'Discover family-friendly games for all ages. Find games everyone can enjoy together.',
    keywords: ['family games', 'kids games', 'all-ages games'],
    type: 'genre',
    filterValue: '19',
    relatedPages: [
      { title: 'Random Casual Games', path: '/genre/casual' },
      { title: 'Random Nintendo Games', path: '/platform/nintendo' },
      { title: 'Random Puzzle Games', path: '/genre/puzzle' }
    ],
    popularGames: [
      { name: 'Nintendo Switch Sports', description: 'Fun motion-controlled sports for everyone' },
      { name: 'Overcooked! 2', description: 'Chaotic cooperative cooking game' }
    ]
  }
};