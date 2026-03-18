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
      images[(index - 1 + total) % total],
      images[index],
      images[(index + 1) % total],
    ];
  };

  const animate = () => {
    const [left, center, right] = itemsRef.current;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power2.inOut",
      },
      onComplete: () => {
        setIndex((prev) => (prev + 1) % images.length);
      },
    });

    timelineRef.current = tl;

    // positions (tight, no gap)
    gsap.set(left, {
      x: "-250%",
      scale: 0.85,
      opacity: 0.2,
      rotateY: 15,
      z: -80,
    });

    gsap.set(center, {
      x: "0%",
      scale: 1.2,
      opacity: 1,
      rotateY: 0,
      z: 1,
    });

    gsap.set(right, {
      x: "250%",
      scale: 0.85,
      opacity: 0.7,
      rotateY: -15,
      z: -80,
    });

    // all move together
   tl.to(
     left,
     {
       opacity: 0.4,
       duration: 0.6,
       ease: "sine.out",
     },
     0,
   );

   tl.to(
     left,
     {
       opacity: 0,
       duration: 0.6,
       ease: "expo.in",
     },
     0.6,
   );

    tl.to(
      center,
      {
        x: "-90%",
        scale: 0.85,
        opacity: 0.7,
        rotateY: 15,
        z: -80,
      },
      0,
    );

    tl.to(
      right,
      {
        x: "0%",
        scale: 1.2,
        opacity: 1,
        rotateY: 0,
        z: 0,
      },
      0,
    );

    // subtle smooth motion
    tl.to(
      containerRef.current,
      {
        scale: 1.01,
        duration: 0.6,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      },
      0,
    );
  };

  useEffect(() => {
    animate();
  }, [index]);

  const visibleImages = getVisible();

  return (
    <div className="w-full flex justify-center items-center py-20 overflow-hidden ">
      <div
        ref={containerRef}
        className="relative w-[700px] h-[380px] flex items-center justify-center perspective-[1400px]"
      >
        {visibleImages.map((img, i) => (
          <img
            key={`${img}-${i}`}
            ref={(el) => (itemsRef.current[i] = el)}
            src={img}
            loading="lazy"
            alt="chair"
            className={`absolute w-[260px] object-contain drop-shadow-2xl ${
              i === 1 ? "z-30" : "z-10"
            }`}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
