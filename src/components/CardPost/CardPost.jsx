import Image from 'next/image';
import styles from './CardPost.module.scss';
import RedactButton from '../RedactButton/RedactButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import Link from 'next/link';
import img from '../../../public/no_img.png';
import classNames from 'classnames';

function CardPost({
  title,
  short_description,
  body,
  image_path,
  id,
  onDelete,
  isViewed,
}) {
  return (
    <div
      className={classNames(styles.card_post, { [styles.viewed]: isViewed })}>
      <Image
        src={image_path ? image_path : img}
        width={480}
        height={260}
        alt={title}
      />
      <div className={classNames({ [styles.viewed]: isViewed })}></div>

      <div
        className={classNames(styles.post_text, {
          [styles.viewed_link]: isViewed,
        })}>
        <Link href={{ pathname: '/posts/[id]', query: { id } }}>
          <h3>{title}</h3>
        </Link>
        <h5>{short_description}</h5>
        <p>{body}</p>
        <RedactButton
          pathname={{ pathname: '/posts/[id]/redact_post', query: { id } }}
        />
        <DeleteButton postId={id} onDelete={onDelete} />
      </div>
      {isViewed && (
        <div className={classNames({ [styles.viewed_text]: isViewed })}>
          Viewed
        </div>
      )}
    </div>
  );
}

export default CardPost;
