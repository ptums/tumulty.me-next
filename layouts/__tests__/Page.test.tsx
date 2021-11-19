import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../components/test-util'
import Page from '../Page'

describe('<Page />', () => {
  it('renders children', () => {
    renderWithTheme(
      <Page>
        <p>Hello World!</p>
      </Page>
    )

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
