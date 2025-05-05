"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, use } from "react";
import { getProducts } from "@/services/auth/getProducts/GetProducts";
import { getCategoreis } from "@/services/auth/GetCategories/GetCategoreis";
import { getSubCategories } from "@/services/auth/GetSubCategories/GetsbCategories";
import ProductCard from "@/components/Shared/ProductCard/ProductCard";
import Button from "@/components/Shared/button/Button";
import { productPageLocalization } from "@/constants/Localizations/Localization";
import FilterSection from "@/components/filterSectionOfProductPage/filterSection";
import { Category, Product, SubCategory } from "@/types/product";

export default function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = use(props.params);
  const [refetch, setRefetch] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState<"category" | "subcategory" | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    sort: "",
    inStock: false,
    minPrice: "",
    maxPrice: "",
    discounts: false,
  });

  useEffect(() => {
    const checkProductType = async () => {
      try {
        const [categories, subCategories] = await Promise.all([
          getCategoreis(),
          getSubCategories(),
        ]);

        if (categories.some((cat: Category) => cat._id === id)) {
          setType("category");
        } else if (subCategories.some((sub: SubCategory) => sub._id === id)) {
          setType("subcategory");
        }
      } catch (err) {
        console.error(err);
      }
    };

    checkProductType();
  }, [id, refetch]);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", id, type, page],
    queryFn: () => getProducts({ id, type: type!, page: page }),
    enabled: !!type,
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

  if (isLoading || !type) {
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
    <div className="p-10 flex flex-col gap-10 items-center">
      <div className="w-2/3 flex justify-between items-center bg-gray-50 py-2 px-5 rounded-2xl">
        <h1 className="text-2xl font-bold flex items-center gap-2 w-[10%]">
          {productPageLocalization.filter}
        </h1>
        <FilterSection filters={filters} setFilters={setFilters} setPage={setPage} setAllProducts={setAllProducts} refetch={refetch} setRefetch={setRefetch} />
      </div>
      {allProducts?.length ? (
        <div className="grid grid-cols-4 gap-4 gap-y-10 w-full">
          {allProducts.map((product: Product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          {productPageLocalization.notFound}
        </div>
      )}
      {products?.total_pages === products?.page && (
        <p className="text-gray-400 text-lg">
          {productPageLocalization.noMore}
        </p>
      )}
      <Button
        content={productPageLocalization.more}
        type="button"
        disabled={products?.total_pages === products?.page ? true : false}
        className="bg-primary px-4 py-2 rounded-full"
        onClick={loadMore}
      />
    </div>
  );
}
