import SiteHead from 'components/SiteHead'
import Main from 'layouts/Main'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { Post } from 'types/Post'
import { getAllPosts, getPostBySlug } from 'utils/api'

interface Props {
  post: Post
}
const SinglePost: React.FC<Props> = ({ post }: Props) => {
  const { content, formatDate, title, description } = post
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <SiteHead title={title} metaDescription={description} />
      <Main pageWidth="100%">
        <Date>
          <strong>Published: </strong> {formatDate}
        </Date>
        <BlogContainer>
          <ReactMarkdown>{content}</ReactMarkdown>
        </BlogContainer>
      </Main>
    </>
  )
}

const Date = styled.div`
  padding: 0 148px;
  ${(props) => props.theme.fonts.xxxl};
  color: ${(props) => props.theme.colors.fourthGray};
  max-width: 100%;
`
const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
  max-width: 100%;
  padding: 16px 148px;
  ${(props) => props.theme.fonts.xxxxl};

  h1 {
    line-height: 1;
  }
  h2 {
    line-height: 1.3;
  }

  pre {
    background-color: ${(props) => props.theme.colors.gray};
    padding: 16px;
    ${(props) => props.theme.fonts.xxxl};

    code {
      color: ${(props) => props.theme.colors.mediumGreen};
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
