import React from "react";
import Hero from "../ui/Hero";
import Testimonials from "../ui/Testimonials";
import CurvedLoop from "../components/CurvedLoop";
import Categories from "../ui/Categories";
import WhyUs from "../ui/WhyUs";
import Featured from "../ui/Featured";
import Landing from "../ui/Landing";

const Home = () => {
  return (
    <>
      <div className="bg-[var(--bg-card)]/40 ">
        <Landing />
        <Categories />
      </div>

      <Featured />
      <WhyUs />
      {/* <CurvedLoop
        marqueeText="Rent what you need when you need it without buying."
        speed={1}
        curveAmount={-310}
        direction="right"
        interactive
        className=" md:text-6xl text-8xl"
      /> */}
      <Testimonials />
    </>
  );
};

export default Home;
