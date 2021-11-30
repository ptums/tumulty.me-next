import Card from 'layouts/Card'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Post } from 'types/Post'

interface Props {
  post: Post
}

const SinglePost = ({ post }: Props) => {
  const { title, slug, tagLine, description } = post
  const postUrl = `/post${slug}`

  return (
    <Card>
      <Link href={postUrl}>
        <a>
          <Title>{title}</Title>
          <SubTitle>{tagLine}</SubTitle>
          <Description>{description}</Description>
          <ButtonLink>Read More</ButtonLink>
        </a>
      </Link>
    </Card>
  )
}

const Title = styled.p`
  ${(props) => props.theme.fonts.xxxxl};
  color: ${(props) => props.theme.colors.mediumGreen};
  font-weight: 700;
  padding: 4px 16px 0px 16px;
`

const SubTitle = styled.p`
  ${(props) => props.theme.fonts.xxl};
  color: ${(props) => props.theme.colors.fourthGray};
  padding: 0px 16px;
  font-weight: 700;
  margin-top: -16px;
  margin-bottom: 16px;
`

const Description = styled.p`
  padding: 16px;
  ${(props) => props.theme.fonts.xxxl};
  color: ${(props) => props.theme.colors.fifthGray};
`
const ButtonLink = styled.div`
  padding: 0 16px 16px;
  ${(props) => props.theme.fonts.xxxl};
  color: ${(props) => props.theme.colors.darkGreen};
  font-weight: 700;
`
export default SinglePost
