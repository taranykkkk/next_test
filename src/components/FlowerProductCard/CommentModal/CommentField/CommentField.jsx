import styles from './CommentField.module.scss';

function CommentField({ onChange }) {
  return (
    <textarea
      className={styles.form_textarea}
      cols="10"
      rows="7"
      placeholder="Напишіть свій коментар..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default CommentField;
