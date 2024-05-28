import styles from './FlowerPrice.module.scss';

function FlowerPrice({ newPrice, oldPrice }) {
  return (
    <div className={styles.flower_price}>
      <span className={styles.flower_new_price}>{newPrice} грн.</span>
      {oldPrice && (
        <span className={styles.flower_old_price}>{oldPrice} грн.</span>
      )}
    </div>
  );
}

export default FlowerPrice;
