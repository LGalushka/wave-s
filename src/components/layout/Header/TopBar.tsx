import { ChevronDown, Clock, Globe, Mail, Phone } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="w-full py-2 px-4">
      <div className="container-main mx-auto flex items-center justify-between pb-4 border-b border-white/20">
        {/* Город */}
        <button className="flex items-center gap-1.5 text-text-white/80 text-sm hover:text-text-white transition-colors">
          <Globe size={14} />
          <span>Москва</span>
          <ChevronDown size={14} />
        </button>

        {/* Контактная информация */}
        <div className="flex items-center gap-6 text-text-white/80 text-sm">
          {/* Часы работы */}
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>Ежедневно с 9:00 до 18:00</span>
          </div>

          {/* Телефоны */}
          <div className="flex items-center gap-1.5">
            <Phone size={14} />
            <a href="tel:+78007002060" className="hover:text-text-white transition-colors">
              +7 (800) 700-20-60
            </a>
            <span className="text-white/30">·</span>
            <a href="tel:+74957252563" className="hover:text-text-white transition-colors">
              +7 (495) 725-25-63
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-1.5">
            <Mail size={14} />
            <a href="mailto:info@moyka-wave.ru" className="hover:text-text-white transition-colors">
              info@moyka-wave.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
