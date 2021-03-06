import SinglePost from 'components/SinglePost'
import SiteHead from 'components/SiteHead'
import Main from 'layouts/Main'
import Page from 'layouts/Page'
import Projects from 'layouts/Projects'
import Title from 'layouts/Title'
import React from 'react'
import { FetchPost, Post } from 'types/Post'
import { getAllPosts } from 'utils/api'

const SEO = {
  title: 'Blog | Peter Tumulty Web Developer',
  metaDescription:
    'I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.',
}

interface Props {
  allPosts: Post[]
}
const Blog = ({ allPosts }: Props) => {
  return (
    <>
      <SiteHead {...SEO} />
      <Main pageWidth="100%">
        <Title>Blog</Title>
        <Page>
          <Projects>
            {allPosts.map((post) => (
              <SinglePost post={post} key={post.title} />
            ))}
          </Projects>
        </Page>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const getPosts = getAllPosts(['title', 'slug', 'date', 'description', 'tagLine'])

  const allPosts: FetchPost[] = [...getPosts].sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  )

  return {
    props: { allPosts },
  }
}

export default Blog
