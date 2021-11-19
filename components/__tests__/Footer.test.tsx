import { screen } from '@testing-library/react'
import React from 'react'

import Footer from '../Footer'
import { renderWithTheme } from '../test-util'

const date = new Date()
const year = date.getFullYear()

describe('<Footer />', () => {
  it('renders name', () => {
    renderWithTheme(<Footer />)

    expect(screen.queryByText(`Peter Tumulty ©️ ${year}`)).toBeInTheDocument()
  })

  it('renders proper date', () => {
    renderWithTheme(<Footer />)

    expect(screen.queryByText(`Peter Tumulty ©️ 1999`)).toBeNull()
  })
})
