"use client";
import Input from "@/components/Shared/input/input";
import React, { useEffect, useState } from "react";
import { checkoutPageLocalization } from "@/constants/Localizations/Localization";
import Button from "@/components/Shared/button/Button";
import { check_national_code } from "@/constants/regex/nationalId";
import { check_phone_number } from "@/constants/regex/phoneNumber";
import { useRouter } from "next/navigation";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function Page() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    recipientName: "",
    recipientNationalId: "",
    recipientPhone: "",
    deliveryAddress: "",
    deliveryDate: "",
  });
  const [errors, setErrors] = useState({
    recipientName: false,
    recipientNationalId: false,
    recipientPhone: false,
    deliveryAddress: false,
    deliveryDate: false,
  });

  useEffect(() => {
    const resipientData = JSON.parse(
      localStorage.getItem("recipientData") || "{}"
    );
    if (resipientData) {
      setFormData(resipientData);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      recipientName: formData.recipientName.trim() === "",
      recipientNationalId: !check_national_code(formData.recipientNationalId),
      recipientPhone: !check_phone_number(formData.recipientPhone),
      deliveryAddress: formData.deliveryAddress.trim() === "",
      deliveryDate: formData.deliveryDate.trim() === "",
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((e) => e);
    if (hasError) return;

    localStorage.setItem("recipientData", JSON.stringify(formData));

    router.push("/payment");
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center p-10 my-auto">
      <h1 className="text-2xl font-bold bg-[#b2a5ff] text-white rounded-xl p-5 w-full text-center">
        {checkoutPageLocalization.title}
      </h1>
      <form
        className="flex flex-col gap-5 justify-center items-center p-10"
        onSubmit={handleSubmit}
      >
        <Input
          error={errors.recipientName}
          type="text"
          name="recipientName"
          placeholder={checkoutPageLocalization.recipientName}
          value={formData.recipientName}
          onChange={handleChange}
          className=""
        />
        <Input
          error={errors.recipientNationalId}
          type="text"
          name="recipientNationalId"
          placeholder={checkoutPageLocalization.recipientNationalId}
          value={formData.recipientNationalId}
          onChange={handleChange}
          className=""
        />
        <Input
          error={errors.recipientPhone}
          type="text"
          name="recipientPhone"
          placeholder={checkoutPageLocalization.recipientPhone}
          value={formData.recipientPhone}
          onChange={handleChange}
          className=""
        />
        <Input
          error={errors.deliveryAddress}
          type="text"
          name="deliveryAddress"
          placeholder={checkoutPageLocalization.deliveryAddress}
          value={formData.deliveryAddress}
          onChange={handleChange}
          className=""
        />
        <DatePicker
          name="deliveryDate"
          value={formData.deliveryDate}
          placeholder={checkoutPageLocalization.deliveryDate}
          inputClass="w-full border-2 border-[#b2a5ff] rounded-xl p-2"
          calendar={persian}
          locale={persian_fa}
          format="YYYY/MM/DD"
          onChange={(date) => {
            if (!date) {
              setFormData((prev) => ({ ...prev, deliveryDate: "" }));
              return;
            }
            const gregorianDate = date.convert(persian, persian_fa).toDate();
            setFormData((prev) => ({
              ...prev,
              deliveryDate: gregorianDate.toISOString(),
            }));
          }}
        />
        <Button
          content={checkoutPageLocalization.submit}
          type="submit"
          className=""
        />
      </form>
    </div>
  );
}
