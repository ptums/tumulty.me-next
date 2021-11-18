import React from 'react'
import styled from 'styled-components'
import SingleProject from 'components/molecules/SingleProject'
import { PROJECTS } from 'utils/constants'

const Projects = () => (
  <ProjectsContainer>
    {PROJECTS.map((project) => (
      <SingleProject project={project} key={project.id} />
    ))}
  </ProjectsContainer>
)

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-top: 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 0px;
  }
`

export default Projects
