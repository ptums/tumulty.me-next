import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  pageWidth: string
}
const Main: React.FC<Props> = ({ children, pageWidth }: Props) => {
  return (
    <MainContainer pageWidth={pageWidth} className="fade-in">
      {children}
    </MainContainer>
  )
}

interface MainProps {
  pageWidth?: string
}

const MainContainer = styled.main<MainProps>`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: ${(props) => props.pageWidth};
    margin: 24px auto;
  }
`

export default Main
