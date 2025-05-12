"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "../../../public/image/SwiperImages/slide1.jpg";
import slide2 from "../../../public/image/SwiperImages/slide2.jpg";
import slide4 from "../../../public/image/SwiperImages/slide4.jpg";
import slide5 from "../../../public/image/SwiperImages/slide5.jpg";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { swiperLocalization } from "@/constants/Localizations/Localization";
import Button from "../Shared/button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeSwiper() {
  const router = useRouter();
  return (
    <Swiper
      className="w-full mt-5"
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      speed={1000}
      loop
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide className="w-1/3 h-full grad1 pt-5 text-black">
        <Image
          src={slide1.src}
          alt="Slide 1"
          className="w-1/3 h-full rounded-3xl m-auto"
          width={1000}
          height={1000}
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide1}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type="button"
            onClick={() => router.push("/products/67fa84d5cdb03e7be7df00f1")}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-1/3 h-full grad2 pt-5">
        <Image
          src={slide2.src}
          alt="Slide 2"
          className="w-1/3 h-full rounded-xl m-auto"
          width={1000}
          height={1000}
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide2}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type="button"
            onClick={() => router.push("/products/67fa8504cdb03e7be7df00f5")}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-1/3 h-full grad4 pt-5 ">
        <Image
          src={slide4.src}
          alt="Slide 4"
          className="w-1/3 h-full rounded-3xl m-auto"
          width={1000}
          height={1000}
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide4}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type="button"
            onClick={() => router.push("/products/67fa851acdb03e7be7df00f9")}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-1/3 h-full grad5 pt-5 ">
        <Image
          src={slide5.src}
          alt="Slide 5"
          className="w-1/3 h-full rounded-3xl m-auto"
          width={1000}
          height={1000}
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide5}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type="button"
            onClick={() => router.push("/products/67fa84c2cdb03e7be7df00ed")}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
