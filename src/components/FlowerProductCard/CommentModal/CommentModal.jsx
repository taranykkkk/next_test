import { useEffect, useState } from 'react';
import styles from './CommentModal.module.scss';
import InputModal from './InputModal/InputModal';
import StarsRating from './StarsRating/StarsRating';
import CommentField from './CommentField/CommentField';

function CommentModal({ linkModal }) {
  const [rating, setRating] = useState(0);
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    rating: '',
    comment_text: '',
  });

  const formValue = (field) => {
    setCommentData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setCommentData((prev) => ({ ...prev, rating: newRating }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(commentData);
  };

  return (
    <div className={styles.overlay}>
      <dialog ref={linkModal} open className={styles.comment_modal}>
        <h2 className={styles.comment_modal_title}>Залишити відгук</h2>
        <form className={styles.form_content}>
          <div className={styles.form_fields}>
            <InputModal
              type="text"
              placeholder="Ваше імʼя та прізвище"
              onChange={() => formValue('name')}
            />

            <InputModal
              type="email"
              placeholder="Ваша електронна пошта"
              onChange={() => formValue('email')}
            />
            <StarsRating rating={rating} onRatingChange={handleRatingChange} />

            <CommentField onChange={() => formValue('comment_text')} />
          </div>
          <button className={styles.send_comment} onClick={onSubmit}>
            Надіслати коментар
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default CommentModal;
