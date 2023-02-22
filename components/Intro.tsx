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
