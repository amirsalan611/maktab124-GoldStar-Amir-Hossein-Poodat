import { singleProductLocalization } from '@/constants/Localizations/Localization';
import React from 'react'
import { Product } from '../ProductInterFace/ProductInterFace';

export default function NameSection({ product }: { product: Product }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 border-b border-b-gray-300 pb-4">
      <div className="flex gap-2 justify-between items-center self-start">
        <h1 className="text-lg text-gray-500">
          {singleProductLocalization.brand}
        </h1>
        <p className="text-2xl">{product.brand}</p>
      </div>
      <div className="flex gap-2 justify-between items-center self-start">
        <p className="text-2xl">{product.name}</p>
      </div>
    </div>
  );
}
