import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TAuthor } from '../../types/TAuthor'
import { AuthorList } from '../AuthorList'
import { PageTitle } from '../PageTitle'
import { TextInput } from '../TextInput'
import * as Styled from './styles'

interface IAuthorGridProps {
  author: any | null
}
export const AuthorGrid = ({ author }: IAuthorGridProps) => {
  const [text, setText] = useState('')
  const allAuthors = author

  const filteredAuthor = text
    ? allAuthors?.filter((singleAuthor: any) => {
        return singleAuthor?.toString().toLowerCase().includes(text.toLowerCase())
      })
    : author

  return (
    <Styled.AuthorContainer>
      <Styled.Header>
        <PageTitle>Authors</PageTitle>
        <TextInput width={100} text={text} setText={setText} />
      </Styled.Header>
      <Styled.AuthorScrolling>
        {filteredAuthor?.map((singleAuthor: any, index: number) => (
          <Link key={index} to={`/author/${singleAuthor || 'Unknow Author'}`}>
            <AuthorList key={index}>{singleAuthor || 'Unknow Author'}</AuthorList>
          </Link>
        ))}
      </Styled.AuthorScrolling>
    </Styled.AuthorContainer>
  )
}
