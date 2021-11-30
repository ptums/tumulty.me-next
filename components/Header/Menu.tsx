import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SITE_NAVS } from 'utils/constants'

const useOnClickOutside = (ref, handler: (e: boolean) => void) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

const Menu = () => {
  const [dropDown, setDropDown] = useState<boolean>(false)
  const node = useRef<HTMLDivElement>(null)
  useOnClickOutside(node, () => setDropDown(false))

  return (
    <nav>
      <MenuWrapper>
        {SITE_NAVS.map((nav) =>
          nav.id === 5 ? (
            <ButtonItem key={nav.id}>
              <a href={nav.slug}>{nav.label}</a>
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
      <MobileMenuWrapper ref={node}>
        <Button open={dropDown} onClick={() => setDropDown(!dropDown)} aria-label="mobil menu">
          <div />
          <div />
          <div />
        </Button>
        {dropDown && (
          <DropDown>
            {SITE_NAVS.map((nav) =>
              nav.id === 5 ? (
                <DropDownButton key={nav.id} onClick={() => setDropDown(!dropDown)}>
                  <a href={nav.slug}>{nav.label}</a>
                </DropDownButton>
              ) : (
                <DropDownLink key={nav.id} onClick={() => setDropDown(!dropDown)}>
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

interface ButtonProps {
  open: boolean
}
const Button = styled.button<ButtonProps>`
  position: absolute;
  right: 32px;
  top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.37rem;
    background: ${(props) => props.theme.colors.fifthGray};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
`

const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50%;
  background-color: ${(props) => props.theme.colors.offWhite};
  box-shadow: ${(props) => props.theme.colors.shadowNormal};
  border-radius: 8px;
  z-index: 99;
  transition: all 0.2s linear;
  margin: 0;
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
  ${(props) => props.theme.fonts.xxxxl};
  margin: 0;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    ${(props) => props.theme.fonts.xxxxxl};
    height: 32px;
    margin: 0;
  }
`

const DropDownLink = styled(MenuItem)`
  ${(props) => props.theme.fonts.xxxxl};
  height: 48px;
  margin: 0;

  &:first-child {
    margin-top: 16px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    ${(props) => props.theme.fonts.xxxxxl};

    text-align: left;

    margin-bottom: 8px;
  }
`

export default Menu
