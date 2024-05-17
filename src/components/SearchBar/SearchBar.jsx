import { useState } from 'react';
import styles from './SearchBar.module.scss';

function SearchBar({ search, onSearchClick }) {
  const [searchValue, setSearchValue] = useState(search);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <input
          placeholder="Search post..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          disabled={!searchValue}
          onClick={() => onSearchClick(searchValue)}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
