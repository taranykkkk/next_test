import styles from './CountProduct.module.scss';
import classNames from 'classnames';

function CountProduct({ countFlower, setCountFlower }) {
  const increaseFlower = () => {
    setCountFlower((prev) => prev + 1);
  };

  const decreaseFlower = () => {
    if (countFlower !== 1) {
      setCountFlower(countFlower - 1);
    }
  };
  return (
    <div className={styles.flower_count}>
      <h5>Кількість</h5>
      <div className={styles.flower_count_container}>
        <button
          onClick={decreaseFlower}
          disabled={countFlower <= 1}
          className={classNames(styles.flower_count_btn, {
            [styles.disabled]: countFlower <= 1,
          })}>
          -
        </button>
        <span className={styles.flower_count_value}>{countFlower} шт</span>
        <button onClick={increaseFlower} className={styles.flower_count_btn}>
          +
        </button>
      </div>
    </div>
  );
}

export default CountProduct;
