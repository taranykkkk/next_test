import styles from './CookieModal.module.scss';
import img from '../../../public/cookies.svg';
import Image from 'next/image';
import { hasCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

function CookieModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onAction = (boolean) => {
    if (boolean) {
      setCookie('key', 'coooooookiessss');
    }
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!hasCookie('key')) {
      setModalIsOpen(true);
    }
  }, []);
  return (
    <dialog open={modalIsOpen} className={styles.cookie_modal}>
      <div className={styles.cookie_text}>
        <div className={styles.cookie_title_container}>
          <Image src={img} width={30} alt="cookie" />
          <h1>Yes, we use cookies</h1>
        </div>
        <p>
          This website utilizes cookies to enable essential site functionality
          and analytics. You may change your settings at any time or accept the
          default settings. You may close this banner to continue with only
          essential cookies.
        </p>
      </div>
      <hr />
      <div className={styles.actions_buttons}>
        <button className={styles.accept} onClick={() => onAction(true)}>
          Accept all
        </button>
        <button className={styles.reject} onClick={() => onAction(false)}>
          Reject all
        </button>
      </div>
    </dialog>
  );
}

export default CookieModal;
