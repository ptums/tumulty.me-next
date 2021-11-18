import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import Intro from '../../home/Intro'

describe('<Intro />', () => {
  it('renders title', () => {
    renderWithTheme(<Intro />)

    expect(screen.queryByText('Peter F. Tumulty')).toBeInTheDocument()
  })

  it('renders sub title', () => {
    renderWithTheme(<Intro />)

    expect(screen.queryByText('Web Developer')).toBeInTheDocument()
  })
})