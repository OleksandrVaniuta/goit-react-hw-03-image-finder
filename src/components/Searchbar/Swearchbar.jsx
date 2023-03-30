import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={e => onSubmit(e)}>
        <button type="submit" className={css.SearchFormButton}>
          <FaSearch />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
