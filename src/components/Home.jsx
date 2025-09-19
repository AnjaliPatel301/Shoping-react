
import React from 'react';
import Hero from './Hero';
import Products from './Products';

const Home = () => {
  const handleMoreInfo = () => {
    alert('More info coming soon!');
  };

  return (
   <div>
    <Hero/>
    <Products/>
    </div>
  );
};

export default Home;
