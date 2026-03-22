import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bed1 from "../assets/bed/bed1.jpg";
import bed2 from "../assets/bed/bed2.jpg";
import bed3 from "../assets/bed/bed3.jpg";
import bed4 from "../assets/bed/bed4.jpg";
import bed5 from "../assets/bed/bed5.jpg";

import cam1 from "../assets/camera/cam1.jpg";
import cam2 from "../assets/camera/cam2.jpg";
import cam3 from "../assets/camera/cam3.jpg";
import cam4 from "../assets/camera/cam4.jpg";
import cam5 from "../assets/camera/cam5.jpg";

import sofa1 from "../assets/sofa/sofa1.jpg";
import sofa2 from "../assets/sofa/sofa2.jpg";
import sofa3 from "../assets/sofa/sofa3.jpg";
import sofa4 from "../assets/sofa/sofa4.jpg";
import sofa5 from "../assets/sofa/sofa5.jpg";

import fridge1 from "../assets/fridge/fridge1.jpg";
import fridge2 from "../assets/fridge/fridge2.jpg";
import fridge3 from "../assets/fridge/fridge3.jpg";
import fridge4 from "../assets/fridge/fridge4.jpg";
import fridge5 from "../assets/fridge/fridge5.jpg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const imagesRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const boxStyle = (row, col) => ({
    gridRow: isMobile ? "auto" : row,
    gridColumn: isMobile ? "auto" : col,
    aspectRatio: "1 / 1",
    width: "100%",
    maxWidth: isMobile ? "100%" : "clamp(80px, 10vw, 150px)", // 🔥 mobile full width
    borderRadius: isMobile ? "12px" : "0px",
    overflow: "hidden",
  });

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  useEffect(() => {
    imagesRef.current.forEach((el) => {
      if (!el) return;

      gsap.to(el, {
        xPercent: Math.random() > 0.5 ? 20 : -20,
        ease: "power1.out",
        force3D: true,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top top",
          scrub: 2.5,
        },
      });

      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        onEnter: () => {
          gsap.to(el, {
            scale: 0.5,
            duration: 0.3,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(el, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    });
  }, []);

  return (
    <div>
      {/* Center Fixed Text */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center text-center pointer-events-none px-4">
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-medium text-[var(--text-main)] tracking-wider">
            RENT EASE
          </h1>
          <p className="mt-2 text-xs sm:text-lg md:text-4xl text-[var(--text-secondary)]">
            Premium products at your fingertips
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)" // 🔥 mobile fix
            : "repeat(8, 1fr)", // ✅ desktop unchanged
          gridTemplateRows: isMobile ? "auto" : "repeat(10, 1fr)",
          gap: isMobile ? "10px" : "6px",
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
          padding: "10px",
        }}
      >
        {/* SAME layout — desktop untouched */}

        <div style={boxStyle(1, 2)} ref={(el) => (imagesRef.current[0] = el)}>
          <img src={bed1} style={imgStyle} />
        </div>
        <div style={boxStyle(1, 6)} ref={(el) => (imagesRef.current[1] = el)}>
          <img src={cam1} style={imgStyle} />
        </div>

        <div style={boxStyle(2, 1)} ref={(el) => (imagesRef.current[2] = el)}>
          <img src={sofa1} style={imgStyle} />
        </div>
        <div style={boxStyle(2, 7)} ref={(el) => (imagesRef.current[3] = el)}>
          <img src={fridge1} style={imgStyle} />
        </div>

        <div style={boxStyle(3, 3)} ref={(el) => (imagesRef.current[4] = el)}>
          <img src={bed2} style={imgStyle} />
        </div>
        <div style={boxStyle(3, 5)} ref={(el) => (imagesRef.current[5] = el)}>
          <img src={cam2} style={imgStyle} />
        </div>

        <div style={boxStyle(4, 2)} ref={(el) => (imagesRef.current[6] = el)}>
          <img src={sofa2} style={imgStyle} />
        </div>
        <div style={boxStyle(4, 8)} ref={(el) => (imagesRef.current[7] = el)}>
          <img src={fridge2} style={imgStyle} />
        </div>

        <div style={boxStyle(5, 4)} ref={(el) => (imagesRef.current[8] = el)}>
          <img src={bed3} style={imgStyle} />
        </div>
        <div style={boxStyle(5, 6)} ref={(el) => (imagesRef.current[9] = el)}>
          <img src={cam3} style={imgStyle} />
        </div>

        <div style={boxStyle(6, 1)} ref={(el) => (imagesRef.current[10] = el)}>
          <img src={sofa3} style={imgStyle} />
        </div>
        <div style={boxStyle(6, 7)} ref={(el) => (imagesRef.current[11] = el)}>
          <img src={fridge3} style={imgStyle} />
        </div>

        <div style={boxStyle(7, 3)} ref={(el) => (imagesRef.current[12] = el)}>
          <img src={bed4} style={imgStyle} />
        </div>
        <div style={boxStyle(7, 5)} ref={(el) => (imagesRef.current[13] = el)}>
          <img src={cam4} style={imgStyle} />
        </div>

        <div style={boxStyle(8, 2)} ref={(el) => (imagesRef.current[14] = el)}>
          <img src={sofa4} style={imgStyle} />
        </div>
        <div style={boxStyle(8, 8)} ref={(el) => (imagesRef.current[15] = el)}>
          <img src={fridge4} style={imgStyle} />
        </div>

        <div style={boxStyle(9, 4)} ref={(el) => (imagesRef.current[16] = el)}>
          <img src={bed5} style={imgStyle} />
        </div>
        <div style={boxStyle(9, 6)} ref={(el) => (imagesRef.current[17] = el)}>
          <img src={cam5} style={imgStyle} />
        </div>

        <div style={boxStyle(10, 1)} ref={(el) => (imagesRef.current[18] = el)}>
          <img src={sofa5} style={imgStyle} />
        </div>
        <div style={boxStyle(10, 7)} ref={(el) => (imagesRef.current[19] = el)}>
          <img src={fridge5} style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
