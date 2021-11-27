import React from 'react'
import styled from 'styled-components'

const Intro = () => (
  <>
    <Title>Peter F. Tumulty</Title>
    <SubTitle>Lead Web Developer</SubTitle>
    <Excerpt>
      Hi there! My name is Peter and I&apos;m the owner and lead developer at Tumulty Web Services.
      I am a web engineer with over ten years of experience and proud dog parent based out of Brick,
      NJ and my favorite thing to do is build software that makes an impact.
    </Excerpt>
    <Excerpt>
      My capabilities include front-end development, JAMstack development, mentoring junior
      developers and recent bootcamp graduates, website architecture, web performance optimization,
      web vitals improvement, and technical on-site SEO.
    </Excerpt>
  </>
)

const Title = styled.h1`
  ${(props) => props.theme.fonts.xxxxxxl};
  color: ${(props) => props.theme.colors.darkGreen};
  letter-spacing: 8px;
  margin-bottom: 3px;
`

const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.lightGreen};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  ${(props) => props.theme.fonts.xxxxxxl};
  letter-spacing: 4px;
  font-weight: bold;
  margin: 0;
`

const Excerpt = styled.p`
  ${(props) => props.theme.fonts.xxxl};
  color: ${(props) => props.theme.colors.darkGreen};
  margin: 24px 0;
`

export default Intro
