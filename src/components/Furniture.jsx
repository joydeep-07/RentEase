import React from "react";
import { data } from "../utils/data";

const Furniture = () => {
  const furnitureItems = data.filter((item) => item.category === "Furniture");

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold text-[var(--text-main)] mb-8">
        Furniture
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-[var(--border-light)]/30 bg-[var(--bg-secondary)] rounded-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.productName}
              className="w-full h-52 object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[var(--text-main)]">
                {item.productName}
              </h2>

              <p className="text-sm text-[var(--text-secondary)]">
                {item.brand}
              </p>

              <p className="text-[var(--accent-secondary)] font-semibold">
                ₹{item.pricePerDay} / day
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
