import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductHeroProps {
  product: Product;
}

// Константа для ширины колонки
const COLUMN_WIDTH = "630px";

export const ProductHero = ({ product }: ProductHeroProps) => {
  return (
    <main className="w-full flex justify-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-325">
        {/** Левая колонка - Фото */}
        <div className="flex flex-col min-w-0" style={{ width: COLUMN_WIDTH }}>
          <div className="h-160 w-full p-4 bg-gray-50 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain rounded-lg" />
          </div>

          {/** Пагинация */}
          <div className="flex items-center justify-between mt-8 gap-4">
            <PaginationButton direction="left" />

            <div className="flex gap-3">
              {["/images/pag_1.png", "/images/pag_2.png", "/images/pag_3.png"].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Превью ${idx + 1}`}
                  className="object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-text-primary"
                  style={{ width: "140px", height: "128px" }}
                />
              ))}
            </div>

            <PaginationButton direction="right" />
          </div>
        </div>

        {/** Правая колонка - Информация */}
        <div className="flex flex-col gap-6" style={{ width: COLUMN_WIDTH }}>
          <h2 className="text-text-primary font-semibold text-5xl">{product.name?.replace(/['"]/g, "").trim()}</h2>

          <InfoSection title="Платежные системы">
            {product.paymentFeatures?.map((item, index) => (
              <InfoRow key={index} {...item} suffix={item.status === "included" ? "(в комплекте)" : ""} />
            ))}
          </InfoSection>

          <InfoSection title="Основные характеристики">
            {product.specs?.map((item, index) => (
              <InfoRow key={index} {...item} />
            ))}
          </InfoSection>

          <InfoSection title="Функционал">
            {product.functional?.map((item, index) => (
              <InfoRow key={index} {...item} suffix={item.status === "option" ? "(опция)" : ""} />
            ))}
          </InfoSection>

          <a href="#all-features" className="text-text-accent text-base underline hover:text-text-accent/80 transition-colors">
            Показать все функции
          </a>

          {/** Цена */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <span className="text-text-primary font-bold text-4xl">Цена:</span>
            <span className="text-text-primary font-bold text-4xl">{product.price} ₽</span>
          </div>

          {/** Кнопки */}
          <div className="flex gap-4 mt-6">
            <Button variant="primary" className="flex-1">
              Заказать
            </Button>
            <Button variant="cons" className="flex-1">
              Получить консультацию
            </Button>
          </div>

          {/** Видео */}
          <VideoSection />
        </div>
      </div>
    </main>
  );
};

// ─── ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ (Они должны быть в этом же файле!) ───

const PaginationButton = ({ direction }: { direction: "left" | "right" }) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const isRight = direction === "right";

  return (
    <button
      className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer
                 ${
                   isRight
                     ? "bg-text-accent text-white shadow-md shadow-blue-200/50 hover:bg-blue-500 hover:scale-[0.97]"
                     : "border border-text-primary/20 bg-white text-gray-500 shadow-sm hover:bg-gray-100 hover:scale-[0.96]"
                 }
                 hover:translate-y-0.5 active:scale-[0.92]`}
      aria-label={direction === "left" ? "Предыдущее фото" : "Следующее фото"}
    >
      <Icon size={32} />
    </button>
  );
};

const InfoSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-8">
    <h3 className="text-lg text-text-primary font-semibold mb-4">{title}</h3>
    <ul className="flex flex-col gap-2">{children}</ul>
  </section>
);

const InfoRow = ({ label, value, suffix }: { label: string; value?: string; suffix?: string }) => (
  <li className="flex items-center gap-2 text-base">
    <span className="text-text-primary/90">{label}:</span>
    {value && <span className="text-text-primary">{value}</span>}
    {suffix && <span className="text-text-accent">{suffix}</span>}
  </li>
);

const VideoSection = () => (
  <section className="mt-8">
    <div className="relative shadow-md overflow-hidden rounded-lg group cursor-pointer aspect-video">
      <img src="/images/videoPrimary.png" alt="Превью видео" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-20 h-20 bg-white/30 rounded-full animate-ping opacity-85"></div>
        <img
          src="/images/icon_yt.png"
          alt="Смотреть видео"
          className="relative z-10 w-32 h-32 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
    <p className="mt-4 text-base text-text-primary font-medium">Видео о наших мойках в видео формате</p>
  </section>
);
