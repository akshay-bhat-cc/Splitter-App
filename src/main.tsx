import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SwapiPerson } from "./components/SwapiPerson/SwapiPerson.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SwapiPerson id={1}></SwapiPerson>
  </React.StrictMode>
);
