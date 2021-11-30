import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const ImageWrapper = ({ children }: Props) => {
  return <ImageContainer>{children}</ImageContainer>
}

const ImageContainer = styled.div`
  margin: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 36px 0;
  }
  span {
    img {
      border-radius: 8px;
    }
  }
`

export default ImageWrapper
