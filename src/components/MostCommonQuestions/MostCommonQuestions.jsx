import styles from './MostCommonQuestions.module.scss';
import CommonCollaps from './CommonCollaps/CommonCollaps';

const titleData = [
  'Чи буде моє замовлення доставленно вчасно?',
  'Який у вас графік роботи?',
  'Яка вартість доставки по місту?',
  'Чи є у вас доставка за місто?',
  'Як часто у Вас оновлюється асортимент?',
  'Які у Вас є способи оплати?',
  'За скільки днів до потрібної дати можливо здійснити замовлення?',
];

const workSchedule = [
  {
    city: 'Вінниця:',
    address: [
      'Матроса Кошки 10А з 8:00-22:00',
      'Магістрацька 140 з 8:00-22:00',
      'Хмельницьке шосе 144 з 8:00-22:00',
      'Оводова 51 (ТЦ Скай Парк) з 10:00-21:00',
    ],
  },
  {
    city: 'Чернівці:',
    address: [
      'Небесної Сотні 17 з 8:00-21:00',
      'Героїв Майдану 2В з 8:00-21:00',
    ],
  },
  {
    city: 'Хмельницький:',
    address: ['Кам`янецька 54 з 8:00-21:00', 'Зарічанська 13  з 8:00-21:00'],
  },
  {
    city: 'Івано-Франківськ:',
    address: ['Михайла Мулика 29 з 8:00-21:00'],
  },
  {
    city: 'Тернопіль:',
    address: [
      'Князя Острозького 54 з 8:00-21:00',
      'Богдана Хмельницького 3 з 8:00-21:00',
    ],
  },
];

function MostCommonQuestions() {
  return (
    <div className={styles.most_common_container}>
      <h2>Найпоширеніші запитання</h2>

      {titleData.map((elem, i) => (
        <CommonCollaps key={i} value={elem} workSchedule={workSchedule} />
      ))}
    </div>
  );
}

export default MostCommonQuestions;
