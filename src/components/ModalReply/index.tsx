"use client";

import { useRef } from "react";
import { Modal, ModalHandle } from "../Modal";
import styles from "./replymodal.module.css";
import { Textarea } from "../Textarea";
import { SubmitButton } from "../SubmitButton";
import Comment from "../Comment";

type Author = {
  avatar: string;
  name: string;
};

type CommentType = {
  id: string | number;
  author: Author;
  text: string;
};

type PostType = {
  id: string | number;
  // Adicione mais campos conforme necessário
};

type ReplyModalProps = {
  comment: CommentType;
  post: PostType;
};

export default function ReplyModal({ comment, post }: ReplyModalProps) {
  const modalRef = useRef<ModalHandle | null>(null);

  const openModal = () => {
    modalRef.current?.openModal();
  };

  return (
    <>
      <Modal ref={modalRef}>
        <form>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={styles.btn} onClick={openModal}>
        Responder
      </button>
    </>
  );
}