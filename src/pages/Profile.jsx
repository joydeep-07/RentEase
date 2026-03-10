import React, { useState } from "react";
import Heading from "../components/Heading";
import { TextField, Avatar, IconButton, Box } from "@mui/material";
import { Camera, User } from "lucide-react";

const inputStyles = {
  "& .MuiInputLabel-root": {
    color: "var(--text-secondary)",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--accent-secondary)",
  },

  "& .MuiOutlinedInput-root": {
    color: "var(--text-main)",

    "& fieldset": {
      borderColor: "var(--border-light)",
    },

    "&:hover fieldset": {
      borderColor: "var(--accent-secondary)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "var(--accent-secondary)",
    },
  },

  "& input": {
    color: "var(--text-main)",
  },
};

const Profile = () => {
  const [image, setImage] = useState(null);

  const [addresses, setAddresses] = useState([]);

  const [addressForm, setAddressForm] = useState({
    house: "",
    street: "",
    city: "",
    district: "",
    pincode: "",
    state: "",
    country: "India",
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddressChange = (e) => {
    setAddressForm({
      ...addressForm,
      [e.target.name]: e.target.value,
    });
  };

  const addAddress = () => {
    if (!addressForm.house || !addressForm.city) return;

    setAddresses([...addresses, addressForm]);

    setAddressForm({
      house: "",
      street: "",
      city: "",
      district: "",
      pincode: "",
      state: "",
      country: "India",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-10 ">
      <Heading
        small="Your profile"
        heading={
          <h1 className="text-3xl md:text-4xl font-heading text-[var(--text-main)]">
            Personalize your
            <span className="text-[var(--accent-secondary)]"> Profile</span>
          </h1>
        }
      />

      <div className="flex gap-12 mt-10 items-start flex-col lg:flex-row">
        {/* FORM */}

        <div className="flex flex-col gap-6 w-full">
          <Box className="border border-[var(--border-light)]/30 flex-1 p-4 rounded-sm bg-[var(--bg-secondary)]/50 ">
            <div className="flex flex-col gap-5">
              {/* Row 1 */}
              <div className="flex gap-5 flex-col md:flex-row">
                <TextField label="First Name" fullWidth sx={inputStyles} />
                <TextField label="Last Name" fullWidth sx={inputStyles} />
              </div>

              {/* Row 2 */}
              <div className="flex gap-5 flex-col md:flex-row">
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  sx={inputStyles}
                />
                <TextField
                  label="Phone Number"
                  type="tel"
                  fullWidth
                  sx={inputStyles}
                />
              </div>
            </div>
          </Box>

          {/* ADDRESS FORM */}

          <Box className="border border-[var(--border-light)]/30 flex-1 p-4 rounded-sm bg-[var(--bg-secondary)]/50 ">
            <div className="flex flex-col gap-5">
              {/* Row 3 */}
              <div className="flex gap-5 flex-col md:flex-row">
                <TextField
                  label="House / Flat Name or Number"
                  name="house"
                  value={addressForm.house}
                  onChange={handleAddressChange}
                  fullWidth
                  sx={inputStyles}
                />

                <TextField
                  label="Street Name"
                  name="street"
                  value={addressForm.street}
                  onChange={handleAddressChange}
                  fullWidth
                  sx={inputStyles}
                />
              </div>

              {/* Row 4 */}

              <div className="flex gap-5 flex-col md:flex-row">
                <TextField
                  label="City / Town"
                  name="city"
                  value={addressForm.city}
                  onChange={handleAddressChange}
                  fullWidth
                  sx={inputStyles}
                />

                <TextField
                  label="District"
                  name="district"
                  value={addressForm.district}
                  onChange={handleAddressChange}
                  fullWidth
                  sx={inputStyles}
                />

                <TextField
                  label="Pincode"
                  type="number"
                  name="pincode"
                  value={addressForm.pincode}
                  onChange={handleAddressChange}
                  fullWidth
                  sx={{
                    ...inputStyles,
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                    "& input[type=number]::-webkit-outer-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                    "& input[type=number]::-webkit-inner-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                  }}
                />
              </div>

              {/* Row 5 */}

              <div className="flex gap-5 flex-col md:flex-row">
                <TextField
                  label="State"
                  name="state"
                  value={addressForm.state}
                  onChange={handleAddressChange}
                  fullWidth
                  sx={inputStyles}
                />

                <TextField
                  label="Country"
                  name="country"
                  value={addressForm.country}
                  onChange={handleAddressChange}
                  fullWidth
                  sx={inputStyles}
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={addAddress}
                  className="border border-[var(--border-light)] text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] rounded-sm bg-[var(--bg-secondary)] py-2 px-5"
                >
                  Add Address
                </button>
              </div>
            </div>
          </Box>

          {/* SAVED ADDRESSES */}

          {addresses.length > 0 && (
            <Box className="border border-[var(--border-light)]/30 p-4 rounded-sm bg-[var(--bg-secondary)]/50">
              <h3 className="text-lg font-heading text-[var(--text-main)] mb-4">
                Saved Addresses
              </h3>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {addresses.map((addr, index) => (
                  <div
                    key={index}
                    className="border border-[var(--border-light)]/40 p-3 rounded-sm"
                  >
                    <p className="text-[var(--text-main)]">
                     {addr.house}, {addr.street}
                    </p>

                    <p className="text-[var(--text-secondary)]">
                      {addr.city}, {addr.district}
                    </p>

                    <p className="text-[var(--text-secondary)]">
                      {addr.state} - {addr.pincode}
                    </p>

                    <p className="text-[var(--text-secondary)]">
                      {addr.country}
                    </p>
                  </div>
                ))}
              </div>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
