import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`
      w-full px-5 py-4
      text-text-white font-normal text-base
      rounded-[10px]
      outline-none
      placeholder:text-white/80
      transform-all duration-200
      ${className}
      `}
      style={{
        background: "rgbd(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      {...props}
    />
  );
};
