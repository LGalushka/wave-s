import { heroAdvantages } from "./heroData";
import { AdvantageCard } from "./AdvantageCard";
import { Button } from "@/components/ui/Button";
//import gradienImage from "../../../../../public/images/Ellipse gradient.png";
import terminalImage from "../../../../../public/images/terminal.png";

export const HeroSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container-main">
        <div className="grid grid-cols-5 gap-8 items-center">
          {/* Левая колонка — 60% */}
          <div className="col-span-3 flex flex-col gap-6">
            {/* Заголовок */}
            <h1 className="text-text-white font-semibold" style={{ fontSize: "48px", lineHeight: "1.2" }}>
              Оборудование для моек самообслуживания
            </h1>

            {/* Три карточки преимуществ */}
            <div className="flex gap-3">
              {heroAdvantages.map((advantage) => (
                <AdvantageCard key={advantage.label} icon={advantage.icon} label={advantage.label} />
              ))}
            </div>

            {/* Кнопка */}
            <div>
              <Button variant="consultation" withArrow>
                Получить консультацию
              </Button>
            </div>

            {/* Видео + Пресса */}
            <div className="flex gap-4 mt-2">
              {/* Видео */}
              <div
                className="flex flex-col gap-2 p-4 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img src="/images/video-preview.jpg" alt="Видео" className="w-full h-full object-cover" />
                </div>
                <span className="text-text-white font-medium text-sm">Видео</span>
                <span className="text-text-white/50 text-xs">Подробнее о наших мойках в видео формате</span>
              </div>

              {/* Пресса */}
              <div
                className="flex flex-col gap-2 p-4 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10" />
                <span className="text-text-white font-medium text-sm">Новости / Пресса</span>
                <span className="text-text-white/50 text-xs">Подробнее о наших последних новостях</span>
              </div>
            </div>
          </div>

          {/* Правая колонка — 40% */}
          <div className="col-span-2 relative flex flex-col items-center">
            {/* Картинка терминала */}
            <img src={terminalImage} alt="Терминал" className="w-full max-w-100 object-contain relative z-10" />

            {/* Название + пагинация */}
            <div className="flex items-center justify-between w-full mt-4 px-4">
              <button className="text-text-white/50 hover:text-text-white transition-colors text-xl">←</button>
              <span className="text-text-white/70 text-sm">Терминал «Espro»</span>
              <button className="text-text-white/50 hover:text-text-white transition-colors text-xl">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
