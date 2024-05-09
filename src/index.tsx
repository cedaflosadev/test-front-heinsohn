import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import HomeUser from "./core/pages/home/HomeUser";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomeUser />
  </React.StrictMode>
);

reportWebVitals();
