import styles from './MostCommonQuestions.module.scss';
import CommonCollaps from './CommonCollaps/CommonCollaps';

const data = [
  {
    title: 'Чи буде моє замовлення доставленно вчасно?',
    content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni inventore harum, praesentium fugiat repellat, distinctio natus nulla ipsam non delectus mollitia. Ea inventore corrupti, modi debitis sed omnis facilis.</div>`,
  },
  {
    title: 'Який у вас графік роботи?',
    content: `
      <div>
        <h6>Вінниця:</h6>
        <p>Матроса Кошки 10А з 8:00-22:00</p>
        <p>Магістрацька 140 з 8:00-22:00</p>
        <p>Хмельницьке шосе 144 з 8:00-22:00</p>
        <p>Оводова 51 (ТЦ Скай Парк) з 10:00-21:00</p>
      </div>

      <div>
        <h6>Чернівці:</h6>
        <p>Небесної Сотні 17 з 8:00-21:00</p>
        <p>Героїв Майдану 2В з 8:00-21:00</p>
      </div>

      <div>
        <h6>Хмельницький:</h6>
        <p>Кам\`янецька 54 з 8:00-21:00</p>
        <p>Зарічанська 13  з 8:00-21:00</p>
      </div>

      <div>
        <h6>Івано-Франківськ:</h6>
        <p>Михайла Мулика 29 з 8:00-21:00</p>
      </div>

      <div>
        <h6>Тернопіль:</h6>
        <p>Князя Острозького 54 з 8:00-21:00</p>
        <p>Богдана Хмельницького 3 з 8:00-21:00</p>
      </div>
    `,
  },
  {
    title: 'Яка вартість доставки по місту?',
    content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni inventore harum, praesentium fugiat repellat, distinctio natus nulla ipsam non delectus mollitia. Ea inventore corrupti, modi debitis sed omnis facilis.</div>`,
  },
  {
    title: 'Чи є у вас доставка за місто?',
    content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni inventore harum, praesentium fugiat repellat, distinctio natus nulla ipsam non delectus mollitia. Ea inventore corrupti, modi debitis sed omnis facilis.</div>`,
  },
  {
    title: 'Як часто у Вас оновлюється асортимент?',
    content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni inventore harum, praesentium fugiat repellat, distinctio natus nulla ipsam non delectus mollitia. Ea inventore corrupti, modi debitis sed omnis facilis.</div>`,
  },
  {
    title: 'Які у Вас є способи оплати?',
    content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni inventore harum, praesentium fugiat repellat, distinctio natus nulla ipsam non delectus mollitia. Ea inventore corrupti, modi debitis sed omnis facilis.</div>`,
  },
  {
    title: 'За скільки днів до потрібної дати можливо здійснити замовлення?',
    content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni inventore harum, praesentium fugiat repellat, distinctio natus nulla ipsam non delectus mollitia. Ea inventore corrupti, modi debitis sed omnis facilis.</div>`,
  },
];

function MostCommonQuestions() {
  return (
    <div className={styles.most_common_container}>
      <h2>Найпоширеніші запитання</h2>

      {data.map((elem, i) => (
        <CommonCollaps title={elem.title}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: elem.content }}
          />
        </CommonCollaps>
      ))}
    </div>
  );
}

export default MostCommonQuestions;
