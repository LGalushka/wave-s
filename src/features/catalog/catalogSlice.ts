import { productService } from "@/services/productService";
import type { Product, ProductCategory } from "@/types";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CatalogState {
  products: Product[];
  selectedCategory: ProductCategory | "all";
  isLoading: boolean;
  error: string | null;
}

const initialState: CatalogState = {
  products: [],
  selectedCategory: "all",
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("catalog/fetchProducts", async () => {
  return await productService.getAll();
});

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ProductCategory | "all">) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Ошибка загрузки";
      });
  },
});

export const { setCategory } = catalogSlice.actions;
export default catalogSlice.reducer;
