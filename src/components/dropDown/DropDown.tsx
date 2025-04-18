"use client";

import {
  dropDownLocalization,
  DropDownLocalization,
} from "@/constants/Localizations/Localization";
import { getCategoreis } from "@/services/auth/GetCategories/GetCategoreis";
import { getSubCategories } from "@/services/auth/GetSubCategories/GetsbCategories";
import { useEffect, useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategoreis();
        console.log(categories);
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSubCategories = async () => {
      try {
        const subcategories = await getSubCategories();
        console.log(subcategories);
        setSubcategories(subcategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
    fetchSubCategories();
  }, []);

  const groupedSubcategories = categories.map((category) => {
    return {
      ...category,
      subcategories: subcategories.filter(
        (sub) => sub.category === category._id
      ),
    };
  });

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setOpenSubIndex(null);
  };

  return (
    <div className="absolute bottom-[-18%] left-1/2 -translate-x-1/2">
      <div className="relative inline-block text-center">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex w-[300px] justify-center gap-x-1.5 rounded-3xl bg-[#DAD2FF] border-b border-[#B2A5FF] px-3 py-2 text-gray-600 shadow-xs ring-gray-300 hover:bg-[#B2A5FF] hover:text-white hover:border-indigo-400 transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)]"
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

        {isOpen && (
          <div className="absolute w-[1000px] left-1/2 -translate-x-1/2 px-5 py-2 z-10 mt-2 origin-top-right rounded-3xl bg-[#DAD2FF] ring-1 shadow-lg ring-black/5 animate-fade-up">
            <div className="flex gap-3 justify-between">
              {groupedSubcategories.map((category, index) => (
                <div
                  key={index}
                  className="relative group text-start w-full rounded-3xl"
                  onMouseEnter={() => setOpenSubIndex(index)}
                  onMouseLeave={() => setOpenSubIndex(null)}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-center text-sm rounded-3xl text-gray-700 hover:bg-[#B2A5FF] hover:text-white font-sans"
                  >
                    {dropDownLocalization[
                      category.name as keyof typeof dropDownLocalization
                    ] || category.name}
                  </a>
                  {category.subcategories && openSubIndex === index && (
                    <div className="left-full text-center top-0 rounded-3xl p-3 font-sans">
                      {category.subcategories.map(
                        (
                          sub: { name: keyof typeof dropDownLocalization },
                          subIndex: number
                        ) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-2 text-sm rounded-2xl text-gray-700 hover:bg-[#B2A5FF] hover:text-white"
                            onClick={closeDropdown}
                          >
                            {dropDownLocalization[sub.name]}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
