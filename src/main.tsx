import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "@/app/store.ts";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </StrictMode>,
);
