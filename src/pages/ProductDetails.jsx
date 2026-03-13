import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../utils/data";
import { Star, ShoppingCart, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));

  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);

  const [duration, setDuration] = useState(3);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold text-red-600">
        Product Not Found
      </h1>
    );
  }

  const monthlyPrice = product.pricePerDay * 30;

  const totalRent = useMemo(
    () => monthlyPrice * duration * quantity,
    [monthlyPrice, duration, quantity],
  );

  const totalAmount = useMemo(
    () => totalRent + product.securityDeposit * quantity,
    [totalRent, product.securityDeposit, quantity],
  );

  const isOutOfStock = product.isOutOfStock || product.totalStock <= 0;

  const handleAddToCart = () => {
    if (!isLogin) {
      toast.error("Please login to add items to cart");
      return;
    }

    if (isOutOfStock) {
      toast.error("This product is currently out of stock");
      return;
    }

    if (quantity > product.totalStock) {
      toast.error(`Only ${product.totalStock} units available`);
      return;
    }

    dispatch(
      addToCart({
        ...product,
        duration,
        quantity,
      }),
    );

    toast.success("Item added to cart !");
  };

  const incrementQty = () => {
    if (quantity < product.totalStock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-10 px-4 sm:px-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-[var(--text-secondary)]">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> /
        <span className="text-[var(--accent-primary)] ml-1 font-medium">
          {product.productName}
        </span>
      </nav>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-6">
        {/* IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="border border-[var(--border-light)] w-full max-h-110  md:max-w-[400px] rounded overflow-hidden">
            <img
              src={product.image}
              alt={product.productName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="w-full max-w-4xl">
          <h3 className="text-sm uppercase text-[var(--text-muted)] mb-2">
            {product.category}
          </h3>

          <h1 className="text-3xl md:text-4xl font-medium mt-1 text-[var(--text-main)]">
            {product.productName}
          </h1>

          {/* Rating (static for now – can be made dynamic later) */}
          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="var(--accent-primary)"
                  color="var(--accent-primary)"
                />
              ))}
            <span className="ml-2 text-sm text-[var(--text-secondary)]">
              (4.0)
            </span>
          </div>

          <p className="mt-5 text-[var(--text-secondary)] text-justify text-sm leading-relaxed">
            {product.description}
          </p>

          {/* PRICE CARD */}
          <div className="mt-6 ">
            <div className="flex items-baseline">
              <p className="text-3xl md:text-4xl font-bold text-[var(--accent-primary)]">
                ₹{monthlyPrice.toLocaleString("en-IN")}
              </p>
              <span className="ml-3 text-base text-[var(--text-secondary)]">
                / month
              </span>
            </div>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Refundable Security Deposit:{" "}
              <span className="font-medium text-[var(--text-main)]">
                ₹{product.securityDeposit.toLocaleString("en-IN")}
              </span>{" "}
              per item
            </p>
          </div>

          {/* QUANTITY */}
          <div className="mt-6">
            <label className="block font-medium text-[var(--text-main)] mb-2">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={decrementQty}
                disabled={quantity <= 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border-light)] disabled:opacity-40"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-medium text-lg">
                {quantity}
              </span>
              <button
                onClick={incrementQty}
                disabled={quantity >= product.totalStock}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border-light)] disabled:opacity-40"
              >
                <Plus size={18} />
              </button>
              <span className="text-sm text-[var(--text-secondary)] ml-2">
                {product.totalStock} available
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ========  */}

      <div className="mt-8 flex flex-col lg:flex-row gap-10">
        {/* LEFT COLUMN — PRODUCT SPECIFICATIONS */}
        <div className="lg:w-1/4">
          <h3 className="text-sm uppercase text-[var(--text-muted)] mb-8">
            Product Specifications
          </h3>

          <div className="gap-4 flex flex-col text-sm">
            {[
              { label: "Brand", value: product.brand },
              { label: "Category", value: product.category },
              { label: "Item Type", value: product.itemType },
              { label: "Condition", value: product.condition },
              { label: "Total Stock", value: product.totalStock },
              { label: "Available From", value: product.availableFrom },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between border-b border-[var(--border-light)] pb-2"
              >
                <span className="text-[var(--text-secondary)]">
                  {item.label}
                </span>
                <span className="font-medium text-[var(--text-secondary)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — RENTAL SECTION */}
        <div className="lg:w-3/4 space-y-6">
          {/* RENTAL DURATION */}
          <div>
            <h3 className="text-sm uppercase text-[var(--text-muted)] mb-8">
              Rental Duration
            </h3>

            <div className="flex flex-wrap gap-3">
              {[1, 3, 6, 12].map((d) => (
                <label
                  key={d}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition
            ${
              duration === d
                ? "bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]"
                : "border-[var(--border-light)] hover:bg-[var(--accent-blue)]/10 "
            }`}
                >
                  <input
                    type="radio"
                    name="duration"
                    checked={duration === d}
                    onChange={() => setDuration(d)}
                    className="sr-only"
                  />
                  <span className="text-xs font-medium">{d} Months</span>
                </label>
              ))}
            </div>
          </div>

          {/* RENTAL SUMMARY */}
          <div className="bg-[var(--bg-secondary)]/50 border border-[var(--border-light)]/50 rounded-sm p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[var(--text-main)] mb-5">
              Rental Summary
            </h3>

            <div className="space-y-4 text-sm text-[var(--text-secondary)]">
              <div className="flex justify-between">
                <span>Monthly Rent (per item)</span>
                <span className="font-medium text-[var(--text-main)]">
                  ₹{monthlyPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-medium text-[var(--text-main)]">
                  {duration} Months
                </span>
              </div>

              <div className="flex justify-between">
                <span>Quantity</span>
                <span className="font-medium text-[var(--text-main)]">
                  {quantity}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Total Rent</span>
                <span className="font-semibold text-[var(--text-main)]">
                  ₹{totalRent.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Security Deposit ({quantity} ×)</span>
                <span className="font-medium text-[var(--text-main)]">
                  ₹
                  {(product.securityDeposit * quantity).toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between pt-4 border-t border-[var(--border-light)] text-base">
                <span className="font-semibold text-[var(--text-main)]">
                  Total Amount
                </span>

                <span className="text-xl font-bold text-[var(--accent-primary)]">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>

          {/* ADD TO CART BUTTON */}
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-full font-medium text-lg transition
      ${
        isOutOfStock
          ? "bg-gray-400 cursor-not-allowed text-gray-700"
          : "bg-[var(--accent-primary)] hover:opacity-90 text-white shadow-md hover:shadow-lg"
      }`}
          >
            <ShoppingCart size={20} />
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
