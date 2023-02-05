/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { AuthorGrid } from '../../components/AuthorGrid'
import { IQuote } from '../../interface/IQuote'
import { TAuthor } from '../../types/TAuthor'
import { getAllQuotes } from '../../utils/getAllQuotes'

export const AuthorQuote = () => {
  const [author, setAuthors] = useState<TAuthor[] | null>(null)

  useEffect(() => {
    const getQuotes = async () => {
      const response = await getAllQuotes()

      const aut = response.map((item: IQuote) => item.author)

      const responseFiltered = aut
        .filter((este: TAuthor, i: number) => aut.indexOf(este) === i)
        .sort()

      setAuthors(responseFiltered)
    }
    getQuotes()
  }, [])
  if (!author) {
    return <h1>Loading...</h1>
  } else {
    return (
      <>
        <AuthorGrid author={author} />
      </>
    )
  }
}
