import { useState } from 'react';
import styles from './StarsRating.module.scss';

function StarsRating({ rating, onRatingChange }) {
  const stars = [1, 2, 3, 4, 5];
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={styles.stars_rating}>
      <h2 className={styles.stars_rating_title}>Поставте оцінку</h2>
      <div className={styles.stars_container}>
        {stars.map((star) => (
          <span
            key={star}
            className={
              star <= (hoverRating || rating)
                ? styles.star_filled
                : styles.star_empty
            }
            onClick={() => onRatingChange(star)}
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={() => handleStarLeave()}>
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
}

export default StarsRating;
