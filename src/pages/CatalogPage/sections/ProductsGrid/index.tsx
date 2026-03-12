import { ProductCardFull } from "@/components/shared/ProductCardFull";

import { selectFilteredProducts } from "@/features/catalog/catalogSelectors";
import { useAppSelector } from "@/hooks/useAppDispatch";

export const ProductsGrid = () => {
  const products = useAppSelector(selectFilteredProducts);
  return (
    <div className="grid-cols-3 grid gap-8">
      {products.map((product) => (
        <ProductCardFull key={product.id} product={product} />
      ))}
    </div>
  );
};
