import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";

const Pagination = ({ goToPrevPage, goToNextPage, page, lastPage }) => {
  const handlePrevPage = (ev) => {
    ev.preventDefault();
    goToPrevPage();
  };

  const handleNextPage = (ev) => {
    ev.preventDefault();
    goToNextPage();
  };

  return (
    <form className={styles.pagination}>
      <input
        type='button'
        className={styles.button}
        value='Prev'
        onClick={handlePrevPage}
      />
      <p>
        Page {page} of {lastPage || page}
      </p>
      <input
        type='button'
        className={styles.button}
        value='Next'
        onClick={handleNextPage}
      />
    </form>
  );
};

Pagination.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPrevPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number,
};

export default Pagination;
