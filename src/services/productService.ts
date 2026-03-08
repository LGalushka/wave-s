import { products } from "@/data/products";
import type { Product, ProductCategory } from "@/types";

export const productService = {
  getAll: async (): Promise<Product[]> => {
    return Promise.resolve(products);
  },

  getByCategory: async (category: ProductCategory): Promise<Product[]> => {
    return Promise.resolve(products.filter((p) => p.category === category));
  },

  getByID: async (id: string): Promise<Product | undefined> => {
    return Promise.resolve(products.find((p) => p.id === id));
  },

  getPopular: async (): Promise<Product[]> => {
    return Promise.resolve(products.filter((p) => p.isPopular));
  },
};
