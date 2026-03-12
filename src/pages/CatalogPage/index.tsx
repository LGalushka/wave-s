import { selectAllProducts } from "@/features/catalog/catalogSelectors";
import { fetchProducts } from "@/features/catalog/catalogSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { useEffect } from "react";
import { CatalogTabs } from "./sections/CategoryTabs";
import { ProductsGrid } from "./sections/ProductsGrid";
import { InfoSection } from "./sections/InfoSection";

export const CatalogPage = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectAllProducts);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      {/**Заголовое страницы */}
      <div
        className="w-full py-12"
        style={{
          background: "linear-gradient(180deg, #1B5871 0%, #104F68 100%)",
        }}
      >
        {/**Хлебные крошки  */}
        <div className="container-main border-t border-white/20">
          <p className="text-text-white/50 text-sm mb-4 mt-10">Главная / Оборудование</p>

          {/**Заголовок */}
          <h1 className="text-text-white font-semibold text-5xl">Оборудование</h1>
        </div>
      </div>

      {/**Белый фон - табы и карточка */}
      <div className="bg-white">
        <div className="container-main py-8">
          <CatalogTabs />
          <ProductsGrid />
        </div>
      </div>

      {/** Информационны блок */}
      <InfoSection />

      {/**Полезные статьи */}
    </div>
  );
};
