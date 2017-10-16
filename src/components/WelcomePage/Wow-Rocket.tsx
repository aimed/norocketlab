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

interface WowRocketProps {
}

export const WowRocket: React.SFC<WowRocketProps> = (props) => {
    return (
        <div className="Wow-Rocket">
            <img className="Surface" src={Surface} />
            <img className="Rocket" src={Rocket} />
            <img className="Particle Particle1" src={Particle1} />
            <img className="Particle Particle2" src={Particle2} />
            <img className="Particle Particle3" src={Particle3} />
            <img className="Particle Particle4" src={Particle4} />
            <img className="Particle Particle5" src={Particle5} />
            <img className="Particle Particle6" src={Particle6} />
            <img className="Particle Particle7" src={Particle7} />
        </div>
    );
};