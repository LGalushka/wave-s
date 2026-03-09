import { X } from "lucide-react";
import { navLinks } from "./navLinks";
import { NavLink } from "react-router-dom";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCallClick: () => void;
}

export const MobileDrawer = ({ isOpen, onClose, onCallClick }: MobileDrawerProps) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />

      <div
        className="fixed top-0 left-0 h-full w-70 z-50 lg:hidden flex flex-col"
        style={{ background: "linear-gradient(180deg, #1B5871 0% #104F68 100%" }}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-text-white font-semibold text-lg">Меню</span>
          <button onClick={onClose} className="text-text-white hover:text-text-accent transition-colors">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
            text-text-white text-base py-3 px-4 rounded-lg transition-colors ${
              isActive ? "bg-white/10 text-text-accent" : "hover:bg-white/5"
            }
            `}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-4 border-t border-white/10 flex flex-col gap-3">
          <a href="tel:+78007002060" className="text-text-white/80 text-sm hover:text-text-white transition-colors">
            +7 (800) 700-20-60
          </a>
          <a href="tel:+74957252563" className="text-text-white/80 text-sm hover:text-text-white transition-colors">
            +7 (495) 725-25-63
          </a>
          <a href="mailto:info@moyka-wave.ru" className="text-text-white/80 text-sm hover:text-text-white transition-colors">
            info@moyka-wave.ru
          </a>
          <button
            onClick={() => {
              onCallClick();
              onClose();
            }}
            className="mt-2 w-full py-3 rounded-lg text-text-white font-medium bg-ui-button hover:opacity-90 transition-opacity"
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </>
  );
};
