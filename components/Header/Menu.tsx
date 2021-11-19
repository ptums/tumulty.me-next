import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { SITE_NAVS } from 'utils/constants'

const Menu = () => {
  return (
    <nav>
      <MenuWrapper>
        {SITE_NAVS.map((nav) =>
          nav.id === 5 ? (
            <ButtonItem key={nav.id}>
              <Link href={nav.slug}>
                <a>{nav.label}</a>
              </Link>
            </ButtonItem>
          ) : (
            <MenuItem key={nav.id}>
              <Link href={nav.slug}>
                <a>{nav.label}</a>
              </Link>
            </MenuItem>
          )
        )}
      </MenuWrapper>
    </nav>
  )
}

const MenuWrapper = styled.ul`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    min-width: 500px;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
`

const MenuItem = styled.li`
  margin: 0 auto;
  list-style-type: none;
  ${(props) => props.theme.fonts.xxxl};
  transition: all 0.4s;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGreen};
    border-radius: 4px;
  }

  a {
    padding: 8px;
    color: ${(props) => props.theme.colors.mediumGreen};
    text-decoration: none;
    position: relative;
    top: 8px;

    &:hover {
      color: ${(props) => props.theme.colors.white};
      text-decoration: none;
    }
  }
`

const ButtonItem = styled.li`
  background-color: ${(props) => props.theme.colors.darkGreen};
  border-radius: 4px;
  padding: 8px;
  margin: 0 auto;
  list-style-type: none;
  ${(props) => props.theme.fonts.xxxl};
  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
`

export default Menu
