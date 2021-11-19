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
          <Bar />
          <Bar />
          <Bar />
        </Button>
        {dropDown && (
          <DropDown>
            {SITE_NAVS.map((nav) =>
              nav.id === 5 ? (
                <DropDownButton key={nav.id}>
                  <Link href={nav.slug}>
                    <a>{nav.label}</a>
                  </Link>
                </DropDownButton>
              ) : (
                <DropDownLink key={nav.id}>
                  <Link href={nav.slug}>
                    <a>{nav.label}</a>
                  </Link>
                </DropDownLink>
              )
            )}
          </DropDown>
        )}
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

const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 72px;
  left: 24px;
  background-color: ${(props) => props.theme.colors.offWhite};
  box-shadow: ${(props) => props.theme.colors.shadowNormal};
  min-width: 400px;
  max-width: 100%;
  height: 400px;
  border-radius: 8px;
  z-index: 99;
  animation: fadeIn 0.2s;
  margin: 0;
`
const Bar = styled.div`
  background: ${(props) => props.theme.colors.fifthGray};
  width: 32px;
  height: 4px;
  margin-bottom: 8px;
  border-radius: 8px;
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

const DropDownButton = styled(ButtonItem)`
  ${(props) => props.theme.fonts.xxxxxl};
  height: 32px;
`

const DropDownLink = styled(MenuItem)`
  ${(props) => props.theme.fonts.xxxxxl};
  margin-bottom: 24px;
  height: 48px;
`

export default Menu
