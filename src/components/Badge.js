import React from "react";

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-blue-500 text-white",
    destructive: "bg-red-500 text-white",
  };
  return (
    <span className={`px-2 py-1 rounded-md text-sm ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;