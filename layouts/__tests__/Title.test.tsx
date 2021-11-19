import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../components/test-util'
import Title from '../Title'

describe('<Title />', () => {
  it('renders children', () => {
    renderWithTheme(
      <Title>
        <p>Hello World!</p>
      </Title>
    )

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
