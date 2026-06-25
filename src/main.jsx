import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../app.css";
import App from "./App.jsx";

const root = document.querySelector("#app");

if (!root) {
  throw new Error("SP Institute could not find its application root.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
