import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import AsyncSelect from 'react-select/async';
import styles from './SearchSelect.module.scss';
import style from './AsyncSelectStyle';
import debounce from '@/utils/debounce';
import SearchBtn from '../SearchBtn/SearchBtn';

const MyAsyncSelect = ({ isLoading, onSearchClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputSearchValue, setInputSearchValue] = useState('');
  const router = useRouter();

  const handleClickSearch = () => {
    if (!!inputSearchValue) {
      onSearchClick(inputSearchValue);
    }
  };

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

  const debounceFn = useCallback(debounce(loadOptions, 250), []);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      router.push(`/posts/${selectedOption.value}`);
    }
  };

  return (
    <div className={styles.search_select_container}>
      <AsyncSelect
        loadOptions={debounceFn}
        onChange={handleChange}
        value={selectedOption}
        styles={style}
      />

      <SearchBtn onClick={handleClickSearch} isLoading={isLoading} />
    </div>
  );
};

export default MyAsyncSelect;
