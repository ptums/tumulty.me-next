import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SITE_NAVS } from 'utils/constants'

const Menu = () => {
  const [dropDown, setDropDown] = useState(false)
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
      <MobileMenuWrapper>
        <Button onClick={() => setDropDown(!dropDown)}>
          {!dropDown ? (
            <>
              <Close deg={45} />
              <Close deg={-45} />
            </>
          ) : (
            <>
              <Bar />
              <Bar />
              <Bar />
            </>
          )}
        </Button>

        {dropDown && <p>Dropdown menu</p>}
      </MobileMenuWrapper>
    </nav>
  )
}

const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  top: 16px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`

const Bar = styled.div`
  background: ${(props) => props.theme.colors.fifthGray};
  width: 32px;
  height: 4px;
  margin-bottom: 8px;
  border-radius: 8px;
`

interface CloseProps {
  deg: number
}
const Close = styled(Bar)<CloseProps>`
  transform: rotate(${(props) => props.deg}deg);
`
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

const MobileMenuWrapper = styled.div`
  display: inherit;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
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
