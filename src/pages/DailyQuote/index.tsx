import { useState, useEffect } from 'react'
import { getQuotes } from '../../utils/getDailyQuote'
import { IQuote } from '../../interface/IQuote'
import { QuotePhase } from '../../components/QuotePhase'
import { PageTitle } from '../../components/PageTitle'
import * as Styled from './styles'

export const DailyQuote = () => {
  // a ideia será implementar o react query aqui
  const [quote, setQuote] = useState<IQuote | null>(null)

  useEffect(() => {
    const searchData = async () => {
      const dailyQuote = await getQuotes()

      setQuote(dailyQuote)

      return dailyQuote
    }
    searchData()
  }, [])
  return (

      <Styled.Container>
      <PageTitle>Daily Quote</PageTitle>
        {quote === null ? (
          <h1>Loading...</h1>
        ) : (
          <QuotePhase quote={quote.text} author={quote.author} />
        )}
      </Styled.Container>

  )
}

export default DailyQuote
