"use client";

import Input from "@/components/Shared/input/input";
import { useState } from "react";
import signup from "../../../public/image/signup.svg";
import signin from "../../../public/image/signin.svg";
import Image from "next/image";
import Button from "@/components/Shared/button/Button";
import { singInLocalization } from "@/constants/Localizations/Localization";
import SignInForm from "@/components/signInForm/signInForm";
import SignUpForm from "@/components/signUpForm/signUpForm";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[1000px] h-[700px] primary rounded-3xl relative overflow-hidden shadow-2xl">
        <div
          className={`absolute top-0 h-full w-1/2 secondPrimary z-20 transition-transform duration-1000 ease-in-out ${
            isSignIn
              ? "translate-x-0 rounded-l-3xl"
              : "translate-x-[500px] rounded-l-3xl"
          }`}
        >
          <div className="w-full h-full relative flex flex-col items-center justify-center gap-5 text-white">
            <Image
              src={signup}
              alt="Login"
              width={200}
              height={200}
              className=""
            />
            <p className="text-2xl text-center ">
              {singInLocalization.dontHave}
            </p>
            <Button
              content={singInLocalization.signUpSide}
              type="button"
              onClick={() => setIsSignIn(false)}
            />
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-1/2 secondPrimary z-20 transition-transform duration-1000 ease-in-out ${
            isSignIn
              ? "translate-x-[-500px] rounded-r-3xl"
              : "translate-x-0 rounded-r-3xl"
          }`}
        >
          <div className="w-full h-full relative flex flex-col items-center justify-center gap-5 text-white">
            <Image
              src={signin}
              alt="Login"
              width={200}
              height={200}
              className=""
            />
            <p className="text-2xl text-center ">{singInLocalization.have}</p>
            <Button
              content={singInLocalization.signInSide}
              type="button"
              onClick={() => setIsSignIn(true)}
            />
          </div>
        </div>

        <div className="absolute left-0 top-0 w-1/2 h-full z-10 flex justify-center items-center">
          <div
            className={`transition-opacity duration-500 w-full px-8 ${
              isSignIn ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <h2 className="text-3xl text-center mb-6">
              {singInLocalization.signIn}
            </h2>
            <SignInForm />
          </div>
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full z-10 flex justify-center items-center">
          <div
            className={`transition-opacity duration-500 w-full px-8 ${
              !isSignIn ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-6">
              {singInLocalization.signUp}
            </h2>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
