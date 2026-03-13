import React, { useState } from "react";
import { ShieldCheck, Lock, ChevronRight } from "lucide-react";

const Checkout = () => {
  const [payment, setPayment] = useState("card");

  return (
    <div className="min-h-screen bg-[var(--bg-main)] p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        

        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
          <span className="bg-[var(--text-main)] text-[var(--bg-main)] w-6 h-6 flex items-center justify-center rounded-full">
            1
          </span>
          Cart
          <span> <ChevronRight size={16} className="text-[var(--text-secondary)] "/> </span>
          <span className="bg-[var(--text-main)] text-[var(--bg-main)] w-6 h-6 flex items-center justify-center rounded-full">
            2
          </span>
          Checkout
        </div>

        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <ShieldCheck size={16} />
          Secure checkout
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
         

          {/* Shipping */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-4">
            <h3 className="font-semibold text-lg text-[var(--text-main)]">
              Shipping Information
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
              <input
                placeholder="Last Name"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
            </div>

            <input
              placeholder="Address"
              className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="City"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
              <input
                placeholder="ZIP Code"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="State"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
              <input
                placeholder="Country"
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
              />
            </div>

            <input
              placeholder="Phone Number"
              className="w-full px-4 py-2.5 rounded-md border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] text-[var(--text-main)] placeholder:text-[var(--text-secondary)] outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
            />

            <label className="text-sm text-[var(--text-secondary)] flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[var(--accent-primary)]"
              />
              Save this information for next time
            </label>
          </div>

          {/* Payment */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-4">
            <h3 className="font-semibold text-lg text-[var(--text-main)]">
              Payment Method
            </h3>

            <label
              className={`flex items-center gap-3 border border-[var(--border-light)]/50 p-3 rounded cursor-pointer transition-colors ${payment === "card" ? "bg-[var(--bg-secondary)]" : "hover:bg-[var(--bg-secondary)]"}`}
            >
              <input
                type="radio"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
                className="accent-[var(--accent-primary)]"
              />
              <span className="text-[var(--text-main)]">Credit/Debit Card</span>
            </label>

            <label
              className={`flex items-center gap-3 border border-[var(--border-light)]/50 p-3 rounded cursor-pointer transition-colors ${payment === "paypal" ? "bg-[var(--bg-secondary)]" : "hover:bg-[var(--bg-secondary)]"}`}
            >
              <input
                type="radio"
                checked={payment === "paypal"}
                onChange={() => setPayment("paypal")}
                className="accent-[var(--accent-primary)]"
              />
              <span className="text-[var(--text-main)]">PayPal</span>
            </label>

            <label
              className={`flex items-center gap-3 border border-[var(--border-light)]/50 p-3 rounded cursor-pointer transition-colors ${payment === "apple" ? "bg-[var(--bg-secondary)]" : "hover:bg-[var(--bg-secondary)]"}`}
            >
              <input
                type="radio"
                checked={payment === "apple"}
                onChange={() => setPayment("apple")}
                className="accent-[var(--accent-primary)]"
              />
              <span className="text-[var(--text-main)]">Apple Pay</span>
            </label>

            {payment === "card" && (
              <>
                <input placeholder="Card Number" className="input w-full" />

                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM/YY" className="input" />
                  <input placeholder="CVC" className="input" />
                </div>

                <input placeholder="Name on Card" className="input w-full" />
              </>
            )}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-4">
            <h3 className="font-semibold text-lg text-[var(--text-main)]">
              Order Summary
            </h3>

            <OrderItem name="iPhone 15 Pro Max" price="$1199" qty="1" />
            <OrderItem name="AirPods Pro 3" price="$249" qty="2" />
            <OrderItem name="Apple Watch Series 11" price="$399" qty="1" out />
          </div>

          {/* Order Total */}
          <div className="bg-[var(--bg-card)]/50 p-6 rounded-lg border border-[var(--border-light)]/50 space-y-3">
            <div className="flex justify-between text-[var(--text-secondary)]">
              <span>Subtotal</span>
              <span>$2096</span>
            </div>

            <div className="flex justify-between text-[var(--text-secondary)]">
              <span>Shipping</span>
              <span>$15</span>
            </div>

            <div className="flex justify-between text-[var(--text-secondary)]">
              <span>Tax</span>
              <span>$167</span>
            </div>

            <div className="flex justify-between font-semibold text-lg text-[var(--text-main)] border-t border-[var(--border-light)]/50 pt-3">
              <span>Total</span>
              <span>$2278</span>
            </div>

            <div className="text-sm text-[var(--accent-green)] bg-[var(--bg-secondary)] p-3 rounded">
              Free shipping on orders over $500
            </div>
          </div>

          {/* Security */}
          <div className="bg-[var(--bg-card)]/50 p-4 rounded-lg border border-[var(--border-light)]/50 flex justify-between text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <ShieldCheck size={16} className="text-[var(--accent-green)]" />{" "}
              Secure Payment
            </span>

            <span className="flex items-center gap-1">
              <Lock size={16} className="text-[var(--accent-green)]" /> SSL
              Encrypted
            </span>

            <span className="text-[var(--accent-green)]">Free Returns</span>
          </div>

          {/* Button */}
          <button className="w-full bg-[var(--text-main)] text-[var(--bg-main)] py-3 rounded-lg font-semibold hover:bg-[var(--text-secondary)] transition-colors">
            Place Order →
          </button>

          <button className="w-full border border-[var(--border-light)]/50 text-[var(--text-main)] py-3 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

const OrderItem = ({ name, price, qty, out }) => {
  return (
    <div className="flex justify-between items-center border-b border-[var(--border-soft)] pb-3">
      <div>
        <p className="font-medium text-[var(--text-main)]">{name}</p>
        <p className="text-sm text-[var(--text-muted)]">Qty: {qty}</p>

        {out && (
          <span className="text-xs bg-[var(--sale)]/10 text-[var(--sale)] px-2 py-1 rounded mt-1 inline-block">
            Out of Stock
          </span>
        )}
      </div>

      <p className="font-semibold text-[var(--text-main)]">{price}</p>
    </div>
  );
};

export default Checkout;
