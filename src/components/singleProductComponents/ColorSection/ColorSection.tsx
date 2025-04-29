"use client";
import React, { useEffect } from "react";
import { Product } from "../ProductInterFace/ProductInterFace";
import { singleProductLocalization } from "@/constants/Localizations/Localization";
import { setColorSelected } from "@/components/redux/reducers/colorSelected";
import { useDispatch } from "react-redux";
import { BiCaretLeft } from "react-icons/bi";

export default function ColorSection({ product }: { product: Product }) {
  const colors = product.colors;
  const dispatch = useDispatch();

  useEffect(() => {
    if (colors?.length === 1) {
      dispatch(setColorSelected({ color: colors[0] }));
    }
  }, [colors, dispatch]);

  if (!colors || colors.length === 0) return null;
  if (colors.length === 1) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-2 items-center">
        <BiCaretLeft />
        <p className="text-2xl font-bold">{singleProductLocalization.color}</p>
      </div>
      <div className="grid grid-cols-2 justify-center items-center gap-2 max-w-[400px] overflow-x-auto scrollbar-hide">
        {colors?.map((color) => (
          <label
            key={color}
            className="h-10 w-full flex items-center justify-center cursor-pointer transition-colors overflow-hidden"
          >
            <input
              type="radio"
              name="color"
              id={color}
              className="hidden peer"
              onChange={() => dispatch(setColorSelected({ color }))}
            />
            <p className="peer-checked:bg-[#B2A5FF] peer-checked:text-white px-3 py-1 transition-colors min-w-[100px] text-center border-[1px] border-gray-500 rounded-[10px] hover:bg-[#B2A5FF] hover:text-white">
              {color}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
}
