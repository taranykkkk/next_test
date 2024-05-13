import Link from 'next/link';
import styles from './RedactButton.module.scss';

function RedactButton({ pathname }) {
  return (
    <Link href={pathname}>
      <button
        onClick={(e) => e.stopPropagation()}
        className={styles.redact_button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          <path d="m15 5 3 3" />
        </svg>
      </button>
    </Link>
  );
}

export default RedactButton;
