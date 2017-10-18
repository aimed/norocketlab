import * as React from 'react';

import { Arrow } from '../../Arrow/Arrow';
import { Projects } from '../../Projects/Projects';

export interface ProjectsSectionProps {
}

export class ProjectsSection extends React.Component<ProjectsSectionProps, {}> {
  render() {
    return (
      <div className="projects-section arrow-container">
        <Arrow arrow={require('./ArrowNotMax.svg')} />
        <Projects />
      </div>
    );
  }
}
