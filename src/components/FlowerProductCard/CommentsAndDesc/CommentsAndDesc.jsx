import styles from './CommentsAndDesc.module.scss';

import CommentSlider from '../CommentSlider/CommentSlider';

function CommentsAndDesc() {
  return (
    <>
      <div className={styles.comments_and_desc}>
        <div className={styles.comments_container}>
          <h3>Відгуки</h3>
          <div className={styles.comment_wrapper}>
            <CommentSlider />
            <button className={styles.comment_btn}>Залишити відгук</button>
          </div>
        </div>
        <div className={styles.description}>
          <h3>Опис</h3>
          <p>
            Троянда преміум якості. Букет з української однобутонної троянди
            білого кольору 101 шт 50 см в упакуванні. Зверніть увагу, що букет
            може відрізнятись по формі та відтінку від того, що зображений на
            фото, проте його склад залишається без змін
          </p>
        </div>
      </div>
    </>
  );
}

export default CommentsAndDesc;
