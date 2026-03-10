import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col rounded-[10px] overflow-hidden border border-text-primary/50">
      {/**Фото  */}
      <div className="h-87 p-4">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover mt-2 rounded-[10px]" />
      </div>

      {/**Информация */}
      <div className="flex flex-col justify-between flex-1 gap-3 p-4">
        {/**Название */}
        <h3 className="text-text-primary font-medium text-2xl">{product.name}</h3>

        {/**Цена + кнопка */}
        <div className="flex justify-between items-center">
          {product.price ? (
            <span className="text-text-primary font-semibold text-2xl">{product.price.toLocaleString("ru-RU")} ₽</span>
          ) : (
            <span className="text-text-primary/50 text-sm">По запросу</span>
          )}
          <Button variant="primary">{product.price ? "Заказать" : "Запросить цену"}</Button>
        </div>
      </div>
    </div>
  );
};
