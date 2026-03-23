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

import cam6 from "../assets/camera/cam6.jpg";
import cam7 from "../assets/camera/cam7.jpg";
import cam8 from "../assets/camera/cam8.jpg";
import cam9 from "../assets/camera/cam9.jpg";
import cam10 from "../assets/camera/cam10.jpg";

import sofa6 from "../assets/sofa/sofa6.jpg";
import sofa7 from "../assets/sofa/sofa7.jpg";
import sofa8 from "../assets/sofa/sofa8.jpg";
import sofa9 from "../assets/sofa/sofa9.jpg";
import sofa10 from "../assets/sofa/sofa10.jpg";
import TextPressure from "../components/TextPressure";

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
    maxWidth: "100%",
    borderRadius: isMobile ? "12px" : "0px",
    overflow: "hidden",
  });

  const imgStyle = {
    width: "80%",
    height: "80%",
    objectFit: "cover",
    display: "block",
  };

useEffect(() => {
  const ctx = gsap.context(() => {
    imagesRef.current.forEach((el, i) => {
      if (!el) return;

      // Horizontal movement Pattern
      const direction = i % 2 === 0 ? 1 : -1; // alternate
      const intensity = ((i % 3) + 1) * 8; // 8,16,24 variation

      // Horizontal movement
      gsap.to(el, {
        xPercent: direction * intensity,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top top",
          scrub: 3.2,
        },
      });

      //Shrink Animation
      gsap.fromTo(
        el,
        { scale: 1 },
        {
          scale: 0.5,
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

  const refreshTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);

  return () => {
    clearTimeout(refreshTimeout);
    ctx.revert();
  };
}, []);

  return (
    <div>
      {/* Center Fixed Text */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center text-center pointer-events-none px-4">
        <div>
          <div style={{ position: "relative" }}>
            <TextPressure
              text="Rent Ease."
              flex
              alpha={false}
              stroke={true}
              width
              weight
              italic
              textColor="var(--text-main)"
              strokeColor="var(--text-main)"
              minFontSize={36}
            />
          </div>
          <p className="mt-2 text-xs sm:text-lg md:text-3xl font-fuzzy text-[var(--text-main)]">
            Commitment Issues ?? Just rent everything !
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div
        className=" w-full "
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(8, 1fr)",
          gridTemplateRows: isMobile ? "auto" : "repeat(10, 1fr)",
          gap: isMobile ? "10px" : "6px",
          width: "100%",
          padding: isMobile ? "10px" : "0px",
        }}
      >
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

        {/* EXTRA IMAGES (added, no design change) */}

        <div style={boxStyle(1, 4)} ref={(el) => (imagesRef.current[20] = el)}>
          <img src={cam6} style={imgStyle} />
        </div>

        <div style={boxStyle(2, 5)} ref={(el) => (imagesRef.current[21] = el)}>
          <img src={cam7} style={imgStyle} />
        </div>

        <div style={boxStyle(3, 7)} ref={(el) => (imagesRef.current[22] = el)}>
          <img src={cam8} style={imgStyle} />
        </div>

        <div style={boxStyle(4, 4)} ref={(el) => (imagesRef.current[23] = el)}>
          <img src={cam9} style={imgStyle} />
        </div>

        <div style={boxStyle(5, 2)} ref={(el) => (imagesRef.current[24] = el)}>
          <img src={cam10} style={imgStyle} />
        </div>

        <div style={boxStyle(6, 4)} ref={(el) => (imagesRef.current[25] = el)}>
          <img src={sofa6} style={imgStyle} />
        </div>

        <div style={boxStyle(7, 6)} ref={(el) => (imagesRef.current[26] = el)}>
          <img src={sofa7} style={imgStyle} />
        </div>

        <div style={boxStyle(8, 4)} ref={(el) => (imagesRef.current[27] = el)}>
          <img src={sofa8} style={imgStyle} />
        </div>

        <div style={boxStyle(9, 2)} ref={(el) => (imagesRef.current[28] = el)}>
          <img src={sofa9} style={imgStyle} />
        </div>

        <div style={boxStyle(10, 5)} ref={(el) => (imagesRef.current[29] = el)}>
          <img src={sofa10} style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
