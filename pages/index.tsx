import Intro from 'components/Intro'
import RowBlock from 'components/RowBlock'
import SiteHead from 'components/SiteHead'
import ImageWrapper from 'layouts/ImageWrapper'
import Main from 'layouts/Main'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { CONTACTS, RECENT_STACK } from 'utils/constants'

const SEO = {
  title: 'Peter Tumulty - Lead Web Developer | Senior Frontend Engineer | Software Educator',
  metaDescription:
    'Peter Tumulty, owner and lead developer at Tumulty Web Services. Web engineer with 10+ years of experience building software for small businesses, startups, e-commerce companies, and agencies.',
}
const Home = () => (
  <>
    <SiteHead {...SEO} />
    <Main pageWidth="768px">
      <HomeContainer>
        <ImageWrapper>
          <Image src="/images/peter-face.webp" alt="Peter Tumulty" width={297} height={344} />
        </ImageWrapper>
        <Details>
          <Intro />
          <RowBlock title="Connect with me" list={CONTACTS} column={1} />
          <RowBlock
            title="A few technologies I’ve been working with recently"
            list={RECENT_STACK}
            column={2}
          />
        </Details>
      </HomeContainer>
    </Main>
  </>
)

const HomeContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    color: ${(props) => props.theme.fonts.darkGreen};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 80vh;
  }
`

const Details = styled.div`
  max-width: 100%;
  padding: 0 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 36px 0px 0px 64px;
  }
`

export default Home
