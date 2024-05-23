import { useState } from 'react';
import { Collapse } from 'react-collapse';

import styles from './CommonCollaps.module.scss';

function CommonCollaps({ children, title }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.common_question}>
      <label>
        {title}
        <input
          type="checkbox"
          checked={isOpened}
          onChange={() => setIsOpened(!isOpened)}
        />
      </label>
      <Collapse
        isOpened={isOpened}
        theme={{ collapse: styles.collaps_transition }}>
        {children}
      </Collapse>
      <hr />
    </div>
  );
}

export default CommonCollaps;
