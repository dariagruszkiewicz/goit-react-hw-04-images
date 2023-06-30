import css from './SearchBar.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    searchValue: '',
    images: [],
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const search = this.state.searchValue;
    this.props.onSubmit(search);
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmitForm} className={css.searchForm}>
          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={searchValue}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
