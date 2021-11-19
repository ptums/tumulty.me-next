import Projects from 'components/organisms/previous-work/Projects'
import SiteHead from 'components/shared/SiteHead'
import Main from 'layouts/Main'
import Page from 'layouts/Page'
import Title from 'layouts/Title'
import React from 'react'

const SEO = {
  title: 'Previous Work | Peter Tumulty Web Developer',
  metaDescription:
    'I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.',
}
const PreviousWork = () => (
  <>
    <SiteHead {...SEO} />
    <Main pageWidth="100%">
      <Title>Previous Work</Title>
      <Page>
        <Projects />
      </Page>
    </Main>
  </>
)

export default PreviousWork
