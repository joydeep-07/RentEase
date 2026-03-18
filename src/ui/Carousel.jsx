import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import chair1 from "../assets/images/chair1.png";
import chair2 from "../assets/images/chair2.png";
import chair3 from "../assets/images/chair3.png";
import chair5 from "../assets/images/chair5.png";

const images = [chair1, chair2, chair3, chair5];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const itemsRef = useRef([]);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const getVisible = () => {
    const total = images.length;
    return [
      images[(index - 1 + total) % total], // left
      images[index], // center
      images[(index + 1) % total], // right
    ];
  };

  const animate = () => {
    const [left, center, right] = itemsRef.current;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 1.3 },
      onComplete: () => {
        setIndex((prev) => (prev + 1) % images.length);
      },
    });

    timelineRef.current = tl;

    gsap.set(left, {
      x: "-220%",
      scale: 0.84,
      opacity: 0.35,
      rotateY: 22,
      z: -120,
     
    });

    gsap.set(center, {
      x: "0%",
      scale: 1.22,
      opacity: 1,
      rotateY: 0,
      z: 20,
    });

    gsap.set(right, {
      x: "220%",
      scale: 0.84,
      opacity: 0.5,
      rotateY: -22,
      z: -120,
    });

    tl.to(
      left,
      {
        x: "-420%", 
        scale: 0.65,
        opacity: 0,
        rotateY: 45,
        z: -220,
        duration: 1.1, 
        ease: "power3.in", 
      },
      0.2,
    ); 
    tl.to(
      center,
      {
        x: "-200%",
        scale: 0.84,
        opacity: 0.5,
        rotateY: 22,
        z: -120,
      },
      0,
    );

    // Right → moves to center
    tl.to(
      right,
      {
        x: "0%",
        scale: 1.22,
        opacity: 1,
        rotateY: 0,
        z: 20,
      },
      0,
    );

    // gentle overall pulse 
    tl.to(
      containerRef.current,
      {
        scale: 1.012,
        duration: 0.8,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      },
      0.3,
    );
  };

  useEffect(() => {
    animate();
  }, [index]);

  const visibleImages = getVisible();

  return (
    <div className="w-full flex justify-center items-center py-20 overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-[800px] h-[420px] flex items-center justify-center perspective-[1600px] overflow-hidden"
      >
        {visibleImages.map((img, i) => (
          <img
            key={`${img.src}-${i}-${index}`} 
            ref={(el) => (itemsRef.current[i] = el)}
            src={img}
            loading="lazy"
            alt="chair"
            className={`absolute w-[280px] object-contain drop-shadow-2xl pointer-events-none ${
              i === 1 ? "z-30" : "z-10"
            }`}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform, opacity, scale",
              backfaceVisibility: "hidden",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
