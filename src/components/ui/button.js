import React from "react";

export function Button({
  children,
  className = "",
  size = "default",
  variant = "default",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none";

  const sizeClass = {
    default: "px-4 py-2 text-sm",
    icon: "w-9 h-9 p-2",
  }[size];

  const variantClass = {
    default: "bg-white text-black hover:bg-gray-300",
    ghost: "bg-transparent text-white hover:text-green-400",
  }[variant];

  return (
    <button
      className={`${base} ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
