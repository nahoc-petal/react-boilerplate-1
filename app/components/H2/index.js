/**
 * H2
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

const H2 = props => (
  <h2 className="subtitle">{Children.toArray(props.children)}</h2>
);

H2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H2;
