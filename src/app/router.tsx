import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "catalog",
        element: <div className="text-text-white p-8">Каталог</div>,
      },
      {
        path: "catalog/:id",
        element: <div className="text-text-white p-8">Страница товара</div>,
      },
    ],
  },
]);
