import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CommentSlider.module.scss';
import StarsProduct from '../StarsProduct/StarsProduct';
import prev from '../img/prev.svg';
import next from '../img/next.svg';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const commentsData = [
  {
    id: 22,
    user: 'Володимир',
    rating: 1,
    create_at: '3 дні тому',
    text: `Дуже часто беру квіти) колись давно магазин Million flowers допомогли мені спасти дуже важливу подію. З тих пір - я з ними. Працівники всіх магазинів дуже професійні, швидкі і людяні.`,
  },
  {
    id: 12,
    user: 'Микола',
    rating: 3,
    create_at: '1 день тому',
    text: `Дуже часто беру квіти) колись давно магазин Million flowers допомогли мені спасти дуже важливу подію. З тих пір - я з ними. Працівники всіх магазинів дуже професійні, швидкі і людяні.`,
  },
  {
    id: 72,
    user: 'Руслан',
    rating: 5,
    create_at: '6 днів тому',
    text: `Дуже часто беру квіти) колись давно магазин Million flowers допомогли мені спасти дуже важливу подію. З тих пір - я з ними. Працівники всіх магазинів дуже професійні, швидкі і людяні.`,
  },
];

function CommentSlider() {
  return (
    <div className={styles.comments}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={150}
        slidesPerView={1}
        navigation={{
          prevEl: `.${styles.prev_btn}`,
          nextEl: `.${styles.next_btn}`,
        }}>
        {commentsData.map((comment) => (
          <SwiperSlide key={comment.id}>
            <div className={styles.comments_title}>
              <StarsProduct rating={comment.rating} />
              <p>
                <span>{comment.user},</span> {comment.create_at}
              </p>
            </div>
            <p>{comment.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={styles.prev_btn}>
        <Image src={prev} width={15} height={15} alt="prev" />
      </button>
      <button className={styles.next_btn}>
        <Image src={next} width={15} height={15} alt="next" />
      </button>
    </div>
  );
}

export default CommentSlider;
