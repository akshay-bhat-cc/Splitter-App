import styles from "./InformationWidget.module.css";

export interface WidgetProp {
  /**
   * The category of the widget, which defines its type and purpose.
   * Available categories are:
   * - success: Indicates a successful operation or completion.
   * - information: Provides general information or updates.
   * - note: A standard note for additional context or information.
   * - error: Indicates an error or issue that needs attention.
   * - question: Represents a query or requires user input.
   * - tip: Offers helpful tips or best practices.
   * - warning: Warns about potential issues or important notices.
   */
  category: WidgetCategory;

  /**
   * The title of the widget.
   */
  title: string;

  /**
   * The main content of the widget.
   */
  content: JSX.Element;
}

export type WidgetCategory =
  | "success"
  | "error"
  | "information"
  | "note"
  | "question"
  | "tip"
  | "warning";

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
        {content}
      </article>
    </div>
  );
};

type WidgetIconPaths = {
  [icon in WidgetCategory]: string;
};

const widgetIconPaths: WidgetIconPaths = {
  success: "src/assets/widget.icons/success-icon.png",
  error: "src/assets/widget.icons/error-icon.png",
  information: "src/assets/widget.icons/information-icon.png",
  note: "src/assets/widget.icons/note-icon.png",
  question: "src/assets/widget.icons/question-icon.png",
  tip: "src/assets/widget.icons/tip-icon.png",
  warning: "src/assets/widget.icons/warning-icon.png",
};
