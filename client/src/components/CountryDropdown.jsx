import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COUNTRIES = [
  { id: "gb", name: "United Kingdom", flag: "🇬🇧" },
  { id: "us", name: "United States", flag: "🇺🇸" },
  { id: "au", name: "Australia", flag: "🇦🇺" },
  { id: "ae", name: "Dubai (UAE)", flag: "🇦🇪" },
];

export default function CountryDropdown({
  value,
  onChange,
  label = "Country / Region",
  placeholder = "Select Country / Region",
  searchPlaceholder = "Find a country or region",
  required = false,
  error = null,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef(null);
  const searchInputRef = useRef(null);
  const listRef = useRef(null);

  // Filter countries based on search query
  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const selectedCountry = COUNTRIES.find((c) => c.id === value || c.name === value);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setHighlightedIndex(0);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Reset highlighted index when filter changes
  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchQuery]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredCountries.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCountries.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCountries[highlightedIndex]) {
        selectCountry(filteredCountries[highlightedIndex]);
      }
    }
  };

  const selectCountry = (country) => {
    if (onChange) {
      onChange(country.name);
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full text-left font-sans select-none"
      onKeyDown={handleKeyDown}
    >
      {label && (
        <label className="block text-xs font-semibold text-[#A1A1AA] mb-1.5 tracking-wide">
          {label}
          {required && <span className="text-[#FF6A00] ml-1">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full h-12 px-4 rounded-[12px] bg-[#0B0F17] border ${
          error
            ? "border-red-500/80"
            : isOpen
            ? "border-[#FF6A00] shadow-[0_0_12px_rgba(255,106,0,0.25)]"
            : "border-white/10 hover:border-white/20"
        } text-white flex items-center justify-between transition-all duration-250 ease-out outline-none cursor-pointer`}
      >
        <span className="flex items-center gap-2.5 truncate text-sm">
          {selectedCountry ? (
            <>
              <span className="text-base leading-none">{selectedCountry.flag}</span>
              <span className="text-white font-medium">{selectedCountry.name}</span>
            </>
          ) : (
            <span className="text-[#A1A1AA]">{placeholder}</span>
          )}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#A1A1AA] transition-transform duration-250 ease-out shrink-0 ${
            isOpen ? "rotate-180 text-[#FF6A00]" : ""
          }`}
        />
      </button>

      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}

      {/* Floating Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-[12px] bg-[#0B0F17] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)] p-2.5 overflow-hidden"
          >
            {/* Search Input Field */}
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A1A1AA]" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full h-10 pl-9 pr-3.5 rounded-[8px] bg-[#161B26] border border-white/10 text-xs text-white placeholder-[#A1A1AA] outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
              />
            </div>

            {/* Country List Options */}
            <ul
              ref={listRef}
              role="listbox"
              className="max-h-56 overflow-y-auto space-y-1 pr-1 custom-country-scrollbar"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,106,0,0.4) transparent",
              }}
            >
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => {
                  const isSelected =
                    selectedCountry && selectedCountry.id === country.id;
                  const isHighlighted = highlightedIndex === index;

                  return (
                    <li
                      key={country.id}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => selectCountry(country)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`h-10 px-3 rounded-[8px] flex items-center justify-between cursor-pointer text-xs transition-colors duration-150 ${
                        isHighlighted || isSelected
                          ? "bg-[#1A1A1A] text-white"
                          : "text-white/90 hover:bg-[#1A1A1A]"
                      } ${isSelected ? "font-semibold" : ""}`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        <span className="text-base leading-none">{country.flag}</span>
                        <span className={isSelected ? "text-white" : "text-white/90"}>
                          {country.name}
                        </span>
                      </span>
                      {isSelected && (
                        <Check className="h-4 w-4 text-[#FF6A00] shrink-0" />
                      )}
                    </li>
                  );
                })
              ) : (
                <li className="py-4 text-center text-xs text-[#A1A1AA]">
                  No country or region found
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
