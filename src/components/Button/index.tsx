import styles from "./button.module.css";
import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`${styles.btn} ${className ?? ""}`}>
      {children}
    </button>
  );
}