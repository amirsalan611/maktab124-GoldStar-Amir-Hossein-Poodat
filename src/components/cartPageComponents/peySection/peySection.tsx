"use client";
import Button from "@/components/Shared/button/Button";
import { cartPageLocalization } from "@/constants/Localizations/Localization";
import { useRouter } from "next/navigation";
import { product } from "@/types/product";
import { Cart } from "@/types/Cart";

import React from "react";

export default function PeySection({
  products,
  carts,
}: {
  products: product[];
  carts: Cart[];
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 justify-between border-t pt-5">
      <div className="flex justify-between">
        <h1>{cartPageLocalization.totalPrice}</h1>
        <div className="flex gap-2">
          <p>
            {products
              .reduce((sum, product) => sum + product.price, 0)
              .toLocaleString()}
          </p>
          <p>{cartPageLocalization.toman}</p>
        </div>
      </div>
      <Button
        content={cartPageLocalization.checkout}
        type="button"
        onClick={() => {
          router.push("/checkOut");
        }}
      />
    </div>
  );
}
