import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bed1 from "../assets/bed/bed1.jpg";
import bed2 from "../assets/bed/bed2.jpg";
import bed3 from "../assets/bed/bed3.jpg";
import bed4 from "../assets/bed/bed4.jpg";

import cam1 from "../assets/camera/cam1.jpg";
import cam2 from "../assets/camera/cam2.jpg";
import cam3 from "../assets/camera/cam3.jpg";
import cam4 from "../assets/camera/cam4.jpg";
import cam6 from "../assets/camera/cam6.jpg";
import cam7 from "../assets/camera/cam7.jpg";
import cam8 from "../assets/camera/cam8.jpg";

import sofa1 from "../assets/sofa/sofa1.jpg";
import sofa2 from "../assets/sofa/sofa2.jpg";
import sofa3 from "../assets/sofa/sofa3.jpg";

import fridge1 from "../assets/fridge/fridge1.jpg";
import fridge2 from "../assets/fridge/fridge2.jpg";
import fridge3 from "../assets/fridge/fridge3.jpg";

import TextPressure from "../components/TextPressure";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const imagesRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

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
    overflow: "hidden",
  });

  const imgStyle = {
    width: isMobile ? "70%" : "80%",
    height: isMobile ? "70%" : "80%",
    objectFit: "cover",
    display: "block",
    padding: isMobile ? "4px" : "6px",
    border: "1px solid var(--text-muted)",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((el, i) => {
        if (!el) return;

        const direction = i % 2 === 0 ? 1 : -1;
        const intensity = ((i % 3) + 1) * 8;

        gsap.to(el, {
          xPercent: direction * intensity,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top top",
            scrub: 3.2,
          },
        });

        gsap.fromTo(
          el,
          { scale: 1, x: 0 },
          {
            scale: 0.5,
            x: direction * 40,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 20%",
              end: "top top",
              scrub: true,
            },
          },
        );
      });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <div>
      {/* Center Text */}
      <div className="fixed inset-0 z-[9] flex items-center justify-center text-center pointer-events-none px-4">
        <div>
          <TextPressure
            text="Rent Ease."
            flex
            stroke
            width
            weight
            italic
            textColor="var(--text-main)"
            strokeColor="var(--text-main)"
            minFontSize={36}
          />
          <p className="mt-2 text-xs sm:text-lg md:text-3xl font-fuzzy text-[var(--text-main)]">
            Commitment Issues ?? Just rent everything !
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div
        className="w-full overflow-x-hidden md:px-5"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(8, 1fr)",
          gridTemplateRows: isMobile ? "auto" : "repeat(8, 1fr)", // ✅ only 8 rows
          gap: isMobile ? "10px" : "6px",
          width: "100%",
          padding: isMobile ? "10px" : "px",
        }}
      >
        {/* Row 1 */}
        <div style={boxStyle(1, 2)} ref={(el) => (imagesRef.current[0] = el)}>
          <img src={bed1} style={imgStyle} />
        </div>
        <div style={boxStyle(1, 4)} ref={(el) => (imagesRef.current[1] = el)}>
          <img src={cam6} style={imgStyle} />
        </div>
        <div style={boxStyle(1, 6)} ref={(el) => (imagesRef.current[2] = el)}>
          <img src={cam1} style={imgStyle} />
        </div>

        {/* Row 2 */}
        <div style={boxStyle(2, 1)} ref={(el) => (imagesRef.current[3] = el)}>
          <img src={sofa1} style={imgStyle} />
        </div>
        <div style={boxStyle(2, 5)} ref={(el) => (imagesRef.current[4] = el)}>
          <img src={cam7} style={imgStyle} />
        </div>
        <div style={boxStyle(2, 7)} ref={(el) => (imagesRef.current[5] = el)}>
          <img src={fridge1} style={imgStyle} />
        </div>

        {/* Row 3 */}
        <div style={boxStyle(3, 3)} ref={(el) => (imagesRef.current[6] = el)}>
          <img src={bed2} style={imgStyle} />
        </div>
        <div style={boxStyle(3, 5)} ref={(el) => (imagesRef.current[7] = el)}>
          <img src={cam2} style={imgStyle} />
        </div>
        <div style={boxStyle(3, 7)} ref={(el) => (imagesRef.current[8] = el)}>
          <img src={cam8} style={imgStyle} />
        </div>

        {/* Row 4 */}
        <div style={boxStyle(4, 2)} ref={(el) => (imagesRef.current[9] = el)}>
          <img src={sofa2} style={imgStyle} />
        </div>
        <div style={boxStyle(4, 8)} ref={(el) => (imagesRef.current[10] = el)}>
          <img src={fridge2} style={imgStyle} />
        </div>

        {/* Row 5 */}
        <div style={boxStyle(5, 4)} ref={(el) => (imagesRef.current[11] = el)}>
          <img src={bed3} style={imgStyle} />
        </div>
        <div style={boxStyle(5, 6)} ref={(el) => (imagesRef.current[12] = el)}>
          <img src={cam3} style={imgStyle} />
        </div>

        {/* Row 6 */}
        <div style={boxStyle(6, 1)} ref={(el) => (imagesRef.current[13] = el)}>
          <img src={sofa3} style={imgStyle} />
        </div>
        <div style={boxStyle(6, 7)} ref={(el) => (imagesRef.current[14] = el)}>
          <img src={fridge3} style={imgStyle} />
        </div>

        {/* Row 7 */}
        <div style={boxStyle(7, 3)} ref={(el) => (imagesRef.current[15] = el)}>
          <img src={bed4} style={imgStyle} />
        </div>
        <div style={boxStyle(7, 5)} ref={(el) => (imagesRef.current[16] = el)}>
          <img src={cam4} style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
