import SingleProject from 'components/SingleProject'
import SiteHead from 'components/SiteHead'
import Main from 'layouts/Main'
import Page from 'layouts/Page'
import Projects from 'layouts/Projects'
import Title from 'layouts/Title'
import React from 'react'
import { PROJECTS } from 'utils/constants'

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
        <Projects>
          {PROJECTS.map((project) => (
            <SingleProject project={project} key={project.id} />
          ))}
        </Projects>
      </Page>
    </Main>
  </>
)

export default PreviousWork
