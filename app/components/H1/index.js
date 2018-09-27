/**
 * H1
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

const H1 = props => (
  <h1 className="title">{Children.toArray(props.children)}</h1>
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H1;
