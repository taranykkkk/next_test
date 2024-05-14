import Image from 'next/image';
import styles from './CardPost.module.scss';
import RedactButton from '../RedactButton/RedactButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import Link from 'next/link';

function CardPost({
  title,
  short_description,
  body,
  image_path,
  id,
  setPosts,
}) {
  return (
    <div className={styles.card_post}>
      <Image
        src={image_path}
        width={480}
        height={260}
        priority
        alt="Image post"
      />
      <div className={styles.post_text}>
        <Link href={`/posts/${id}`}>
          <h3>{title}</h3>
        </Link>
        <h5>{short_description}</h5>
        <p>{body}</p>
        <RedactButton pathname={`/posts/${id}/redact_post`} />
        <DeleteButton postId={id} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default CardPost;
