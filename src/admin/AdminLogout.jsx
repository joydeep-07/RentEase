import React from "react";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/admin");
  };

  return (
    <button
      onClick={handleLogout}
      className=" relative overflow-hidden px-8 sm:px-10 md:px-7 py-3 sm:py-3.5 md:py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--sale)] hover:bg-[var(--sale)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--sale)]/20 shadow-sm transition-all duration-500 ease-out group w-full sm:w-auto"
    >
      <span className="flex items-center uppercase text-sm justify-center gap-2">
       Logout
      </span>
    </button>
  );
};

export default AdminLogout;
