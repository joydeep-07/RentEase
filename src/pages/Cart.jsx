import { ChevronLeft, Trash } from "lucide-react";
import React, { useState } from "react";

const Cart = () => {
  const [showAddress, setShowAddress] = useState(false);

  const products = [
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      category: "Footwear",
    },
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      category: "Footwear",
    },
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      category: "Footwear",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row py-10 md:py-16 max-w-7xl px-4 md:px-6 mx-auto text-[var(--text-main)] gap-10">
      {/* LEFT SIDE */}
      <div className="flex-1 w-full">
        <h1 className="text-2xl md:text-4xl font-medium mb-6">
          <span className="font-heading"> Shopping Cart </span>
          <span className="text-sm text-[var(--accent-primary)]">
            {products.length} Items
          </span>
        </h1>

        {/* HEADER */}
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] text-[var(--accent-secondary)] text-base font-medium pb-3">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {products.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_auto] md:grid-cols-[2fr_1fr_1fr] gap-4 md:gap-0 text-[var(--text-secondary)] items-start text-sm md:text-base font-medium pt-4 border-b border-[var(--border-light)] pb-4"
          >
            {/* PRODUCT INFO */}
            <div className="flex items-start gap-3 md:gap-6">
              <div className="cursor-pointer w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-[var(--border-light)] rounded overflow-hidden bg-[var(--bg-secondary)]">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div>
                <p className="font-semibold text-[var(--text-main)]">
                  {product.name}
                </p>

                <div className="font-normal text-[var(--text-secondary)]">
                  <p>
                    Size: <span>{product.size || "N/A"}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* SUBTOTAL */}
            <p className="text-center text-[var(--text-main)]">
              ${product.offerPrice * product.quantity}
            </p>

            {/* ACTION */}
            <button className="cursor-pointer mx-auto text-[var(--sale)]">
              <Trash size={18} />
            </button>
          </div>
        ))}
        <button className="group cursor-pointer flex items-center mt-8 gap-2 text-[var(--accent-blue)] font-medium">
          <ChevronLeft size={18} />
          Continue Shopping
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:max-w-[360px] bg-[var(--bg-secondary)] p-5 border border-[var(--border-light)] rounded h-fit">
        <h2 className="text-lg md:text-xl font-medium text-[var(--text-main)]">
          Order Summary
        </h2>

        <hr className="border-[var(--border-light)] my-5" />

        <div className="mb-6">
          <p className="text-sm font-medium uppercase text-[var(--text-secondary)]">
            Delivery Address
          </p>

          <div className="relative flex justify-between items-start mt-2">
            <p className="text-[var(--text-secondary)]">No address found</p>

            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-[var(--accent-primary)] hover:underline cursor-pointer"
            >
              Change
            </button>

            {showAddress && (
              <div className="absolute top-12 py-1 bg-[var(--bg-main)] border border-[var(--border-light)] text-sm w-full rounded">
                <p
                  onClick={() => setShowAddress(false)}
                  className="text-[var(--text-secondary)] p-2 hover:bg-[var(--bg-secondary)]"
                >
                  New York, USA
                </p>

                <p
                  onClick={() => setShowAddress(false)}
                  className="text-[var(--accent-primary)] text-center cursor-pointer p-2 hover:bg-[var(--accent-primary)]/10"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          <p className="text-sm font-medium uppercase mt-6 text-[var(--text-secondary)]">
            Payment Method
          </p>

          <select className="w-full border border-[var(--border-light)] bg-[var(--bg-main)] px-3 py-2 mt-2 outline-none text-[var(--text-main)] rounded">
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-[var(--border-light)]" />

        <div className="text-[var(--text-secondary)] mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span>$20</span>
          </p>

          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-[var(--success)]">Free</span>
          </p>

          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>$20</span>
          </p>

          <p className="flex justify-between text-lg font-medium mt-3 text-[var(--text-main)]">
            <span>Total Amount:</span>
            <span>$20</span>
          </p>
        </div>

        <button className="w-full py-3 mt-6 cursor-pointer bg-[var(--accent-primary)] text-white font-medium hover:opacity-90 transition rounded">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
