import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";
import { cities, equipmentLinks, bottomLinks, phones, socialLinks } from "./footerLinks";
import { Clock, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full" style={{ background: "linear-gradient(180deg, #17546C 0%, #104F68 100%)" }}>
      {/* Верхняя часть */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Колонка 1 — Логотип */}
          <div className="flex flex-col gap-6">
            <NavLink to="/">
              <img src={logo} alt="Wave-S" width={160} height={52} />
            </NavLink>
            <p className="text-text-white/70 text-sm leading-relaxed">Отличный выбор оборудования для автомоек самообслуживания</p>

            {/* Рейтинг Яндекс */}
            <img src="/images/yandex-rating.png" alt="Рейтинг 4.4 на Яндексе" width={150} height={50} />

            {/* Соцсети */}
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  className="w-9.75 h-9.75 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity bg-[#414141]"
                >
                  <img src={social.icon} alt={social.alt} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Колонка 2 — Оборудование */}
          <div className="flex flex-col gap-4">
            <h4 className="text-text-white font-semibold text-base mb-2">Оборудование</h4>
            {equipmentLinks.map((link) => (
              <NavLink key={link.label} to={link.path} className="text-text-white/70 text-sm hover:text-text-white transition-colors">
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Колонка 3 — Контакты */}
          <div className="flex flex-col gap-4">
            <h4 className="text-text-white font-semibold text-base mb-2">Контакты</h4>

            {/* Время работы */}
            <div className="flex gap-3">
              <Clock size={24} className="text-text-accent shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-text-white/50 text-base">Время работы:</span>
                <span className="text-text-white text-base">Ежедневно с 9:00 до 18:00</span>
              </div>
            </div>

            {/* Телефоны */}
            <div className="flex gap-3">
              <Phone size={24} className="text-text-accent shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-text-white/50 text-base">Телефон:</span>
                {phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="text-text-white text-base hover:text-text-accent transition-colors">
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <Mail size={24} className="text-text-accent shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-text-white/50 text-base">Почта:</span>
                <a href="mailto:info@moyka-wave.ru" className="text-text-white text-base hover:text-text-accent transition-colors">
                  info@moyka-wave.ru
                </a>
              </div>
            </div>
          </div>
          {/* Колонка 4 — Города */}
          <div className="flex flex-col gap-3">
            <h4 className="text-text-white font-semibold text-base mb-2">Мы представлены в городах</h4>
            <div className="grid grid-cols-3 gap-x-26 gap-y-4">
              {cities.flat().map((city) => (
                <span key={city} className="text-text-white/70 text-sm hover:text-text-white transition-colors whitespace-nowrap">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть — копирайт */}
      <div className="w-full">
        <div className="container-main py-4 flex flex-col md:flex-row items-center justify-between gap-2 border-t border-white/10">
          <p className="text-text-white/50 text-sm">© 2014-2026 «Wave-S». Мойки самообслуживания</p>
          <div className="flex items-center gap-4">
            {bottomLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className="text-text-white/70 text-sm underline hover:text-text-white transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
