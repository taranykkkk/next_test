import styles from './FlowerProductCard.module.scss';
import StarsProduct from './StarsProduct/StarsProduct';
import CountProduct from './CountProduct/CountProduct';
import ParametersProduct from './ParametersProduct/ParametersProduct';
import FlowerPrice from './FlowerPrice/FlowerPrice';
import DeliveryAndPay from './DeliveryAndPay/DeliveryAndPay';
import CommentsAndDesc from './CommentsAndDesc/CommentsAndDesc';
import { useState } from 'react';
import ImageContainer from './ImageContainer/ImageContainer';
import calcPrice from '@/utils/calcPrice';

function FlowerProductCard({ productData }) {
  const { image, price, sku, name, description, slug } = productData;

  const [countFlower, setCountFlower] = useState(1);

  return (
    <div>
      <div className={styles.flower_overview_container}>
        <ImageContainer image={image} alt={slug} />

        <div className={styles.flower_description}>
          <div className={styles.flower_description_top}>
            <span className={styles.flower_available}>В наявності</span>
            <StarsProduct rating={4} />
            <span className={styles.flower_code}>{sku}</span>
          </div>

          <div className={styles.flower_description_middle}>
            <h1 className={styles.flower_product_name}>{name}</h1>
            <div className={styles.description_middle_container}>
              <FlowerPrice
                newPrice={calcPrice(countFlower, price)}
                oldPrice={calcPrice(countFlower, 0)}
              />
              <button className={styles.add_to_cart_btn}>
                Додати до корзини
              </button>
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
      <CommentsAndDesc description={description} />
    </div>
  );
}

export default FlowerProductCard;
