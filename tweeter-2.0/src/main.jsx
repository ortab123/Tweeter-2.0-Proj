import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { TweetsContext, TweetsProvider } from "./context/TweetsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TweetsProvider>
        <App />
      </TweetsProvider>
    </MantineProvider>
  </StrictMode>
);
