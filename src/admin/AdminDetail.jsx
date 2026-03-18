import { Bell, CopyPlus, LayoutDashboard, LogOut, Shield, ShieldCheck, User } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../redux/slices/adminSlice";

const AdminDetail = () => {
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ FIXED: correct state
  const isAdmin = useSelector((state) => state.admin.isAdminAuthenticated);

  const menuItems = [
    { label: "Orders", icon: Bell, path: "/seller" },
    { label: "Add Item", icon: CopyPlus, path: "/add-item" },
    { label: "View All Items", icon: LayoutDashboard, path: "/all-item" },
    { type: "divider" },
    { label: "Logout", icon: LogOut, danger: true },
  ];

  const toggleDropdown = () => {
    // ✅ FIXED
    if (!isAdmin) {
      navigate("/admin");
      return;
    }
    setOpen((prev) => !prev);
  };

  const handleClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }

    // ✅ FIXED
    if (item.label === "Logout") {
      dispatch(logoutAdmin());
      navigate("/");
    }

    setOpen(false);
  };

  useEffect(() => {
    if (!dropdownRef.current) return;

    if (open) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
        pointerEvents: "auto",
      });

      gsap.fromTo(
        dropdownRef.current.children,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",
        },
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -12,
        scale: 0.95,
        duration: 0.25,
        ease: "power3.inOut",
        pointerEvents: "none",
      });
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="relative border border-[var(--border-light)] overflow-hidden p-2.5 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-green)]"
      >
        <div className="flex items-center gap-2 uppercase text-xs">
          <ShieldCheck className="text-[var(--accent-green)]" size={18} /> admin
          panel
        </div>
      </button>

      {/* Dropdown */}
      {isAdmin && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-3 w-64 rounded-sm 
          border border-[var(--border-light)]/30 
          bg-[var(--bg-secondary)] backdrop-blur-xl
          shadow-xl px-4 py-5 opacity-0 scale-95 pointer-events-none"
        >
          {/* Admin Info */}
          <div className="flex items-center gap-3 border-b border-[var(--border-light)]/30 pb-4 mb-4">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center
              bg-[var(--accent-primary)]/15 border border-[var(--border-light)] 
              text-[var(--accent-primary)]"
            >
              <User size={22} />
            </div>

            <div>
              <p className="font-medium text-[var(--text-main)]">Admin</p>
              <p className="text-xs text-[var(--text-secondary)]">
                admin@panel.com
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-2 text-sm">
            {menuItems.map((item, index) => {
              if (item.type === "divider") {
                return (
                  <div
                    key={index}
                    className="border-t border-[var(--border-light)]/30 my-2"
                  />
                );
              }

              const Icon = item.icon;

              return (
                <button
                  key={index}
                  onClick={() => handleClick(item)}
                  className={`flex items-center gap-3 p-2 rounded-lg transition
                  ${
                    item.danger
                      ? "text-[var(--sale)] hover:text-red-700"
                      : "hover:text-[var(--accent-secondary)]"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDetail;
