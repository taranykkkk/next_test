import { useEffect, useState } from 'react';
import CookieModal from '@/components/CookieModal/CookieModal';
import { hasCookie, setCookie } from 'cookies-next';

function Cookie() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = (value) => {
    if (value === 'Accept all') {
      setCookie('key', 'coooooookiessss');
    }
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!hasCookie('key')) {
      setModalIsOpen(true);
    }
  }, []);
  return <CookieModal isSuccess={modalIsOpen} handleModal={handleModal} />;
}

export default Cookie;
