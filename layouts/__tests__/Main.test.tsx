import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../components/test-util'
import Main from '../Main'

const mockProps = {
  pageWidth: '100%',
}

describe('<Container />', () => {
  it('renders children', () => {
    renderWithTheme(
      <Main {...mockProps}>
        <p>Hello World!</p>
      </Main>
    )

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
