import React from 'react';
// import PropTypes from 'prop-types';
import './IconButton.scss';
// import { ReactComponent as AddIcon } from '../../icons/add.svg';

export default function IconButton({ children, toggleModal, ...allyProps }) {
  return (
    <button type="button" className="IconButton" onClick={toggleModal}>
      {children}
    </button>
  );
}

// IconButton.defaultProps = {
//   onClick: () => null,
//   children: null,
// };

// IconButton.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   'aria-label': PropTypes.string.isRequired,
// }
