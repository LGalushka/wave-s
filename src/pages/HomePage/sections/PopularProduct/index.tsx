import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { fetchProducts } from "@/features/catalog/catalogSlice";
import { selectPopularProducts } from "@/features/catalog/catalogSelectors";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "../ProductCard/ProductCard";

export const PopularProduct = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectPopularProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="w-full py-12 bg-white">
      <div className="container-main">
        {/* Заголовок */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-text-primary font-semibold text-4xl">Популярные товары</h2>
          <div className="flex items-center gap-3">
            <Link to="/catalog" className="text-text-accent text-sm hover:underline">
              Посмотреть все товары
            </Link>
            <button className="w-8 h-8 rounded-full border border-text-primary/20 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft size={16} className="text-text-primary" />
            </button>
            <button className="w-8 h-8 rounded-full bg-ui-button flex items-center justify-center hover:opacity-90 transition-colors">
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Карточки — вынесены из заголовка! */}
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
