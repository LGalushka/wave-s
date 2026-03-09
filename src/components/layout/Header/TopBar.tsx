import { ChevronDown, Clock, Globe, Mail, Phone } from "lucide-react";
import { phones } from "../Footer/footerLinks";
import React from "react";

export const TopBar = () => {
  return (
    <div className="w-full py-2 px-4">
      <div className="container-main mx-auto flex items-center justify-between pb-4 border-b border-white/20">
        {/* Город */}
        <button className="flex items-center gap-1.5 text-text-white/80 text-base hover:text-text-white transition-colors">
          <Globe size={24} />
          <span>Москва</span>
          <ChevronDown size={24} />
        </button>

        {/* Контактная информация */}
        <div className="flex items-center gap-6 text-text-white/80 text-base">
          {/* Часы работы */}
          <div className="flex items-center gap-1.5">
            <Clock size={24} className="text-text-accent shrink-0 mt-0.5" />
            <span>Ежедневно с 9:00 до 18:00</span>
          </div>

          {/* Телефоны */}
          <div className="flex items-center gap-1.5">
            <Phone size={24} className="text-text-accent shrink-0 mt-0.5" />
            {phones.map((phone, index) => (
              <React.Fragment key={phone.href}>
                <a href={`tel:${phone.href}`} className="hover:text-text-white transition-colors">
                  {phone.label}
                </a>
                {index < phones.length - 1 && <span className="text-white/30">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Email */}
          <div className="flex items-center gap-1.5">
            <Mail size={24} className="text-text-accent shrink-0 mt-0.5" />
            <a href="mailto:info@moyka-wave.ru" className="hover:text-text-white transition-colors">
              info@moyka-wave.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
