import ListContainer from 'components/organisms/blog/ListContainer'
import SiteHead from 'components/shared/SiteHead'
import Main from 'layouts/Main'
import Page from 'layouts/Page'
import Title from 'layouts/Title'
import React from 'react'
import { Post } from 'types/Post'
import { getAllPosts } from 'utils/api'

const SEO = {
  title: 'Blog | Peter Tumulty Web Developer',
  metaDescription:
    'I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.',
}

interface Props {
  allPosts: Post[]
}
const Blog: React.FC<Props> = ({ allPosts }: Props) => {
  return (
    <>
      <SiteHead {...SEO} />
      <Main pageWidth="100%">
        <Title>Blog</Title>
        <Page>
          <ListContainer allPosts={allPosts} />
        </Page>
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

export default Blog
