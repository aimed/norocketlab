import './Arrow.css';

import * as React from 'react';

const ArrowAlignment = {
  'out-right': 'arrow-align-out-right',
  'out-middle': 'arrow-align-out-middle'
};

interface ArrowProps {
  arrow: string;
  align?: 'out-right' | 'out-middle';
}

export const Arrow: React.SFC<ArrowProps> = ({arrow, align = 'out-middle'}) => {
  return (
    <span className={`arrow ${ArrowAlignment[align]}`}>
      <img className="arrow__img" src={arrow} />
    </span>
  );
};
