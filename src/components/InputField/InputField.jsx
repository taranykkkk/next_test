import styles from './InputField.module.scss';

function InputField({ value, onChange, text, postKey }) {
  return (
    <div className={styles.input_field}>
      <label htmlFor={text}>{text}</label>
      <input
        id={text}
        value={value}
        onChange={(e) => onChange(postKey, e.target.value)}
      />
    </div>
  );
}

export default InputField;
