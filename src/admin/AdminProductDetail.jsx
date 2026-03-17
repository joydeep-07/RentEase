import React, { useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../utils/data";
import { Star, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setCheckoutProduct } from "../redux/slices/checkoutSlice";

const AdminProductDetail = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [duration, setDuration] = useState(3);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(product);

  if (!product) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold text-red-600">
        Product Not Found
      </h1>
    );
  }

  const handleChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved:", editData);
    toast.success("Product updated!");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(product);
    setIsEditing(false);
  };

  const monthlyPrice = editData.pricePerDay * 30;

  const totalRent = useMemo(
    () => monthlyPrice * duration,
    [monthlyPrice, duration],
  );

  const totalAmount = useMemo(
    () => totalRent + editData.securityDeposit,
    [totalRent, editData.securityDeposit],
  );

  const isOutOfStock = editData.isOutOfStock || editData.totalStock <= 0;

  const handleButtonClick = () => {
    if (isOutOfStock) {
      toast.error("Out Of Stock !");
      return;
    }

    dispatch(
      setCheckoutProduct({
        product: editData,
        duration,
        totalRent,
        totalAmount,
      }),
    );

    navigate("/payment");
  };

  const specs = [
    { label: "Brand", key: "brand" },
    { label: "Category", key: "category" },
    { label: "Item Type", key: "itemType" },
    { label: "Condition", key: "condition" },
    { label: "Total Stock", key: "totalStock" },
    { label: "Available From", key: "availableFrom" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-10 px-4 sm:px-6">
      {/* Edit Controls (small, non-breaking) */}
      <div className="flex justify-end gap-2 mb-2">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="text-green-500 text-sm">
              Save
            </button>
            <button onClick={handleCancel} className="text-gray-400 text-sm">
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-[var(--accent-primary)] text-sm"
          >
            Edit
          </button>
        )}
      </div>

      {/* Breadcrumb */}
      <nav className="text-sm text-[var(--text-secondary)]">
        <Link to="/all-item">Admin Dashboard</Link> /{" "}
        <Link to="/products"> Products</Link> /
        <span className="text-[var(--accent-primary)] ml-1 font-medium">
          {editData.productName}
        </span>
      </nav>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-6">
        {/* IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="border border-[var(--border-light)] w-full max-h-110 md:max-w-[400px] rounded overflow-hidden">
            <img
              src={editData.image}
              alt={editData.productName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DETAILS */}

        <div className="">
          <div className="w-full max-w-4xl">
            {/* Category */}
            <h3
             
              className="text-sm uppercase text-[var(--text-muted)] mb-2 outline-none"
            >
              {editData.category}
            </h3>

            {/* Name */}
            <h1
              contentEditable={isEditing}
              suppressContentEditableWarning
              onBlur={(e) => handleChange("productName", e.target.innerText)}
              className="text-3xl md:text-4xl font-medium mt-1 text-[var(--text-main)] outline-none"
            >
              {editData.productName}
            </h1>

            {/* Rating */}
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

            {/* Description */}
            <p
              contentEditable={isEditing}
              suppressContentEditableWarning
              onBlur={(e) => handleChange("description", e.target.innerText)}
              className="mt-5 text-[var(--text-secondary)] text-justify text-sm leading-relaxed outline-none"
            >
              {editData.description}
            </p>

            {/* Price */}
            <div className="mt-6">
              <div className="flex items-baseline">
                <p className="text-3xl md:text-4xl font-bold text-[var(--accent-primary)]">
                  ₹{monthlyPrice.toLocaleString("en-IN")}
                </p>
                <span className="ml-3 text-base text-[var(--text-secondary)]">
                  / month
                </span>
              </div>
            </div>
          </div>
          {/*   PRODUCT SPECIFICATION  */}

          <div className="mt-8 w-full">
            <h3 className="text-sm uppercase text-[var(--text-muted)] mb-8">
              Product Specifications
            </h3>

            <div className="gap-4 flex flex-col text-sm">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b border-[var(--border-light)] pb-2"
                >
                  <span className="text-[var(--text-secondary)]">
                    {item.label}
                  </span>

                  <span
                    contentEditable={isEditing}
                    suppressContentEditableWarning
                    onBlur={(e) => handleChange(item.key, e.target.innerText)}
                    className="font-medium text-[var(--text-secondary)] outline-none"
                  >
                    {editData[item.key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AdminProductDetail;
