import Intro from 'components/Intro'
import RowBlock from 'components/RowBlock'
import SiteHead from 'components/SiteHead'
import Main from 'layouts/Main'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { CONTACTS, RECENT_STACK } from 'utils/constants'

const SEO = {
  title: 'Peter Tumulty | Freelance Web Developer',
  metaDescription:
    'Peter Tumulty Freelance Web Developer providing technical SEO, fullstack web development, and web site design in Brick, New Jersey.',
}
const Home = () => (
  <>
    <SiteHead {...SEO} />
    <Main pageWidth="768px">
      <HomeContainer>
        <ImageContainer>
          <Image
            src="/images/peter-face.webp"
            alt="Peter Tumulty"
            width={297}
            height={344}
            layout="fixed"
          />
        </ImageContainer>
        <Details>
          <Intro />
          <RowBlock title="You can find me @" list={CONTACTS} column={1} />
          <RowBlock
            title="Here are a few technologies I’ve been working with recently:"
            list={RECENT_STACK}
            column={2}
          />
        </Details>
      </HomeContainer>
    </Main>
  </>
)

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fonts.darkGreen};
  min-height: 80vh;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const ImageContainer = styled.div`
  margin: 36px 0;
  span {
    img {
      border-radius: 8px;
    }
  }
`
const Details = styled.div`
  margin: 36px 0px 0px 64px;
`

export default Home
