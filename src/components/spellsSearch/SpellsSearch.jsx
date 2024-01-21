import PropTypes from "prop-types";
import styles from "./SpellsSearch.module.scss";

const SpellsSearch = ({ handleFilter, search }) => {
  const handleSearch = (ev) => {
    ev.preventDefault();
    handleFilter(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type='text'
        className={styles.input}
        name='search-bar'
        placeholder='Alohomora...'
        value={search}
        onInput={handleSearch}
      />
      <input type='button' value='Search' className={styles.submit} />
    </form>
  );
};

SpellsSearch.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default SpellsSearch;
