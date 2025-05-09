import Comment from "../Comment";
import { ReplyModal } from "../ModalReply";
import { Replies } from "../Replies";
import styles from "./commentlist.module.css";

type Author = {
  avatar: string;
  name: string;
};

type CommentType = {
  id: string | number;
  author: Author;
  text: string;
  // adicione outros campos se existirem
};

type CommentListProps = {
  comments: CommentType[];
  slug: string;
};

export default function CommentList({ comments, slug }: CommentListProps) {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
            <ReplyModal comment={comment} />
            <Replies comment={comment} slug={slug} />
          </li>
        ))}
      </ul>
    </section>
  );
};
