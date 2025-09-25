import React, { useState } from 'react';
import { ArrowLeft, Search, Plus, Minus, Navigation, MapPin } from 'lucide-react';

interface BusStopsScreenProps {
  onStopSelected: () => void;
  onBack: () => void;
}

export const BusStopsScreen: React.FC<BusStopsScreenProps> = ({ onStopSelected, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const busStops = [
    { name: 'Gandhipuram Town Hall', stop: 'Stop A1', routes: ['Route 1A', 'Route 3B'], distance: '0.2 km' },
    { name: 'Ukkadam Terminal', stop: 'Stop B2', routes: ['Route 2C', 'Route 4D'], distance: '1.5 km' },
    { name: 'Singanallur IT Park', stop: 'Stop C3', routes: ['Route 1A', 'Route 5E'], distance: '3.2 km' },
    { name: 'RS Puram Junction', stop: 'Stop D4', routes: ['Route 6F', 'Route 7G'], distance: '0.8 km' },
    { name: 'Peelamedu Signal', stop: 'Stop E5', routes: ['Route 3B', 'Route 8H'], distance: '2.1 km' },
  ];

  const availableRoutes = [
    { name: 'Route 1A: Gandhipuram ↔ Singanallur', time: '25 min', fare: '₹15' },
    { name: 'Route 2C: Ukkadam ↔ RS Puram', time: '18 min', fare: '₹12' },
    { name: 'Route 3B: Gandhipuram ↔ Peelamedu', time: '22 min', fare: '₹14' },
    { name: 'Route 4D: Ukkadam ↔ Brookefields', time: '30 min', fare: '₹18' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <button 
            onClick={onBack}
            className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
        
        <div className="absolute top-4 right-4 z-10 text-center bg-white rounded-lg shadow-md px-3 py-2">
          <h3 className="font-semibold text-gray-900">Coimbatore</h3>
          <p className="text-xs text-gray-500">Tamil Nadu</p>
        </div>

        <div className="h-96 bg-gradient-to-br from-green-100 via-blue-50 to-green-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Coimbatore bus network visualization */}
              <circle cx="100" cy="160" r="8" fill="#3B82F6" />
              <circle cx="300" cy="100" r="8" fill="#EF4444" />
              <circle cx="200" cy="220" r="8" fill="#10B981" />
              <circle cx="250" cy="140" r="6" fill="#F59E0B" />
              <circle cx="150" cy="120" r="6" fill="#8B5CF6" />
              
              {/* Route connections */}
              <path
                d="M100,160 Q150,140 200,120 Q250,100 300,100"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M100,160 Q150,190 200,220"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M200,220 Q225,180 250,140"
                stroke="#F59E0B"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              
              {/* Location labels */}
              <text x="100" y="180" fontSize="8" textAnchor="middle" fill="#374151">Gandhipuram</text>
              <text x="300" y="120" fontSize="8" textAnchor="middle" fill="#374151">Singanallur</text>
              <text x="200" y="240" fontSize="8" textAnchor="middle" fill="#374151">Ukkadam</text>
              <text x="250" y="160" fontSize="8" textAnchor="middle" fill="#374151">RS Puram</text>
              <text x="150" y="140" fontSize="8" textAnchor="middle" fill="#374151">Peelamedu</text>
            </svg>
          </div>
          
          <div className="absolute top-16 left-4 right-4">
            <div className="bg-white rounded-lg shadow-md p-3">
              <div className="flex items-center space-x-2">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for a bus stop or route"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-32 right-4 flex flex-col space-y-2">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Plus size={20} />
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Minus size={20} />
            </button>
          </div>

          <div className="absolute bottom-4 right-4">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Navigation size={20} className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Nearby Bus Stops</h3>
          <div className="space-y-3">
            {busStops.map((stop, index) => (
              <button
                key={index}
                onClick={onStopSelected}
                className="w-full bg-gray-50 rounded-xl p-4 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{stop.name}</h4>
                    <p className="text-sm text-gray-500">{stop.stop}</p>
                    <div className="flex space-x-2 mt-1">
                      {stop.routes.map((route, routeIndex) => (
                        <span key={routeIndex} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {route}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Plus size={20} className="text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-4">Available Routes</h3>
          <div className="space-y-3">
            {availableRoutes.map((route, index) => (
              <button
                key={index}
                onClick={onStopSelected}
                className="w-full bg-gray-50 rounded-xl p-4 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Navigation size={20} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{route.name}</h4>
                    <p className="text-sm text-gray-500">{route.time} • {route.fare}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center p-2 text-blue-600">
            <MapPin size={24} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-400">
            <Search size={24} />
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