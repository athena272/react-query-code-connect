"use client";

import { useRef, FormEvent } from "react";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { Chat } from "../icons/Chat";
import { Textarea } from "../Textarea";

import styles from "./commentmodal.module.css";
import { SubmitButton } from "../SubmitButton";
import { Subheading } from "../Subheading";

type ModalRefType = {
  openModal: () => void;
  closeModal: () => void;
};

type ModalCommentProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function ModalComment({ onSubmit }: ModalCommentProps) {
  const modalRef = useRef<ModalRefType | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
    modalRef.current?.closeModal();
  };

  return (
    <>
      <Modal ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <Subheading>Deixe seu comentário sobre o post:</Subheading>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current?.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
}