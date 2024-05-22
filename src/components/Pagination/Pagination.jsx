import classNames from 'classnames';
import styles from './Pagination.module.scss';
import Link from 'next/link';

const selectOptions = [
  { name: 5, value: '5' },
  { name: 10, value: '10' },
  { name: 15, value: '15' },
];

const Pagination = ({ handleSelect, metaData, metaDataState }) => {
  const { per_page, last_page } = metaData;
  const { current_page, total } = metaDataState;

  return (
    <div className={styles.pagination_container}>
      <div className={styles.total}>Total: {total}</div>

      <div className={styles.pages}>
        <Link
          href={{ pathname: '', query: { page: current_page - 1, per_page } }}
          className={classNames({ [styles.disabled]: current_page === 1 })}>
          Prev
        </Link>

        {Array.from({ length: last_page }, (_, index) => index + 1).map(
          (pageNumber) => (
            <Link
              key={pageNumber}
              href={{ pathname: '', query: { page: pageNumber, per_page } }}
              className={classNames(
                pageNumber === current_page && [styles.active, styles.disabled],
              )}>
              {pageNumber}
            </Link>
          ),
        )}

        <Link
          href={{ pathname: '', query: { page: current_page + 1, per_page } }}
          className={classNames({
            [styles.disabled]: current_page === last_page,
          })}>
          Next
        </Link>
      </div>

      <div className={styles.custom_select}>
        <select value={per_page} onChange={(e) => handleSelect(e.target.value)}>
          {selectOptions.map((option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
