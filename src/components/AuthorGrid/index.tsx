import { AuthorList } from '../AuthorList'
import { PageTitle } from '../PageTitle'
import * as Styled from './styles'

interface IAuthorGridProps {
  author: string[] | null
}
export const AuthorGrid = ({ author }: IAuthorGridProps) => (
    <Styled.AuthorContainer>
        <PageTitle>Authors</PageTitle>
        <Styled.AuthorScrolling>

      {author &&
        author.map((singleAuthor, index) => <AuthorList key={index}>{singleAuthor || 'Unknow Author'}</AuthorList>)}
        </Styled.AuthorScrolling>
    </Styled.AuthorContainer>

)
