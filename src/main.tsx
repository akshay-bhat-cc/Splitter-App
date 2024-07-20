import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { InformationWidget } from "./components/InformationWidget.tsx";
import { WidgetProps } from "./WidgetContents.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {WidgetProps.map(({ category, title, content }) => (
      <InformationWidget category={category} title={title} content={content} />
    ))}
  </React.StrictMode>
);
