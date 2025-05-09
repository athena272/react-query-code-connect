import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './iconbutton.module.css';

type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconButton({ children, className, ...rest }: IconButtonProps) {
  return (
    <button {...rest} className={`${styles.btn} ${className ?? ''}`}>
      {children}
    </button>
  );
}
