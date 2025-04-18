import React from 'react'

interface Iprops {
  content: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
}

export default function Button({ content, onClick, type, className }: Iprops) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`p-3 border border-[#B2A5FF] rounded-2xl text-gray-500 hover:bg-[#DAD2FF] hover:text-indigo-600 bg-white cursor-pointer transition-all duration-500 ease-in-out hover:shadow-[0_0_0_5px_rgba(129,140,248,0.3)] ${className}`}
    >
      {content}
    </button>
  );
}
