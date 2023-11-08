import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

function ToastShelf() {
  const { messagesList } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {messagesList.map((message) => (
        <li key={message.id} className={styles.toastWrapper}>
          <Toast id={message.id} variant={message.variant}>
            <VisuallyHidden>{message.variant} - </VisuallyHidden>
            {message.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
