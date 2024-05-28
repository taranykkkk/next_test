import styles from './ImageContainer.module.scss';
import Image from 'next/image';

function ImageContainer({ image, alt }) {
  return (
    <div className={styles.flower_image}>
      <div className={styles.flower_image_container}>
        {image ? (
          <Image src={image} width={572} height={800} alt={alt} />
        ) : (
          <div className={styles.flower_image_alternative}></div>
        )}
      </div>
      <span className={styles.sale}>Знижка</span>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <div style={{ fontSize: '23px' }}>{'\u2022'}</div>
        <div style={{ fontSize: '23px', color: 'gray' }}>{'\u2022'}</div>
        <div style={{ fontSize: '23px', color: 'gray' }}>{'\u2022'}</div>
      </div>
    </div>
  );
}

export default ImageContainer;
