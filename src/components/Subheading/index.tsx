import { ReactNode } from "react";
import styles from './subheading.module.css';

type SubheadingProps = {
  children: ReactNode;
};

export default function Subheading({ children }: SubheadingProps) {
  return <h2 className={styles.subheading}>{children}</h2>;
}
