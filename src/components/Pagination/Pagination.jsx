import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import Link from 'next/link';

const selectOptions = [
  { name: 5, value: '5' },
  { name: 10, value: '10' },
  { name: 15, value: '15' },
];

const Pagination = ({
  handleSelect,
  metaData,
  currentPage,
  setCurrentPage,
}) => {
  const { per_page, last_page, total } = metaData;

  const handlePrevButton = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handlePagesButton = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={styles.pagination_container}>
      <div className={styles.total}>Total: {total}</div>

      <div>
        <Link
          href={`?page=${currentPage - 1}&per_page=${per_page}`}
          className={currentPage === 1 ? styles.disabled : ''}
          onClick={handlePrevButton}>
          Prev
        </Link>

        {Array.from({ length: last_page }, (_, index) => index + 1).map(
          (pageNumber) => (
            <Link
              key={pageNumber}
              href={`?page=${pageNumber}&per_page=${per_page}`}
              className={
                pageNumber === currentPage
                  ? `${styles.active} ${styles.disabled}`
                  : ''
              }
              onClick={handlePagesButton}>
              {pageNumber}
            </Link>
          ),
        )}

        <Link
          href={`?page=${currentPage + 1}&per_page=${per_page}`}
          className={currentPage === last_page ? styles.disabled : ''}>
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
