"use client"
import Button from "@/components/Shared/button/Button";
import { cartPageLocalization } from "@/constants/Localizations/Localization";
import { useRouter } from "next/navigation";
import React from "react";
import { TbTrashFilled } from "react-icons/tb";
import { product } from "@/types/product";
import { Cart } from "@/types/Cart";


export default function ProductCart({
  product,
  cart,
  allCart,
  setAllCart,
  handleDelete,
}: {
  product: product;
  cart: Cart;
  allCart: Cart[];
  setAllCart: (cart: Cart[]) => void;
  handleDelete: (id: string, color: string) => void;
}) {
  const router = useRouter();

  const handleIncrement = () => {
    const updatedCart = allCart.map((item) => {
      if (item.product === cart.product && item.color === cart.color) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setAllCart(updatedCart);
  };

  const handleDecrement = () => {
    const updatedCart = allCart.map((item) => {
      if (item.product === cart.product && item.color === cart.color) {
        return { ...item, count: Math.max(item.count - 1, 1) };
      }
      return item;
    });
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setAllCart(updatedCart);
    };



  return (
    <div className="flex gap-2 border rounded-xl p-5 justify-between relative bg-purple-50">
      <div className="flex gap-5">
        <div
          className="border border-gray-600 rounded-3xl overflow-hidden cursor-pointer"
          onClick={() => router.push(`/singleProduct/${product._id}`)}
        >
          <img
            src={`http://${product.images?.[0]}`}
            alt="Product"
            className="w-32 h-32 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">{product.name}</h1>
          <div className="flex gap-2">
            <h1 className="text-lg text-gray-600">
              {cartPageLocalization.brand}
            </h1>
            <p className="text-lg text-gray-600">{product.brand}</p>
          </div>
          <div className="flex gap-2">
            <h1 className="text-lg text-gray-600">
              {cartPageLocalization.color}
            </h1>
            <p className="text-lg text-gray-600">{cart.color}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-1 justify-between w-1/4">
        <div className="flex justify-center items-center gap-2 self-end">
          <Button content="+" type="button" onClick={handleIncrement} />
          <p>{cart.count}</p>
          <Button content="-" type="button" onClick={handleDecrement} />
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            <div className="flex gap-1 justify-between">
              <h1>{cartPageLocalization.price}</h1>
              <p>{product.price.toLocaleString()}</p>
            </div>
            {product.discount > 0 && (
              <div className="flex gap-1 justify-between">
                <h1>{cartPageLocalization.discount}</h1>
                <p>{product.discount}%</p>
              </div>
            )}
          </div>
          <div className="flex gap-1 justify-between border-t border-gray-600 pt-2">
            <h1>{cartPageLocalization.totalPrice}</h1>
            <p>{(product.price * cart.count).toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[-15px] left-[-15px] cursor-pointer"
        onClick={() => handleDelete(cart.product, cart.color)}
      >
        <TbTrashFilled className="text-red-500 text-4xl" />
      </div>
    </div>
  );
}
