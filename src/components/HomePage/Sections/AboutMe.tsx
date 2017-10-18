import './AboutMe.css';

import * as React from 'react';

import { Arrow } from '../../Arrow/Arrow';

export interface AboutMeProps {
}

export class AboutMe extends React.Component<AboutMeProps, {}> {
  render() {
    return (
      <section className="AboutMe">
        <div className="avatar-container arrow-container">
          <Arrow arrow={require('./ArrowMax.svg')} align="out-right" />
          <img className="avatar" src={require('./Avatar.png')} />
        </div>
        <div className="aboutme">
          <p>
            Computer science is no rocket science and this is no rocket lab.<br/>
            Currently working on <b>material flow simulation</b>, <b>decentralized
              control</b> and <b>distributed algorithms</b>.
          </p>
        </div>
      </section>
    );
  }
}
