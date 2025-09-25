import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationPermissionProps {
  onGrantPermission: () => void;
  onBack: () => void;
}

export const LocationPermission: React.FC<LocationPermissionProps> = ({ onGrantPermission, onBack }) => {
  const handleLocationAccess = async () => {
    try {
      await navigator.geolocation.getCurrentPosition(() => {
        onGrantPermission();
      });
    } catch (error) {
      console.error('Location access denied:', error);
      // For demo purposes, we'll proceed anyway
      onGrantPermission();
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center">
              <Navigation size={80} className="text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Enable Location Access for Coimbatore</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          To track buses in Coimbatore in real-time, we need access to your device's location. 
          This helps us find the nearest bus stops and routes around you.
        </p>

        <button
          onClick={handleLocationAccess}
          className="w-full bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
        >
          Allow Location Access
        </button>

        <div className="mt-8">
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <MapPin size={24} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Navigation size={24} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Routes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <MapPin size={24} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Plan</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Navigation size={24} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Tickets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};