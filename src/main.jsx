import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import Index from "./router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Index/>
  </StrictMode>,
);
