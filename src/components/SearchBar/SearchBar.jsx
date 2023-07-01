import css from './SearchBar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  // state = {
  //   searchValue: '',
  // };

  const [searchValue, setSearchValue] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    const search = searchValue;
    onSubmit(search);
  };

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmitForm} className={css.searchForm}>
        <button type="submit" className={css.searchForm_button}>
          <span className={css.searchForm_button_label}>Search</span>
        </button>

        <input
          className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchValue}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
