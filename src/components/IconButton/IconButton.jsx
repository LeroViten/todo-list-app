import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.scss';
// import { ReactComponent as AddIcon } from '../../icons/add.svg';

export default function IconButton({ children, toggleModal, ...allyProps }) {
  return (
    <button
      type="button"
      className="IconButton"
      onClick={toggleModal}
      {...allyProps}
    >
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  toggleModal: () => null,
  children: null,
};

IconButton.propTypes = {
  toggleModal: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
