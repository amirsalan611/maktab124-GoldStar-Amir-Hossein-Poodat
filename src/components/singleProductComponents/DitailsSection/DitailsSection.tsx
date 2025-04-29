import React from 'react'
import { Product } from '../ProductInterFace/ProductInterFace'
import { GoDotFill } from "react-icons/go";
import { singleProductLocalization } from '@/constants/Localizations/Localization';
import { BiCaretLeft } from 'react-icons/bi';

export default function DitailsSection({product}:{product:Product}) {
  return (
    <div className="flex flex-col gap-2 pt-5">
      <div className="flex gap-2 items-center">
        <BiCaretLeft />
        <p className="text-2xl font-bold">
          {singleProductLocalization.details}
        </p>
      </div>
      <div className="flex flex-col gap-2 mr-5">
        {product.details?.map((detail) => (
          <div className="flex items-center gap-2" key={detail}>
            <GoDotFill className="text-[#B2A5FF]" />
            <p className="text-gray-500">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
