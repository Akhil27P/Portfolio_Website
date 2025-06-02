import React from "react";

export function Button({ children, variant = "default", className = "", ...props }) {
  const baseStyle = "inline-block px-4 py-2 border rounded-md font-semibold transition";

  const variants = {
    default: "bg-blue-600 text-white border-transparent hover:bg-blue-700",
    outline: "bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  const style = variants[variant] || variants.default;

  return (
    <button className={`${baseStyle} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}