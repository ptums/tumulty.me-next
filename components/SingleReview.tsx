import Card from 'layouts/Card'
import React from 'react'
import styled from 'styled-components'
import { Review } from 'types/Review'

interface Props {
  review: Review
}

const SingleReview: React.FC<Props> = ({ review }: Props) => {
  const { name, company, statement } = review

  return (
    <Card>
      <Statement>{statement}</Statement>
      <Person>
        {' '}
        - {name} <Company>{company}</Company>
      </Person>
    </Card>
  )
}

const Statement = styled.blockquote`
  ${(props) => props.theme.fonts.xxxl};
  color: ${(props) => props.theme.colors.fifthGray};
  border-left: 4px solid ${(props) => props.theme.colors.lightGreen};
  padding-left: 16px;
`
const Person = styled.p`
  ${(props) => props.theme.fonts.xxxl};
  color: ${(props) => props.theme.colors.fifthGray};
  padding: 0px 40px;
  font-weight: 700;
  margin-bottom: 16px;
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
`

const Company = styled.span`
  ${(props) => props.theme.fonts.xl};
  color: ${(props) => props.theme.colors.darkGreen};
  margin-left: 4px;
`
export default SingleReview
