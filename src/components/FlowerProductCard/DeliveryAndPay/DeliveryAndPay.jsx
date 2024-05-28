import classNames from 'classnames';
import styles from './DeliveryAndPay.module.scss';

function DeliveryAndPay() {
  return (
    <div>
      <ul className={styles.pay_and_delivery}>
        <h3 className={styles.pay_and_delivery_title}>Оплата</h3>
        <li className={styles.pay_and_delivery_list}>
          <span className={styles.pay_and_delivery_bold_text}>
            Безготівкові розрахунки: Visa, Mastercard, LiqPay
          </span>
          <br />
          <p className={styles.pay_and_delivery_decs_text}>
            Зверніть увагу, що у разі несплати протягом 15 хв - замовлення
            автоматично скасовується
          </p>
        </li>
        <li className={styles.pay_and_delivery_list}>
          <span className={styles.pay_and_delivery_bold_text}>Готівка:</span>
          <p className={styles.pay_and_delivery_decs_text}>
            - у салонах мережі
          </p>
          <p className={styles.pay_and_delivery_decs_text}>
            - курʼєру при отриманні замовлення
          </p>
        </li>
      </ul>
      <ul className={styles.pay_and_delivery}>
        <h3 className={styles.pay_and_delivery_title}>Доставка</h3>
        <li className={styles.pay_and_delivery_list}>
          <span className={styles.pay_and_delivery_bold_text}>
            Власна курʼєрська служба
          </span>{' '}
          <p
            className={classNames(
              styles.pay_and_delivery_decs_text,
              styles.pay_and_delivery_inline,
            )}>
            з 08:00 до 22:00
          </p>
        </li>
        <li className={styles.pay_and_delivery_list}>
          <span className={styles.pay_and_delivery_bold_text}>Самовивіз</span>
        </li>
      </ul>
    </div>
  );
}

export default DeliveryAndPay;
