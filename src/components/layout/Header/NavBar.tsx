import { Menu, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import logo from "@/assets/logo.png";
import { navLinks } from "./navLinks";

interface NavBarProps {
  onCallClick: () => void;
  onMenuClick: () => void;
}

export const NavBar = ({ onCallClick, onMenuClick }: NavBarProps) => {
  return (
    <div className="w-full px-4 py-3">
      <div className="container-main mx-auto flex items-center justify-between">
        {/* Бургер — только мобиль */}
        <button className="lg:hidden text-text-white" onClick={onMenuClick}>
          <Menu size={24} />
        </button>

        {/* Логотип */}
        <NavLink to="/" className="shrink-0">
          <img src={logo} alt="Wave-S" width={190} height={62} />
        </NavLink>

        {/* Навигация — только десктоп */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-text-white text-base transition-colors hover:text-text-accent
                ${isActive ? "border-b-2 border-text-accent pb-0.5 rounded-sm" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Кнопка десктоп / иконка мобиль */}
        <div>
          {/* Десктоп */}
          <div className="hidden lg:block">
            <Button variant="header" onClick={onCallClick}>
              Заказать звонок
            </Button>
          </div>

          {/* Мобиль */}
          <a href="tel:+78007002060" className="lg:hidden text-text-white">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
