import { heroAdvantages } from "./heroData";
import { AdvantageCard } from "./AdvantageCard";
import { Button } from "@/components/ui/Button";
import gradienImage from "/images/Ellipse gradient.png";
import terminalImage from "/images/terminal.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Левая колонка — 60% */}
          <div className="flex flex-col gap-6">
            {/* Заголовок */}
            <h1 className="text-text-white font-semibold" style={{ fontSize: "48px", lineHeight: "1.2" }}>
              Оборудование для моек самообслуживания
            </h1>

            {/* Три карточки преимуществ */}
            <div className="flex flex-nowrap gap-3">
              {heroAdvantages.map((advantage) => (
                <AdvantageCard key={advantage.description} icon={advantage.icon} description={advantage.description} />
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
                className="flex flex-col gap-2 p-4 rounded-xl cursor-pointer hover:opacity-80 transition-opacity w-75 h-65"
                style={{
                  background: "linear-gradient(180deg, #26627A 0%, #14526B 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div className="w-full rounded-lg overflow-hidden">
                  {" "}
                  <img src="/images/videoPrimary.png" alt="Видео" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col mt-auto mb-2 gap-1">
                  <span className="text-white font-semibold text-xl">Видео</span>
                  <span className="text-white font-thin text-xs">Подробнее о наших мойках в видео формате</span>
                </div>
              </div>

              {/* Пресса */}
              <div
                className="flex flex-col gap-2 p-4 rounded-xl cursor-pointer hover:opacity-80 transition-opacity w-75 h-65"
                style={{
                  background: "linear-gradient(180deg, #26627A 0%, #14526B 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <img src="/images/news.png" alt="Новости" className="w-16 h-16" />
                <div className="flex flex-col mt-auto mb-2 gap-1">
                  <span className="text-white font-semibold text-xl">Новости / Пресса</span>
                  <span className="text-white font-thin text-xs">Подробнее о наших последних новостях</span>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка — 40% */}
          <div className="relative flex flex-col items-center">
            {/* Картинка терминала */}
            <img src={terminalImage} alt="Терминал" className="w-full max-w-100 object-contain relative z-10" />

            {/* Градиент — позади терминала */}
            <img
              src={gradienImage}
              alt=""
              className="absolute w-180 h-190 object-fill z-0 "
              style={{
                top: "50%",
                transform: "translateY(-50%) translateX(3%)",
                zIndex: 0,
              }}
            />
            {/* Название + пагинация */}
            <div className="flex items-center justify-between w-full mt-4 px-12">
              <button
                className="text-text-white hover:text-text-white transition-colors text-xl rounded-full w-12 h-12 items-center justify-center flex"
                style={{
                  background: "linear-gradient(180deg, #26627A 50 %, #14526B 100%)",
                  boxShadow: "inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <ArrowLeft size={24} />
              </button>
              <div className="flex flex-col items-center">
                <span className="text-text-white/70 text-sm">Терминал «Espro»</span>
                <a href="#" className="text-text-accent text-xs hover:underline">
                  Узнать подробнее
                </a>
              </div>
              <button
                className="bg-ui-button text-text-white hover:text-text-white transition-colors text-xl rounded-full w-12 h-12 items-center justify-center flex"
                style={{
                  boxShadow: "inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
