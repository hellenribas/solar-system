import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { name, image } = this.props;
    console.log(name);
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ name }</p>
        <img src={ image } alt={ `Planeta ${name}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

PlanetCard.defaultProps = {
  name: 'Terra',
  image: 'path-to-image',
};

export default PlanetCard;
