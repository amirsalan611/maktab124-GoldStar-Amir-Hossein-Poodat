import React from 'react'

interface Iprops {
  content: string;
  type: "button" | "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({ content, onClick, type, className, disabled }: Iprops) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`p-3 border border-[#B2A5FF] rounded-2xl text-gray-500 hover:bg-[#b2a5ff] hover:text-white bg-white cursor-pointer transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)] ${className} ${
        disabled
          ? "opacity-75 cursor-not-allowed hover:shadow-none hover:bg-white"
          : ""
      }`}
    >
      {content}
    </button>
  );
}
