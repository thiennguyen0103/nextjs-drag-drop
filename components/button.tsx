"use client";

import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "toolbar";
}

const variants = {
  default:
    "px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300",
  toolbar:
    "py-2 px-3 text-white bg-orange-400 leading-none disabled:opacity-50",
};

const Button = (props: IButtonProps) => {
  const { children, variant = "default", ...otherProps } = props;
  return (
    <button {...otherProps} className={variants[variant]}>
      {children}
    </button>
  );
};

export default Button;
