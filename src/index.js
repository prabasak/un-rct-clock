import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Clock from "./components/clock";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Clock />
  </StrictMode>
);
