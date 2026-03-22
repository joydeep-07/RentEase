import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import {
  CalendarDays,
  CreditCard,
  RotateCcw,
  Clock,
  Package,
} from "lucide-react";
import EmptyCart from "./EmptyCart";

const ActiveRents = () => {
  const [rents, setRents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("activeRents")) || [];
    setRents(stored);
  }, []);

  if (rents.length === 0) {
    return (
      <>
        <EmptyCart text={"You haven't ordered anything yet !"} />
      </>
    );
  }

  return (
    <div className="max-w-8xl mx-auto px-4 md:px-20 py-10">
      <div className="flex flex-col gap-2 md:gap-3 mb-6">
       

        <h1 className="text-3xl md:text-5xl font-heading leading-tight text-[var(--text-main)]">
          Active{" "}
          <span className="text-[var(--accent-primary)] relative">Rents</span>
        </h1>

        <p className="text-sm text-[var(--text-muted)] max-w-xl">
          Manage your ongoing rentals, track payments, and stay updated with
          your plans.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {rents.map((rent) => (
          <div
            key={rent.id}
            className="border border-[var(--border-light)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm rounded-sm overflow-hidden flex flex-col sm:flex-row transition-all duration-300"
          >
            {/* Image Section */}
            <div className="sm:w-2/5 flex flex-col items-center justify-center p-4 bg-[var(--bg-tertiary)]/30 border-b sm:border-b-0 sm:border-r border-[var(--border-light)]/50 shrink-0">
              <div className="relative w-full aspect-square sm:aspect-auto sm:h-full rounded-sm overflow-hidden border border-[var(--border-light)]/40 group">
                <img
                  src={rent.image}
                  alt={rent.productName}
                  className="w-full h-full object-cover rounded-sm transition-transform duration-700"
                />
                <div
                  className={`absolute top-2 right-2 px-3 py-1 text-xs tracking-wide rounded-full bg-[var(--bg-main)] border ${rent.status === "Active" ? "text-green-500 border-green-500/30" : "text-yellow-500 border-yellow-500/30"}`}
                >
                  {rent.status}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-5 md:p-6 flex flex-col flex-1 gap-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--text-main)] leading-tight line-clamp-2">
                    {rent.productName}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1.5 flex items-center gap-1.5 font-medium">
                    <Package size={14} className="opacity-70" /> {rent.category}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xl md:text-2xl text-[var(--accent-primary)]">
                    ₹{rent.monthlyRent}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]/80 font-medium">
                    / month
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-4 py-4 mt-1 border-y border-[var(--border-light)]/50">
                <div className="flex flex-col">
                  <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mb-1">
                    <CalendarDays
                      size={13}
                      className="text-[var(--accent-secondary)]"
                    />{" "}
                    Start Date
                  </span>
                  <span className="text-sm text-[var(--text-main)] font-semibold">
                    {rent.startDate}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mb-1">
                    <Clock
                      size={13}
                      className="text-[var(--accent-secondary)]"
                    />{" "}
                    Next Payment
                  </span>
                  <span className="text-sm text-[var(--text-main)] font-semibold">
                    {rent.nextPayment}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mb-1">
                    <RotateCcw
                      size={13}
                      className="text-[var(--accent-secondary)]"
                    />{" "}
                    Duration
                  </span>
                  <span className="text-sm text-[var(--text-main)] font-semibold">
                    {rent.duration} Months
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mb-1">
                    <CreditCard
                      size={13}
                      className="text-[var(--accent-secondary)]"
                    />{" "}
                    Deposit
                  </span>
                  <span className="text-sm text-[var(--text-main)] font-semibold">
                    ₹{rent.securityDeposit}
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-2">
                <div className="flex justify-between items-end mb-2.5">
                  <span className="text-xs font-medium text-[var(--text-secondary)]">
                    Payment Progress
                  </span>
                  <span className="text-xs text-[var(--text-main)]">
                    {rent.progress}%
                  </span>
                </div>
                {/* Progress Bar Container */}
                <div className="w-full h-[4px] bg-[var(--border-light)]/60 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${rent.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[11px] font-medium text-[var(--text-secondary)] mt-2">
                  <span>{rent.duration - rent.remainingInstallments} Paid</span>
                  <span>{rent.remainingInstallments} Remaining</span>
                </div>
              </div>

              <div className="mt-3 flex gap-3">
                <button className="flex-1 py-2.5 text-sm font-semibold border border-[var(--border-light)] rounded-sm hover:bg-[var(--bg-tertiary)]/50 hover:border-[var(--text-secondary)]/20 text-[var(--text-main)] transition-all">
                  View Details
                </button>
                <button className="flex-1 py-2.5 text-sm font-semibold bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white rounded-sm transition-all shadow-md shadow-[var(--accent-primary)]/20 hover:shadow-[var(--accent-secondary)]/30 ">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveRents;
