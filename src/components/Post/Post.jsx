import Image from 'next/image';
import styles from './Post.module.scss';

function Post({ title, short_description, body, image_path }) {
  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <h5>{short_description}</h5>

      <p>{body}</p>
      <Image
        src={image_path}
        width={760}
        height={220}
        priority
        alt="Image post"
      />
    </div>
  );
}

export default Post;
