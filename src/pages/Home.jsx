import React from "react";
import Hero from "../ui/Hero";
import Testimonials from "../ui/Testimonials";
import CurvedLoop from "../components/CurvedLoop";
import Categories from "../ui/Categories";
import WhyUs from "../ui/WhyUs";
import Featured from "../ui/Featured";
import Gallery from "../ui/Gallery";

const Home = () => {
  return (
    <>
      <Gallery />
      <div className="relative z-[10] ">
        <CurvedLoop
          marqueeText="Renting should be simple, flexible and affordable."
          speed={2}
          curveAmount={150}
          direction="right"
          interactive
          className="md:text-6xl md:block hidden"
        />
        <Categories />
        <Featured />
        <WhyUs />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
