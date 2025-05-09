"use client";

import { useState } from "react";
import styles from "./replies.module.css";
import Comment from "../Comment";
import ReplyModal from "../ModalReply";

type Author = {
  avatar: string;
  name: string;
};

type CommentType = {
  id: string | number;
  author: Author;
  text: string;
  // você pode expandir com `replies?: CommentType[]` se necessário
};

type RepliesProps = {
  comment: CommentType;
  slug: string;
};

export default function Replies({ comment, slug }: RepliesProps) {
  const [showReplies, setShowReplies] = useState(false);
  const replies: CommentType[] = []; // ou carregar de algum lugar depois

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.btn}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
        {showReplies && replies.length > 0 && (
          <ul>
            {replies.map((reply) => (
              <li key={reply.id}>
                <Comment comment={reply} />
                <ReplyModal comment={reply} post={{ id: slug }} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}