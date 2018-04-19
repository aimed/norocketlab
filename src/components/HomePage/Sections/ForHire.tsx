import './ForHire.css';

import * as React from 'react';

export interface ForHireState { }
export interface ForHireProps { }

export class ForHire extends React.Component<ForHireProps, ForHireState> {
  render() {
    return (
      <p className="for-hire">I'm currently available for <a href="https://maxforhire.com">hire</a>!</p>
    );
  }
}
