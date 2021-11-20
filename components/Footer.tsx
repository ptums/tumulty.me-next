import React from 'react'
import styled from 'styled-components'

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return <FooterContainer>Peter Tumulty ©️ {year}</FooterContainer>
}

const FooterContainer = styled.footer`
  display: flex;
  max-width: 1023px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  background-color: ${(props) => props.theme.colors.lightGreen};
  color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.fonts.xxxl};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`

export default Footer
