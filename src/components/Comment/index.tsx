import Image from "next/image";
import styles from "./comment.module.css";

type CommentProps = {
  comment: {
    author: {
      avatar: string;
      name: string;
    };
    text: string;
  };
};

export default function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Image
        src={comment.author.avatar}
        width={32}
        height={32}
        alt={`Avatar do(a) ${comment.author.name}`}
      />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
    </div>
  );
}