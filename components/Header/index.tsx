import Menu from 'components/Header/Menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const SiteHeader = () => (
  <Header>
    <Title>
      <Link href="/">
        <a>
          <Image
            src="/images/badge.svg"
            alt="Tumulty Web Services"
            width={62}
            height={62}
            layout="intrinsic"
          />
        </a>
      </Link>
      <Contact>
        <a href="mailto:tumultywebservices@gmail.com">tumultywebservices@gmail.com</a>
      </Contact>
    </Title>
    <Menu />
  </Header>
)

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
`

const Contact = styled.div`
  margin 20px 4px;
  ${(props) => props.theme.fonts.xxl};

  a {
    color:${(props) => props.theme.colors.darkGreen};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media(min-width:${(props) => props.theme.breakpoints.sm}) {
    ${(props) => props.theme.fonts.xxxl};
  }
`
export default SiteHeader
