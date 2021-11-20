import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }: Props) => {
  return <CardContainer>{children}</CardContainer>
}

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  transition: all 0.2s;
  max-width: 416px;
  margin-bottom: 24px;
  border: 0.5px solid ${(props) => props.theme.colors.thirdGray};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 24px 32px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: ${(props) => props.theme.colors.offWhite};
  }

  a {
    text-decoration: none;
  }
`

export default Card
