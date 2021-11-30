import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}
const Title = ({ children }: Props) => {
  return <PageTitle>{children}</PageTitle>
}

const PageTitle = styled.h1`
  ${(props) => props.theme.fonts.xxxxxxl};
  color: ${(props) => props.theme.colors.darkGreen};
  letter-spacing: 8px;
  margin-bottom: 3px;
  text-align: center;
`

export default Title
