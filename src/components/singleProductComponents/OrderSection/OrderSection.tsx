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
import Swal from "sweetalert2";
export default function OrderSection({ product }: { product: Product }) {
  const [count, setCount] = React.useState(0);
  const ProductId = product._id;
  const colorSelected = useSelector(
    (state: any) => state.colorSelected.colorSelected.color
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("carts") || "[]");
    const newProduct = { product: ProductId, count, color: colorSelected };

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

        Swal.fire({
          title: singleProductLocalization.success,
          text: singleProductLocalization.successText,
          icon: "success",
          showCancelButton: true,
          confirmButtonText: singleProductLocalization.successButton,
          cancelButtonText: singleProductLocalization.successCancel,
          buttonsStyling: false,
          customClass: {
            container: "custom-swal-container",
            popup: "rounded-3xl",
            confirmButton:
              "bg-[#B2A5FF] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#B2A5FF]/80",
            cancelButton:
              "bg-gray-500 text-white px-4 py-2 rounded-lg mr-5 cursor-pointer hover:bg-gray-500/80",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/carts";
          }
          if (result.isDismissed) {
            window.location.reload();
          }
        });

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
      {product.quantity < 1 ? (
        <div className="flex justify-center items-center h-full">{singleProductLocalization.dontHave}</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
