import React from 'react';
import { SEOPageData } from '../types/seo';
import { Link } from 'react-router-dom';

interface SEOContentProps {
  pageData: SEOPageData;
}

const SEOContent: React.FC<SEOContentProps> = ({ pageData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About {pageData.heading}
        </h2>
        
        <p className="text-gray-700 mb-6">
          Welcome to our {pageData.heading.toLowerCase()}! This tool helps you discover amazing 
          {pageData.type === 'platform' ? ` games for ${pageData.heading.split(' ')[1]}` : ` ${pageData.heading.split(' ')[1]} games`}. 
          Whether you're looking for hidden gems or popular titles, our generator will help you find your next gaming adventure.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Popular {pageData.type === 'platform' ? pageData.heading.split(' ')[1] : pageData.heading.split(' ')[1]} Games
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {pageData.popularGames.map((game, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">{game.name}</h4>
              <p className="text-gray-600 text-sm mt-1">{game.description}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Discover More Games
        </h3>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {pageData.relatedPages.map((page, index) => (
            <Link
              key={index}
              to={page.path}
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
            >
              {page.title}
            </Link>
          ))}
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">
            Why Use Our {pageData.heading}?
          </h3>
          <ul className="list-disc list-inside text-purple-800 space-y-2">
            <li>Discover new and exciting games instantly</li>
            <li>Filter by rating to find top-rated titles</li>
            <li>Exclude DLCs and special editions</li>
            <li>Find games across multiple stores and platforms</li>
            <li>Get detailed information including ratings and reviews</li>
          </ul>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Keywords: {pageData.keywords.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOContent;