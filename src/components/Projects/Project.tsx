import * as React from 'react';

export interface ProjectProps {
  name: string;
  projectUrl: string;
  description: string;
  iconUrl: string;
}

export class Project extends React.Component<ProjectProps, {}> {
  render() {
    const { name, projectUrl, description, iconUrl } = this.props;
    return (
      <div className="project">
        <div className="project__header">
          <div className="project__icon"><img src={iconUrl} alt={name} /></div>
        </div>
        <div className="project__data">
          <h3 className="project__title">{name}</h3>
          <p className="project__description">{description}</p>
          <small className="project__website"><a href={projectUrl} target="_blank">{projectUrl}</a></small>
        </div>
      </div>
    );
  }
}
