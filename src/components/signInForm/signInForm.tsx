"use client";
import React, { useState } from "react";
import Button from "@/components/Shared/button/Button";
import Input from "@/components/Shared/input/input";
import { singInLocalization } from "@/constants/Localizations/Localization";
import { SignIn } from "@/services/auth/SignInHandler/SignInHandler";
import { toast } from "react-toastify";

interface FormData {
  userName: string;
  password: string;
}

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: false,
    password: false,
    incorrect: false,
    empty: false
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false, incorrect: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const newErrors = {
      userName: !formData.userName.trim() && !errors.empty,
      password: !formData.password.trim() && !errors.empty,
      incorrect: false,
      empty: !formData.userName.trim() || !formData.password.trim(),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((val) => val);
    if (hasError) {
      return;
    }

    setLoading(true);

    try {
      const result = await SignIn(formData.userName, formData.password);
      console.log(result.data);
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token.accessToken);
        localStorage.setItem(
          "adminData",
          JSON.stringify(result.data.data.user)
        );
        toast.success(singInLocalization.success);
        window.location.href = "/";
      }
    } catch (error: any) {
      if (error?.response?.status === 401) {
        setErrors({ ...errors, incorrect: true });
        toast.error(singInLocalization.error);
      } else {
        toast.error("خطای غیرمنتظره‌ای رخ داده است.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        error={errors.userName}
        type="text"
        name="userName"
        placeholder={singInLocalization.username}
        value={formData.userName}
        onChange={handleChange}
        className=""
      />
      <Input
        error={errors.password}
        type="password"
        name="password"
        placeholder={singInLocalization.password}
        value={formData.password}
        onChange={handleChange}
        className=""
      />
      {errors.incorrect ? (
        <p className="text-center text-red-500">{singInLocalization.error}</p>
      ) : errors.empty ? <p className="text-center text-red-500">{singInLocalization.empty}</p> : ""}
      <Button
        content={loading ? "در حال ورود..." : singInLocalization.submit}
        type="submit"
        className="hover:bg-[#b2a5ff] hover:text-white"
      />
    </form>
  );
}








