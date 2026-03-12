import React from 'react'
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import CurvedLoop from '../components/CurvedLoop';

const Home = () => {
    
  return (
    <>
      <Hero />
      <CurvedLoop
        marqueeText="Rent what you need when you need it without buying."
        speed={2}
        curveAmount={-310}
        direction="right"
        interactive
        className="text-5xl"
      />
      <Testimonials />
    </>
  );
}

export default Home