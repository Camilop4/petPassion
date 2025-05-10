import React from 'react';
import HeroSection from '../components/LandingPage/HeroSection';
import FeaturesSection from '../components/LandingPage/FeatureSection';
import CallToAction from '../components/LandingPage/CallToAction';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      {/* Otras secciones de la landing page */}
    </div>
  );
}

export default HomePage;