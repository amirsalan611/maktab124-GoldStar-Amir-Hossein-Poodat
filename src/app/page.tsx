import DiscountSection from '@/components/DiscountSection/DiscountSection';
import LimitedSection from '@/components/LimitedSection/LimitedSection';
import HomeSwiper from '@/components/swiper/Swiper'
import React from 'react'

export default function page() {
  return (
    <div className="w-screen">
      <HomeSwiper />
      <DiscountSection />
      <LimitedSection />
    </div>
  );
}
