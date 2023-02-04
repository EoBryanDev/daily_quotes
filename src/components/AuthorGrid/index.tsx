import { useState } from 'react'
import { TAuthor } from '../../types/TAuthor'
import { AuthorList } from '../AuthorList'
import { PageTitle } from '../PageTitle'
import { TextInput } from '../TextInput'
import * as Styled from './styles'


interface IAuthorGridProps {
  author: TAuthor[] | null
}
export const AuthorGrid = ({ author }: IAuthorGridProps) => {
  const [text, setText] = useState('')
  const allAuthors = author
  console.log(allAuthors)

  const filteredAuthor = text
    ? allAuthors?.filter((singleAuthor) => {
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
        {filteredAuthor?.map((singleAuthor, index: number) => (
          <AuthorList key={index}>{singleAuthor || 'Unknow Author'}</AuthorList>
        ))}
      </Styled.AuthorScrolling>
    </Styled.AuthorContainer>
  )
}
