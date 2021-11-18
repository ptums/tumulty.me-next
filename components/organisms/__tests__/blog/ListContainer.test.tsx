import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import ListContainer from '../../blog/ListContainer'

const mockProps = [
  {
    title: 'Blog Post 1',
    slug: '/blog-post-one',
    tagLine: '...',
    description: '...',
  },
]

describe('<ListContainer />', () => {
  it('renders blog post title', () => {
    renderWithTheme(<ListContainer allPosts={mockProps} />)

    expect(screen.queryByText('Blog Post 1')).toBeInTheDocument()
  })  
})
