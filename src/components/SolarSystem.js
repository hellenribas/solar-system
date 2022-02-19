import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar">
        <Title headline="Planetas" />
        <main className="planets">
          {planets.map(({ name, image }) => (
            <section key={ name }>
              <PlanetCard name={ name } image={ image } />
            </section>
          ))}
        </main>
      </div>
    );
  }
}

export default SolarSystem;
