import React, { useState } from "react";
import Button from "../Shared/button/Button";
import {
  signUpLocalization,
  singInLocalization,
} from "@/constants/Localizations/Localization";
import Input from "../Shared/input/input";
import { SignUP } from "@/services/auth/SignUpHandler/SignUpHandler";
import { toast } from "react-toastify";

interface formData {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  address: string;
  password: string;
}

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;

  const [formData, setFormData] = useState<formData>({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    username: false,
    phoneNumber: false,
    address: false,
    password: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    const newErrors = {
      firstName: !formData.firstName.trim() && !errors.error,
      lastName: !formData.lastName.trim(),
      username: !formData.username.trim(),
      phoneNumber: !iranPhoneRegex.test(formData.phoneNumber),
      address: !formData.address.trim(),
      password: !formData.password.trim(),
      error: true,
    };

    setErrors(newErrors);

    setLoading(true);

    try {
        console.log(formData)
      const result = await SignUP(formData);
      console.log(result.data);
      if (result.status === 201) {
        window.location.href = "/signIn";
      }
    } catch (error: any) {
      if (error?.response?.status === 401) {
        toast.error(signUpLocalization.error);
      } else {
        toast.error(singInLocalization.error);
      }
    } finally {
      setLoading(false);
      setErrors({...errors,error:false});
      toast.success(signUpLocalization.success);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 overflow-y-auto max-h-[500px] hide-scrollbar relative"
      onSubmit={handleSubmit}
    >
      <Input
        error={errors.firstName}
        type="text"
        name="firstName"
        placeholder={singInLocalization.firstName}
        className=""
        value={formData.firstName}
        onChange={handleChange}
      />
      <Input
        error={errors.lastName}
        type="text"
        name="lastName"
        placeholder={singInLocalization.lastName}
        className=""
        value={formData.lastName}
        onChange={handleChange}
      />
      <Input
        error={errors.username}
        type="text"
        name="username"
        placeholder={singInLocalization.username}
        className=""
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        error={errors.phoneNumber}
        type="text"
        name="phoneNumber"
        placeholder={singInLocalization.phoneNumber}
        className=""
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <Input
        error={errors.address}
        type="text"
        name="address"
        placeholder={singInLocalization.address}
        className=""
        value={formData.address}
        onChange={handleChange}
      />
      <Input
        error={errors.password}
        type="password"
        name="password"
        placeholder={singInLocalization.password}
        className=""
        value={formData.password}
        onChange={handleChange}
      />
      {errors.error && <p className="text-center text-red-500">{signUpLocalization.error}</p>}
      <Button
        content={singInLocalization.signUp}
        type="submit"
        className="hover:bg-[#b2a5ff] hover:text-white"
      />
    </form>
  );
}
