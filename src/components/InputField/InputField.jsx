import { useId } from 'react';
import styles from './InputField.module.scss';

function InputField({ register, text }) {
  const inputId = useId();
  return (
    <div className={styles.input_field}>
      <label htmlFor={inputId}>{text}</label>
      <input id={inputId} {...register} />
    </div>
  );
}

export default InputField;
