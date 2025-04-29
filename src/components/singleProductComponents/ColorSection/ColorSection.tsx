"use client"
import React from "react";
import { Product } from "../ProductInterFace/ProductInterFace";
import { singleProductLocalization } from "@/constants/Localizations/Localization";
import { setColorSelected } from "@/components/redux/reducers/colorSelected";
import { useDispatch } from "react-redux";
import { BiCaretLeft } from "react-icons/bi"; 

export default function ColorSection({ product }: { product: Product }) {
  const colors = product.colors;
  const dispatch = useDispatch()
  console.log(colors)
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
            className="h-10 w-full flex items-center justify-center border border-gray-500 rounded-2xl cursor-pointer transition-colors overflow-hidden"
          >
            <input
              type="radio"
              name="color"
              id={color}
              className="hidden peer"
              onChange={() => dispatch(setColorSelected({ color }))}
            />
            <p className="peer-checked:bg-gray-400 px-3 py-2 rounded-2xl transition-colors min-w-[100px] text-center">
              {color}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
}
