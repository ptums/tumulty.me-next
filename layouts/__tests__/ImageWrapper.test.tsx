import { screen } from '@testing-library/react'
import Image from 'next/image'
import React from 'react'

import { renderWithTheme } from '../../components/test-util'
import ImageWrapper from '../ImageWrapper'

describe('<ImageWrapper />', () => {
  it('renders image alt tag', () => {
    renderWithTheme(
      <ImageWrapper>
        <Image src="/images/peter-face.webp" alt="Peter Tumulty" width={297} height={344} />
      </ImageWrapper>
    )

    expect(screen.getByAltText('Peter Tumulty')).toBeInTheDocument()
  })
})
