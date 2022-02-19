import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import Mission from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missionCard">
        <Title headline="Missões" />
        <section className="sectionMission">
          {Mission.map(({ name, year, country, destination }) => (
            <section key={ name } className="missionPai">
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </section>
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
