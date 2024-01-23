import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
    <small>
          <a
            href="https://github.com/Nooshin0962/weather-react"
            target="_blank" rel="noreferrer"
          >
            open-source
          </a>{" "}
          by Nooshin Semsarilar
        </small>
  </StrictMode>
);
