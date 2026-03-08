import { useEffect } from "react";
import { selectAllProducts, selectPopularProducts } from "./features/catalog/catalogSelectors";
import { useAppDispatch, useAppSelector } from "./hooks/useAppDispatch";
import { fetchProducts } from "./features/catalog/catalogSlice";
import { Button } from "./components/ui/Button";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const popular = useAppSelector(selectPopularProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="min-h-screen bg-gradient-header-start p-8">
        <h1 className="text-text-white text-4xl font-bold">Wave-S</h1>
        <p className="text-text-accent text-lg ">Всего товаров: {products.length}</p>
        <p className="text-text-white text-lg"> Популярных: {popular.length} </p>
        <div className="min-h-screen  p-8 flex flex-col gap-6 items-start">
          <Button variant="header">Заказать звонок</Button>
          <Button variant="consultation" withArrow>
            Получить консультацию
          </Button>
          <Button variant="primary">Заказать</Button>
        </div>
      </div>
    </>
  );
}

export default App;
