import { FooterLocalization } from "@/constants/Localizations/Localization";

export default function Footer() {
  return (
    <div className="p-10 bg-gray-100 flex flex-col gap-5">
      <section>
        <div className="flex items-center justify-cente gap-3">
          <img
            src="/goldStar.jpg"
            alt="logo"
            className="w-[70px] rounded-full"
          />
          <p className="text-2xl">Gold Star</p>
        </div>
        <div>
          <p className="cursor-pointer mb-2">{FooterLocalization.aboutUs}</p>
          <div className="flex gap-2">
            <p className="cursor-pointer">{FooterLocalization.phone} :</p>
            <p className="font-mono">+98-9121234567</p>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
}
