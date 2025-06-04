import React from "react";

export function Button({ children, variant = "default", className = "", ...props }) {
  const baseStyle =
    "inline-block px-4 py-2 border rounded-md font-semibold transition-colors duration-300 cursor-pointer";

  const variants = {
    default:
      "bg-black text-white border-transparent hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black",
    outline:
      "bg-transparent border-black text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black",
  };

  const style = variants[variant] || variants.default;

  return (
    <button className={`${baseStyle} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}
