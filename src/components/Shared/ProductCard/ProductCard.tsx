import { homePageLocalization } from "@/constants/Localizations/Localization";
import React from "react";
import Button from "../button/Button";

export default function ProductCard({
  product,
  key,
}: {
  product: any;
  key?: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-purple-50 border border-[#B2A5FF] gap-2 rounded-3xl p-4 relative w-[400px] hover:scale-105 transition-all duration-300"
      key={key}
    >
      <img
        src={`http://${product.images[0]}`}
        alt={product.name}
        width={200}
        className="object-cover rounded-4xl"
      />
      <h1>{product.name}</h1>
      <p className="line-through text-gray-500 flex items-center gap-2">
        {product.price.toLocaleString()}
        <span className=" text-gray-500 text-sm">
          {homePageLocalization.toman}
        </span>
      </p>
      {product.discount > 0 && (
        <p className="absolute text-3xl top-3 right-3 bg-red-500 text-white rounded-full px-2 py-3">
          {product.discount}%
        </p>
      )}
      <p className="text-3xl font-bold flex items-center gap-2">
        {(
          product.price -
          (product.price / 100) * product.discount
        ).toLocaleString()}
        <span className=" text-gray-500 text-2xl">
          {homePageLocalization.toman}
        </span>
      </p>
      <Button
        content={homePageLocalization.open}
        type="button"
        className="bg-primary px-4 py-2 rounded-full"
      />
    </div>
  );
}
