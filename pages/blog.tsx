import React from 'react'
import styled from 'styled-components'
import SiteHead from 'components/shared/SiteHead'
import  ListContainer from 'components/organisms/blog/ListContainer'
import { getAllPosts } from 'utils/api'
import { Post } from 'types/Post'

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
      <Main>
        <Title>Blog</Title>
        <BlogContainer>
          <ListContainer allPosts={allPosts} />
        </BlogContainer>
      </Main>
    </>
  )
}

const Main = styled.main`
  max-width: 100%;
  margin: 24px auto;
`
const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fonts.darkGreen};
  max-width: 100%;
`

const Title = styled.h1`
  ${(props) => props.theme.fonts.xxxxxxl};
  color: ${(props) => props.theme.colors.darkGreen};
  letter-spacing: 8px;
  margin-bottom: 3px;
  text-align: center;
`

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'slug', 'date', 'description', 'tagLine'])

  return {
    props: { allPosts },
  }
}

export default Blog
