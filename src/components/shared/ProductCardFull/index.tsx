import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";
import { Link } from "react-router-dom";
interface ProductCardFullProps {
  product: Product;
}

export const ProductCardFull = ({ product }: ProductCardFullProps) => {
  return (
    <Link to={`/catalog/${product.id}`} className="block h-full">
      {/* h-full здесь растягивает карточку на всю высоту грида */}
      <div className="flex flex-col h-full rounded-[10px] overflow-hidden border border-text-primary/50 bg-white hover:shadow-md transition-shadow">
        {/** Фото */}
        <div className="p-4 shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-75 object-contain rounded-[10px]" />
        </div>

        {/** Информация: flex-grow заставляет этот блок занимать всё свободное место */}
        <div className="flex flex-col grow p-4 gap-4">
          {/** Название */}
          <h3 className="font-medium text-2xl text-text-primary">{product.name}</h3>

          {/** Тип */}
          <div>
            <p className="text-text-primary/50 text-sm">Тип:</p>
            <p className="text-text-primary font-medium text-base">{product.type}</p>
          </div>

          {/** Характеристики */}
          <div className="flex flex-col gap-1.5">
            {product.specs.map((spec, index) => (
              <p key={index} className="text-base flex gap-2">
                <span className="text-text-primary/50">{spec.label}:</span>
                <span className="text-text-primary/90">{spec.value}</span>
              </p>
            ))}
          </div>

          {/** Платежные системы */}
          {product.paymentFeatures && (
            <div className="flex flex-col gap-1.5">
              <p className="text-text-primary font-medium text-base mb-1">Платежные системы</p>
              {product.paymentFeatures.map((feature, index) => (
                <p key={index} className="text-base">
                  <span className="text-text-primary/50">{feature.label}: </span>
                  <span className="text-text-primary/90">
                    {feature.status === "option" ? (
                      <span className="text-blue-600 font-medium"> (Опция)</span>
                    ) : feature.status === "included" ? (
                      <span className="text-green-600 font-medium"> (в комплекте)</span>
                    ) : (
                      feature.value
                    )}
                  </span>
                </p>
              ))}
            </div>
          )}

          {/** Цена + кнопка: mt-auto прижмет этот блок к низу, если контента мало */}
          <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-100">
            {product.price ? (
              <span className="text-text-primary font-semibold text-xl whitespace-nowrap">{product.price.toLocaleString("ru-RU")} ₽</span>
            ) : (
              <span className="text-text-primary/50 text-sm">По запросу</span>
            )}
            <Button variant="primary">{product.price ? "Заказать" : "Запросить цену"}</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
