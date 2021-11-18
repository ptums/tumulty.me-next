import React from 'react'
import styled from 'styled-components'
import SiteHead from 'components/shared/SiteHead'
import Projects from 'components/organisms/previous-work/Projects'

const SEO = {
  title: 'Previous Work | Peter Tumulty Web Developer',
  metaDescription:
    'I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.',
}
const PreviousWork = () => (
  <>
    <SiteHead {...SEO} />
    <Main>
      <Title>Previous Work</Title>
      <PreviousWorkContainer>
        <Projects />
      </PreviousWorkContainer>
    </Main>
  </>
)

const Main = styled.main`
max-width: 100%;
  margin: 24px auto;
`
const PreviousWorkContainer = styled.div`
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

export default PreviousWork
