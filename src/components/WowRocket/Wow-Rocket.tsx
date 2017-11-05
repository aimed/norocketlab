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

export interface WowRocketState {}
export interface WowRocketProps {}

export class WowRocket extends React.Component<WowRocketProps, WowRocketState> {
  rocket: HTMLDivElement | null = null;
  surface: HTMLImageElement | null = null;
  animation: number | null = null;
  lastScroll: number = window.scrollY;

  componentWillMount() {
    this.animation = window.requestAnimationFrame(this.onScroll);
  }

  componentWillUnmount() {
    if (this.animation !== null) {
      window.cancelAnimationFrame(this.animation);
    }
  }

  onScroll = () => {
    if (window.scrollY < screen.availHeight && window.scrollY !== this.lastScroll) {
        if (this.rocket && this.surface) {
          this.rocket.style.transform = `translateY(-${window.scrollY}px)`;
          this.surface.style.transform = `scale(${Math.max(1 - (window.scrollY / screen.availHeight ), 0.2)})`;
        }
    }
    this.animation = window.requestAnimationFrame(this.onScroll);
  }

  render() {
    return (
      <div className="Wow-Rocket">
        <img className="Surface" src={Surface} ref={s => this.surface = s} />
        <div className="Rocket-with-Particles" ref={r => this.rocket = r}>
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
