import styles from './TextEditor.module.scss';

function TextEditor({ value, onChange }) {
  return (
    <div className={styles.text_editor}>
      <h3>Text editor</h3>
      <textarea
        defaultValue={value}
        onChange={(e) => onChange('body', e.target.value)}></textarea>
    </div>
  );
}

export default TextEditor;
