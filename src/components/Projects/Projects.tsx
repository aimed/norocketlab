import './Projects.css';

import * as React from 'react';

import { Project } from './Project';

export interface ProjectsProps {
}

export class Projects extends React.Component<ProjectsProps, {}> {
  render() {
    return (
      <div className="projects">
        <Project
          name="Friendom"
          description="A random friends episode picker."
          projectUrl="https://friendom.surge.sh"
          iconUrl={require('./icons/FriendomIcon.svg')}
        />
      </div>
    );
  }
}
