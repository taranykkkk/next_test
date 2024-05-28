import styles from './InputModal.module.scss';

function InputModal({ type, placeholder, onChange }) {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      className={styles.form_input}
    />
  );
}

export default InputModal;
