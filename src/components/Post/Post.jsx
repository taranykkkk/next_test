import Image from 'next/image';
import styles from './Post.module.scss';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

function Post({ title, short_description, body, image_path }) {
  const { id } = useParams();

  useEffect(() => {
    if (!localStorage.getItem('viewed')) {
      localStorage.setItem('viewed', JSON.stringify([]));
    }
    const viewed = JSON.parse(localStorage.getItem('viewed'));
    const updateViewed = new Set(Array.from(viewed));

    updateViewed.add(id);

    localStorage.setItem('viewed', JSON.stringify(Array.from(updateViewed)));
  }, [id]);

  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <h5>{short_description}</h5>

      <p>{body}</p>
      <Image src={image_path} width={760} height={220} priority alt={title} />
    </div>
  );
}

export default Post;
