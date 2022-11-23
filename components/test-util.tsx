import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const fonts = {
  xs: 'font-size: 0.75rem; line-height: 1rem',
  sm: 'font-size: 0.875rem;; line-height: 1.25rem;',
  base: 'font-size: 12px; line-height: 1.5rem',
  md: 'font-size: 1.025rem; line-height: 1.5rem',
  lg: 'font-size: 1.125rem; line-height: 1.75rem',
  xl: 'font-size: 1.25rem; line-height: 1.75rem',
  xxl: 'font-size: 1.5rem; line-height: 2rem',
  xxxl: 'font-size: 1.875rem; line-height: 2.25rem',
  xxxxl: 'font-size: 2.25rem; line-height: 2.5rem',
  xxxxxl: 'font-size: 3rem; line-height: 1',
  xxxxxxl: 'font-size: 3.75rem; line-height: 1',
  xxxxxxxl: 'font-size: 4.5rem; line-height: 1',
  xxxxxxxxl: 'font-size: 6rem; line-height: 1',
  xxxxxxxxxl: 'font-size: 8rem; line-height: 1',
  excerpt: 'font-size: 2.1rem; line-height: 1.6',
  bold: 700,
  normal: 400,
  lato: 'Lato, sans-serif',
  playFairDisplay: 'Playfair Display, serif',
}

const colors = {
  black: '#212121',
  pureBlack: '#000000',
  white: '#fff',
  offWhite: '#fcfaff',
  whiteLowOpacity: 'rgba(255, 255, 255, 0.75)',
  gray: '#e9e9e9',
  secondaryGray: '#dee2e6',
  thirdGray: '#ced4da',
  fourthGray: '#a9a9a9',
  fifthGray: '#444444',
  lightGreen: 'rgba(16, 185, 129)',
  mediumGreen: 'rgba(5, 150, 105);',
  darkGreen: 'rgba(6, 78, 59)',
  shadowNormal: '0 5px 10px 0 rgba(138, 155, 165, 0.15)',
  shadowLight: '0 .5rem 1rem rgba(0,0,0,.15)!important',
  shadowDark: '0 .5rem 1rem rgba(0,0,0,.35)',
}

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
}

const theme = {
  breakpoints,
  colors,
  fonts,
}

export function renderWithTheme(component: JSX.Element): RenderResult {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}
