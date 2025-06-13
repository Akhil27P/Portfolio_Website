import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`bg-gray-800 rounded-2xl shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`text-white ${className}`}>{children}</div>;
}
