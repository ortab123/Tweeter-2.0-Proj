import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { TweetsProvider } from "./context/TweetsContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TweetsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TweetsProvider>
    </MantineProvider>
  </StrictMode>
);
