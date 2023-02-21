import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  pageWidth: string
}
const Main = ({ children, pageWidth }: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      <MainContainer pageWidth={pageWidth}>{children}</MainContainer>
    </motion.div>
  )
}

interface MainProps {
  pageWidth?: string
}

const MainContainer = styled.main<MainProps>`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: ${(props) => props.pageWidth};
    margin: 24px auto;
  }
`

export default Main
