import { screen } from '@testing-library/react'
import React from 'react'

import SinglePost from '../SinglePost'
import { renderWithTheme } from '../test-util'

const mockProps = {
  title: 'Blog Post 1',
  slug: '/blog-post-one',
  tagLine: '...',
  description: '...',
}

describe('<SinglePost />', () => {
  it('renders post title', () => {
    renderWithTheme(<SinglePost post={mockProps} />)

    expect(screen.queryByText('Blog Post 1')).toBeInTheDocument()
  })

  it('renders post url', () => {
    renderWithTheme(<SinglePost post={mockProps} />)

    expect(screen.getByText('Read More').closest('a')).toHaveAttribute(
      'href',
      '/post/blog-post-one'
    )
  })
})
