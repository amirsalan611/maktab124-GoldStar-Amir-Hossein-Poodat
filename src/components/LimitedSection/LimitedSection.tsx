"use client";
import React from "react";
import to500 from "../../../public/image/to500.png";
import to1m from "../../../public/image/to1m.png";
import { limitedSectionLocalization } from "@/constants/Localizations/Localization";
import Button from "../Shared/button/Button";
import { useRouter } from "next/navigation";

export default function LimitedSection() {
  const router = useRouter();

  return (
    <div className="">
      <h2 className=" text-white text-4xl bg-gradient-to-l from-[#f2b3b5] py-7 px-10">
        {limitedSectionLocalization.watDoyouWant}
      </h2>
      <div className="flex items-center justify-center gap-10 my-10">
        <div className="relative w-1/3">
          <img src={to500.src} alt="to500" className="rounded-3xl " />
          <Button
            content={limitedSectionLocalization.go}
            type="button"
            className="absolute bottom-20 right-30"
            onClick={() => router.push("/limitedPage?price=500")}
          />
        </div>
        <div className="relative w-1/3">
          <img src={to1m.src} alt="to1m" className="rounded-3xl" />
          <Button
            content={limitedSectionLocalization.go}
            type="button"
            className="absolute bottom-20 right-30"
            onClick={() => router.push("/limitedPage?price=1000000")}
          />
        </div>
      </div>
    </div>
  );
}
