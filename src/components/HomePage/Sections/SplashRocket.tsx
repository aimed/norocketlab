import './SplashRocket.css';

import * as React from 'react';

import { NoRocketLabHeader } from '../../NoRocketLab/NoRocketLabHeader';
import { WowRocket } from '../../WowRocket/Wow-Rocket';

export interface SplashRocketProps {
}

export class SplashRocket extends React.Component<SplashRocketProps, {}> {
  render() {
    return (
      <section className="SplashRocket">
        <NoRocketLabHeader />
        <div className="Rocket-Container">
          <WowRocket />
        </div>
      </section>
    );
  }
}
