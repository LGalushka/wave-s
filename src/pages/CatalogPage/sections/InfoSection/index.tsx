import { equipment, complectation } from "./infoData";
export const InfoSection = () => {
  return (
    <section
      className="w-full py-16 text-text-white font-light"
      style={{ background: "linear-gradient(180deg, #1B5871 0%, #104F68 100%)" }}
    >
      <div className="container-main">
        <p className="font-light text-base mb-4">
          Компания Wave-S предлагает лучшую технику для оснащения автомоек. Это оборудование признано и используется по всему миру,
          ежедневно доказывая свою эффективность.
        </p>
        <p className="mb-4">
          У нас вы найдете большое количество устройств, которые помогут сделать вашу мойку более производительной и прибыльной. Вместе с
          базовыми комплектами, без которых работа предприятия невозможна, мы предлагаем дополнительную технику, значительно расширяющую
          перечень предлагаемых услуг.
        </p>
        <div>
          <h3 className="text-4xl font-semibold mb-4">Выбор оборудования для мойки самообслуживания от Wave-S</h3>
          <p className="text-xl mb-4">
            Для старта вашего бизнеса мы предлагаем приобрести обязательный начальный комплект для автомойки самообслуживания:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            {equipment.map((item) => (
              <li key={item.id} className="mb-4">
                {item.value};
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl mb-4">Также в стандартной комплектации идет станина с силовым и моечным оборудованием:</h2>
          <ul className="list-disc list-inside ml-4 mb-4">
            {complectation.map((item) => (
              <li key={item.id} className="mb-4">
                {item.value};
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-4xl mb-4">Ассортимент оборудования для МСО</h3>
          <p className="text-xl mb-4">Для удобства работы клиентов вы можете купить:</p>
          <ul className="list-disc list-inside ml-4 mb-8">
            {complectation.map((item) => (
              <li key={item.id} className="mb-4">
                {item.value};
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>
            Узнать, сколько стоит интересующая продукция для МСО, вы можете по многоканальному телефону{" "}
            <a href="tel:88007002060" className="text-blue-300 hover:text-blue-500 underline transition-colors font-medium">
              8 (800) 700-20-60
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
