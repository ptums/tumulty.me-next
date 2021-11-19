import { screen } from '@testing-library/react'
import React from 'react'

import SingleProject from '../SingleProject'
import { renderWithTheme } from '../test-util'

const mockProps = {
  id: 1,
  slug: 'https://www.aphshalloffame.com',
  video:
    'https://res.cloudinary.com/tumulty-web-services/video/upload/v1636740502/tumulty.me/sites/Asbury_Park_High_School_Hall_of_Fame.mp4',
  label: 'Asbury Park High School Hall of Fame',
  stack: ['Next.js', 'Bootstrap', 'Cloudinary', 'MongoDB'],
}

describe('<SingleProject />', () => {
  it('renders project label', () => {
    renderWithTheme(<SingleProject project={mockProps} />)

    expect(screen.queryByText('Asbury Park High School Hall of Fame')).toBeInTheDocument()
  })

  it('renders project url', () => {
    renderWithTheme(<SingleProject project={mockProps} />)

    expect(screen.getByText('Asbury Park High School Hall of Fame').closest('a')).toHaveAttribute(
      'href',
      'https://www.aphshalloffame.com'
    )
  })
})
