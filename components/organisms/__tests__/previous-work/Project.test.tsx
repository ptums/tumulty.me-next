import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import Projects from '../../previous-work/Projects'

describe('<Projects />', () => {
  it('renders child component', () => {
    renderWithTheme(<Projects />)

    expect(screen.queryByText('Asbury Park High School Hall of Fame')).toBeInTheDocument()
  })

  
})