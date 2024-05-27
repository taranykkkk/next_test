import { useState } from 'react';
import styles from './CountProduct.module.scss';
import classNames from 'classnames';

function CountProduct({ countFlower, setCountFlower }) {
  // const [countFlower, setCountFlower] = useState(1);

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
      <div>
        <button
          onClick={decreaseFlower}
          disabled={countFlower <= 1}
          className={classNames({ [styles.disabled]: countFlower <= 1 })}>
          -
        </button>
        <span>{countFlower} шт</span>
        <button onClick={increaseFlower}>+</button>
      </div>
    </div>
  );
}

export default CountProduct;
