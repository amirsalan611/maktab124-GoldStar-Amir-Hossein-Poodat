import React, { useState } from "react";
import Button from "../Shared/button/Button";
import { productPageLocalization } from "@/constants/Localizations/Localization";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface Filter {
  sort: string;
  inStock: boolean;
  minPrice: string;
  maxPrice: string;
  discounts: boolean;
}

interface FilterSectionProps {
  filters: Filter;
  setFilters: (filters: Filter) => void;
  setPage: (page: number) => void;
  setAllProducts: (products: any[]) => void;
  refetch: boolean;
  setRefetch: (refetch: boolean) => void;
}

export default function FilterSection({
  filters,
  setFilters,
  setPage,
  setAllProducts,
  refetch,
  setRefetch,
}: FilterSectionProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [localFilters, setLocalFilters] = useState<Filter>(filters);

  const handleRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value as [number, number]);
      setLocalFilters({
        ...localFilters,
        minPrice: value[0].toString(),
        maxPrice: value[1].toString(),
      });
    }
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value === "" ? 0 : Number(e.target.value.replace(/,/g, ""));
    const newMin = Math.min(value, priceRange[1]);
    setPriceRange([newMin, priceRange[1]]);
    setLocalFilters({ ...localFilters, minPrice: newMin.toString() });
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value === "" ? 0 : Number(e.target.value.replace(/,/g, ""));
    const newMax = Math.max(value, priceRange[0]);
    setPriceRange([priceRange[0], newMax]);
    setLocalFilters({ ...localFilters, maxPrice: newMax.toString() });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalFilters({ ...localFilters, sort: e.target.value });
  };

  const handleApplyFilters = () => {
    const hasChanges =
      localFilters.sort !== filters.sort ||
      localFilters.inStock !== filters.inStock ||
      localFilters.minPrice !== filters.minPrice ||
      localFilters.maxPrice !== filters.maxPrice ||
      localFilters.discounts !== filters.discounts;

    if (hasChanges) {
      setFilters(localFilters);
      setPage(1);
      setAllProducts([]);
      setRefetch(!refetch);
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl flex gap-20 items-center justify-center w-full">
      <select
        className="w-[20%] p-2 rounded-md border border-[#b2a5ff] bg-purple-50 outline-none"
        value={localFilters.sort}
        onChange={handleSortChange}
      >
        <option value="" hidden>
          {productPageLocalization.sort}
        </option>
        <option value="1">{productPageLocalization.lowest}</option>
        <option value="2">{productPageLocalization.highest}</option>
      </select>
      <div className="flex flex-col gap-4 w-64">
        <div className="flex items-center justify-center gap-2">
          <label className="flex items-center gap-2 border px-3 py-2 rounded-md ">
            {productPageLocalization.from}
            <input
              type="text"
              placeholder={productPageLocalization.maxPrice}
              className="w-28 outline-none"
              value={Number(priceRange[0]).toLocaleString()}
              onChange={handleMinPriceChange}
            />
          </label>
          <label className="flex items-center gap-2 border px-3 py-2 rounded-md">
            {productPageLocalization.to}
            <input
              type="text"
              placeholder={productPageLocalization.minPrice}
              className="w-28 outline-none"
              value={Number(priceRange[1]).toLocaleString()}
              onChange={handleMaxPriceChange}
            />
          </label>
        </div>
        <div className="relative">
          <div className="flex justify-between mb-2 text-sm text-gray-600">
            <span>{productPageLocalization.minPrice}</span>
            <span>{productPageLocalization.maxPrice}</span>
          </div>
          <Slider
            range
            min={0}
            max={10000000}
            step={1000}
            value={priceRange}
            onChange={handleRangeChange}
            reverse={true}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={localFilters.discounts}
            className=""
            onChange={(e) =>
              setLocalFilters({ ...localFilters, discounts: e.target.checked })
            }
          />
          {productPageLocalization.discounts}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={localFilters.inStock}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, inStock: e.target.checked })
            }
          />
          {productPageLocalization.inStock}
        </label>
      </div>

      <Button
        content={productPageLocalization.apply}
        type="button"
        className="bg-primary px-4 py-2 rounded-full"
        onClick={handleApplyFilters}
      />
    </div>
  );
}
