import { AdvantageItemCard } from "./AdvantageItemCard";
import { advantageItems } from "./advantagesData";
import { StatsBlock } from "./StatsBlock";

export const AdvantagesSection = () => {
  return (
    <section className="w-full py-16">
      <div className="container-main">
        {/** Заголовок */}
        <h2 className="text-text-white font-semibold text-[48px] mb-10">Наши преимущества</h2>

        {/**Grid карточки */}
        <div className="grid grid-cols-4 gap-6 ">
          {advantageItems.map((advantage) => (
            <AdvantageItemCard key={advantage.id} icon={advantage.icon} description={advantage.description} />
          ))}
        </div>
        <div>
          <StatsBlock />
        </div>
      </div>
    </section>
  );
};
