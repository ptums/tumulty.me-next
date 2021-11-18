import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import SiteHead from 'components/shared/SiteHead'
import { getAllPosts, getPostBySlug } from 'utils/api'
import { Post } from 'types/Post'

interface Props {
  post: Post
}
const SinglePost: React.FC<Props> = ({ post }: Props) => {
  const { content, formatDate, title, description } = post
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  console.log(formatDate);


  return (
    <>
      <SiteHead title={title} metaDescription={description} />
      <Main>
        <Date>
        <strong>Published: </strong> {formatDate}
        </Date>
        <BlogContainer>
         
          <ReactMarkdown children={content} />
        </BlogContainer>
      </Main>
    </>
  )
}

const Main = styled.main`
  max-width: 100%;
  margin: 24px auto;
`

const Date = styled.div`
  padding: 0 148px;
  ${(props) => props.theme.fonts.xxxl};
  color:${props => props.theme.colors.fourthGray};
  max-width: 100%;
`
const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
  max-width: 100%;
  padding: 16px 148px;
  ${(props) => props.theme.fonts.xxxxl};

  h2 {
    line-height: 1.3;
  }

  pre{
    background-color: ${props => props.theme.colors.gray};
    padding: 16px;
    ${props => props.theme.fonts.xxxl};

    code {
      color: ${props => props.theme.colors.mediumGreen};
      font-weight: 700;
    }

  }
`



export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const request = getPostBySlug(params.slug, ['title', 'content', 'date', 'description'])

  return {
    props: {
      post: {
        slug: params.slug,
        ...request,
      },
    },
  }
}

export default SinglePost
