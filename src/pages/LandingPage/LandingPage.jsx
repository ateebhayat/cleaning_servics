import React, { useEffect } from 'react';
import Hero from '@components/Hero/Hero';
import './landingpage.scss';
import { scrollFunctions } from '../../utils/common';

const LandingPage = () => {
  useEffect(() => {
    scrollFunctions();
  }, [location.pathname]);

  return (
    <div className="page-bg">
      <Hero />
    </div>
  );
};

export default LandingPage;
