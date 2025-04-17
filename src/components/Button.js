import React from "react";

const Button = ({ children, onClick, variant = "default", size = "default" }) => {
  const baseStyle = "rounded-md font-medium transition-colors";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };
  const sizes = {
    default: "px-4 py-2",
    icon: "p-2",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;