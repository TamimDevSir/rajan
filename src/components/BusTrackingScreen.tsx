import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, MapPin, Navigation, Plus, Minus } from 'lucide-react';

interface BusTrackingScreenProps {
  onBack: () => void;
}

export const BusTrackingScreen: React.FC<BusTrackingScreenProps> = ({ onBack }) => {
  const [arrivalTime, setArrivalTime] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setArrivalTime((prev) => (prev > 1 ? prev - 1 : 3));
    }, 30000); // Update every 30 seconds for demo

    return () => clearInterval(interval);
  }, []);

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
          <h3 className="font-semibold text-gray-900">Route 1A</h3>
          <p className="text-xs text-gray-500">Gandhipuram - Singanallur</p>
        </div>

        <div className="absolute top-16 right-4 z-10 bg-blue-500 text-white rounded-lg px-3 py-1 text-sm">
          Arrives in {arrivalTime} min
        </div>

        <div className="h-96 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Coimbatore route path */}
              <path
                d="M60,240 Q120,200 180,210 Q240,180 300,190 Q340,170 380,180"
                stroke="#3B82F6"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Bus stops */}
              <circle cx="80" cy="225" r="8" fill="#10B981" />
              <circle cx="180" cy="210" r="6" fill="#3B82F6" />
              <circle cx="280" cy="185" r="6" fill="#F59E0B" />
              <circle cx="360" cy="175" r="8" fill="#EF4444" />
              
              {/* Stop labels */}
              <text x="80" y="245" fontSize="8" textAnchor="middle" fill="#374151">Gandhipuram</text>
              <text x="180" y="230" fontSize="8" textAnchor="middle" fill="#374151">RS Puram</text>
              <text x="280" y="205" fontSize="8" textAnchor="middle" fill="#374151">Peelamedu</text>
              <text x="360" y="195" fontSize="8" textAnchor="middle" fill="#374151">Singanallur</text>
              
              {/* Animated bus icon */}
              <circle cx="120" cy="215" r="10" fill="#FFB020">
                <animateMotion dur="15s" repeatCount="indefinite">
                  <path d="M80,225 Q180,210 360,175" />
                </animateMotion>
              </circle>
              
              {/* Bus number */}
              <text x="120" y="220" fontSize="6" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">
                TN33
                <animateMotion dur="15s" repeatCount="indefinite">
                  <path d="M80,225 Q180,210 360,175" />
                </animateMotion>
              </text>
            </svg>
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
        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Navigation size={16} className="text-white" />
              </div>
              <span className="font-semibold text-gray-900">Bus arrives in {arrivalTime} min</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Gandhipuram Town Hall</span> → TN-33-N-2665
          </div>
          <div className="text-sm text-blue-600 mt-1">Bus Stand</div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
            <MapPin size={20} className="mr-2" />
            Full Route
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-0.5 h-8 bg-gray-300 mt-1"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Gandhipuram Town Hall</h4>
                <p className="text-sm text-gray-500">You are here</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600">Now</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-0.5 h-8 bg-gray-300 mt-1"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">RS Puram Junction</h4>
                <p className="text-sm text-gray-500">Next stop</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-600">6 min</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-0.5 h-8 bg-gray-300 mt-1"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Peelamedu Signal</h4>
                <p className="text-sm text-gray-500">Intermediate stop</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-600">12 min</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Singanallur IT Park</h4>
                <p className="text-sm text-gray-500">Final destination</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-600">18 min</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="font-medium text-gray-900 mb-2">Bus Information</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Bus Number:</span>
              <p className="font-medium">TN-33-N-2665</p>
            </div>
            <div>
              <span className="text-gray-500">Route:</span>
              <p className="font-medium">1A</p>
            </div>
            <div>
              <span className="text-gray-500">Fare:</span>
              <p className="font-medium">₹15</p>
            </div>
            <div>
              <span className="text-gray-500">Seats Available:</span>
              <p className="font-medium text-green-600">12</p>
            </div>
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