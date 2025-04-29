"use client";
import Button from "@/components/Shared/button/Button";
import {
  addTocartLocalization,
  singleProductLocalization,
} from "@/constants/Localizations/Localization";
import React from "react";
import { Product } from "../ProductInterFace/ProductInterFace";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setColorSelected } from "@/components/redux/reducers/colorSelected";

export default function OrderSection({ product }: { product: Product }) {
  const [count, setCount] = React.useState(0);
  const ProductId = product._id;
  const colorSelected = useSelector(
    (state: any) => state.colorSelected.colorSelected.color
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("carts") || "[]");
    const newProduct = { _id: ProductId, count, color: colorSelected };

    const index = cart.findIndex((item: any) => item._id === product._id);

if (count > 0) {
  if (colorSelected) {
    if (index !== -1) {
      if (cart[index].color === colorSelected) {
        cart[index].count += count;
        toast.success(addTocartLocalization.success);
      } else {
        cart.push(newProduct);
        toast.success(addTocartLocalization.colorSuccess);
      }
    } else {
      cart.push(newProduct);
      toast.success(addTocartLocalization.added);
    }

    localStorage.setItem("carts", JSON.stringify(cart));
    dispatch(setColorSelected(""));
    setCount(0);
  } else {
    toast.error(addTocartLocalization.colorNotSelected);
  }
} else {
      toast.error(addTocartLocalization.countNotSelected);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-3 h-full ">
      <div className="border-b pb-5 border-gray-300 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <h2>{singleProductLocalization.totalPrice}</h2>
          <p>
            {(
              (product.price - (product.price / 100) * product.discount) *
              count
            ).toLocaleString()}
          </p>
        </div>
        {product.discount > 0 && (
          <div className="flex items-center justify-between gap-2">
            <h2>{singleProductLocalization.totalDiscount}</h2>
            <p>
              {(
                (product.price / 100) *
                product.discount *
                count
              ).toLocaleString()}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <p>{singleProductLocalization.count}</p>
        <div className="flex items-center justify-center gap-4">
          <Button
            content="+"
            type="button"
            onClick={() => setCount(count + 1)}
            className="w-10 h-10 items-center justify-center flex"
          />
          <p>{count}</p>
          <Button
            content="-"
            type="button"
            onClick={() => setCount(Math.max(0, count - 1))}
            className="w-10 h-10 items-center justify-center flex"
          />
        </div>
        <Button
          content={singleProductLocalization.addToCart}
          type="button"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
}
