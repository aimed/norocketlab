import './WelcomePage.css';

import * as React from 'react';

import { WowRocket } from './Wow-Rocket';

export interface WelcomePageProps {
}

export class WelcomePage extends React.Component<WelcomePageProps, {}> {
  render() {
    return (
      <div className="WelcomePage">
        <WowRocket />
        <div className="Welcome">
          <h1>Hi, I'm <span className="Underline">Max</span></h1>
          <small>Computer science is no rocket science and this is no rocket lab.</small>
          <p>Currently I'm working on agent based simulations of material flows.
            Side projects include a CRM and Project management tool called Coral
            and a random movie picker called Foxxy.</p>
        </div>
        <div className="FancyBackground" />
      </div>
    );
  }
}
