import { useId } from 'react';
import styles from './InputField.module.scss';

// function InputField({ value, onChange, text }) {
function InputField({ register, text }) {
  const inputId = useId();
  return (
    <div className={styles.input_field}>
      <label htmlFor={inputId}>{text}</label>
      <input
        id={inputId}
        {...register}
        // onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;
