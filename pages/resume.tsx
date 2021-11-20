import SiteHead from 'components/SiteHead'
import Main from 'layouts/Main'
import Page from 'layouts/Page'
import Title from 'layouts/Title'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const SEO = {
  title: 'Resume | Peter Tumulty Web Developer',
  metaDescription:
    'I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.',
}

const Reviews = () => {
  return (
    <>
      <SiteHead {...SEO} />
      <Main pageWidth="100%">
        <Title>Resume</Title>
        <Page>
          <Header>
            <ImageWrapper>
              <Image
                src="/images/badge.svg"
                alt="Tumulty Web Services"
                width={160}
                height={160}
                layout="intrinsic"
              />
            </ImageWrapper>
            <Name>
              <h2>Peter Tumulty</h2>
              <ul>
                <li>117 Mathis Drive</li>
                <li>Brick, NJ</li>
                <li>908-331-1057</li>
                <li>tumultywebservices@gmail.com</li>
              </ul>
            </Name>
          </Header>
        </Page>
      </Main>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 0.5px solid ${(props) => props.theme.colors.gray};
    padding-bottom: 24px;
  }
`

const ImageWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
`

const Name = styled.div`
  margin-top: 24px;
  margin-bottom: 2px;
  margin-right: 8px;

  h2 {
    ${(props) => props.theme.fonts.xxxxxxl};
    font-family: ${(props) => props.theme.fonts.playFairDisplay};
    margin-top: 24px;
    margin-bottom: 8px;
  }

  ul {
    list-style-type: none;
    ${(props) => props.theme.fonts.xxxl};
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 4px;
    }
  }
`

export default Reviews
