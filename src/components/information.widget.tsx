import { WidgetContentProps } from "../widget.contents";
import styles from "./information.widget.module.css";

export type WidgetType =
  | "error"
  | "information"
  | "note"
  | "question"
  | "tip"
  | "warning";

export const ContentWidget = ({ type, title, content }: WidgetContentProps) => {
  return (
    <div className={`${styles.widget} ${styles[type]}`}>
      <img
        className={styles.widgetIcon}
        src={WidgetIconURLs[type]}
        alt={`${type}-icon`}
      />
      <article>
        <h3 className={styles.title}>{title}</h3>
        <p>{content}</p>
      </article>
    </div>
  );
};

type WidgetIconURLs = {
  [icon in WidgetType]: string;
};

const WidgetIconURLs: WidgetIconURLs = {
  error: "src/assets/widget.icons/error-icon.png",
  information: "src/assets/widget.icons/information-icon.png",
  note: "src/assets/widget.icons/note-icon.png",
  question: "src/assets/widget.icons/question-icon.png",
  tip: "src/assets/widget.icons/tip-icon.png",
  warning: "src/assets/widget.icons/warning-icon.png",
};
