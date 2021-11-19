import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Post } from 'types/Post'

interface Props {
  post: Post
}

const SinglePost: React.FC<Props> = ({ post }: Props) => {
  const { title, slug, tagLine, description } = post

  return (
    <Card>
      <Link href={`/post/${slug}`}>
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
const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  transition: all 0.2s;
  max-width: 420px;
  margin-bottom: 24px;
  border: 0.5px solid ${(props) => props.theme.colors.thirdGray};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 24px 32px;
    width: 435px;
    max-width: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: ${(props) => props.theme.colors.offWhite};
  }

  a {
    text-decoration: none;
  }
`

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
