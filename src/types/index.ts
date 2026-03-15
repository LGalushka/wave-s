export type ProductCategory =
  | "car-wash" // Мойки самообслуживания
  | "mso-equipment" // Доп. оборудование МСО
  | "vacuums" // Пылесосы самообслуживания
  | "other"; // Прочее оборудование

export type PaymentFeatureStatus = "included" | "option" | "not-included";

export interface FunctionalFeature {
  label: string;
  value: string;
  status?: PaymentFeatureStatus;
}

export type PaymentFeature =
  | { label: string; value: string; status?: never }
  | { label: string; status: PaymentFeatureStatus; value?: never };

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  type: string;
  image: string;
  price: number | null;
  specs: ProductSpec[];
  paymentFeatures?: PaymentFeature[];
  functional?: FunctionalFeature[];
  isAvailable: boolean;
  isPopular?: boolean;
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  image: string;
  date: string;
  slug: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}
