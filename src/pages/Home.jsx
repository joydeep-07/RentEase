import React from "react";
import Hero from "../ui/Hero";
import Testimonials from "../ui/Testimonials";
import CurvedLoop from "../components/CurvedLoop";
import Categories from "../ui/Categories";
import WhyUs from "../ui/WhyUs";
import Featured from "../ui/Featured";
import Landing from "../ui/Landing";
import Gallery from "../ui/Gallery";

const Home = () => {
  return (
    <>
      {/* MOBILE ONLY */}
      <div className="md:hidden bg-[var(--bg-card)]/40">
        <Landing />
      </div>

      {/* LAPTOP / DESKTOP ONLY */}
      <div className="hidden md:flex w-full items-center justify-center">
        <Gallery />
      </div>

      {/* COMMON SECTION */}
      <div className="relative z-[10]">
        <Categories />
        <Featured />
        <WhyUs />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
