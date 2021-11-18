import React from 'react';
import styled from 'styled-components'

const Intro = () => (
  <>
    <Title>Peter F. Tumulty</Title>
    <SubTitle>Web Developer</SubTitle>
    <Excerpt>
      Hi there! My name is Peter and I'm the Owner and Lead Developer at Tumulty Web Services. I am
      a full stack web developer based out of Brick, NJ and my favorite thing to do is build
      software that makes an impact.
    </Excerpt>
  </>
)


const Title = styled.h1`
${props => props.theme.fonts.xxxxxxl};
color: ${props => props.theme.colors.darkGreen};
letter-spacing: 8px;
margin-bottom: 3px;
`

const SubTitle = styled.p`
  color: ${props => props.theme.colors.lightGreen};
  font-family: ${props => props.theme.fonts.playFairDisplay};
  ${props => props.theme.fonts.xxxxxxl};
  letter-spacing: 4px;
  font-weight: bold;
  margin: 0;
  position: relative;
  bottom: 6px;
`

const Excerpt = styled.p`
${(props) => props.theme.fonts.xxxl};
color: ${props => props.theme.colors.darkGreen};
margin: 36px 0;
`

export default Intro;