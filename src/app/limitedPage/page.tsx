"use client";

import Button from "@/components/Shared/button/Button";
import ProductCard from "@/components/Shared/ProductCard/ProductCard";
import { productPageLocalization } from "@/constants/Localizations/Localization";
import { getProducts } from "@/services/auth/getProducts/GetProducts";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const price = searchParams.get("price");

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", price],
    queryFn: () =>
      getProducts({
        [price === "500" ? "price500" : "priceOneM"]: true,
        page: 1,
      }),
  });

  useEffect(() => {
    if (products?.data?.products) {
      setAllProducts((prev) =>
        page === 1
          ? products.data.products
          : [...prev, ...products.data.products]
      );
    }
  }, [products, page]);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <div className="grid grid-cols-4 gap-4 gap-y-10 w-full">
          {[...Array(12)].map((_, index) => (
            <div
              className="flex flex-col items-center justify-center bg-purple-50 border border-[#B2A5FF] gap-2 rounded-3xl p-4 relative max-w-[400px] animate-pulse"
              key={index}
            >
              <div className="bg-gray-300 w-48 h-48 rounded-4xl" />
              <div className="bg-gray-300 w-32 h-6 rounded-md mt-4" />
              <div className="bg-gray-300 w-36 h-5 rounded-md mt-2" />
              <div className="bg-gray-300 w-24 h-5 rounded-md mt-2" />
              <div className="bg-gray-300 w-32 h-6 rounded-md mt-4" />
              <div className="bg-gray-300 w-32 h-8 rounded-full mt-4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const loadMore = () => {
    if (products?.total_pages > products?.page) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className="p-10 flex flex-col gap-10">
        {allProducts?.length ? (
          <div className="grid grid-cols-4 gap-4 gap-y-10 w-full bg-white z-10 justify-items-center p-5 shadow-white shadow-2xl rounded-4xl">
            {allProducts.map((product: any) => (
              <div className="bg-white">
                <ProductCard product={product} key={product._id} />
              </div>
            ))}
            {products?.total_pages === products?.page && (
              <p className="text-gray-400 text-lg col-span-2 col-start-2 row-start-auto">
                {productPageLocalization.noMore}
              </p>
            )}
            <Button
              content={productPageLocalization.more}
              type="button"
              disabled={products?.total_pages === products?.page ? true : false}
              className="bg-primary px-4 py-2 rounded-full col-span-2 col-start-2 row-start-auto"
              onClick={loadMore}
            />
          </div>
        ) : (
          <div className="text-center text-gray-500">
            {productPageLocalization.notFound}
          </div>
        )}
      </div>
    </div>
  );
}
