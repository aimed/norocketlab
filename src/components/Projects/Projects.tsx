import './Projects.css';

import * as React from 'react';

import { Project, ProjectInfo } from './Project';

const projects: ProjectInfo[] = [
  {
    name: 'Friendom',
    description: 'A random friends episode picker.',
    insight: 'Features: worlds worst js rendering engine.',
    website: 'https://friendom.surge.sh',
    iconUrl: require('./icons/FriendomIcon.svg')
  },
  {
    name: 'Ampz',
    description: '8tracks.com client for OSX.',
    insight: 'Definitely not old, buggy and no longer maintained.',
    iconUrl: require('./icons/AmpzIcon.svg'),
    website: 'https://github.com/aimed/ampz',
    downloadLink: 'https://github.com/aimed/ampz/raw/master/website/public/download/Ampz.zip'
  }
];

interface ProjectsState {
}

export interface ProjectsProps {
}

export class Projects extends React.Component<ProjectsProps, ProjectsState> {

  render() {
    return (
      <div className="projects">
        {projects.map(project =>
          <Project
            key={project.name}
            project={project}
          />
        )}
      </div>
    );
  }
}
