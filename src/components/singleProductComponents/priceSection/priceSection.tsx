import discount from "../../../../public/image/off.png";
import { homePageLocalization, singleProductLocalization } from "@/constants/Localizations/Localization";
import { Product } from "../ProductInterFace/ProductInterFace";
import { BiCaretLeft } from "react-icons/bi";

export default function PriceSection({ product }: { product: Product }) {
  return (
    <div className="mt-5">
      <div className="flex gap-2 items-center">
        <BiCaretLeft />
        <h1 className="text-2xl font-bold">
          {singleProductLocalization.price}
        </h1>
      </div>
      {product.discount > 0 ? (
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <p className="text-xl text-gray-500 line-through">
                {product.price.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm self-end">
                {homePageLocalization.toman}
              </p>
            </div>
            <div className="animation">
              <img src={discount.src} alt="discount" className="w-20" />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white z-10">
                {product.discount}%
              </p>
            </div>
          </div>
          <div>
            <p className="text-3xl font-bold flex items-center gap-2">
              {(
                product.price -
                (product.price / 100) * product.discount
              ).toLocaleString()}
              <span className=" text-gray-500 text-2xl">
                {homePageLocalization.toman}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 items-center self-start pt-5">
          <p className="text-2xl">{product.price.toLocaleString()}</p>
          <p className="text-gray-500 text-sm self-end">
            {homePageLocalization.toman}
          </p>
        </div>
      )}
    </div>
  );
}
