import React from "react";
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

const boxStyle = (row, col) => ({
  gridRow: row,
  gridColumn: col,
  aspectRatio: "1 / 1",
  width: "100%",
  maxWidth: "clamp(80px, 10vw, 150px)", // 🔥 responsive size
  overflow: "hidden",
});

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const Gallery = () => {
  return (
    <>
      {/* 🔥 Center Fixed Text */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center text-center pointer-events-none px-4">
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-medium text-[var(--text-main)] tracking-wider">
            RENT EASE
          </h1>
          <p className="mt-2 text-xs sm:text-lg md:text-2xl text-[var(--text-secondary)]">
            Premium products at your fingertips
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div
        style={{
          backgroundColor: "var(--bg-main)",
          display: "grid",
          gridTemplateColumns: `repeat(8, 1fr)`,
          gridTemplateRows: `repeat(10, 1fr)`,
          gap: "6px",
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
          padding: "10px",
        }}
      >
        {/* SAME layout */}
        <div style={boxStyle(1, 2)}>
          <img src={bed1} style={imgStyle} />
        </div>
        <div style={boxStyle(1, 6)}>
          <img src={cam1} style={imgStyle} />
        </div>

        <div style={boxStyle(2, 1)}>
          <img src={sofa1} style={imgStyle} />
        </div>
        <div style={boxStyle(2, 7)}>
          <img src={fridge1} style={imgStyle} />
        </div>

        <div style={boxStyle(3, 3)}>
          <img src={bed2} style={imgStyle} />
        </div>
        <div style={boxStyle(3, 5)}>
          <img src={cam2} style={imgStyle} />
        </div>

        <div style={boxStyle(4, 2)}>
          <img src={sofa2} style={imgStyle} />
        </div>
        <div style={boxStyle(4, 8)}>
          <img src={fridge2} style={imgStyle} />
        </div>

        <div style={boxStyle(5, 4)}>
          <img src={bed3} style={imgStyle} />
        </div>
        <div style={boxStyle(5, 6)}>
          <img src={cam3} style={imgStyle} />
        </div>

        <div style={boxStyle(6, 1)}>
          <img src={sofa3} style={imgStyle} />
        </div>
        <div style={boxStyle(6, 7)}>
          <img src={fridge3} style={imgStyle} />
        </div>

        <div style={boxStyle(7, 3)}>
          <img src={bed4} style={imgStyle} />
        </div>
        <div style={boxStyle(7, 5)}>
          <img src={cam4} style={imgStyle} />
        </div>

        <div style={boxStyle(8, 2)}>
          <img src={sofa4} style={imgStyle} />
        </div>
        <div style={boxStyle(8, 8)}>
          <img src={fridge4} style={imgStyle} />
        </div>

        <div style={boxStyle(9, 4)}>
          <img src={bed5} style={imgStyle} />
        </div>
        <div style={boxStyle(9, 6)}>
          <img src={cam5} style={imgStyle} />
        </div>

        <div style={boxStyle(10, 1)}>
          <img src={sofa5} style={imgStyle} />
        </div>
        <div style={boxStyle(10, 7)}>
          <img src={fridge5} style={imgStyle} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
