import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Intro = () => (
  <>
    <Title>Peter F. Tumulty</Title>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      <SubTitle>Lead Web Developer</SubTitle>
      <SubTitle>Senior Frontend Engineer</SubTitle>
      <SubTitle>Software Educator</SubTitle>
    </motion.div>

    <Excerpt>
      Hi there! My name is Peter, and I am the owner and lead developer at Tumulty Web Services. I
      am a web engineer with over a decade of experience building software for small businesses,
      startups, e-commerce companies and agencies. When I am not building software, you can find me
      teaching
    </Excerpt>
    <Excerpt>
      During my career, I&apos;ve had the opportunity to build software that has impacted thousands
      of users, and help aspiring developers learn full-stack concepts and launch their careers into
      tech.
    </Excerpt>
    <Excerpt>
      My capabilities include advanced front-end engineering, full-stack web development, mentoring
      junior developers and recent boot camp graduates, documentation and proposal writing, web
      application architecture, web performance optimization, web vitals improvement, and technical
      on-site SEO.
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
