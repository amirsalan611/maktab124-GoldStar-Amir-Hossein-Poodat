"use client";

import { DropDownLocalization } from "@/constants/Localizations/Localization";
import { useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-center ">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {DropDownLocalization.list}
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute w-full z-10 mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none animate-fade"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              onClick={closeDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              onClick={closeDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              onClick={closeDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
