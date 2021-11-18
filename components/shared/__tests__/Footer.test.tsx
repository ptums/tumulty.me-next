import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../test-util'
import Footer from '../Footer'

const date = new Date()
const year = date.getFullYear()

describe('<Footer />', () => {
  it('renders name', () => {
    renderWithTheme(<Footer />)

    expect(screen.queryByText(`Peter Tumulty ©️ ${year}`)).toBeInTheDocument()
  })

  it('renders proper date', () => {
    renderWithTheme(<Footer />)

    expect(screen.queryByText(`Peter Tumulty ©️ 1999`)).toBeNull();
  })
})