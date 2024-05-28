import styles from './CommentsAndDesc.module.scss';

import CommentSlider from '../CommentSlider/CommentSlider';
import classNames from 'classnames';

function CommentsAndDesc({ description, handleOpenModal }) {
  return (
    <>
      <div className={styles.comments_and_desc}>
        <div className={styles.comments_container}>
          <h3 className={styles.comments_and_desc_title}>Відгуки</h3>
          <div className={styles.comment_wrapper}>
            <CommentSlider />
            <button className={styles.comment_btn} onClick={handleOpenModal}>
              Залишити відгук
            </button>
          </div>
        </div>
        {description && (
          <div className={styles.description}>
            <h3
              className={classNames(
                styles.comments_and_desc_title,
                styles.description_title_mb,
              )}>
              Опис
            </h3>
            <p className={styles.description_text}>{description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CommentsAndDesc;
