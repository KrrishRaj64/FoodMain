import React from 'react';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Accordion from '../components/Accordion';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Hero />
      <Timeline />
      <Accordion />
    </div>
  );
};

export default Home;
