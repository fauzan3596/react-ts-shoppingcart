import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingCartContextProvider>
      <App />
    </ShoppingCartContextProvider>
  </StrictMode>
);
