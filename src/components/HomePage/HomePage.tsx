import './HomePage.css';

import * as React from 'react';

import { AboutMe } from './Sections/AboutMe';
import { ProjectsSection } from './Sections/ProjectsSection';
import { SplashRocket } from './Sections/SplashRocket';

export interface HomePageProps {
}

export class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <div className="HomePage">
        <SplashRocket />
        <AboutMe />
        <ProjectsSection />
      </div>
    );
  }
}
