export const PromoBlock = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      {/**Левая */}
      <div
        className="rounded-2xl p-6 flex-col justify-center h-50 flex"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p className="text-text-white/80 text-base leading-snug">
          Сделайте выбор в пользу безопасности, производительности и эффективной работы на вашем предприятии. Используйте конструктор, чтобы
          подобрать комплектацию: полное оснащение предприятия под ключ или приобретение отдельных агрегатов. У нас прямые поставки с
          заводов-производителей, что гарантирует низкий ценник.
        </p>
      </div>

      {/**Правая */}
      <div className="rounded-2xl overflow-hidden">
        <img src="/images/car-wash-promo.png" alt="Автомойка" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
