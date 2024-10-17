import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BurgerMenuContextProvider } from "./store/BurgerMenuContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BurgerMenuContextProvider>
      <App />
    </BurgerMenuContextProvider>
  </StrictMode>
);
