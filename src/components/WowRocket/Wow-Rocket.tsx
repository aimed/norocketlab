import './Wow-Rocket.css';

import * as React from 'react';

const Surface = require('./Surface.svg');
const Rocket = require('./Rocket.svg');
const Particle1 = require('./Particle1.svg');
const Particle2 = require('./Particle2.svg');
const Particle3 = require('./Particle3.svg');
const Particle4 = require('./Particle4.svg');
const Particle5 = require('./Particle5.svg');
const Particle6 = require('./Particle6.svg');
const Particle7 = require('./Particle7.svg');

interface WowRocketState {
  scrollY: number;
}
export interface WowRocketProps {
}

export class WowRocket extends React.Component<WowRocketProps, WowRocketState> {
  state = {
    scrollY: window.scrollY
  };

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (event: UIEvent) => {
    if (window.scrollY < screen.availHeight) {
      this.setState({ scrollY: window.scrollY });
    }
  }

  render() {
    const rocketStyle: React.CSSProperties = {
      transform: `translateY(-${this.state.scrollY}px)`
    };

    const surfaceStyle: React.CSSProperties = {
      transform: `scale(${Math.max(1 - (this.state.scrollY / screen.availHeight ), 0.2)})`
    };

    return (
      <div className="Wow-Rocket">
        <img className="Surface" src={Surface} style={surfaceStyle} />
        <div className="Rocket-with-Particles" style={rocketStyle}>
          <img className="Rocket" src={Rocket} />
          <img className="Particle Particle1" src={Particle1} />
          <img className="Particle Particle2" src={Particle2} />
          <img className="Particle Particle3" src={Particle3} />
          <img className="Particle Particle4" src={Particle4} />
          <img className="Particle Particle5" src={Particle5} />
          <img className="Particle Particle6" src={Particle6} />
          <img className="Particle Particle7" src={Particle7} />
        </div>
      </div>
    );
  }
}
