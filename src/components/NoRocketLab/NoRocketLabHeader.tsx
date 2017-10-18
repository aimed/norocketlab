import './NoRocketLabHeader.css';

import * as React from 'react';

const icon = require('./NoRocketLab-Icon.svg');

export interface NoRocketLabHeaderProps {
}

export class NoRocketLabHeader extends React.Component<NoRocketLabHeaderProps, {}> {
  render() {
    return (
      <div className="NoRocketLabHeader">
        <img className="NoRocketLab-Icon" src={icon} />
      </div>
    );
  }
}
