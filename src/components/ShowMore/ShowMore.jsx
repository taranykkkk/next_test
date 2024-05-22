import classNames from 'classnames';
import styles from './ShowMore.module.scss';
import withLoadingState from '@/hoc/withLoadingState';

function ShowMore({ handleShowMore, isLoading }) {
  return (
    <div className={styles.show_more}>
      <button
        onClick={handleShowMore}
        disabled={isLoading}
        className={classNames({
          [styles.disabled]: isLoading,
        })}>
        Show more
      </button>
    </div>
  );
}

export default withLoadingState(ShowMore);
