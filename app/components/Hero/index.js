/**
 * Hero
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

const Hero = props => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Hero title</h1>
        <h2 className="subtitle">Hero subtitle</h2>
        <div>{Children.toArray(props.children)}</div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
