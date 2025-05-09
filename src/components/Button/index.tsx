import styles from "./button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disable?: boolean;
};

export default function Button({ children, disable = false }: ButtonProps) {
  return (
    <button className={styles.btn} disabled={disable}>
      {children}
    </button>
  );
}