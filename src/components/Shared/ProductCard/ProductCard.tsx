"use client";
import {
  homePageLocalization,
  singleProductLocalization,
} from "@/constants/Localizations/Localization";
import React from "react";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import discount from "../../../../public/image/off.png";
import { Product } from "@/types/product";


export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center bg-purple-50 border border-[#B2A5FF] gap-2 rounded-3xl p-4 relative w-[400px] h-[480px] hover:scale-105 transition-all duration-300">
      <img
        src={`http://${product.images?.[0]}`}
        alt={product.name}
        width={200}
        className="object-cover rounded-4xl"
      />
      <h1 className="text-gray-500 text-sm">{product.brand}</h1>
      <h1 className="text-ellipsis overflow-hidden whitespace-nowrap border-b border-gray-300 pb-2 w-2/3 text-center">
        {product.name}
      </h1>
      {product.quantity > 0 ? (
        <>
          {product.discount > 0 && (
            <div className="flex items-center gap-2">
              <p className="line-through text-gray-500 gap-2">
                {product.price.toLocaleString()}
              </p>
              <span className="text-gray-500 text-sm self-end">
                {homePageLocalization.toman}
              </span>
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute top-[-10px] right-[-15px] animation">
              <img src={discount.src} alt="discount" className="w-20" />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white z-10">
                {product.discount}%
              </p>
            </div>
          )}
          <p className="text-3xl font-bold flex items-center gap-2">
            {(
              product.price -
              (product.price / 100) * product.discount
            ).toLocaleString()}
            <span className="text-gray-500 text-2xl">
              {homePageLocalization.toman}
            </span>
          </p>
        </>
      ) : (
        <p className="text-2xl text-red-500 py-5">
          {singleProductLocalization.dontHave}
        </p>
      )}
      <Button
        content={homePageLocalization.open}
        type="button"
        className="bg-primary px-4 py-2 rounded-full"
        onClick={() => {
          router.push(`/singleProduct/${product._id}`);
        }}
      />
    </div>
  );
}
