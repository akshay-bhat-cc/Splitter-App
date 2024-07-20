import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContentWidget } from "./components/information.widget.tsx";
import { widgetContents } from "./widget.contents.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContentWidget
      type={widgetContents[0].type}
      title={widgetContents[0].title}
      content={widgetContents[0].content}
    />

    <ContentWidget
      type={widgetContents[1].type}
      title={widgetContents[1].title}
      content={widgetContents[1].content}
    />
    <ContentWidget
      type={widgetContents[2].type}
      title={widgetContents[2].title}
      content={widgetContents[2].content}
    />

    <ContentWidget
      type={widgetContents[3].type}
      title={widgetContents[3].title}
      content={widgetContents[3].content}
    />
  </React.StrictMode>
);
