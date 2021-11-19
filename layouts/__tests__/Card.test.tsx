import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../components/test-util'
import Card from '../Card'

const mockProps = {
  cardMargin: '24px',
}
describe('<Card />', () => {
  it('renders children', () => {
    renderWithTheme(
      <Card {...mockProps}>
        <p>Hello World!</p>
      </Card>
    )

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
