import { getProduct } from "@/services/auth/getProduct/getProduct";
import SingleProductLoading from "@/components/singleProductComponents/singleProductLoading/singleProductLoading";
import SingleProductSwiper from "@/components/singleProductComponents/singleProductSwiper/singleProductSwiper";
import PriceSection from "@/components/singleProductComponents/priceSection/priceSection";
import NameSection from "@/components/singleProductComponents/NameSection/NameSection";
import ColorSection from "@/components/singleProductComponents/ColorSection/ColorSection";
import OrderSection from "@/components/singleProductComponents/OrderSection/OrderSection";
import DitailsSection from "@/components/singleProductComponents/DitailsSection/DitailsSection";
import { singleProductLocalization } from "@/constants/Localizations/Localization";


export default async function Page({ params }: { params: { id: string } }) {
  const productId = params.id;
  const { product } = await getProduct(productId);
  console.log(product);
  if (!product) {
    return (
      <div className="w-screen flex flex-col justify-center items-center p-10">
        <SingleProductLoading />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden flex flex-col justify-center items-center p-10 ">
      <section className="w-full flex justify-center overflow-x-hidden items-center gap-10 border-b border-gray-300 pb-10">
        <div className="w-1/3 h-full border overflow-hidden border-gray-500 rounded-xl self-start">
          <SingleProductSwiper images={product.images} />
        </div>
        <div className="w-2/3 self-start">
          <NameSection product={product} />
          <div className="flex gap-10 relative">
            <div className="flex flex-col gap-10">
              <PriceSection product={product} />
              <ColorSection product={product} />
            </div>
              <DitailsSection product={product} />
            <div className="border border-[#B2A5FF] rounded-xl absolute top-5 left-10 w-[250px] h-[300px] p-5 bg-purple-50">
              <OrderSection product={product} />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex flex-col gap-5 py-10">
        <h1 className="text-2xl font-bold">{singleProductLocalization.description}</h1>
        <p className="text-gray-500">{product.description}</p>
      </div>
    </div>
  );
}
