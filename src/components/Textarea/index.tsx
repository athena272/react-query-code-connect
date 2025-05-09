import { ReactNode, TextareaHTMLAttributes } from "react";
import style from './textarea.module.css';

type TextareaProps = {
  children?: ReactNode;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ children, className, ...rest }: TextareaProps) {
  return (
    <textarea className={`${style.textarea} ${className ?? ''}`} {...rest}>
      {children}
    </textarea>
  );
}