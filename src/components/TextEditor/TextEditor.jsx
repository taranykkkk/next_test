import styles from './TextEditor.module.scss';

// function TextEditor({ value, onChange }) {
function TextEditor({ value, register }) {
  return (
    <div className={styles.text_editor}>
      <h3>Text editor</h3>
      <textarea defaultValue={value} {...register} />
    </div>
  );
}

export default TextEditor;
