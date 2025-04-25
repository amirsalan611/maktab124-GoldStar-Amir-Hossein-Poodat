"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "../../../public/image/SwiperImages/slide1.jpg";
import slide2 from "../../../public/image/SwiperImages/slide2.jpg";
import slide3 from "../../../public/image/SwiperImages/slide3.jpg";
import slide4 from "../../../public/image/SwiperImages/slide4.jpg";
import slide5 from "../../../public/image/SwiperImages/slide5.jpg";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { swiperLocalization } from "@/constants/Localizations/Localization";
import Button from "../Shared/button/Button";

export default function HomeSwiper() {
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
        <img
          src={slide1.src}
          alt="Slide 1"
          className="w-1/3 h-full rounded-3xl m-auto"
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide1}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type={undefined}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-1/3 h-full grad2 pt-5">
        <img
          src={slide2.src}
          alt="Slide 2"
          className="w-1/3 h-full rounded-xl m-auto"
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide2}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type={undefined}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-1/3 h-full grad3 pt-5 ">
        <img
          src={slide3.src}
          alt="Slide 3"
          className="w-1/3 h-full rounded-3xl m-auto"
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide3}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type={undefined}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-1/3 h-full grad4 pt-5 ">
        <img
          src={slide4.src}
          alt="Slide 4"
          className="w-1/3 h-full rounded-3xl m-auto"
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide4}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type={undefined}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-1/3 h-full grad5 pt-5 ">
        <img
          src={slide5.src}
          alt="Slide 5"
          className="w-1/3 h-full rounded-3xl m-auto"
        />
        <div className="w-1/3 m-auto p-5 text-2xl h-full flex justify-between items-center gap-5 z-50">
          <p className="text-black bg-gradient-to-l from-white py-3 px-5 rounded-3xl">
            {swiperLocalization.slide5}
          </p>
          <Button
            className="bg-primary text-black"
            content={swiperLocalization.view}
            type={undefined}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
