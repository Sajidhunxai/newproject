import React from "react";

const Button = ({ text, icon: Icon, className = "", ...props }) => {
  return (
    <button
      className={`flex items-center gap-[19px] bg-[#2C2528] text-white px-[33px] py-[10px] cursor-pointer  ${className}`}
      {...props}
    >
      {Icon && <Icon className="text-white text-[16px] font-medium" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
