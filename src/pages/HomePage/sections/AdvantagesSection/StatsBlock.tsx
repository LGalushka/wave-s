export const StatsBlock = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mt-8">
      {/**Левая */}
      <div
        className="rounded-2xl p-6 flex-col justify-center h-67.5 flex"
        style={{
          background: "linear-gradient(180deg, #39A7FF 0%, #008DFF 100%)",
        }}
      >
        <p className="text-text-white uppercase font-normal text-[20px]">Наша компания реализовала</p>
        <div className="mt-4">
          <p className="text-text-white text-5xl leading-tight font-extrabold uppercase">Более 300 объектов</p>
          <p className="text-text-white font-normal uppercase text-5xl leading-tight">по России и СНГ</p>
        </div>
      </div>

      {/**Правая колонка */}
      <div
        className="rounded-2xl p-8 flex-col justify-between h-67.5 flex gap-3"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p className="text-text-white/80 text-base leading-snug">
          Мойка самообслуживания — выгодный бизнес, который быстро окупается. Спрос на такие услуги только растет, а затраты на его
          организацию минимальны. Вам даже не нужен персонал, достаточно базового комплекта оборудования.
        </p>
        <p className="text-text-white/80 text-base leading-snug">
          Наша компания предлагает современное оборудование для автомоек самообслуживания, а также уборочную технику из Италии, Германии. Мы
          много лет поставляем и реализуем на российском рынке следующие марки:
        </p>
      </div>
    </div>
  );
};
