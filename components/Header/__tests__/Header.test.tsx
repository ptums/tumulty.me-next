import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../test-util'
import Header from '../index'

describe('<Header />', () => {
  it('renders name', () => {
    renderWithTheme(<Header />)

    expect(screen.queryByAltText('Tumulty Web Services')).toBeInTheDocument()
  })

  it('renders menu component', () => {
    renderWithTheme(<Header />)

    expect(screen.queryByText('About')).toBeInTheDocument()
  })
})
