import React from "react";

export function Switch({ checked, onCheckedChange }) {
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
      />
      <div
        className={`w-11 h-6 bg-gray-600 rounded-full peer-focus:ring-4 peer-focus:ring-green-300 
          peer-checked:bg-green-500 relative transition-colors`}
      >
        <span
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform
            peer-checked:translate-x-5`}
        />
      </div>
    </label>
  );
}
