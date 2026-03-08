import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { CopyPlus, LayoutDashboard } from "lucide-react";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] px-15 py-10">
      <div className="">
        <nav className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <Heading
            small="Seller Panel"
            heading={
              <h1 className="text-3xl md:text-4xl font-heading text-[var(--text-main)]">
                Become a<span className="text-[var(--accent-secondary)] "> Seller</span>
              </h1>
            }
          />

          {/* Right */}
          <div className="flex flex-wrap gap-10">
            <Link
              to="/add-product"
              className="uppercase flex items-center justify-center gap-2 font-medium text-xs text-[var(--text-secondary)]/90 hover:text-[var(--accent-secondary)] "
            >
              <CopyPlus size={16} /> Add Item
            </Link>

            <Link
              to="/all-item"
              className="uppercase flex items-center justify-center gap-2 font-medium text-xs text-[var(--text-secondary)]/90 hover:text-[var(--accent-secondary)] "
            >
              <LayoutDashboard size={16} /> View All Items
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SellerDashboard;
