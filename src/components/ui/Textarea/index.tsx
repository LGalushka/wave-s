import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = ({ className = "", ...props }: TextareaProps) => {
  return (
    <textarea
      className={`
      w-full px-5 py-4
      text-text-white font-normal text-base
      rounded-[10px]
      outline-none
      placeholder:text-white/80
      resize-none
      transition-all duration-200
      ${className}
      `}
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      rows={4}
      {...props}
    />
  );
};
