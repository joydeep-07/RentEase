import React from "react";
import { data } from "../utils/data";
import ItemCards from "./ItemCards";

const Suggestion = ({ category, query, currentIds = [] }) => {
  const q = query?.toLowerCase() || "";

  const suggestions = data
    .filter((item) => !currentIds.includes(item.id)) // avoid duplicates
    .filter((item) => {
      return (
        item.category === category ||
        item.productName.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
      );
    })
    .slice(0, 8);

  if (suggestions.length === 0) return null;

  return (
    <div className="mt-10 mb-6">
      <h1 className="text-2xl font-heading sm:text-3xl pb-10 text-[var(--text-main)] ">
       You might also like
      </h1>

      <ItemCards items={suggestions} />
    </div>
  );
};

export default Suggestion;
