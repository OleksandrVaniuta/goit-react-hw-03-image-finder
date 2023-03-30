import PropTypes from 'prop-types';
import css from './Button.module.css';

function Button({ onClick }) {
  return (
    <button onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
