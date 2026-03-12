import { AdvantageItemCard } from "./AdvantageItemCard";
import { advantageBrands, advantageItems } from "./advantagesData";
import { PartnerCars } from "./PartnerCars";
import { PartnetsSection } from "./PartnersSection";
import { PromoBlock } from "./PromoBlock";
import { StatsBlock } from "./StatsBlock";

export const AdvantagesSection = () => {
  return (
    <section className="w-full py-16">
      <div className="container-main">
        {/** Заголовок */}
        <h2 className="text-text-white font-semibold text-[48px] mb-10">Наши преимущества</h2>

        {/**1. Карточки преимуществ */}
        <div className="grid grid-cols-4 mt-8 gap-6 ">
          {advantageItems.map((advantage) => (
            <AdvantageItemCard key={advantage.id} icon={advantage.icon} description={advantage.description} />
          ))}
        </div>

        {/**2. Блок 300 объектов */}
        <div>
          <StatsBlock />
        </div>

        {/** 3. Бренды */}
        <div className="grid grid-cols-4 gap-6 mt-8 ">
          {advantageBrands.map((brand) => (
            <PartnerCars key={brand.id} title={brand.title} description={brand.description} />
          ))}
        </div>

        {/** 4. Промо-блок */}
        <div className="mt-8">
          <PromoBlock />
        </div>

        {/** 5. Партнеры */}
        <div className="mt-8">
          <PartnetsSection />
        </div>
      </div>
    </section>
  );
};
