import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}
const Projects: React.FC<Props> = ({ children }: Props) => {
  return <ProjectsContainer>{children}</ProjectsContainer>
}

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
    justify-content: space-between;
    align-items: baseline;
    margin-top: 24px;
  }
`

export default Projects
