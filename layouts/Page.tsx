import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}
const Page: React.FC<Props> = ({ children }: Props) => {
  return <PageContainer>{children}</PageContainer>
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fonts.darkGreen};
  max-width: 100%;
`

export default Page
