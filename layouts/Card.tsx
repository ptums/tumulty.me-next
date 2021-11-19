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
  max-width: 420px;
  margin-bottom: 24px;
  border: 0.5px solid ${(props) => props.theme.colors.thirdGray};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 24px 32px;
    width: 435px;
    max-width: 100%;
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
