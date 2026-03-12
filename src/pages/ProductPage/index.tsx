import { selectAllProducts } from "@/features/catalog/catalogSelectors";
import { fetchProducts } from "@/features/catalog/catalogSlice";
import { useAppSelector, useAppDispatch } from "@/hooks/useAppDispatch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  const products = useAppSelector(selectAllProducts);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (!product) {
    return <div className="container-main py-8 text-text-primary">Товар не найден</div>;
  }
  return (
    <div className="bg-white">
      <div className="container-main py-8">{/* <ProductInfo /> */}</div>
    </div>
  );
};
