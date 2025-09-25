import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { LocationPermission } from './components/LocationPermission';
import { RouteScreen } from './components/RouteScreen';
import { BusStopsScreen } from './components/BusStopsScreen';
import { BusTrackingScreen } from './components/BusTrackingScreen';

type AppScreen = 'login' | 'location' | 'route' | 'busStops' | 'tracking';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('login');
  const [screenHistory, setScreenHistory] = useState<AppScreen[]>(['login']);

  const handleLogin = () => {
    navigateToScreen('location');
  };

  const handleLocationPermission = () => {
    navigateToScreen('route');
  };

  const handleRouteSelected = () => {
    navigateToScreen('busStops');
  };

  const handleStopSelected = () => {
    navigateToScreen('tracking');
  };

  const navigateToScreen = (screen: AppScreen) => {
    setScreenHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const handleGoBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = screenHistory.slice(0, -1);
      const previousScreen = newHistory[newHistory.length - 1];
      setScreenHistory(newHistory);
      setCurrentScreen(previousScreen);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'location':
        return <LocationPermission onGrantPermission={handleLocationPermission} onBack={handleGoBack} />;
      case 'route':
        return <RouteScreen onRouteSelected={handleRouteSelected} onBack={handleGoBack} />;
      case 'busStops':
        return <BusStopsScreen onStopSelected={handleStopSelected} onBack={handleGoBack} />;
      case 'tracking':
        return <BusTrackingScreen onBack={handleGoBack} />;
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return (
    <div className="font-sans antialiased">
      {renderScreen()}
    </div>
  );
}

export default App;