import type { RootState } from "@/app/store";

export const selectAllProducts = (state: RootState) => state.catalog.products;

export const selectSelectedCategory = (state: RootState) => state.catalog.selectedCategory;

export const selectFilteredProducts = (state: RootState) => {
  const { products, selectedCategory } = state.catalog;
  if (selectedCategory === "all") return products;
  return products.filter((p) => p.category === selectedCategory);
};

export const selectPopularProducts = (state: RootState) => state.catalog.products.filter((p) => p.isPopular);

export const selectIsLoading = (state: RootState) => state.catalog.isLoading;

export const selectError = (state: RootState) => state.catalog.error;
