import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div className="text-text-white p-8">Главная страница</div>,
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
