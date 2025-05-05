"use client";
import React, { useState } from "react";
import { paymentPageLocalization } from "@/constants/Localizations/Localization";
import Input from "@/components/Shared/input/input";
import Button from "@/components/Shared/button/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/services/api/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const cartData = JSON.parse(localStorage.getItem("carts") || "{}");
  console.log("cartData", cartData);
  const userData = useSelector((state: any) => state.userData.userData);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const recipientData = JSON.parse(
      localStorage.getItem("recipientData") || "{}"
    );
    console.log("userData", userData);
    try {
      const response = await axios.post(`${BASE_URL}/api/orders/`, {
        user: userData._id,
        products: cartData,
        adress: recipientData.deliveryAddress,
        recipientName: recipientData.recipientName,
        recipientPhone: recipientData.recipientPhone,
        recipientNationalId: recipientData.recipientNationalId,
        deliveryDate: recipientData.deliveryDate,
        deliveryStatus: true,
      });

      if (response.status === 201) {
        toast.success(paymentPageLocalization.success);
        localStorage.removeItem("recipientData");
        localStorage.removeItem("carts");
        router.push("/");
      }
    } catch (error: any) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          {paymentPageLocalization.pey}
        </h1>

        <form className="flex flex-col gap-4 justify-center items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {paymentPageLocalization.cardNumber}
            </label>
            <Input
              type="text"
              placeholder="**** **** **** ****"
              className=""
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              error={false}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {paymentPageLocalization.expiryDate}
            </label>
            <Input
              type="text"
              placeholder="MM/YY"
              className=""
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              error={false}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {paymentPageLocalization.cvv}
            </label>
            <Input
              type="password"
              placeholder="***"
              className=""
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              error={false}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {paymentPageLocalization.password}
            </label>
            <Input
              type="password"
              placeholder="رمز دوم کارت"
              className=""
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={false}
            />
          </div>

          <div className="pt-4">
            <Button
              content={paymentPageLocalization.pey}
              type="button"
              className=""
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
