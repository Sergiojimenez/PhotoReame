import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import DesignSystem from './DesignSystem';
import Pricing from './Pricing';
import LoginPage from './LoginPage';

const App: React.FC = () => {
  // State to track the current route from the URL hash
  const [route, setRoute] = useState(window.location.hash);

  // Effect to listen for hash changes (e.g., browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Determine which component to render based on the hash
  switch (route) {
    case '#/design-system':
      return <DesignSystem />;
    case '#/pricing':
      return <Pricing />;
    case '#/login':
      return <LoginPage />;
    default:
      return <LandingPage />;
  }
};

export default App;
