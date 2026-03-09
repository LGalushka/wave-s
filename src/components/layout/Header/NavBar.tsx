import { Button } from "@/components/ui/Button";
import { Menu, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";

interface NavBarProps {
  onCallClick: () => void;
  onMenuClick: () => void;
}

export const NavBar = ({ onCallClick, onMenuClick }: NavBarProps) => {
  return (
    <div className="w-full 'px-4' 'px-3'">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/** Бургер для мобильного */}
        <button className="lg: hidden text-text-white" onClick={onMenuClick}>
          <Menu size={24} />
        </button>

        {/**Лого */}
        <NavLink to="/" className="shrink-0">
          <img src="../../../assets/logo.png" alt="Wave-S" width={190} height={62} />
        </NavLink>

        {/**Навигация для десктоп */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
      text-text-white text-base transition-colors hover:text-text-accent
      ${isActive ? "border-b-2 border-text-accent pb-0.5 rounden-sm" : ""}
      `}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/**Кнопка декстоп / иконка мобильн */}
        <div>
          <div className="hidden lg:block">
            <Button variant="header" onClick={onCallClick}>
              Заказать звонок
            </Button>
          </div>

          <a href="tel:+78007002060" className="lg:hidden text-text-white">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
