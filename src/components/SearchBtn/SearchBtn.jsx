import withLoadingState from '@/hoc/withLoadingState';
import styles from './SearchBtn.module.scss';

const SearchBtn = ({ onClick, isLoading }) => {
  return (
    <button
      className={styles.search_button}
      onClick={onClick}
      disabled={isLoading}>
      Search
    </button>
  );
};

export default withLoadingState(SearchBtn);
