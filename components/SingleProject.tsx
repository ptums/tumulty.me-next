import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Project } from 'types/Project'

interface Props {
  project: Project
}

const SingleProject = ({ project }: Props) => {
  const { slug, video, label, stack } = project
  return (
    <>
      <Card>
        <Link href={slug}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <video class="graphic-container mobile-video" autoplay = "true" muted = "true" playsinline = "true" loop = "true" >
              <source src=${video} type="video/mp4" />
            </video>
          `,
            }}
          />
          <Description>
            <Title>{label}</Title>
            <Stack>
              <strong>Stack: </strong>
              <StackItem>{stack.join(', ')}</StackItem>
            </Stack>
          </Description>
        </Link>
      </Card>
    </>
  )
}
const Description = styled.div`
  background-color: ${(props) => props.theme.colors.darkGreenOpacity};
  text-align: left;
  position: absolute;
  bottom: 0px;
  width: 100%;
  opacity: 0;
  transition: all 0.2s;
`

const Card = styled.div`
  position: relative;
  box-shadow: ${(props) => props.theme.colors.extraLargeShadow};
  border-radius: 8px;
  transition: all 0.2s;
  max-width: 420px;
  margin-bottom: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 24px 32px;
    width: 420px;
    max-width: 100%;
  }

  &:hover ${Description} {
    opacity: 1;
  }

  a {
    div {
      video {
        max-width: 100%;
        height: 210px;
      }
    }
  }
`

const Title = styled.p`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fonts.xxxl};
  text-decoration: none;
  margin-left: 12px;
  margin-bottom: 0px;
  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
  }
`

const Stack = styled.p`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fonts.xxxl};
  margin: 6px 0px 12px 12px;
`

const StackItem = styled.span`
  ${(props) => props.theme.fonts.xxl};
`

export default SingleProject
