import { WidgetCategory, WidgetProp } from "../WidgetContents";
import styles from "./InformationWidget.module.css";

export const InformationWidget = ({ category, title, content }: WidgetProp) => {
  return (
    <div className={`${styles.widget} ${styles[category]}`}>
      <img
        className={styles.widgetIcon}
        src={widgetIconPaths[category]}
        alt={`${category}-icon`}
      />
      <article>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </article>
    </div>
  );
};

type WidgetIconPaths = {
  [icon in WidgetCategory]: string;
};

const widgetIconPaths: WidgetIconPaths = {
  error: "src/assets/widget.icons/error-icon.png",
  information: "src/assets/widget.icons/information-icon.png",
  note: "src/assets/widget.icons/note-icon.png",
  question: "src/assets/widget.icons/question-icon.png",
  tip: "src/assets/widget.icons/tip-icon.png",
  warning: "src/assets/widget.icons/warning-icon.png",
};

