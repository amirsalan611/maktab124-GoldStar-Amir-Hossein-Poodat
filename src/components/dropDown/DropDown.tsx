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
    <div className="absolute bottom-[-18%] left-1/2 -translate-x-1/2">
      <div className="relative inline-block text-center">
        <div>
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex w-[300px] justify-center gap-x-1.5 rounded-3xl bg-[#dee2ff] px-3 py-2 text-gray-600 shadow-xs ring-gray-300 hover:bg-[rgb(147,158,255)] hover:text-white hover:border-indigo-400 transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)]"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {DropDownLocalization.list}
            <svg
              className="-mr-1 size-5"
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
            className="absolute w-full px-5 py-2 z-10 mt-2 origin-top-right rounded-3xl bg-[#dee2ff] ring-1 shadow-lg ring-black/5 focus:outline-none animate-fade"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="" role="none">
              <a
                href="#"
                onClick={closeDropdown}
                className="block px-4 py-2 text-sm rounded-3xl text-gray-700 hover:bg-[rgb(147,158,255)] hover:text-white"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                onClick={closeDropdown}
                className="block px-4 py-2 text-sm rounded-3xl text-gray-700 hover:bg-[rgb(147,158,255)] hover:text-white"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                onClick={closeDropdown}
                className="block px-4 py-2 text-sm rounded-3xl text-gray-700 hover:bg-[rgb(147,158,255)] hover:text-white"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-2"
              >
                License
              </a>
              <form method="POST" action="#" role="none"></form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
