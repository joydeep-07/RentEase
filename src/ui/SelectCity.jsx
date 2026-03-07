import { MapPin, X, ChevronRight, Navigation } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { createPortal } from "react-dom";

export default function SelectCity({ value = null, onChange, className = "" }) {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const openDrawer = () => {
    gsap.to(drawerRef.current, {
      x: 0,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      pointerEvents: "auto",
    });
  };

  const closeDrawer = () => {
    gsap.to(drawerRef.current, {
      x: "-100%",
      duration: 0.4,
      ease: "power3.inOut",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      pointerEvents: "none",
    });
  };

 const handleSelect = (place) => {
   const city =
     place.address?.city ||
     place.address?.town ||
     place.address?.village ||
     place.address?.state_district ||
     place.display_name;

   setSearchValue(city);

   if (onChange) {
     onChange(city);
   }

   closeDrawer();
 };

  // Fetch suggestions (debounced)
  useEffect(() => {
    if (searchValue.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchValue}&format=json&addressdetails=1&limit=5`,
      );

      const data = await res.json();
      setSuggestions(data);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue]);

  useGSAP(() => {
    gsap.set(drawerRef.current, { x: "-100%" });
    gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "none" });
  });

  const drawerUI = (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={closeDrawer}
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 left-0 z-[101] w-[35vw]
        bg-[var(--bg-main)]
        border-r border-[var(--border-light)]
        shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border-light)]">
          <button onClick={closeDrawer}>
            <X className="h-5 w-5 text-[var(--text-secondary)]" />
          </button>

          <div>
            <h2 className="text-lg font-semibold text-[var(--text-main)]">
              Choose location
            </h2>

            <p className="text-sm text-[var(--text-secondary)]">
              Please choose a location to get started.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6">
          {/* Search */}
          <div>
            <p className="text-sm font-medium text-[var(--text-main)] mb-2">
              Enter area, street name
            </p>

            <div
              className="flex items-center gap-2 px-4 py-3 rounded-full
              bg-[var(--bg-secondary)]
              border border-[var(--border-light)]"
            >
              <MapPin className="h-4 w-4 text-[var(--text-secondary)]" />

              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Type here"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Suggestions */}
          {searchValue ? (
            <div className="space-y-1">
              {suggestions.map((place) => (
                <button
                  key={place.place_id}
                  onClick={() => handleSelect(place)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg
                  hover:bg-[var(--bg-secondary)] transition"
                >
                  <MapPin className="h-4 w-4 text-[var(--sale)]" />

                  <span className="text-sm text-[var(--text-main)]">
                    {place.display_name}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <>
              {/* OR */}
              <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                <div className="flex-1 h-[1px] bg-[var(--border-light)]" />
                OR
                <div className="flex-1 h-[1px] bg-[var(--border-light)]" />
              </div>

              {/* Fetch location */}
              <button
                className="flex items-center justify-between w-full
                p-4 rounded-xl
                border border-[var(--border-light)]
                bg-[var(--bg-secondary)]"
              >
                <div className="flex gap-3 items-center">
                  <Navigation className="h-5 w-5 text-[var(--sale)]" />

                  <div className="text-left">
                    <p className="text-sm font-medium text-[var(--text-main)]">
                      Fetch my location
                    </p>

                    <p className="text-xs text-[var(--text-secondary)]">
                      Let GPS fetch your current location.
                    </p>
                  </div>
                </div>

                <ChevronRight className="h-4 w-4 text-[var(--text-secondary)]" />
              </button>

              {/* OR */}
              <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                <div className="flex-1 h-[1px] bg-[var(--border-light)]" />
                OR
                <div className="flex-1 h-[1px] bg-[var(--border-light)]" />
              </div>

              {/* Login card */}
              <button
                className="flex items-center justify-between w-full
                p-4 rounded-xl
                border border-[var(--border-light)]
                bg-[var(--bg-secondary)]"
              >
                <div className="flex gap-3 items-center">
                  <MapPin className="h-5 w-5 text-[var(--sale)]" />

                  <div className="text-left">
                    <p className="text-sm font-medium text-[var(--text-main)]">
                      Login for saved addresses
                    </p>

                    <p className="text-xs text-[var(--text-secondary)]">
                      Login now to fetch your saved addresses.
                    </p>
                  </div>
                </div>

                <ChevronRight className="h-4 w-4 text-[var(--text-secondary)]" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={openDrawer}
        className={`flex items-center gap-2 text-sm font-medium ${className}`}
      >
        <MapPin className="h-4 w-4 text-[var(--sale)]" />

        <span>{value || searchValue || "Select your location"}</span>
      </button>
      {createPortal(drawerUI, document.body)}
    </>
  );
}
