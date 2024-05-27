import styles from './DeliveryAndPay.module.scss';

function DeliveryAndPay() {
  return (
    <div>
      <ul className={styles.pay_list}>
        <h3>Оплата</h3>
        <li>
          <span>Безготівкові розрахунки: Visa, Mastercard, LiqPay</span>
          <br />
          <p>
            Зверніть увагу, що у разі несплати протягом 15 хв - замовлення
            автоматично скасовується
          </p>
        </li>
        <li>
          <span>Готівка:</span>
          <p>- у салонах мережі</p>
          <p>- курʼєру при отриманні замовлення</p>
        </li>
      </ul>
      <ul className={styles.pay_list}>
        <h3>Доставка</h3>
        <li>
          <span>Власна курʼєрська служба</span>{' '}
          <p style={{ display: 'inline' }}>з 08:00 до 22:00</p>
        </li>
        <li>
          <span>Самовивіз</span>
        </li>
      </ul>
    </div>
  );
}

export default DeliveryAndPay;
