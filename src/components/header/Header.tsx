"use client"
import { RiShoppingCartLine } from "react-icons/ri";
import DropDown from "../dropDown/DropDown";
import Logo from "../logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { HeaderLocalization } from "@/constants/Localizations/Localization";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import { useState } from "react";

export default function Header() {
  const [logedIn, setLogedIn] = useState(true);

  return (
    <div className="p-5 m-6 rounded-3xl back flex justify-between items-center relative">
      <DropDown />
      <div className="w-[223px]">
        <Logo />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <SearchInput />
      </div>
      <div className="flex gap-2 items-center">
        <div>
          {/* TODO IF IS SIGN IN SHOW PROFILE */}
          {logedIn === true ? (
            <div className="p-3 border border-[rgb(147,158,255)] rounded-2xl text-gray-500 hover:bg-[rgb(147,158,255)] hover:text-white bg-white cursor-pointer hover:border-indigo-400 transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)]">
              <p>{HeaderLocalization.login}</p>
            </div>
          ) : (
            <div className="p-3 border border-[rgb(147,158,255)] rounded-2xl text-gray-500 hover:bg-[rgb(147,158,255)] hover:text-white hover:border-indigo-400 transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)] bg-white cursor-pointer">
              {HeaderLocalization.profile}
            </div>
          )}
        </div>

        <div className="p-3 border-1 rounded-2xl text-gray-500 hover:bg-[rgb(147,158,255)] hover:text-white hover:border-indigo-400 transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)] bg-white cursor-pointer">
          <RiShoppingCartLine className="text-2xl" />
        </div>

        <DarkModeButton />
      </div>
    </div>
  );
}
