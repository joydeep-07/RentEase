import React, { useState, useRef, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Search from "../components/Search";
import { ShoppingCart, Search as SearchIcon, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDetail from "../ui/UserDetail";
import SelectCity from "../ui/SelectCity";
import gsap from "gsap";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [openSearch, setOpenSearch] = useState(false);
  const drawerRef = useRef(null);

  const openDrawer = () => setOpenSearch(true);

  const closeDrawer = () => {
    gsap.to(drawerRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => setOpenSearch(false),
    });
  };

  useEffect(() => {
    if (openSearch) {
      gsap.fromTo(
        drawerRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.4, ease: "power3.out" },
      );
    }
  }, [openSearch]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="w-full h-16 px-4 md:px-8 flex items-center justify-between
        bg-[var(--bg-main)] backdrop-blur-md
        border-b border-[var(--border-light)]/10
        sticky top-0 z-50"
      >
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

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Search />
          </div>

          <button
            onClick={openDrawer}
            className="md:hidden text-[var(--text-main)]"
          >
            <SearchIcon size={20} />
          </button>

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
              className="px-7 py-2.5 text-sm rounded-full
              bg-[var(--accent-blue)] text-white
              hover:opacity-90 transition border border-[var(--border-light)] uppercase tracking-widest font-medium  "
            >
              Login
            </Link>
          )}

          <ThemeToggle />
        </div>
      </nav>

      {/* MOBILE SEARCH DRAWER */}
      {openSearch && (
        <div
          ref={drawerRef}
          className="fixed inset-0 z-[100] bg-[var(--bg-main)] p-6 md:hidden flex flex-col justify-between"
        >
          {/* Search */}
          <div>
            <Search onSearch={closeDrawer} />
          </div>

          {/* Bottom Close Button */}
          <div className="flex justify-center pb-6">
            <button
              onClick={closeDrawer}
              className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-light)]"
            >
              <ChevronUp size={26} className="text-[var(--text-main)]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
