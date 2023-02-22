import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { INTRO } from 'utils/constants'

const PHRASES = ['Lead Web Developer', 'Senior Front End Engineer', 'Software Educator']
const Intro = () => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0)

  useEffect(() => {
    const timeout = setInterval(() => {
      setPhraseIndex((prev) => (phraseIndex !== 2 ? prev + 1 : 0))
    }, 4500)

    return () => clearInterval(timeout)
  }, [phraseIndex])

  return (
    <>
      <Title>Peter F. Tumulty</Title>
      <motion.div
        key={PHRASES[phraseIndex]}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <SubTitle>{PHRASES[phraseIndex]}</SubTitle>
      </motion.div>
      {INTRO.map((paragraph: string) => (
        <Excerpt key={paragraph}>{paragraph}</Excerpt>
      ))}
      {/* <Excerpt>
        Hi there! My name is Peter, and I am the owner and lead developer at Tumulty Web Services. I
        am a web engineer with over a decade of experience building software for small businesses,
        startups, e-commerce companies, and agencies. It has been a great pleasures to create
        software that has improved the lives of thousands of people.
      </Excerpt>
      <Excerpt>
        When I am not building software, you can find me teaching others about software development.
        Through one 1:1 mentoring and coaching or instructing at a coding boot camps, I&apos;ve
        helped aspiring developers learn full-stack concepts and launch their careers into tech.
      </Excerpt>
      <Excerpt>
        My capabilities include advanced front-end engineering, full-stack web development,
        mentoring junior developers and recent boot camp graduates, documentation and proposal
        writing, web application architecture, web performance optimization, web vitals improvement,
        and technical on-site SEO.
      </Excerpt> */}
    </>
  )
}

const Title = styled.h1`
  ${(props) => props.theme.fonts.xxxxxxl};
  color: ${(props) => props.theme.colors.darkGreen};
  letter-spacing: 8px;
  margin-bottom: 3px;
`

const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.lightGreen};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  ${(props) => props.theme.fonts.xxxxxl};
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
