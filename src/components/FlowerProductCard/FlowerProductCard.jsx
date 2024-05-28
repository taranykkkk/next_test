import styles from './FlowerProductCard.module.scss';
import StarsProduct from './StarsProduct/StarsProduct';
import CountProduct from './CountProduct/CountProduct';
import ParametersProduct from './ParametersProduct/ParametersProduct';
import FlowerPrice from './FlowerPrice/FlowerPrice';
import DeliveryAndPay from './DeliveryAndPay/DeliveryAndPay';
import CommentsAndDesc from './CommentsAndDesc/CommentsAndDesc';
import Image from 'next/image';
import { useState } from 'react';

function FlowerProductCard({ productData }) {
  const { image, price, sku, name } = productData;

  const [countFlower, setCountFlower] = useState(1);

  const calcPriceFlower = (count, price) => {
    return (count / 100) * price;
  };

  return (
    <div>
      <div className={styles.flower_overview_container}>
        <div className={styles.flower_image}>
          <div className={styles.flower_image_container}>
            {image ? (
              <Image src={image} width={572} height={800} alt="avalanc-t" />
            ) : (
              <div
                style={{
                  width: '572',
                  height: '800',
                  objectFit: 'cover',
                  backgroundColor: 'pink',
                }}></div>
            )}
          </div>
          <span>Знижка</span>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <div style={{ fontSize: '23px' }}>{'\u2022'}</div>
            <div style={{ fontSize: '23px', color: 'gray' }}>{'\u2022'}</div>
            <div style={{ fontSize: '23px', color: 'gray' }}>{'\u2022'}</div>
          </div>
        </div>

        <div className={styles.flower_description}>
          <div className={styles.flower_description_top}>
            <span className={styles.flower_available}>В наявності</span>
            <StarsProduct rating={4} />
            <span className={styles.flower_code}>{sku}</span>
          </div>

          <div className={styles.flower_description_middle}>
            <h1>{name}</h1>
            <div className={styles.description_middle_container}>
              <FlowerPrice
                newPrice={calcPriceFlower(countFlower, price)}
                oldPrice={calcPriceFlower(countFlower, price)}
              />
              <button>Додати до корзини</button>
            </div>
          </div>

          <div className={styles.flower_description_bottom}>
            <CountProduct
              countFlower={countFlower}
              setCountFlower={setCountFlower}
            />

            <ParametersProduct productData={productData} />
          </div>
        </div>
      </div>

      <DeliveryAndPay />
      <CommentsAndDesc />
    </div>
  );
}

export default FlowerProductCard;
