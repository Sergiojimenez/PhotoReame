import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Pricing from './Pricing';
import DesignSystem from './DesignSystem';
import LoginPage from './LoginPage';
import HolaSergioPage from './HolaSergioPage';
import RenamerPage from './RenamerPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Simple router based on hash
  const getPageComponent = () => {
    // Normalize route: remove leading # and optional /
    const path = route.replace(/^#\/?/, '');

    if (path.startsWith('pricing')) {
      return Pricing;
    }
    if (path.startsWith('design-system')) {
      return DesignSystem;
    }
    if (path.startsWith('login')) {
      return LoginPage;
    }
    if (path.startsWith('hola-sergio')) {
      return HolaSergioPage;
    }
    if (path.startsWith('renamer')) {
      return RenamerPage;
    }
    // Default to LandingPage for home, features, etc.
    return LandingPage;
  };

  const PageComponent = getPageComponent();

  // Add a key to ensure the component remounts on route change,
  // which is useful for triggering effects like scrolling on the landing page.
  return <PageComponent key={route} />;
};

export default App;
