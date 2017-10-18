import * as React from 'react';

export interface ProjectInfo {
  name: string;
  website?: string;
  description: string;
  iconUrl: string;
  downloadLink?: string;
  insight?: string;
}

export interface ProjectProps {
  project: ProjectInfo;
  className?: string;
}

export class Project extends React.Component<ProjectProps, {}> {
  render() {
    const { name, website, description, iconUrl, downloadLink, insight } = this.props.project;
    return (
      <div className={'project' + (this.props.className ? ' ' + this.props.className : '')}>
        <div className="project__header">
          <div className="project__icon"><img src={iconUrl} alt={name} width="84" height="84" /></div>
        </div>
        <div className="project__data">
          <h3 className="project__title">{name}</h3>
          <p className="project__description">{description}</p>
          {insight && <p className="project__insight">{insight}</p>}
        </div>
        <div className="project__links">
          {website && <a href={website} target="_blank" rel="noopener">{website}</a>}
          {downloadLink && null}
        </div>
      </div>
    );
  }
}
