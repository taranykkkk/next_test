import Image from 'next/image';
import styles from './CardPost.module.scss';
import RedactButton from '../RedactButton/RedactButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import Link from 'next/link';
import img from '../../../public/no_img.png';

function CardPost({
  title,
  short_description,
  body,
  image_path,
  id,
  onDelete,
}) {
  return (
    <div className={styles.card_post}>
      <Image
        src={image_path ? image_path : img}
        width={480}
        height={260}
        alt={title}
      />

      <div className={styles.post_text}>
        <Link href={`/posts/${id}`}>
          <h3>{title}</h3>
        </Link>
        <h5>{short_description}</h5>
        <p>{body}</p>
        <RedactButton pathname={`/posts/${id}/redact_post`} />
        <DeleteButton postId={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default CardPost;
