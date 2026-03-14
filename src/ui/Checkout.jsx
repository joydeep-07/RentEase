import React, { useState } from "react";
import { ShieldCheck, Lock, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
  const [payment, setPayment] = useState("card");
  const [startDate, setStartDate] = useState("");

  const checkout = useSelector((state) => state.checkout);
  const { product, duration } = checkout;

  if (!product) {
    return <EmptyCart />;
  }

  /* ---------------- RENT CALCULATIONS ---------------- */

  const monthlyRent = product.pricePerDay * 30;
  const securityDeposit = product.securityDeposit || monthlyRent;

  const firstInstallment = monthlyRent + securityDeposit;
  const remainingInstallments = duration - 1;

  const totalPayable = firstInstallment + remainingInstallments * monthlyRent;

  /* ---------------- DATE RESTRICTIONS ---------------- */

  const today = new Date().toISOString().split("T")[0];

  const minStartDate =
    product.availableFrom && product.availableFrom > today
      ? product.availableFrom
      : today;

  return (
    <div className="min-h-screen bg-[var(--bg-main)] p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
          <span className="bg-[var(--text-main)] text-[var(--bg-main)] w-6 h-6 flex items-center justify-center rounded-full">
            1
          </span>
          Cart
          <span>
            <ChevronRight size={16} className="text-[var(--text-secondary)]" />
          </span>
          <span className="bg-[var(--text-main)] text-[var(--bg-main)] w-6 h-6 flex items-center justify-center rounded-full">
            2
          </span>
          Checkout
        </div>

        <div className="flex items-center gap-2 text-sm text-[var(--accent-green)]">
          <ShieldCheck size={16} />
          Secure checkout
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-4">
            <h3 className="text-sm uppercase text-[var(--text-muted)] mb-8">
              shipping information
            </h3>

            {/* START DATE */}
            <div>
              <input
                type="date"
                value={startDate}
                min={minStartDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />

              <p className="text-xs text-[var(--text-muted)] mt-1">
                Available from:{" "}
                {new Date(product.availableFrom).toLocaleDateString("en-IN")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
              <input
                placeholder="Last Name"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
            </div>

            <input
              placeholder="Address"
              className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="City"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
              <input
                placeholder="ZIP Code"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="State"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
              <input
                placeholder="Country"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
            </div>

            <input
              placeholder="Phone Number"
              className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
            />
          </div>

          {/* PAYMENT */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-4">
            <h3 className="text-sm uppercase text-[var(--text-muted)] mb-8">
              Payment Method
            </h3>

            {["card", "paypal", "apple"].map((method) => (
              <label
                key={method}
                className={`flex items-center gap-3 border border-[var(--border-light)]/50 p-3 rounded cursor-pointer transition-colors ${
                  payment === method
                    ? "bg-[var(--bg-secondary)]"
                    : "hover:bg-[var(--bg-secondary)]"
                }`}
              >
                <input
                  type="radio"
                  checked={payment === method}
                  onChange={() => setPayment(method)}
                  className="accent-[var(--accent-primary)]"
                />
                <span className="text-[var(--text-main)] capitalize">
                  {method === "card"
                    ? "Credit/Debit Card"
                    : method === "paypal"
                      ? "PayPal"
                      : "Apple Pay"}
                </span>
              </label>
            ))}

            {payment === "card" && (
              <>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                />

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                />
              </>
            )}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          {/* ORDER SUMMARY */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-4">
            <h3 className="text-sm uppercase text-[var(--text-muted)] mb-8">
              Order Summary
            </h3>

            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded overflow-hidden border border-[var(--border-light)]">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="font-medium text-[var(--text-main)]">
                  {product.productName}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Duration: {duration} month{duration > 1 && "s"}
                </p>
               
              </div>

              <p className="font-semibold text-[var(--text-main)]">
                ₹{totalPayable.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          {/* INSTALLMENTS */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-4">
            <h4 className="text-sm uppercase tracking-wide text-[var(--text-muted)]">
              Installment Plan
            </h4>

            {/* First Installment */}
            <div className="flex justify-between items-center bg-[var(--bg-secondary)]/60 px-4 py-3 rounded-md">
              <div>
                <p className="text-sm font-medium text-[var(--text-main)]">
                  1st Installment
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Security Deposit + Monthly Rent
                </p>
              </div>

              <span className="font-semibold text-[var(--text-main)]">
                ₹{firstInstallment.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Remaining Installments */}
            {remainingInstallments > 0 && (
              <div className="flex justify-between items-center border border-[var(--border-light)]/50 px-4 py-3 rounded-md">
                <div>
                  <p className="text-sm font-medium text-[var(--text-main)]">
                    Next {remainingInstallments} Payments
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    Charged monthly after start date
                  </p>
                </div>

                <span className="font-semibold text-[var(--text-main)]">
                  ₹{monthlyRent.toLocaleString("en-IN")}
                </span>
              </div>
            )}

            {/* Total */}
            <div className="flex justify-between items-center pt-2 border-t border-[var(--border-light)]/50">
              <span className="text-sm text-[var(--text-secondary)]">
                Total Installments
              </span>

              <span className="font-semibold text-[var(--accent-green)]">
                {duration}
              </span>
            </div>
          </div>

          {/* TOTAL */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-3">
            <div className="flex justify-between">
              <span>Monthly Rent</span>
              <span>₹{monthlyRent.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between">
              <span>Security Deposit</span>
              <span>₹{securityDeposit.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between">
              <span>Duration</span>
              <span>{duration} Months</span>
            </div>

            <div className="flex justify-between font-semibold border-t pt-3">
              <span>Total Rental Cost</span>
              <span>₹{totalPayable.toLocaleString("en-IN")}</span>
            </div>

            <div className="text-sm text-[var(--accent-green)] bg-[var(--bg-secondary)] p-3 rounded">
              First installment payable now: ₹
              {firstInstallment.toLocaleString("en-IN")}
            </div>
          </div>

          {/* SECURITY */}
          <div className="bg-[var(--bg-card)]/50 p-4 rounded-lg border border-[var(--border-light)]/50 flex justify-between text-sm">
            <span className="flex items-center gap-1">
              <ShieldCheck size={16} /> Secure Payment
            </span>

            <span className="flex items-center gap-1">
              <Lock size={16} /> SSL Encrypted
            </span>

            <span>Free Returns</span>
          </div>

          {/* BUTTON */}
          <button
            disabled={!startDate}
            className="w-full bg-[var(--text-main)] disabled:opacity-50 text-[var(--bg-main)] py-3 rounded-lg font-semibold"
          >
            Pay ₹{firstInstallment.toLocaleString("en-IN")} & Place Order →
          </button>

          <p className="text-xs text-[var(--text-muted)] text-center">
            Security deposit will be refunded after the rental period if no
            damage occurs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
