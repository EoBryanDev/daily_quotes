import * as Styled from './styles'
interface IQuotePhaseProps {
  quote: string
  author: string
}

export const QuotePhase = ({ quote, author }: IQuotePhaseProps) => {
  return (
    <Styled.Container>
      <Styled.QuoteContainer>
        <Styled.Title>{quote}</Styled.Title>
        <Styled.Author>{author}</Styled.Author>
      </Styled.QuoteContainer>
    </Styled.Container>
  )
}
