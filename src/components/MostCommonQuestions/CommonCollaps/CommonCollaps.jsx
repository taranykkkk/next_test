import { useState } from 'react';
import { Collapse } from 'react-collapse';

import styles from './CommonCollaps.module.scss';

function CommonCollaps({ value, workSchedule }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.common_question}>
      <label>
        {value}
        <input
          type="checkbox"
          checked={isOpened}
          onChange={() => setIsOpened(!isOpened)}
        />
      </label>
      <Collapse
        isOpened={isOpened}
        theme={{ collapse: styles.collaps_transition }}>
        {workSchedule.map((elem) => (
          <div className={styles.content} key={elem.city}>
            <h6>{elem.city}</h6>
            {elem.address.map((street) => (
              <p key={street}>{street}</p>
            ))}
          </div>
        ))}
      </Collapse>
      <hr />
    </div>
  );
}

export default CommonCollaps;
