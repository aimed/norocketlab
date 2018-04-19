import './HomePage.css';

import * as React from 'react';

import { AboutMe } from './Sections/AboutMe';
import { ForHire } from './Sections/ForHire';
import { ProjectsSection } from './Sections/ProjectsSection';
import { SplashRocket } from './Sections/SplashRocket';

export interface HomePageProps {
}

export class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <div className="HomePage">
        <ForHire />
        <SplashRocket />
        <AboutMe />
        <ProjectsSection />
      </div>
    );
  }
}
