import styles from './StarsProduct.module.scss';
import Image from 'next/image';

import star_active from '../img/star_active.svg';
import star_disabled from '../img/star_disabled.svg';

function StarsProduct({ rating }) {
  return (
    <div className={styles.flower_stars}>
      {Array(5)
        .fill('')
        .map((_, index) => {
          if (index < rating) {
            return <Image src={star_active} alt="star" key={index} />;
          } else {
            return <Image src={star_disabled} alt="star" key={index} />;
          }
        })}
    </div>
  );
}

export default StarsProduct;
