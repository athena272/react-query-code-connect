"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
  ForwardRefRenderFunction,
} from "react";

import styles from "./modal.module.css";

export type ModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};

type ModalProps = {
  children: ReactNode;
};

const ModalComponent: ForwardRefRenderFunction<ModalHandle, ModalProps> = (
  { children },
  ref
) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  useImperativeHandle(ref, () => ({
    closeModal,
    openModal,
  }));

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <header className={styles.header}>
        <button onClick={closeModal}>X</button>
      </header>
      {children}
    </dialog>
  );
};

export const Modal = forwardRef(ModalComponent);