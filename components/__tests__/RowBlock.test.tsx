import { screen } from '@testing-library/react'
import React from 'react'

import RowBlock from '../RowBlock'
import { renderWithTheme } from '../test-util'

const simpleList = ['item one', 'item two', 'item three']
const advancedList = [
  {
    id: 5,
    slug: 'a@email.com',
    label: 'Email',
  },
  {
    id: 6,
    slug: 'twitter.com',
    label: 'Twitter',
  },
]

const mockProps = {
  title: 'Test Column',
  column: 1,
  list: advancedList || simpleList,
}
describe('<RowBlock/>', () => {
  it('renders title', () => {
    renderWithTheme(<RowBlock {...mockProps} />)

    expect(screen.queryByText('Test Column')).toBeInTheDocument()
  })

  it('renders a single column', () => {
    renderWithTheme(<RowBlock {...mockProps} />)

    expect(screen.getByText('Twitter').closest('a')).toHaveAttribute('href', '/twitter.com')
  })

  it('renders double column', () => {
    mockProps.list = simpleList
    mockProps.column = 2
    renderWithTheme(<RowBlock {...mockProps} />)

    expect(screen.queryByText('item one')).toBeInTheDocument()
  })
})
