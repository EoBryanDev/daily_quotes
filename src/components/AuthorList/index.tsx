import { ReactNode } from 'react'
import * as Styled from './styles'

interface IAuthorListProps {
  children: ReactNode
}
export const AuthorList = ({ children }: IAuthorListProps) => {
  return <Styled.AuthorListSize>{children}</Styled.AuthorListSize>
}
