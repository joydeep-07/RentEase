import React from "react";
import chair from "../assets/images/chair.png";

const Landing = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 md:px-12 py-10 md:py-16 flex justify-center items-center">
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between rounded-[30px] md:rounded-[50px] bg-[var(--bg-main)]/50 overflow-hidden px-5 sm:px-8 md:px-20 py-10 md:py-16 shadow-sm">
        {/* LEFT CONTENT */}
        <div className="flex-1 z-10 text-left ">
          <h1 className="text-2xl sm:text-3xl md:text-3xl xl:text-5xl font-medium font-fuzzy leading-tight tracking-tight">
            Rent what you need{" "}
            <span className="text-[var(--accent-primary)]">
              when you need it
            </span>{" "}
            without buying.
          </h1>

          <p className="mt-4 text-[var(--text-muted)] max-w-md mx-auto md:mx-0 text-xs sm:text-sm leading-relaxed">
            Discover stylish, comfortable, and affordable furniture for your
            home. Rent what you love, upgrade anytime with zero hassle.
          </p>

          <div className="flex items-center justify-start gap-4 mt-6">
            <button className="relative overflow-hidden px-6 sm:px-8 py-3 rounded-lg font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-blue)]/20 shadow-sm transition-all duration-500 ease-out group sm:w-auto">
              <span className="flex items-center uppercase text-xs justify-center gap-2">
                Explore
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <img
            src={chair}
            alt="chair"
            className="w-[200px] sm:w-[240px] md:w-[320px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-500"
          />
        </div>

        {/* SUBTLE GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--accent-primary)]/80 opacity-[0.03] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Landing;
