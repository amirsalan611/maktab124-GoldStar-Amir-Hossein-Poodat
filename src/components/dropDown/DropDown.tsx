"use client";

import {
  dropDownLocalization,
  DropDownLocalization,
} from "@/constants/Localizations/Localization";
import { getCategoreis } from "@/services/auth/GetCategories/GetCategoreis";
import { getSubCategories } from "@/services/auth/GetSubCategories/GetsbCategories";
import Link from "next/link";
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
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSubCategories = async () => {
      try {
        const subcategories = await getSubCategories();
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
    <div className="absolute bottom-[-18%] left-1/2 -translate-x-1/2 z-40">
      <div className="relative inline-block text-center">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex w-[300px] justify-center gap-x-1.5 rounded-3xl bg-purple-50 border-b border-[#B2A5FF] px-3 py-2 text-gray-600 shadow-xs ring-gray-300 hover:bg-[#B2A5FF] hover:text-white hover:border-indigo-400 transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)]"
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
          <div className="absolute w-[1000px] left-1/2 -translate-x-1/2 z-10 mt-2 origin-top-right rounded-3xl bg-purple-50 border border-[#B2A5FF] shadow-xl animate-fade-up">
            <div className="grid grid-cols-4 gap-4 p-6">
              {groupedSubcategories.map((category, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setOpenSubIndex(index)}
                  onMouseLeave={() => setOpenSubIndex(null)}
                >
                  <Link
                    href={`/products/${category._id}`}
                    className="block p-4 text-lg font-medium text-gray-800 hover:bg-[#B2A5FF] hover:text-white transition-all duration-300 rounded-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDropdown();
                    }}
                  >

                    {dropDownLocalization[
                      category.name as keyof typeof dropDownLocalization
                    ] || category.name}
                  </Link>
                  {category.subcategories && openSubIndex === index && (
                    <div className="mt-2 space-y-1 rounded-xl p-2">
                      {category.subcategories.map(
                        (
                          sub: {
                            name: keyof typeof dropDownLocalization;
                            _id: string;
                          },
                          subIndex: number
                        ) => (
                          <Link
                            key={subIndex}
                            href={`/products/${sub._id}`}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#B2A5FF] hover:text-white rounded-lg transition-all duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeDropdown();
                            }}
                          >
                            {dropDownLocalization[sub.name]}
                          </Link>
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
