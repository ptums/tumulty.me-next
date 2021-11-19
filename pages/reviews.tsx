import SiteHead from 'components/SiteHead'
import Main from 'layouts/Main'
import Page from 'layouts/Page'
import Title from 'layouts/Title'
import React from 'react'
import { getAllPosts } from 'utils/api'

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
        <Page>Reviews will go here...</Page>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'slug', 'date', 'description', 'tagLine'])

  return {
    props: { allPosts },
  }
}

export default Reviews
