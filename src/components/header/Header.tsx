"use client"
import { RiShoppingCartLine } from "react-icons/ri";
import DropDown from "../dropDown/DropDown";
import Logo from "../logo/Logo";
import SearchInput from "../Shared/SearchInput/SearchInput";
import { HeaderLocalization } from "@/constants/Localizations/Localization";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [logedIn, setLogedIn] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if (token) {
      setLogedIn(true)
    }
  },[])

  return (
    <div className="p-5 m-6 rounded-3xl back flex justify-between items-center relative border border-[#B2A5FF]">
      <DropDown />
      <div className="w-[223px]">
        <Logo />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <SearchInput />
      </div>
      <div className="flex gap-2 items-center">
        <div>
          {/* TODO IF IS SIGN IN SHOW PROFILE */}
          {logedIn === false ? (
            <Link href="/signIn">
              <div className="p-3 border border-[#B2A5FF] rounded-2xl text-gray-500 hover:bg-[#B2A5FF] hover:text-white bg-white cursor-pointer transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)]">
                <p>{HeaderLocalization.login}</p>
              </div>
            </Link>
          ) : (
            <div className="p-3 border border-[#B2A5FF] rounded-2xl text-gray-500 hover:bg-[#B2A5FF] hover:text-white hover:border-indigo-400 transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)] bg-white cursor-pointer">
              {HeaderLocalization.profile}
            </div>
          )}
        </div>

        <div className="p-3 border-1 border-[#B2A5FF] rounded-2xl text-gray-500 hover:bg-[#B2A5FF] hover:text-white hover:border-indigo-400 transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)] bg-white cursor-pointer">
          <RiShoppingCartLine className="text-2xl" />
        </div>

        <DarkModeButton />
      </div>
    </div>
  );
}
