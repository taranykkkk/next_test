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
          return (
            <Image
              src={index < rating ? star_active : star_disabled}
              alt={`star-${index}`}
              key={index}
            />
          );
        })}
    </div>
  );
}

export default StarsProduct;
