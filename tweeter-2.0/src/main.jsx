import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { TweetsProvider } from "./context/TweetsContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <TweetsProvider>
          <BrowserRouter
            basename={import.meta.env.DEV ? "/" : "/Tweeter-2.0-Proj"}
          >
            <App />
          </BrowserRouter>
        </TweetsProvider>
      </AuthProvider>
    </MantineProvider>
  </StrictMode>
);
