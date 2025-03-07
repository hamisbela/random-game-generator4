import React from 'react';
import { Info, Database, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Info size={28} className="text-purple-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">About This Project</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              RandomGameGenerator.com was created to help gamers discover new titles from the vast world of video games. 
              With thousands of games released each year across multiple platforms, it can be overwhelming to find your next adventure.
            </p>
            
            <p>
              Our random game generator uses the extensive RAWG Video Games Database to suggest titles based on your preferences. 
              Whether you're looking for a specific genre, platform, or just want to be surprised, we've got you covered.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md my-6 flex items-start">
              <Database size={24} className="text-purple-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Powered by RAWG</h3>
                <p className="text-gray-700 mb-0">
                  This site uses the RAWG Video Games Database API, which provides access to information about more than 350,000 games 
                  across 50 platforms. All game data, including descriptions, images, and ratings, comes from RAWG's extensive collection.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md my-6 flex items-start">
              <Shield size={24} className="text-purple-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Terms of Use</h3>
                <p className="text-gray-700 mb-0">
                  RandomGameGenerator.com is a personal project for educational purposes. We do not claim ownership of any game 
                  information or images displayed on this site. All data is attributed to RAWG as required by their terms of use.
                </p>
              </div>
            </div>
            
            <p>
              We hope this tool helps you discover amazing games you might have otherwise missed. Happy gaming!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;