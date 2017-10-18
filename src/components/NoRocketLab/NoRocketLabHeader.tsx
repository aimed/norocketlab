import './NoRocketLabHeader.css';

import * as React from 'react';

export interface NoRocketLabHeaderProps {
}

export class NoRocketLabHeader extends React.Component<NoRocketLabHeaderProps, {}> {
  render() {
    return (
      <div className="NoRocketLabHeader">
        <img className="NoRocketLab-Icon" src={require('./NoRocketLab-Icon.svg')} width="59" height="55" />
      </div>
    );
  }
}
