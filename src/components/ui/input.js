// src/components/ui/input.js
import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`}
      {...props}
    />
  );
}
