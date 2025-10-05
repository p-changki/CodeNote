import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "./theme.css";
import { ThemeProviders } from "./Providers/ThemeProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviders>
      <App />
    </ThemeProviders>
  </StrictMode>
);
