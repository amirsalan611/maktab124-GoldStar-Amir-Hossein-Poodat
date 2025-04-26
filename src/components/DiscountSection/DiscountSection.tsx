"use client";
import { GetProductsByDiscount } from "@/services/auth/GetProductsByDiscount/GetProductsByDiscount";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../Shared/ProductCard/ProductCard";
import { HomePageLocalization } from "@/constants/Localizations/Localization";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import more from "../../../public/image/SwiperImages/discount.png";
import Button from "../Shared/button/Button";
import { useRouter } from "next/navigation";

export default function DiscountSection() {
  const router = useRouter()
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: GetProductsByDiscount,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  console.log("Product Data:", data);

  return (
    <div className="flex flex-col">
      <h2 className=" text-white text-4xl bg-gradient-to-l from-[#b2a5ff] py-7 px-10">
        {HomePageLocalization.discount}
      </h2>
      <div className="flex gap-2 items-center ">
        <div
          className="flex flex-col items-center justify-center gap-2 rounded-3xl py-10 px-5"
          key="more"
        >
          <img
            src={more.src}
            alt="more"
            width={400}
            className="object-cover rounded-4xl"
          />
          <Button
            content={HomePageLocalization.discountButton}
            type="button"
            className=""
            onClick={() => router.push("/discountPage")}
          />
        </div>
        <Swiper
          className="flex w-full h-full overflow-x-auto gap-4 scrollbar-hide !py-10 !px-8"
          modules={[Autoplay, Navigation]}
          loop={false}
          autoplay={{ delay: 5000 }}
          spaceBetween={300}
          slidesPerView={4}
        >
          {data?.map((product: any) => (
            <SwiperSlide className="font-sans" key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
