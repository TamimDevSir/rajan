import React, { useState } from 'react';
import { ArrowLeft, MapPin, Navigation } from 'lucide-react';

interface RouteScreenProps {
  onRouteSelected: () => void;
  onBack: () => void;
}

export const RouteScreen: React.FC<RouteScreenProps> = ({ onRouteSelected, onBack }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handlePlanRoute = () => {
    if (source && destination) {
      onRouteSelected();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10 p-4">
          <button 
            onClick={onBack}
            className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
        
        <div className="h-96 bg-gradient-to-br from-green-200 via-blue-200 to-green-300 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Coimbatore route representation */}
              <path
                d="M80,220 Q120,180 160,200 Q200,160 240,180 Q280,140 320,160"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              {/* Major bus stops in Coimbatore */}
              <circle cx="80" cy="220" r="5" fill="#EF4444" />
              <circle cx="160" cy="200" r="5" fill="#10B981" />
              <circle cx="240" cy="180" r="5" fill="#3B82F6" />
              <circle cx="320" cy="160" r="5" fill="#F59E0B" />
              
              {/* Labels for major areas */}
              <text x="80" y="240" fontSize="10" textAnchor="middle" fill="#374151">Gandhipuram</text>
              <text x="160" y="220" fontSize="10" textAnchor="middle" fill="#374151">RS Puram</text>
              <text x="240" y="200" fontSize="10" textAnchor="middle" fill="#374151">Peelamedu</text>
              <text x="320" y="180" fontSize="10" textAnchor="middle" fill="#374151">Singanallur</text>
            </svg>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Where to?</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <input
                    type="text"
                    placeholder="Enter source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="flex-1 p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <input
                    type="text"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="flex-1 p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <button
                onClick={handlePlanRoute}
                disabled={!source || !destination}
                className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Plan Route
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Popular Destinations in Coimbatore</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <MapPin size={20} className="text-blue-600" />
              <span className="font-medium">Gandhipuram</span>
            </div>
            <p className="text-sm text-gray-500">Town Hall, Bus Stand</p>
          </button>
          
          <button className="p-4 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <Navigation size={20} className="text-green-600" />
              <span className="font-medium">Ukkadam</span>
            </div>
            <p className="text-sm text-gray-500">Terminal, Market</p>
          </button>
          
          <button className="p-4 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <MapPin size={20} className="text-purple-600" />
              <span className="font-medium">Singanallur</span>
            </div>
            <p className="text-sm text-gray-500">IT Park, Residential</p>
          </button>
          
          <button className="p-4 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <Navigation size={20} className="text-orange-600" />
              <span className="font-medium">RS Puram</span>
            </div>
            <p className="text-sm text-gray-500">Shopping, Commercial</p>
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center p-2 text-blue-600">
            <MapPin size={24} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400">
            <Navigation size={24} />
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400">
            <MapPin size={24} />
            <span className="text-xs mt-1">Tickets</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400">
            <Navigation size={24} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};