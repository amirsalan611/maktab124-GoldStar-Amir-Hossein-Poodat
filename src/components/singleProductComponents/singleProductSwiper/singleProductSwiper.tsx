"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SingleProductSwiper({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
      dir="ltr"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !border-gray-200 !rounded-lg !py-10 !h-full"
      >
        {images?.map((image, index) => {
          return (
            <SwiperSlide key={index} className="!w-2/3 !h-full">
              <img
                src={`http://${image}`}
                alt={`image-[${index}]`}
                className="w-full h-full object-cover !rounded-2xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
