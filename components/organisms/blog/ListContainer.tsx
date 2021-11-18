import React from 'react'
import styled from 'styled-components'
import SinglePost from 'components/molecules/SinglePost'
import { Post } from 'types/Post'

interface Props {
  allPosts: Post[]
}

const ListContainer: React.FC<Props> = ({ allPosts }: Props) => {
  return (
    <Container>
      {allPosts.map((post) => <SinglePost post={post} key={post.title} />)}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-top: 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 24px;
  }
`

export default ListContainer
