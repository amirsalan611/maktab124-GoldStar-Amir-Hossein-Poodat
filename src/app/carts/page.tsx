"use client";
import PeySection from "@/components/cartPageComponents/peySection/peySection";
import ProductCart from "@/components/cartPageComponents/productCart/productCart";
import { cartPageLocalization } from "@/constants/Localizations/Localization";
import { getProductById } from "@/services/auth/getProductById/getProductById";
import { product } from "@/types/product";
import React, { useEffect, useState } from "react";

interface Cart {
  product: string;
  count: number;
  color: string;
}

export default function page() {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    const carts = localStorage.getItem("carts");
    if (carts) {
      setCarts(JSON.parse(carts));
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await Promise.all(
        carts.map((cart) => getProductById(cart.product))
      );
      setProducts(products);
    };
    fetchProducts();
  }, [carts]);

  const handleDelete = (id: string, color: string) => {
    const updatedCart = carts.filter(
      (item) => !(item.product === id && item.color === color)
    );
    const updatedProducts = products.filter(
      (item) => !(item._id === id && item.colors?.includes(color))
    );
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setCarts(updatedCart);
    setProducts(updatedProducts);
  };

  return (
    <div className="p-10 flex gap-10 justify-between">
      <div className="w-2/3 flex flex-col gap-10">
        {products.length < 1 ? (
          <div className="flex justify-center items-center h-full text-gray-500 text-lg">
            {cartPageLocalization.noItems}
          </div>
        ) : (
          products.map((product, index) => {
            return (
              <div key={`${product._id}-${index}`}>
                <ProductCart
                  product={product}
                  cart={carts.find((cart) => {
                    return cart.product === product._id;
                  })}
                  allCart={carts}
                  setAllCart={setCarts}
                  handleDelete={handleDelete}
                />
              </div>
            );
          })
        )}
      </div>
      <div className="w-1/4 max-h-[300px] flex flex-col gap-5 border rounded-xl p-5 justify-between shadow-lg bg-purple-50">
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex justify-between">
            <h1>{cartPageLocalization.totalPrice}</h1>
            <div className="flex gap-2">
              <p>
                {products
                  .reduce(
                    (sum, product) =>
                      sum +
                      +product.price *
                        +(
                          carts.find((cart) => cart.product === product._id)
                            ?.count ?? 0
                        ),
                    0
                  )
                  .toLocaleString()}
              </p>
              <p>{cartPageLocalization.toman}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h1>{cartPageLocalization.totalDiscount}</h1>
            <div className="flex gap-2">
              <p>
                {products
                  .reduce(
                    (sum, product) =>
                      sum + (product.price / 100) * product.discount,
                    0
                  )
                  .toLocaleString()}
              </p>
              <p>{cartPageLocalization.toman}</p>
            </div>
          </div>
        </div>
        <PeySection products={products} carts={carts} />
      </div>
    </div>
  );
}
