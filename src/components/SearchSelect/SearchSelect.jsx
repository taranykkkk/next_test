import { useRouter } from 'next/router';
import { useCallback, useState, useId, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import styles from './SearchSelect.module.scss';
import style from './AsyncSelectStyle';
import debounce from '@/utils/debounce';
import SearchBtn from '../SearchBtn/SearchBtn';
import { useSearchParams } from 'next/navigation';

const MyAsyncSelect = ({ isLoading, onSearchClick }) => {
  const searchValue = useSearchParams();

  const [selectedOption, setSelectedOption] = useState(null);
  const [inputSearchValue, setInputSearchValue] = useState(
    searchValue.get('search'),
  );
  const router = useRouter();

  const handleClickSearch = () => {
    if (Boolean(inputSearchValue)) {
      onSearchClick(inputSearchValue);
    }
  };

  const loadOptions = async (inputValue) => {
    try {
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

  const id = useId();

  return (
    <div className={styles.search_select_container}>
      <AsyncSelect
        loadOptions={debounceFn}
        onChange={handleChange}
        value={selectedOption}
        styles={style}
        instanceId={id}
        inputValue={inputSearchValue || ''}
        onInputChange={(value, action) => {
          if (action.action === 'input-change') setInputSearchValue(value);
        }}
        placeholder="Search..."
      />

      <SearchBtn onClick={handleClickSearch} isLoading={isLoading} />
    </div>
  );
};

export default MyAsyncSelect;
