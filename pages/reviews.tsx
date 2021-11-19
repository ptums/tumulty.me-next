import SingleReview from 'components/SingleReview'
import SiteHead from 'components/SiteHead'
import Main from 'layouts/Main'
import Page from 'layouts/Page'
import Projects from 'layouts/Projects'
import Title from 'layouts/Title'
import React from 'react'
import { REVIEWS } from 'utils/constants'

const SEO = {
  title: 'Reviews | Peter Tumulty Web Developer',
  metaDescription:
    'I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.',
}

const Reviews = () => {
  return (
    <>
      <SiteHead {...SEO} />
      <Main pageWidth="100%">
        <Title>Reviews</Title>
        <Page>
          <Projects>
            {REVIEWS.map((review) => (
              <SingleReview review={review} key={review.id} />
            ))}
          </Projects>
        </Page>
      </Main>
    </>
  )
}
export default Reviews
