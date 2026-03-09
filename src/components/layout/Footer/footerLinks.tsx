import instagramIcon from "@/assets/icons/instagramIcon.svg";
import youtubeIcon from "@/assets/icons/youtubeIcon.svg";

export const equipmentLinks = [
  { label: "О компании", path: "/about" },
  { label: "Аксессуары для АВД", path: "/catalog" },
  { label: "Пылесосы самообслуживания", path: "/catalog" },
  { label: "Разменные аппараты", path: "/catalog" },
  { label: "Рукомойник для мойки самообслуживания", path: "/catalog" },
];

export const cities = [
  ["Самара", "С.-Петербург", "Омск"],
  ["Казань", "Ростов-на-Дону", "Челябинск"],
  ["Волгоград", "Н.-Новгород", "Новосибирск"],
  ["Красноярск", "Екатеринбург", "Воронеж"],
  ["Краснодар", "Пермь", "Уфа"],
];

export const bottomLinks = [
  { label: "Карта сайта", path: "/sitemap" },
  { label: "Контакты в регионах", path: "/contacts" },
  { label: "Этапы строительства", path: "/construction" },
];

export const phones = [
  { href: "tel:+78007002060", label: "+7 (800) 700-20-60" },
  { href: "tel:+74957252563", label: "+7 (495) 725-25-63" },
];

export const socialLinks = [
  { icon: instagramIcon, alt: "Instagram", href: "#" },
  { icon: youtubeIcon, alt: "Youtube", href: "#" },
];
