/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { AuthorGrid } from '../../components/AuthorGrid'
import { PageTitle } from '../../components/PageTitle'
import { getAllQuotes } from '../../utils/getAllQuotes'
import { TQuote } from '../../utils/getDailyQuote'

export const AuthorQuote = () => {
  const [author, setAuthors] = useState<string[] | null>([])

  useEffect(() => {
    const getQuotes = async () => {
      const response = await getAllQuotes()
      // response.reduce((a, b) => {
      const aut = response.map((item: any) => item.author)

      const responseFiltered = aut.filter((este: any, i: any) => aut.indexOf(este) === i).sort()
      console.log(responseFiltered)

      // })
      setAuthors(responseFiltered)
    }
    getQuotes()
  }, [])

  return (   
      <AuthorGrid author={author} />
  )
}
