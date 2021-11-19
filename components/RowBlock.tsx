import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Contact } from 'types/Contact'

interface Props {
  title: string
  list: string[] | Contact[]
  column: number
}
const RowBlock: React.FC<Props> = ({ title, list, column }: Props) => {
  return (
    <Card>
      <RowTitle>{title}</RowTitle>
      {column === 1 && (
        <OneColumn>
          {list.map((item) => (
            <Link href={item.slug} key={item.id}>
              <a>{item.label}</a>
            </Link>
          ))}
        </OneColumn>
      )}
      {column === 2 && (
        <TwoColumns>
          {list.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </TwoColumns>
      )}
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
    width: 435px;
    max-width: 100%;
  }
`

const RowTitle = styled.p`
  margin-bottom: 16px;
  ${(props) => props.theme.fonts.xxxl};
  color: ${(props) => props.theme.colors.mediumGreen};
  padding: 0 16px;
`

const OneColumn = styled.div`
  display: flex;
  ${(props) => props.theme.fonts.xxl};
  margin-bottom: 24px;
  padding: 0px 16px 0px 16px;
  a {
    margin-right: 16px;
    color: ${(props) => props.theme.colors.darkGreen};
  }
`
const TwoColumns = styled.div`
  ${(props) => props.theme.fonts.xxl};
  color: ${(props) => props.theme.colors.darkGreen};
  max-height: 50px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px 16px 8px 16px;

  span {
    margin-bottom: 8px;
    margin-right: 8px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-height: 120px;

    span {
      margin-bottom: 8px;
      margin-right: 0;
    }
  }
`
export default RowBlock
