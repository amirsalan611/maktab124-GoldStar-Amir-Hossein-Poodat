"use client";

import { useState } from "react";
import styled from "styled-components";
import { FiEyeOff } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";


interface Iprops {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  error: boolean;
  name:string;
}

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  error,
  name,
}: Iprops) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <StyledWrapper className={`${!error ? "border-2 border-[#B2A5FF]" : ""} rounded-xl`}>
      <div
        className={`group bg-white px-5 ${
          error ? "border-2 border-red-500" : ""
        }`}
      >
        <input
          className={`${className}input outline-none `}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {isPassword && (
          <span
            className="toggle-password cursor-pointer"
            onClick={handleTogglePassword}
          >
            {showPassword ? <FiEyeOff size={18} /> : <IoEyeOutline size={18} />}
          </span>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 500px;
    //  padding: 0 1rem 0 3rem;
    //  border: 2px solid transparent;
    border-radius: 10px;
    color: #0d0c22;
    transition: 0.5s ease;
  }

  .input {
    width: 500px;
    height: 45px;
  }

  .input::placeholder {
    color: #94a3b8;
  }

  .group:focus,
  .group:hover {
    border-color: rgba(129, 140, 248);
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }
`;

export default Input;
