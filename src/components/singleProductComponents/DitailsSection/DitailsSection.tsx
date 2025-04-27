import React from 'react'
import { Product } from '../ProductInterFace/ProductInterFace'
import { GoDotFill } from "react-icons/go";

export default function DitailsSection({product}:{product:Product}) {
  return (
    <div className="flex flex-col gap-2">
      {product.details?.map((detail) => (
        <div className="flex items-center gap-2">
          <GoDotFill className="text-[#B2A5FF]" />
          <p key={detail} className="text-gray-500">{detail}</p>
        </div>
      ))}
    </div>
  );
}
