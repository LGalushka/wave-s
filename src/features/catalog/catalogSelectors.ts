import type { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllProducts = (state: RootState) => state.catalog.products;

export const selectSelectedCategory = (state: RootState) => state.catalog.selectedCategory;

export const selectFilteredProducts = (state: RootState) => {
  const { products, selectedCategory } = state.catalog;
  if (selectedCategory === "all") return products;
  return products.filter((p) => p.category === selectedCategory);
};

export const selectPopularProducts = createSelector([selectAllProducts], (products) =>
  [...products]
    .filter((p) => p.isPopular)
    .sort((a, b) => {
      if (a.price === null) return -1;
      if (b.price === null) return 1;
      return 0;
    }),
);

export const selectIsLoading = (state: RootState) => state.catalog.isLoading;

export const selectError = (state: RootState) => state.catalog.error;
