import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Menu from 'components/organisms/header/Menu'

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
export default SiteHeader
