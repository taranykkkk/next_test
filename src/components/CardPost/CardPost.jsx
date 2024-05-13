import Image from 'next/image';
import styles from './CardPost.module.scss';
import { useRouter } from 'next/router';
import RedactButton from '../RedactButton/RedactButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function CardPost({
  title,
  short_description,
  body,
  image_path,
  id,
  setPosts,
}) {
  const router = useRouter();
  return (
    <div
      className={styles.card_post}
      onClick={() => router.push(`/posts/${id}`)}>
      <Image
        src={image_path}
        width={480}
        height={260}
        priority
        alt="Image post"
        style={{ borderRadius: '10px', objectFit: 'contain' }}
      />

      <div className={styles.post_text}>
        <h3>{title}</h3>
        <h5>{short_description}</h5>
        <p>{body}</p>
        <RedactButton pathname={`/posts/${id}/redact_post`} />
        <DeleteButton postId={id} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default CardPost;
