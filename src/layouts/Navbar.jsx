import React, { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Search from "../components/Search";
import { ShoppingCart, Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDetail from "../ui/UserDetail";
import SelectCity from "../ui/SelectCity";

import { Drawer, IconButton } from "@mui/material";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => setOpenSearch(true);
  const handleCloseSearch = () => setOpenSearch(false);

  return (
    <>
      <nav
        className="w-full h-16 px-4 md:px-8 flex items-center justify-between
        bg-[var(--bg-main)] backdrop-blur-md
        border-b border-[var(--border-light)]/10
        sticky top-0 z-50"
      >
        {/* Left */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-xl md:text-2xl font-fuzzy font-semibold tracking-wide select-none"
          >
            <span className="text-[var(--accent-primary)]">Rent</span>
            <span className="text-[var(--text-main)]">Ease</span>
          </Link>

          <div className="hidden sm:block">
            <SelectCity />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden md:block">
            <Search />
          </div>

          {/* Mobile Search Icon */}
          <button
            onClick={handleOpenSearch}
            className="md:hidden text-[var(--text-main)]"
          >
            <SearchIcon size={20} />
          </button>

          {/* Cart */}
          {isLogin && (
            <Link
              to="/cart"
              className="relative flex items-center text-[var(--text-secondary)] p-2"
            >
              <ShoppingCart size={19} />

              <span
                className="absolute -top-1 -right-1
                bg-[var(--sale)]
                text-white text-xs
                px-1.5 py-[1px]
                rounded-full"
              >
                2
              </span>
            </Link>
          )}

          {isLogin && <UserDetail />}

          {!isLogin && (
            <Link
              to="/auth"
              className="px-4 py-1.5 text-sm rounded-xs
              bg-[var(--accent-primary)] text-white
              hover:opacity-90 transition"
            >
              Login
            </Link>
          )}

          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Search Drawer */}
      <Drawer
        anchor="top"
        open={openSearch}
        onClose={handleCloseSearch}
        PaperProps={{
          sx: {
            background: "var(--bg-main)",
            borderBottom: "1px solid var(--border-light)",
            padding: "20px",
          },
        }}
      >
        <Search />
      </Drawer>
    </>
  );
};

export default Navbar;
