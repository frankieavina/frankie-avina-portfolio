/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import featuredProjects from '../data/projects.json';
import ProjectCard from '../components/Projects/ProjectCard';

const ProjectsWrapper = styled.section`
display: flex;
width: 70%;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0;
margin: 0 auto;

@media (max-width: 768px) {
  padding: 80px 0;
}

@media (max-width: 480px) {
  padding: 60px 0;
}
  a {
    position: relative;
    z-index: 1;
  }
`

function Projects() {
  return (
    <ProjectsWrapper>
      <h2>Some Things I've Built</h2>
      {featuredProjects ? 
        featuredProjects.map((data) =>
        <ProjectCard info={data} />
      ):
        <p>Loading...</p>
      }

    </ProjectsWrapper>
  )
}

export default Projects