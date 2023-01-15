import { useState, useEffect } from 'react'
import { getQuotes } from '../../utils/getDailyQuote'
import { IQuote } from '../../interface/IQuote'
import { QuotePhase } from '../../components/QuotePhase'

export const DailyQuote = () => {
  const [quote, setQuote] = useState<IQuote | null>(null)
    // eu poderia verificar se existe algum cookie ou storage com o indice já visto hoje se 
    //      o dia que foi setado for diferente do de hoje, e se ele não for diferente então manter o mesmo quote
  useEffect(() => {
    const searchData = async () => {
      const dailyQuote = await getQuotes()
      const randomItem = Math.floor(Math.random() * dailyQuote.length)
      console.log(randomItem)

      //  const dailyQuote = {response.data.[Math.random]}
      setQuote(dailyQuote[randomItem])
      return dailyQuote
    }

    searchData()
  }, [])
  return (
    <>
      {quote === null ? (
        <h1>Loading...</h1>
      ) : (
        <QuotePhase quote={quote.text} author={quote.author} />
      )}
    </>
  )
}

export default DailyQuote
