import { productDescription } from "@/data/product/description";

export const ProductDescription = () => {
  return (
    <section className="container-main py-12">
      <h2 className="text-3xl font-bold text-text-primary mb-5">О товаре</h2>

      {/**Основное текст */}
      <div className="prose prose-lg text-text-primary/90 mb-8 whitespace-pre-line">{productDescription.mainText}</div>

      {/**Секции со списками */}

      {productDescription.sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">{section.title}</h3>
          <ul className="list-disc list-inside space-y-2 text-text-primary/90">
            {section.items.map((item, i) => (
              <li key={i} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/**Опции (нумер список) */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4">По желанию заказчика терминал может иметь нужный набор опций:</h3>
        <ol className="list-decimal list-inside space-y-2 text-text-primary/90">
          {productDescription.options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ol>
      </div>

      {/**Дополнительные опции */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Помимо этого терминал можно оснастить:</h3>
        <ol className="list-decimal list-inside space-y-2 text-text-primary/90">
          {productDescription.expraOptions.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ol>
      </div>

      {/**Контакты */}
      <p className="mt-8 text-text-primary/90 text-sm">
        Подробную информацию о терминале и его финальной стоимости вы можете уточнить у наших консультантов по тел.{" "}
        <a href={`tel:${productDescription.contactPhone}`} className="text-text-accent underline">
          {productDescription.contactPhone}
        </a>
      </p>
    </section>
  );
};
