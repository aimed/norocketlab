import './NoRocketLab.css';

import * as React from 'react';

export class NoRocketLab extends React.Component {
  render() {
    return (
      <div className="NoRocketLab">
        <div className="NoRocketLab__content">{this.props.children}</div>
      </div>
    );
  }
}
