import { FooterLocalization } from "@/constants/Localizations/Localization";
import Logo from "../logo/Logo";
import { BsAwardFill } from "react-icons/bs";
import { TbClock24 } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="p-5 back flex flex-col gap-5 z-50">
      <section>
        <div className="flex gap-24">
          <Logo />
          <div className="flex gap-2 mt-5">
            <p className="cursor-pointer">{FooterLocalization.phone} :</p>
            <p className="font-mono">+98-9121234567</p>
          </div>
        </div>
        <div className="mr-2 p-2 flex gap-10 items-start mt-5">
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <BsAwardFill className="text-5xl" />
              <p className="cursor-pointer my-2">
                {FooterLocalization.orginal}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <TbClock24 className="text-5xl" />
              <p className="cursor-pointer my-2">{FooterLocalization.clock}</p>
            </div>
            <div className="flex flex-col items-center">
              <TbClock24 className="text-5xl" />
              <p className="cursor-pointer my-2">{FooterLocalization.pey}</p>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <h1 className="text-2xl">{FooterLocalization.goldStar}</h1>
            <p>{FooterLocalization.about}</p>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
