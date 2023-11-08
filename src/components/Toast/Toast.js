import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import { ToastContext } from "../ToastProvider";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, children, variant }) {
  const { dismissMessage } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconType icon={ICONS_BY_VARIANT[variant]} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => dismissMessage(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

function IconType({ icon: Icon }) {
  return <Icon size={24} />;
}

export default Toast;
