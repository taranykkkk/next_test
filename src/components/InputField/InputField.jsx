import styles from './InputField.module.scss';

function InputField({ value, onChange, text, id }) {
  return (
    <div className={styles.input_field}>
      <label htmlFor={id}>{text}</label>
      <input id={id} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default InputField;
