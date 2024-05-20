import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import styles from './SearchSelect.module.scss';
import style from './AsyncSelectStyle';

const MyAsyncSelect = ({ onSearchClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputSearchValue, setInputSearchValue] = useState('');
  const router = useRouter();

  const loadOptions = async (inputValue) => {
    try {
      setInputSearchValue(inputValue);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/search?q=${inputValue}`,
      );

      return response.json();
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      router.push(`/posts/${selectedOption.value}`);
    }
  };

  return (
    <div className={styles.search_select_container}>
      <AsyncSelect
        loadOptions={loadOptions}
        onChange={handleChange}
        value={selectedOption}
        styles={style}
      />
      <button
        className={styles.search_button}
        disabled={!inputSearchValue}
        onClick={() => onSearchClick(inputSearchValue)}>
        Search
      </button>
    </div>
  );
};

export default MyAsyncSelect;
