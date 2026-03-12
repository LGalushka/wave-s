import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";
import { Link } from "react-router-dom";
interface ProductCardFullProps {
  product: Product;
}

export const ProductCardFull = ({ product }: ProductCardFullProps) => {
  return (
    <Link to={`/catalog/${product.id} className="block"`}>
      <div className="flex flex-col rounded-[10px] overflow-hidden border border-text-primary/50 ">
        {/**Фото */}
        <div className="p-4">
          <img src={product.image} alt={product.name} className="w-92 h-84.5 rounded-[10px]" />
        </div>

        {/**Информация */}
        <div className="flex flex-col justify-between flex-1 gap-3 p-4 text-text-primary/95 m-5">
          {/**Название */}
          <h3 className="t font-medium text-2xl">{product.name}</h3>

          {/**Тип */}
          <div>
            <p className="text-text-primary/50 text-sm">Тип:</p>
            <p className=" text-text-primary font-medium text-base">{product.type}</p>
          </div>

          {/**Характеристики */}

          <div className="flex flex-col gap-1.5 mb-2">
            {product.specs.map((spec, index) => (
              <p key={index} className="text-base flex gap-2">
                <span className="text-text-primary/50">{spec.label}:</span>
                <span className="text-text-primary/90">{spec.value}</span>
              </p>
            ))}
          </div>

          {/**Платежные системы */}
          {product.paymentFeatures && (
            <div className="flex flex-col gap-1.5">
              <p className="text-text-primary font-medium text-base mb-2">Платежные системы</p>
              {product.paymentFeatures.map((feature, index) => (
                <p key={index} className="text-base">
                  <span className="text-text-primary/50">{feature.label}: </span>
                  <span className="text-text-primary/90">
                    {feature.status === "option" ? (
                      <span className="text-text-accent"> (Опция)</span>
                    ) : feature.status === "included" ? (
                      <span className="text-text-accent"> (в комплекте)</span>
                    ) : (
                      feature.value
                    )}
                  </span>
                </p>
              ))}
            </div>
          )}

          {/**Цена + кнопка */}
          <div className="flex justify-between items-center mt-auto pt-4">
            {product.price ? (
              <span className="text-text-primary font-semibold text-xl">{product.price.toLocaleString("ru-RU")} ₽</span>
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
