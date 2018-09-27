/**
 * Button
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button type="button" className="button" onClick={props.onClick}>
    {Children.toArray(props.children)}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
