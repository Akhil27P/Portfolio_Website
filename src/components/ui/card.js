import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-md shadow-md transition-shadow duration-300 focus-within:shadow-lg focus:outline-none ${className}`}
      tabIndex={-1} // make div focusable for keyboard focus styling
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
