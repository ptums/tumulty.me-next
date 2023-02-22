import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { INTRO } from 'utils/constants'

const PHRASES = ['Lead Web Developer', 'Senior Front End Engineer', 'Software Educator']

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.03,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const Intro = () => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0)
  const [showFull, setShowFull] = useState<boolean>(false)

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <SubTitle>{PHRASES[phraseIndex]}</SubTitle>
      </motion.div>
      <ButtonWrapper>
        <Button onClick={() => setShowFull(false)}>Short</Button>
        <Button onClick={() => setShowFull(true)}>Long</Button>
      </ButtonWrapper>
      <Excerpt key={INTRO[0]}>{INTRO[0]}</Excerpt>
      {showFull && (
        <>
          <motion.div variants={sentence} initial="hidden" animate="visible">
            <Excerpt>
              {INTRO[1].split('').map((char: string, index: number) => (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </Excerpt>
            <Excerpt>
              {INTRO[2].split('').map((char: string, index: number) => (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </Excerpt>
            <Excerpt>
              {INTRO[INTRO.length - 1].split('').map((char: string, index: number) => (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </Excerpt>
          </motion.div>
        </>
      )}
      {!showFull && <Excerpt key={INTRO[INTRO.length - 1]}>{INTRO[INTRO.length - 1]}</Excerpt>}
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

const MotionExcerpt = styled(motion.p)`
  ${Excerpt}
`

const Button = styled.button`
  ${(props) => props.theme.fonts.xxxl};
  transition: all 0.4s;
  outline: 0;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  border: 0.5px solid ${(props) => props.theme.colors.lightGreen};
  padding: 3px 24px;
  color: ${(props) => props.theme.colors.mediumGreen};
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGreen};
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    cursor: pointer;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.lightGreen};
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    &:first-child {
      margin-right: 16px;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
`

export default Intro
