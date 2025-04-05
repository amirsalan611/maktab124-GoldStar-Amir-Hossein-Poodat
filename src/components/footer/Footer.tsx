import { FooterLocalization } from "@/constants/Localizations/Localization";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <div className="p-10 bg-gray-100 flex flex-col gap-5">
      <section>
        <Logo/>
        <div className="mr-2">
          <p className="cursor-pointer my-2">{FooterLocalization.aboutUs}</p>
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
