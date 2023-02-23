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

interface BtnProps {
  selectedBtn: boolean
}

const Intro = () => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0)
  const [showFull, setShowFull] = useState<boolean>(false)
  const [selectedBtn, setSelectedBtn] = useState<string>('Short')
  const longIntro = INTRO.slice(1, INTRO.length)
  const shortIntro = INTRO[0].split('')

  useEffect(() => {
    const timeout = setInterval(() => {
      setPhraseIndex((prev) => (phraseIndex !== 2 ? prev + 1 : 0))
    }, 3000)

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
        <Button
          selectedBtn={selectedBtn === 'Short'}
          onClick={() => {
            setShowFull(false)
            setSelectedBtn('Short')
          }}
        >
          Short
        </Button>
        <Button
          selectedBtn={selectedBtn === 'Long'}
          onClick={() => {
            setShowFull(true)
            setSelectedBtn('Long')
          }}
        >
          Long
        </Button>
      </ButtonWrapper>
      <motion.div variants={sentence} initial="hidden" animate="visible">
        <Excerpt>
          {shortIntro.map((char: string, index: number) => (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </Excerpt>
      </motion.div>
      {showFull &&
        longIntro.map((paragraph: string, index: number) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: index * 1.2 }}
            key={paragraph}
          >
            <Excerpt key={paragraph}>{paragraph}</Excerpt>
          </motion.div>
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

const Button = styled.button<BtnProps>`
  ${(props) => props.theme.fonts.xxxl};
  transition: all 0.4s;
  outline: 0;
  background-color: ${(props) =>
    props.selectedBtn ? props.theme.colors.lightGreen : props.theme.colors.white};
  border-radius: 4px;
  border: 0.5px solid ${(props) => props.theme.colors.lightGreen};
  padding: 3px 24px;
  color: ${(props) =>
    props.selectedBtn ? props.theme.colors.white : props.theme.colors.mediumGreen};
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
