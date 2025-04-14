import { RiShoppingCartLine } from "react-icons/ri";
import DropDown from "../dropDown/DropDown";
import Logo from "../logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { HeaderLocalization } from "@/constants/Localizations/Localization";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

export default function Header() {
  return (
    <div className="p-5 bg-gray-50 flex justify-between">
      <Logo />
      <div className="flex flex-col gap-5 justify-center">
        <SearchInput />
        <DropDown />
      </div>
      <div className="flex gap-5 items-center">
        <div>
          {/* TODO IF IS SIGN IN SHOW PROFILE */}
          <div className="p-3 border rounded-2xl text-gray-500 hover:bg-[rgba(121,135,255,0.4)] bg-white cursor-pointer">
            <p>{HeaderLocalization.login}</p>
          </div>

          <div className="p-3 border-1 rounded-2xl text-gray-500 hover:bg-[rgba(121,135,255,0.4)] bg-white cursor-pointer">
            {HeaderLocalization.profile}
          </div>
        </div>

        <div className="p-3 border-1 rounded-2xl text-gray-500 hover:bg-[rgba(121,135,255,0.4)] bg-white cursor-pointer">
          <RiShoppingCartLine className="text-2xl" />
        </div>

        <DarkModeButton />

      </div>
    </div>
  );
}
