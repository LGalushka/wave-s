import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "consultation" | "header" | "outline" | "cons";
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}
export const Button = ({ variant = "primary", withArrow = false, children, className = "", ...props }: ButtonProps) => {
  const variants = {
    primary: `
      bg-ui-button text-text-white font-medium
      text-base rounded-[10px] px-6 py-3
      hover:opacity-90 transition-opacity duration-200 cursor-pointer border border-white/20
    `,
    consultation: `
      relative text-white font-medium text-[18px] 
      rounded-[35px] pl-10 pr-2 py-2
      hover:brightness-110 transition-all duration-300 cursor-pointer
      flex items-center gap-6 backdrop-blur-xl
      border border-white/20
    `,
    header: `
      backdrop-blur-md text-text-white font-normal
      text-base rounded-[6px] px-4 py-2
      hover:opacity-90 transition-opacity duration-200 cursor-pointer border border-white/20
    `,
    outline: "text-text-primary text-base",
    cons: "text-text-primary border border-text-primary text-base rounded-[10px] px-6 py-3 hover:opacity-90 transition-opacity duration-200 cursor-pointer",
  };

  const gradients = {
    primary: {},
    consultation: {
      background: "radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%)",
      backdropFilter: "blur(12px)",
      boxShadow: `
    inset 0 1.5px 0 rgba(255,255,255,0.5),
    inset 1px 0 0 rgba(255,255,255,0.2),
    inset -1px 0 0 rgba(255,255,255,0.1),
    inset 0 -1px 0 rgba(255,255,255,0.05)
  `,
    },
    header: {
      background: "linear-gradient(93.53deg, #69BDF9 0%, rgba(105, 189, 249, 0.34) 100%)",
      backdropFilter: "blur(12px)",
    },
    outline: {},
    cons: {},
  };

  return (
    <button className={`${variants[variant]} ${className}`} style={gradients[variant]} {...props}>
      <span className="flex items-center justify-center gap-3">
        {children}
        {withArrow && (
          <span
            className="rounded-3xl w-16.5 h-16.5 flex items-center justify-center shrink-0 backdrop-blur-md"
            style={{
              background: "linear-gradient(140.45deg, #4AAEFF 3.08%, rgba(12, 145, 252, 0.37) 95.2%)",
              boxShadow: "1px 0px 4px rgba(255, 255, 255, 0.21)",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M2 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </span>
    </button>
  );
};
