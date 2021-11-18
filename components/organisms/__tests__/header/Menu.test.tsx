import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import Menu from '../../header/Menu'

describe('<Menu />', () => {
  it('renders menu item', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText('About')).toBeInTheDocument()
  })

  it('does not render malformed item', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText('About!')).toBeNull()
  })
})